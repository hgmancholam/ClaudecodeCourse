(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-info" data-title="azure-devops">
  <div class="kicker">Chapter 3 · CI/CD &amp; Repositories</div>
  <h2>Azure DevOps: <span class="accent">five services, one delivery loop</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info">
      <h3>The Five Services</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Center: Azure DevOps -->
        <ellipse cx="100" cy="65" rx="30" ry="22" fill="var(--accent,#0369a1)"/>
        <text x="100" y="60" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Azure</text>
        <text x="100" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">DevOps</text>
        <!-- Boards (top) -->
        <rect x="72" y="4" width="56" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="100" y="14" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">📋 Boards</text>
        <line x1="100" y1="24" x2="100" y2="43" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Repos (right) -->
        <rect x="156" y="42" width="40" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="176" y="52" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">📁 Repos</text>
        <line x1="156" y1="55" x2="130" y2="60" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Pipelines (bottom-right) -->
        <rect x="140" y="90" width="56" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="168" y="100" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">⚙ Pipelines</text>
        <line x1="152" y1="90" x2="122" y2="82" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Test Plans (bottom-left) -->
        <rect x="4" y="90" width="58" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="33" y="100" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✔ Test Plans</text>
        <line x1="48" y1="90" x2="78" y2="82" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Artifacts (left) -->
        <rect x="4" y="42" width="46" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="27" y="52" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">📦 Artifacts</text>
        <line x1="50" y1="55" x2="70" y2="60" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
      </svg>
      <div class="ln"><span class="k">Boards</span><span class="d">Epics, stories, sprints, kanban boards</span></div>
      <div class="ln"><span class="k">Repos</span><span class="d">Git repositories with branch policies &amp; PRs</span></div>
      <div class="ln"><span class="k">Pipelines</span><span class="d">CI/CD: YAML-based build &amp; release pipelines</span></div>
      <div class="ln"><span class="k">Test Plans</span><span class="d">Manual &amp; automated test case management</span></div>
      <div class="ln"><span class="k">Artifacts</span><span class="d">NuGet, npm, Maven package feeds</span></div>
    </div>

    <div class="cat s-flow">
      <h3>The Delivery Loop</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Circular flow with 6 steps -->
        <!-- Plan -->
        <rect x="72" y="4" width="56" height="22" rx="4" fill="var(--accent,#d97706)"/>
        <text x="100" y="15" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">1 · Plan</text>
        <!-- arrow down-right -->
        <line x1="128" y1="18" x2="158" y2="34" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="160,36 153,32 157,39" fill="#aaa"/>
        <!-- Code -->
        <rect x="154" y="36" width="42" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".85"/>
        <text x="175" y="47" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">2 · Code</text>
        <!-- arrow down -->
        <line x1="175" y1="58" x2="175" y2="70" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="175,73 172,67 178,67" fill="#aaa"/>
        <!-- Build -->
        <rect x="152" y="73" width="46" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".7"/>
        <text x="175" y="84" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">3 · Build</text>
        <!-- arrow down-left -->
        <line x1="155" y1="91" x2="128" y2="104" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="125,106 130,99 135,105" fill="#aaa"/>
        <!-- Test -->
        <rect x="72" y="104" width="56" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".6"/>
        <text x="100" y="115" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">4 · Test</text>
        <!-- arrow up-left -->
        <line x1="72" y1="115" x2="44" y2="104" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="41,102 48,100 45,107" fill="#aaa"/>
        <!-- Deploy -->
        <rect x="4" y="73" width="46" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".55"/>
        <text x="27" y="84" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">5 · Deploy</text>
        <!-- arrow up -->
        <line x1="27" y1="73" x2="27" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="27,55 24,61 30,61" fill="#aaa"/>
        <!-- Monitor -->
        <rect x="4" y="36" width="48" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".4"/>
        <text x="28" y="47" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">6 · Monitor</text>
        <!-- arrow up-right back to Plan -->
        <line x1="52" y1="40" x2="72" y2="22" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="73,19 67,24 74,28" fill="#aaa"/>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">YAML pipelines live in the repo alongside the code</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Branch policies enforce PR reviews before merge</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Environments with approvals gate production releases</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Work items link to commits, PRs and build results</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Full traceability: story → code → build → deployment</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-info" data-title="azure-devops">
  <div class="kicker">Capítulo 3 · CI/CD y Repositorios</div>
  <h2>Azure DevOps: <span class="accent">cinco servicios, un ciclo de entrega</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info">
      <h3>Los Cinco Servicios</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="65" rx="30" ry="22" fill="var(--accent,#0369a1)"/>
        <text x="100" y="60" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Azure</text>
        <text x="100" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">DevOps</text>
        <rect x="72" y="4" width="56" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="100" y="14" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">📋 Boards</text>
        <line x1="100" y1="24" x2="100" y2="43" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="156" y="42" width="40" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="176" y="52" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">📁 Repos</text>
        <line x1="156" y1="55" x2="130" y2="60" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="140" y="90" width="56" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="168" y="100" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">⚙ Pipelines</text>
        <line x1="152" y1="90" x2="122" y2="82" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="4" y="90" width="58" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="33" y="100" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✔ Test Plans</text>
        <line x1="48" y1="90" x2="78" y2="82" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="4" y="42" width="46" height="20" rx="4" fill="var(--accent,#0369a1)" fill-opacity=".7"/>
        <text x="27" y="52" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">📦 Artifacts</text>
        <line x1="50" y1="55" x2="70" y2="60" stroke="var(--accent,#0369a1)" stroke-width="1.2" stroke-dasharray="3,2"/>
      </svg>
      <div class="ln"><span class="k">Boards</span><span class="d">Épicas, historias, sprints, tableros kanban</span></div>
      <div class="ln"><span class="k">Repos</span><span class="d">Repositorios Git con branch policies y PRs</span></div>
      <div class="ln"><span class="k">Pipelines</span><span class="d">CI/CD: pipelines de build y release en YAML</span></div>
      <div class="ln"><span class="k">Test Plans</span><span class="d">Gestión de casos de prueba manuales y automáticos</span></div>
      <div class="ln"><span class="k">Artifacts</span><span class="d">Feeds de paquetes NuGet, npm, Maven</span></div>
    </div>

    <div class="cat s-flow">
      <h3>El Ciclo de Entrega</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="72" y="4" width="56" height="22" rx="4" fill="var(--accent,#d97706)"/>
        <text x="100" y="15" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">1 · Planear</text>
        <line x1="128" y1="18" x2="158" y2="34" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="160,36 153,32 157,39" fill="#aaa"/>
        <rect x="154" y="36" width="42" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".85"/>
        <text x="175" y="47" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">2 · Codear</text>
        <line x1="175" y1="58" x2="175" y2="70" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="175,73 172,67 178,67" fill="#aaa"/>
        <rect x="152" y="73" width="46" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".7"/>
        <text x="175" y="84" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">3 · Build</text>
        <line x1="155" y1="91" x2="128" y2="104" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="125,106 130,99 135,105" fill="#aaa"/>
        <rect x="72" y="104" width="56" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".6"/>
        <text x="100" y="115" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">4 · Testear</text>
        <line x1="72" y1="115" x2="44" y2="104" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="41,102 48,100 45,107" fill="#aaa"/>
        <rect x="4" y="73" width="46" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".55"/>
        <text x="27" y="84" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">5 · Deploy</text>
        <line x1="27" y1="73" x2="27" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="27,55 24,61 30,61" fill="#aaa"/>
        <rect x="4" y="36" width="48" height="22" rx="4" fill="var(--accent,#d97706)" fill-opacity=".4"/>
        <text x="28" y="47" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">6 · Monitorear</text>
        <line x1="52" y1="40" x2="72" y2="22" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="73,19 67,24 74,28" fill="#aaa"/>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Los pipelines YAML viven en el repo junto al código</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Branch policies exigen revisión de PR antes del merge</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Environments con aprobaciones controlan releases a Prod</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Work items vinculados a commits, PRs y resultados de build</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Trazabilidad completa: historia → código → build → deploy</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
