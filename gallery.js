/* ──────────────────────────────────────────────────────────────────────
   Galería de tarjetas compartida (comportamiento). Bilingüe (EN por defecto,
   tecla L alterna). Lee window.GALLERY_CONFIG, que la página define antes de
   cargar este script:

     window.GALLERY_CONFIG = {
       items:   [ {slug, accent, slides?, chapters?, en:{tag,title,desc}, es:{…}} ],
       hrefFor: item => 'url-relativa',     // a dónde apunta cada tarjeta
       i18n:    { en:{kicker,title,sub}, es:{…} },   // cabecera
       crumbs:  [ {href, en, es} ] | null,  // migas de pan opcionales
       slugBase:'' | '/TDM-training'        // prefijo mostrado en .slug (estético)
     };

   Si un item trae `chapters`, la tarjeta muestra "N chapters"; si no, "N slides".
   ────────────────────────────────────────────────────────────────────── */
(function () {
  const cfg = window.GALLERY_CONFIG || { items: [], hrefFor: i => '#', i18n: {} };
  const UNITS = {
    en: { slides: 'slides', chapters: 'chapters', open: 'Open →' },
    es: { slides: 'diapositivas', chapters: 'capítulos', open: 'Abrir →' }
  };
  let lang = 'en';
  const grid    = document.getElementById('grid');
  const langBtn = document.getElementById('lang-btn');

  function txt(o) { return (o && (o[lang] || o.en)) || ''; }

  function render() {
    const t  = cfg.i18n[lang] || cfg.i18n.en || {};
    const u  = UNITS[lang];
    document.documentElement.lang = lang;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('kicker', t.kicker || '');
    set('title',  t.title  || '');
    set('sub',    t.sub    || '');

    const crumbsEl = document.getElementById('crumbs');
    if (crumbsEl) {
      crumbsEl.innerHTML = (cfg.crumbs || [])
        .map(c => c.href ? `<a href="${c.href}">${txt(c)}</a>` : `<span>${txt(c)}</span>`)
        .join(' / ');
    }

    grid.innerHTML = (cfg.items || []).map(item => {
      const c = item[lang] || item.en;
      const count = item.chapters
        ? `${item.chapters.length} ${u.chapters}`
        : `${item.slides || 0} ${u.slides}`;
      const slug = (cfg.slugBase || '') + '/' + item.slug;
      return `<a class="card ${item.accent || 's-proj'}" href="${cfg.hrefFor(item)}">
        <span class="tag">${c.tag || ''}</span>
        <h2>${c.title}</h2>
        <p>${c.desc || ''}</p>
        <span class="meta"><span class="slug">${slug}</span>
          <span>· ${count}</span>
          <span class="go">${u.open}</span></span>
      </a>`;
    }).join('');
  }

  if (langBtn) {
    langBtn.onclick = () => {
      lang = (lang === 'en') ? 'es' : 'en';
      langBtn.textContent = (lang === 'en') ? 'ES' : 'EN';
      render();
    };
  }
  addEventListener('keydown', e => { if (e.key === 'l' || e.key === 'L') langBtn && langBtn.click(); });
  render();
})();
