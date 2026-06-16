  const stage      = document.getElementById('stage');
  const bar        = document.getElementById('bar');
  const countWrap  = document.getElementById('count-wrap');
  const picker     = document.getElementById('slide-picker');
  const pickerInput= document.getElementById('picker-input');
  const pickerList = document.getElementById('picker-list');
  const langBtn    = document.getElementById('lang-btn');

  let lang   = 'en';
  let slides = [];
  let idx    = 0;

  // ── Render deck in the current language ──
  function renderDeck() {
    const savedIdx = idx;
    stage.innerHTML = (window._deck || []).map(s =>
      typeof s === 'string' ? s : (s[lang] || s.en)
    ).join('\n');
    slides = Array.from(stage.querySelectorAll('.slide'));
    document.getElementById('tot').textContent = slides.length;
    slides.forEach((s,i)=>{ const pg=s.querySelector('.pg'); if(pg) pg.textContent=(i+1)+' / '+slides.length; });
    buildPickerList();
    show(Math.min(savedIdx, slides.length - 1));
  }

  // ── Auto-fit: grow .refgrid font to fill available height ──
  // Uses CSS custom properties --rg-fs / --rg-h3 (inline style on .refgrid).
  // Multi-column layouts don't expose overflow via scrollHeight, so we measure
  // the bottom edge of the lowest .cat via getBoundingClientRect() instead.
  // Binary-searches for the largest cqmin value where content fits in the grid.
  // Skipped during PNG export to preserve the 1080×1080 layout.
  function fitRefgrid(slide) {
    if (!slide || document.body.classList.contains('exporting')) return;
    // En móvil la rejilla usa tamaños fijos legibles con scroll — no se autoajusta.
    if (window.matchMedia('(max-width: 700px)').matches) return;
    const grid = slide.querySelector('.refgrid');
    if (!grid) return;
    grid.style.removeProperty('--rg-fs');
    grid.style.removeProperty('--rg-h3');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const avail = grid.getBoundingClientRect().height;
      if (!avail) return;

      // True rendered content height in the multi-column layout.
      function usedHeight() {
        const top = grid.getBoundingClientRect().top;
        let max = 0;
        grid.querySelectorAll('.cat').forEach(c => {
          max = Math.max(max, c.getBoundingClientRect().bottom - top);
        });
        return max;
      }

      const nat = usedHeight();
      if (!nat || nat >= avail * 0.98) return; // already fills space

      let lo = 0.3, hi = Math.min(12, (avail / nat) * 1.05);
      for (let i = 0; i < 30; i++) {
        const m = (lo + hi) / 2;
        grid.style.setProperty('--rg-fs', m.toFixed(4) + 'cqmin');
        grid.style.setProperty('--rg-h3', (m * 0.95).toFixed(4) + 'cqmin');
        usedHeight() <= avail ? (lo = m) : (hi = m);
      }
      grid.style.setProperty('--rg-fs', lo.toFixed(4) + 'cqmin');
      grid.style.setProperty('--rg-h3', (lo * 0.95).toFixed(4) + 'cqmin');
    }));
  }
  let _fitTimer;
  addEventListener('resize', () => { clearTimeout(_fitTimer); _fitTimer = setTimeout(() => fitRefgrid(slides[idx]), 150); });

  const ANIM_CLS = ['enter-next','leave-next','enter-prev','leave-prev'];
  let _animCleanup = null;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(n, dir){
    const prev = idx;
    idx = (n + slides.length) % slides.length;
    if(_animCleanup){ _animCleanup(); _animCleanup = null; }   // cierra cualquier transición en curso

    if(dir && prev !== idx && !reduceMotion){
      const oldS = slides[prev], newS = slides[idx];
      slides.forEach(s=> s.classList.remove('active', ...ANIM_CLS));
      oldS.classList.add('active', dir>0 ? 'leave-next' : 'leave-prev');
      newS.classList.add('active', dir>0 ? 'enter-next' : 'enter-prev');
      const cleanup = (e)=>{
        if(e && e.target !== newS) return;   // ignora animaciones de elementos hijos
        newS.removeEventListener('animationend', cleanup);
        oldS.classList.remove('active', ...ANIM_CLS);
        newS.classList.remove(...ANIM_CLS);
      };
      _animCleanup = cleanup;
      newS.addEventListener('animationend', cleanup);
    } else {
      slides.forEach((s,i)=>{ s.classList.toggle('active', i===idx); s.classList.remove(...ANIM_CLS); });
    }
    document.getElementById('cur').textContent = idx+1;
    bar.classList.toggle('no-export', slides[idx].classList.contains('no-export'));
    if(picker.classList.contains('open')) refreshPickerActive();
    fitRefgrid(slides[idx]);
  }
  const next=()=>show(idx+1, 1), prev=()=>show(idx-1, -1);

  document.getElementById('next').onclick=next;
  document.getElementById('prev').onclick=prev;
  document.getElementById('full').onclick=()=>{ document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen(); };

  // ── Language toggle ──
  langBtn.onclick = () => {
    lang = (lang === 'en') ? 'es' : 'en';
    langBtn.textContent = (lang === 'en') ? 'ES' : 'EN';
    langBtn.classList.toggle('lang-es', lang === 'es');
    renderDeck();
  };

  addEventListener('keydown', e=>{
    if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){ next(); e.preventDefault(); }
    else if(e.key==='ArrowLeft'||e.key==='PageUp') prev();
    else if(e.key==='f'||e.key==='F') document.getElementById('full').click();
    else if(e.key==='e'||e.key==='E') exportSlide(idx);
    else if(e.key==='a'||e.key==='A') exportAll();
    else if(e.key==='l'||e.key==='L') langBtn.click();
    else if(e.key==='Home') show(0);
    else if(e.key==='End') show(slides.length-1);
  });

  // ── Swipe táctil (móvil): deslizar ←/→ para cambiar de slide ──
  let _tx=0, _ty=0, _tt=0;
  stage.addEventListener('touchstart', e=>{
    if(e.touches.length!==1) return;
    _tx=e.touches[0].clientX; _ty=e.touches[0].clientY; _tt=e.timeStamp;
  }, {passive:true});
  stage.addEventListener('touchend', e=>{
    const t=e.changedTouches[0]; if(!t) return;
    const dx=t.clientX-_tx, dy=t.clientY-_ty, dt=e.timeStamp-_tt;
    // gesto horizontal: desplazamiento amplio, más horizontal que vertical, y rápido
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)*1.5 && dt<700){
      if(dx<0) next(); else prev();
    }
  }, {passive:true});

  // ── Exportación a PNG 1:1 ──
  function download(canvas, name){ const a=document.createElement('a'); a.href=canvas.toDataURL('image/png'); a.download=name+'.png'; a.click(); }
  async function exportSlide(i){
    document.body.classList.add('exporting');
    const pw=stage.style.width, ph=stage.style.height;
    stage.style.width='1080px'; stage.style.height='1080px';
    const prevActive=idx; slides.forEach((s,k)=> s.classList.toggle('active', k===i));
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
    try{
      const c=await html2canvas(slides[i], {scale:2, backgroundColor:'#ffffff', width:1080, height:1080, windowWidth:1080, windowHeight:1080});
      download(c, String(i+1).padStart(2,'0')+'-'+(slides[i].dataset.title||('slide-'+(i+1))));
    } finally {
      slides.forEach((s,k)=> s.classList.toggle('active', k===prevActive));
      stage.style.width=pw; stage.style.height=ph;
      document.body.classList.remove('exporting');
    }
  }
  async function exportAll(){ for(let i=0;i<slides.length;i++){ await exportSlide(i); await new Promise(r=>setTimeout(r,300)); } }
  document.getElementById('exp').onclick=()=>exportSlide(idx);
  document.getElementById('expAll').onclick=exportAll;

  // ── Slide picker ──
  function buildPickerList(){
    pickerList.innerHTML='';
    slides.forEach((s,i)=>{
      const li=document.createElement('li');
      li.dataset.idx=i;
      const rawTitle = s.dataset.title
        ? s.dataset.title.replace(/-/g,' ')
        : (s.querySelector('h1,h2')?.textContent||'Slide '+(i+1)).trim();
      li.innerHTML=`<span class="pi-num">${String(i+1).padStart(2,'0')}</span><span class="pi-title">${rawTitle}</span>`;
      li.onclick=()=>{ show(i); closePicker(); };
      pickerList.append(li);
    });
  }

  function refreshPickerActive(){
    pickerList.querySelectorAll('li').forEach((li,i)=>li.classList.toggle('picker-active',i===idx));
    const active=pickerList.querySelector('.picker-active');
    if(active) active.scrollIntoView({block:'nearest'});
  }

  function openPicker(){
    picker.classList.add('open');
    pickerList.querySelectorAll('li').forEach(li=>li.style.display='');
    refreshPickerActive();
    pickerInput.value='';
    requestAnimationFrame(()=>pickerInput.focus());
  }

  function closePicker(){ picker.classList.remove('open'); }

  countWrap.addEventListener('click', e=>{ e.stopPropagation(); picker.classList.contains('open')?closePicker():openPicker(); });
  document.addEventListener('click', closePicker);
  picker.addEventListener('click', e=>e.stopPropagation());

  pickerInput.addEventListener('input', ()=>{
    const q=pickerInput.value.trim();
    pickerList.querySelectorAll('li').forEach(li=>{
      const n=parseInt(li.dataset.idx)+1;
      const title=li.querySelector('.pi-title').textContent.toLowerCase();
      li.style.display=(!q||String(n).startsWith(q)||title.includes(q.toLowerCase()))?'':'none';
    });
  });

  pickerInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
      const n=parseInt(pickerInput.value);
      if(n>=1&&n<=slides.length){ show(n-1); closePicker(); }
      e.preventDefault(); e.stopPropagation();
    } else if(e.key==='Escape'){
      closePicker(); e.preventDefault(); e.stopPropagation();
    } else {
      e.stopPropagation();
    }
  });

  // Inicialización sincrónica — slides already in DOM via <script src>
  renderDeck();
