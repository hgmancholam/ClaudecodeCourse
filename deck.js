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
    // .metricgrid es un grid con align-items:stretch (tarjetas de igual altura),
    // así que las .cat siempre llenan el alto disponible y no se puede medir el
    // contenido natural. Durante la medición desactivamos el estiramiento
    // (align-items:start) para que cada tarjeta se ajuste a su contenido real;
    // luego lo restauramos. El tope de fuente también es menor para que las
    // cifras grandes no se desborden de proporción.
    const isMetric = grid.classList.contains('metricgrid');
    grid.style.removeProperty('--rg-fs');
    grid.style.removeProperty('--rg-h3');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const avail = grid.getBoundingClientRect().height;
      if (!avail) return;
      if (isMetric) grid.style.alignItems = 'start';

      // True rendered content height in the multi-column layout.
      // Si una .cat se fragmenta entre columnas (getClientRects().length > 1) la
      // altura medida BAJA (el contenido fluye a lo ancho, no a lo alto), lo que
      // rompería la monotonía que asume la búsqueda binaria y haría que escogiera
      // una fuente demasiado grande. Tratamos ese estado como "no cabe" (Infinity)
      // para que converja a la mayor fuente donde NINGUNA tarjeta se parte.
      // (En .metricgrid no aplica el fragmentado: cada .cat es un único ítem grid.)
      function usedHeight() {
        const top = grid.getBoundingClientRect().top;
        let max = 0, broken = false;
        grid.querySelectorAll('.cat').forEach(c => {
          if (c.getClientRects().length > 1) broken = true;
          max = Math.max(max, c.getBoundingClientRect().bottom - top);
        });
        return broken ? Infinity : max;
      }

      const nat = usedHeight();
      if (!nat || nat >= avail * 0.98) { if (isMetric) grid.style.removeProperty('align-items'); return; }

      let lo = 0.3, hi = Math.min(isMetric ? 4.2 : 12, (avail / nat) * 1.05);
      for (let i = 0; i < 30; i++) {
        const m = (lo + hi) / 2;
        grid.style.setProperty('--rg-fs', m.toFixed(4) + 'cqmin');
        grid.style.setProperty('--rg-h3', (m * 0.95).toFixed(4) + 'cqmin');
        usedHeight() <= avail ? (lo = m) : (hi = m);
      }
      grid.style.setProperty('--rg-fs', lo.toFixed(4) + 'cqmin');
      grid.style.setProperty('--rg-h3', (lo * 0.95).toFixed(4) + 'cqmin');
      if (isMetric) grid.style.removeProperty('align-items'); // restaura stretch (igual altura)
    }));
  }
  // ── Auto-fit: grow .ctable font to fill available height ──
  // Las tablas usan flex:1, así que estiran las filas para llenar el alto y dejan
  // el texto pequeño con mucho espacio en blanco. Aquí escalamos la fuente vía la
  // propiedad --ct-fs (los demás tamaños se derivan en CSS con calc()). Medimos la
  // altura NATURAL desactivando flex momentáneamente y buscamos por bisección el
  // mayor cqmin donde el contenido cabe. Se omite en export (mantiene el 1080×1080)
  // y en móvil (usa tamaños fijos legibles con scroll).
  function fitTable(slide) {
    if (!slide || document.body.classList.contains('exporting')) return;
    if (window.matchMedia('(max-width: 700px)').matches) return;
    const table = slide.querySelector('.ctable');
    if (!table) return;
    table.style.removeProperty('--ct-fs');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const avail = table.getBoundingClientRect().height; // alto disponible (estirado por flex:1)
      if (!avail) return;
      // Mide la altura real del contenido sin el estiramiento de flex.
      const prevFlex = table.style.flex;
      table.style.flex = 'none';
      const nat = table.getBoundingClientRect().height;
      if (!nat || nat >= avail * 0.98) { table.style.flex = prevFlex; return; }

      // "Cabe" = la tabla no excede el alto disponible Y ningún th (nowrap) se
      // desborda de su columna hacia la de al lado. Ambas condiciones crecen de
      // forma monótona con la fuente, así que la bisección sigue siendo válida.
      const ths = table.querySelectorAll('th');
      function fits() {
        if (table.getBoundingClientRect().height > avail) return false;
        for (const th of ths) { if (th.scrollWidth > th.clientWidth + 1) return false; }
        return true;
      }

      let lo = 1.9, hi = Math.min(3.4, 1.9 * (avail / nat) * 1.05);
      for (let i = 0; i < 24; i++) {
        const m = (lo + hi) / 2;
        table.style.setProperty('--ct-fs', m.toFixed(4) + 'cqmin');
        fits() ? (lo = m) : (hi = m);
      }
      table.style.setProperty('--ct-fs', lo.toFixed(4) + 'cqmin');
      table.style.flex = prevFlex; // restaura flex:1 del CSS
    }));
  }

  let _fitTimer;
  addEventListener('resize', () => { clearTimeout(_fitTimer); _fitTimer = setTimeout(() => { fitRefgrid(slides[idx]); fitTable(slides[idx]); }, 150); });

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
    if(picker.classList.contains('open')) refreshPickerActive();
    fitRefgrid(slides[idx]);
    fitTable(slides[idx]);
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
    else if(e.key==='a'||e.key==='A') exportPdf();
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

  // ── Exportación a PDF — captura cada slide en 1920×1080 (layout ancho, todo el contenido visible) ──
  async function exportPdf(){
    if(!window.jspdf){ alert('jsPDF not loaded'); return; }
    const {jsPDF}=window.jspdf;
    const PW=297, PH=167;  // mm — 16:9 landscape
    const pdf=new jsPDF({unit:'mm', format:[PW,PH]});
    document.body.classList.add('exporting');
    const pw=stage.style.width, ph=stage.style.height;
    stage.style.width='1920px'; stage.style.height='1080px';
    const prevActive=idx;
    try{
      for(let i=0;i<slides.length;i++){
        slides.forEach((s,k)=>s.classList.toggle('active',k===i));
        await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
        const c=await html2canvas(slides[i],{scale:2,backgroundColor:'#ffffff',width:1920,height:1080,windowWidth:1920,windowHeight:1080});
        if(i>0) pdf.addPage([PW,PH]);
        pdf.addImage(c.toDataURL('image/jpeg',.92),'JPEG',0,0,PW,PH);
      }
      const title=(document.title||'deck').replace(/[^a-z0-9]+/gi,'-').toLowerCase().replace(/^-|-$/g,'');
      pdf.save(title+'.pdf');
    } finally {
      slides.forEach((s,k)=>s.classList.toggle('active',k===prevActive));
      stage.style.width=pw; stage.style.height=ph;
      document.body.classList.remove('exporting');
    }
  }
  document.getElementById('expPdf').onclick=exportPdf;

  // ── Slide picker ──
  function buildPickerList(){
    pickerList.innerHTML='';
    slides.forEach((s,i)=>{
      const li=document.createElement('li');
      li.dataset.idx=i;
      // Preferir el encabezado del slide (bilingüe) sobre el data-title (slug
      // idéntico en ambos idiomas) para que el picker respete el idioma activo.
      const heading = s.querySelector('h1,h2')?.textContent?.trim();
      const rawTitle = heading
        || (s.dataset.title ? s.dataset.title.replace(/-/g,' ') : 'Slide '+(i+1));
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
