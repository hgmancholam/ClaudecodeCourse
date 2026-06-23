(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flow" data-title="cicd-intro">
  <div class="kicker">Chapter 3 · CI/CD &amp; Repositories</div>
  <h2>CI catches bugs in minutes; <span class="accent">CD ships fixes in hours</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-flow">
      <h3>Continuous Integration (CI)</h3>
      <svg class="archsvg" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Developer -->
        <circle cx="16" cy="60" r="12" fill="var(--accent,#d97706)"/>
        <text x="16" y="60" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev</text>
        <!-- push arrow -->
        <line x1="28" y1="60" x2="40" y2="60" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="43,60 38,57 38,63" fill="#aaa"/>
        <text x="35" y="54" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">push</text>
        <!-- CI pipeline container -->
        <rect x="43" y="28" width="138" height="64" rx="5" fill="#f8f8fb" stroke="var(--accent,#d97706)" stroke-width="1.2" stroke-dasharray="4,2"/>
        <text x="112" y="38" text-anchor="middle" font-size="6.5" fill="var(--accent,#d97706)" font-family="sans-serif" font-weight="800" letter-spacing="0.5">CI RUNNER</text>
        <!-- Build -->
        <rect x="50" y="44" width="32" height="18" rx="3" fill="var(--accent,#d97706)" fill-opacity=".75"/>
        <text x="66" y="53" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Build</text>
        <line x1="82" y1="53" x2="90" y2="53" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="93,53 88,50 88,56" fill="#aaa"/>
        <!-- Test -->
        <rect x="93" y="44" width="32" height="18" rx="3" fill="var(--accent,#d97706)" fill-opacity=".75"/>
        <text x="109" y="53" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Test</text>
        <line x1="125" y1="53" x2="133" y2="53" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="136,53 131,50 131,56" fill="#aaa"/>
        <!-- Scan -->
        <rect x="136" y="44" width="36" height="18" rx="3" fill="var(--accent,#d97706)" fill-opacity=".75"/>
        <text x="154" y="53" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Scan</text>
        <!-- success arrow up-right -->
        <line x1="181" y1="48" x2="194" y2="36" stroke="#22c55e" stroke-width="1.5"/>
        <polygon points="196,34 189,36 192,43" fill="#22c55e"/>
        <rect x="196" y="25" width="20" height="14" rx="3" fill="#22c55e"/>
        <text x="206" y="32" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✓</text>
        <!-- fail arrow down-right -->
        <line x1="181" y1="58" x2="194" y2="70" stroke="#ef4444" stroke-width="1.5"/>
        <polygon points="196,72 192,65 189,72" fill="#ef4444"/>
        <rect x="196" y="72" width="20" height="14" rx="3" fill="#ef4444"/>
        <text x="206" y="79" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✗</text>
        <!-- labels -->
        <text x="206" y="22" text-anchor="middle" font-size="6" fill="#22c55e" font-family="sans-serif">artifact</text>
        <text x="206" y="93" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif">alert dev</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Triggered automatically on every commit or PR</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Build, unit tests &amp; static analysis run in minutes</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Broken build = team stops; fix before moving on</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Catch integration bugs before they reach production</span></div>
    </div>

    <div class="cat s-mode">
      <h3>Continuous Delivery / Deployment (CD)</h3>
      <svg class="archsvg" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
        <!-- ✓ Artifact input -->
        <rect x="2" y="50" width="30" height="18" rx="3" fill="#22c55e"/>
        <text x="17" y="59" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✓ Built</text>
        <line x1="32" y1="59" x2="40" y2="59" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="43,59 38,56 38,62" fill="#aaa"/>
        <!-- Dev env -->
        <rect x="43" y="44" width="30" height="28" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
        <text x="58" y="54" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev</text>
        <text x="58" y="65" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">auto</text>
        <line x1="73" y1="59" x2="81" y2="59" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="84,59 79,56 79,62" fill="#aaa"/>
        <!-- Staging env -->
        <rect x="84" y="44" width="36" height="28" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".8"/>
        <text x="102" y="54" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Stage</text>
        <text x="102" y="65" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">smoke tests</text>
        <line x1="120" y1="59" x2="128" y2="59" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="131,59 126,56 126,62" fill="#aaa"/>
        <!-- Approval gate -->
        <rect x="131" y="47" width="28" height="24" rx="4" fill="#f59e0b"/>
        <text x="145" y="56" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">🔒</text>
        <text x="145" y="66" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Approve</text>
        <line x1="159" y1="59" x2="167" y2="59" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="170,59 165,56 165,62" fill="#aaa"/>
        <!-- Prod env -->
        <rect x="170" y="44" width="32" height="28" rx="4" fill="var(--accent,#7c3aed)"/>
        <text x="186" y="54" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Prod</text>
        <text x="186" y="65" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">live 🌐</text>
        <!-- env labels below -->
        <text x="58" y="84" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">auto-deploy</text>
        <text x="102" y="84" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">regression</text>
        <text x="145" y="84" text-anchor="middle" font-size="6" fill="#f59e0b" font-family="sans-serif">human gate</text>
        <text x="186" y="84" text-anchor="middle" font-size="6" fill="var(--accent,#7c3aed)" font-family="sans-serif">blue/green</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Every green build auto-deploys to Dev &amp; Staging</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Approval gate keeps humans in control for Prod</span></div>
      <div class="ln"><span class="k">·</span><span class="d">CD = Delivery (manual Prod gate) or Deployment (auto)</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Small, frequent releases reduce deployment risk</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-flow" data-title="cicd-intro">
  <div class="kicker">Capítulo 3 · CI/CD y Repositorios</div>
  <h2>CI detecta errores en minutos; <span class="accent">CD lleva fixes a usuarios en horas</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-flow">
      <h3>Integración Continua (CI)</h3>
      <svg class="archsvg" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="60" r="12" fill="var(--accent,#d97706)"/>
        <text x="16" y="60" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev</text>
        <line x1="28" y1="60" x2="40" y2="60" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="43,60 38,57 38,63" fill="#aaa"/>
        <text x="35" y="54" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">push</text>
        <rect x="43" y="28" width="138" height="64" rx="5" fill="#f8f8fb" stroke="var(--accent,#d97706)" stroke-width="1.2" stroke-dasharray="4,2"/>
        <text x="112" y="38" text-anchor="middle" font-size="6.5" fill="var(--accent,#d97706)" font-family="sans-serif" font-weight="800" letter-spacing="0.5">CI RUNNER</text>
        <rect x="50" y="44" width="32" height="18" rx="3" fill="var(--accent,#d97706)" fill-opacity=".75"/>
        <text x="66" y="53" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Build</text>
        <line x1="82" y1="53" x2="90" y2="53" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="93,53 88,50 88,56" fill="#aaa"/>
        <rect x="93" y="44" width="32" height="18" rx="3" fill="var(--accent,#d97706)" fill-opacity=".75"/>
        <text x="109" y="53" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Test</text>
        <line x1="125" y1="53" x2="133" y2="53" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="136,53 131,50 131,56" fill="#aaa"/>
        <rect x="136" y="44" width="36" height="18" rx="3" fill="var(--accent,#d97706)" fill-opacity=".75"/>
        <text x="154" y="53" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Scan</text>
        <line x1="181" y1="48" x2="194" y2="36" stroke="#22c55e" stroke-width="1.5"/>
        <polygon points="196,34 189,36 192,43" fill="#22c55e"/>
        <rect x="196" y="25" width="20" height="14" rx="3" fill="#22c55e"/>
        <text x="206" y="32" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✓</text>
        <line x1="181" y1="58" x2="194" y2="70" stroke="#ef4444" stroke-width="1.5"/>
        <polygon points="196,72 192,65 189,72" fill="#ef4444"/>
        <rect x="196" y="72" width="20" height="14" rx="3" fill="#ef4444"/>
        <text x="206" y="79" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✗</text>
        <text x="206" y="22" text-anchor="middle" font-size="6" fill="#22c55e" font-family="sans-serif">artifact</text>
        <text x="206" y="93" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif">notifica dev</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Se dispara automáticamente en cada commit o PR</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Build, tests unitarios y análisis estático en minutos</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Build roto = equipo se detiene; se arregla antes de continuar</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Detecta bugs de integración antes de llegar a producción</span></div>
    </div>

    <div class="cat s-mode">
      <h3>Entrega / Despliegue Continuo (CD)</h3>
      <svg class="archsvg" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="50" width="30" height="18" rx="3" fill="#22c55e"/>
        <text x="17" y="59" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">✓ Build</text>
        <line x1="32" y1="59" x2="40" y2="59" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="43,59 38,56 38,62" fill="#aaa"/>
        <rect x="43" y="44" width="30" height="28" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
        <text x="58" y="54" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev</text>
        <text x="58" y="65" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">auto</text>
        <line x1="73" y1="59" x2="81" y2="59" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="84,59 79,56 79,62" fill="#aaa"/>
        <rect x="84" y="44" width="36" height="28" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".8"/>
        <text x="102" y="54" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Stage</text>
        <text x="102" y="65" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">regresión</text>
        <line x1="120" y1="59" x2="128" y2="59" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="131,59 126,56 126,62" fill="#aaa"/>
        <rect x="131" y="47" width="28" height="24" rx="4" fill="#f59e0b"/>
        <text x="145" y="56" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">🔒</text>
        <text x="145" y="66" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Aprobar</text>
        <line x1="159" y1="59" x2="167" y2="59" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="170,59 165,56 165,62" fill="#aaa"/>
        <rect x="170" y="44" width="32" height="28" rx="4" fill="var(--accent,#7c3aed)"/>
        <text x="186" y="54" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Prod</text>
        <text x="186" y="65" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">live 🌐</text>
        <text x="58" y="84" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">auto-deploy</text>
        <text x="102" y="84" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">regresión</text>
        <text x="145" y="84" text-anchor="middle" font-size="6" fill="#f59e0b" font-family="sans-serif">gate humano</text>
        <text x="186" y="84" text-anchor="middle" font-size="6" fill="var(--accent,#7c3aed)" font-family="sans-serif">blue/green</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Cada build verde se despliega automáticamente a Dev y Stage</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Gate de aprobación mantiene a humanos en control de Prod</span></div>
      <div class="ln"><span class="k">·</span><span class="d">CD = Delivery (gate manual) o Deployment (completamente auto)</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Releases pequeños y frecuentes reducen el riesgo de despliegue</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
