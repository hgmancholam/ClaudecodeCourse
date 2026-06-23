(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-info" data-title="arch-tradicionales">
  <div class="kicker">Chapter 3 · Basic Architecture</div>
  <h2>Start monolith, split when <span class="accent">teams diverge</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info">
      <h3>Monolithic</h3>
      <svg class="archsvg" viewBox="0 0 200 128" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="184" height="78" rx="5" fill="none" stroke="var(--accent,#4f6ef7)" stroke-width="1.2" stroke-dasharray="5,3"/>
        <text x="12" y="4" font-size="7" fill="var(--accent,#4f6ef7)" font-family="sans-serif" font-weight="700" dominant-baseline="auto" dy="7">Single Deployable</text>
        <rect x="18" y="14" width="164" height="18" rx="3" fill="var(--accent,#4f6ef7)"/>
        <text x="100" y="26" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Presentation</text>
        <rect x="18" y="36" width="164" height="18" rx="3" fill="var(--accent,#4f6ef7)" fill-opacity=".75"/>
        <text x="100" y="48" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Business Logic</text>
        <rect x="18" y="58" width="164" height="18" rx="3" fill="var(--accent,#4f6ef7)" fill-opacity=".5"/>
        <text x="100" y="70" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Data Access</text>
        <line x1="100" y1="85" x2="100" y2="99" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="100,102 95,96 105,96" fill="#aaa"/>
        <rect x="55" y="102" width="90" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#4f6ef7)" stroke-width="1.5"/>
        <text x="100" y="114" text-anchor="middle" font-size="9" fill="var(--accent,#4f6ef7)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Database</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">All layers in one process, one deploy</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Simple local calls — easy to debug</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Scales vertically only (CPU / RAM)</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">MVP, &lt; 10 devs, simple domain</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Large teams, independent scaling needs</span></div>
    </div>

    <div class="cat s-mode">
      <h3>Microservices</h3>
      <svg class="archsvg" viewBox="0 0 220 128" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="3" width="60" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="110" y="12" text-anchor="middle" font-size="8" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Client</text>
        <line x1="110" y1="19" x2="110" y2="28" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="110,31 105,25 115,25" fill="#aaa"/>
        <rect x="55" y="31" width="110" height="18" rx="3" fill="var(--accent,#ff8c00)"/>
        <text x="110" y="42" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">API Gateway</text>
        <line x1="55" y1="49" x2="37" y2="62" stroke="#aaa" stroke-width="1"/>
        <line x1="110" y1="49" x2="110" y2="62" stroke="#aaa" stroke-width="1"/>
        <line x1="165" y1="49" x2="183" y2="62" stroke="#aaa" stroke-width="1"/>
        <rect x="6" y="62" width="62" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="37" y="71" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Service A</text>
        <rect x="79" y="62" width="62" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="110" y="71" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Service B</text>
        <rect x="152" y="62" width="62" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="183" y="71" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Service C</text>
        <line x1="37" y1="78" x2="37" y2="90" stroke="#ccc" stroke-width="1"/>
        <line x1="110" y1="78" x2="110" y2="90" stroke="#ccc" stroke-width="1"/>
        <line x1="183" y1="78" x2="183" y2="90" stroke="#ccc" stroke-width="1"/>
        <rect x="9" y="90" width="56" height="14" rx="2" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="37" y="99" text-anchor="middle" font-size="7" fill="#888" font-family="sans-serif" dominant-baseline="middle">DB A</text>
        <rect x="82" y="90" width="56" height="14" rx="2" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="110" y="99" text-anchor="middle" font-size="7" fill="#888" font-family="sans-serif" dominant-baseline="middle">DB B</text>
        <rect x="155" y="90" width="56" height="14" rx="2" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="183" y="99" text-anchor="middle" font-size="7" fill="#888" font-family="sans-serif" dominant-baseline="middle">DB C</text>
        <text x="110" y="115" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif" font-style="italic">each service owns its data</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Each service deploys &amp; scales independently</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Tech heterogeneity — each svc picks its stack</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Horizontal scaling per service</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Large teams, clear domain boundaries, cloud-native</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">MVP, no DevOps maturity, small team (&lt; 5)</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-info" data-title="arch-tradicionales">
  <div class="kicker">Capítulo 3 · Arquitectura Básica</div>
  <h2>Monolito y <span class="accent">Microservicios</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info">
      <h3>Monolítico</h3>
      <svg class="archsvg" viewBox="0 0 200 128" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="184" height="78" rx="5" fill="none" stroke="var(--accent,#4f6ef7)" stroke-width="1.2" stroke-dasharray="5,3"/>
        <text x="12" y="4" font-size="7" fill="var(--accent,#4f6ef7)" font-family="sans-serif" font-weight="700" dominant-baseline="auto" dy="7">Único Desplegable</text>
        <rect x="18" y="14" width="164" height="18" rx="3" fill="var(--accent,#4f6ef7)"/>
        <text x="100" y="26" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Presentación</text>
        <rect x="18" y="36" width="164" height="18" rx="3" fill="var(--accent,#4f6ef7)" fill-opacity=".75"/>
        <text x="100" y="48" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Lógica de Negocio</text>
        <rect x="18" y="58" width="164" height="18" rx="3" fill="var(--accent,#4f6ef7)" fill-opacity=".5"/>
        <text x="100" y="70" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Acceso a Datos</text>
        <line x1="100" y1="85" x2="100" y2="99" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="100,102 95,96 105,96" fill="#aaa"/>
        <rect x="55" y="102" width="90" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#4f6ef7)" stroke-width="1.5"/>
        <text x="100" y="114" text-anchor="middle" font-size="9" fill="var(--accent,#4f6ef7)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Base de Datos</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Todas las capas en un proceso, un deploy</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Llamadas locales — fácil de debuggear</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Escala solo verticalmente (CPU / RAM)</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">MVP, &lt; 10 devs, dominio simple</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Equipos grandes, módulos con escalado independiente</span></div>
    </div>

    <div class="cat s-mode">
      <h3>Microservicios</h3>
      <svg class="archsvg" viewBox="0 0 220 128" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="3" width="60" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="110" y="12" text-anchor="middle" font-size="8" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Cliente</text>
        <line x1="110" y1="19" x2="110" y2="28" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="110,31 105,25 115,25" fill="#aaa"/>
        <rect x="55" y="31" width="110" height="18" rx="3" fill="var(--accent,#ff8c00)"/>
        <text x="110" y="42" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">API Gateway</text>
        <line x1="55" y1="49" x2="37" y2="62" stroke="#aaa" stroke-width="1"/>
        <line x1="110" y1="49" x2="110" y2="62" stroke="#aaa" stroke-width="1"/>
        <line x1="165" y1="49" x2="183" y2="62" stroke="#aaa" stroke-width="1"/>
        <rect x="6" y="62" width="62" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="37" y="71" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Servicio A</text>
        <rect x="79" y="62" width="62" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="110" y="71" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Servicio B</text>
        <rect x="152" y="62" width="62" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="183" y="71" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Servicio C</text>
        <line x1="37" y1="78" x2="37" y2="90" stroke="#ccc" stroke-width="1"/>
        <line x1="110" y1="78" x2="110" y2="90" stroke="#ccc" stroke-width="1"/>
        <line x1="183" y1="78" x2="183" y2="90" stroke="#ccc" stroke-width="1"/>
        <rect x="9" y="90" width="56" height="14" rx="2" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="37" y="99" text-anchor="middle" font-size="7" fill="#888" font-family="sans-serif" dominant-baseline="middle">DB A</text>
        <rect x="82" y="90" width="56" height="14" rx="2" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="110" y="99" text-anchor="middle" font-size="7" fill="#888" font-family="sans-serif" dominant-baseline="middle">DB B</text>
        <rect x="155" y="90" width="56" height="14" rx="2" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="183" y="99" text-anchor="middle" font-size="7" fill="#888" font-family="sans-serif" dominant-baseline="middle">DB C</text>
        <text x="110" y="115" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif" font-style="italic">cada servicio dueño de sus datos</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Cada servicio despliega y escala de forma independiente</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Heterogeneidad tecnológica — cada svc elige su stack</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Escalado horizontal por servicio</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Equipos grandes, fronteras de dominio claras, cloud-native</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">MVP, sin madurez DevOps, equipo pequeño (&lt; 5)</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
