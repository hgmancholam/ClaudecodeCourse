(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-info" data-title="branch-strategies-2">
  <div class="kicker">Chapter 3 · CI/CD &amp; Repositories</div>
  <h2>GitHub Flow · Environment · Release — <span class="accent">choosing by deployment model</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-info">
      <h3>GitHub Flow</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="76" font-size="7" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="76" x2="192" y2="76" stroke="var(--accent,#1d4ed8)" stroke-width="2.5"/>
        <circle cx="50" cy="76" r="3.5" fill="var(--accent,#1d4ed8)"/>
        <circle cx="108" cy="76" r="4" fill="var(--accent,#1d4ed8)"/>
        <circle cx="162" cy="76" r="4" fill="var(--accent,#1d4ed8)"/>
        <circle cx="184" cy="76" r="3.5" fill="var(--accent,#1d4ed8)"/>
        <!-- feat-A -->
        <line x1="58" y1="76" x2="58" y2="42" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="58" y1="42" x2="103" y2="42" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="103" y1="42" x2="108" y2="76" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="58" cy="76" r="3" fill="#22c55e"/>
        <circle cx="108" cy="76" r="4" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <text x="81" y="35" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feat-A</text>
        <text x="108" y="91" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700">PR+CI ✓</text>
        <!-- feat-B -->
        <line x1="78" y1="76" x2="78" y2="48" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="78" y1="48" x2="156" y2="48" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="156" y1="48" x2="162" y2="76" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="78" cy="76" r="3" fill="#f59e0b"/>
        <circle cx="162" cy="76" r="4" fill="#f59e0b" stroke="white" stroke-width="1.5"/>
        <text x="120" y="41" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="600">feat-B</text>
        <text x="162" y="91" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="700">PR+CI ✓</text>
        <!-- deploy badge -->
        <rect x="156" y="106" width="36" height="14" rx="2" fill="var(--accent,#1d4ed8)" fill-opacity=".15" stroke="var(--accent,#1d4ed8)" stroke-width="0.8"/>
        <text x="174" y="113" text-anchor="middle" font-size="6.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">→ Deploy</text>
        <text x="40" y="122" font-size="6" fill="#aaa" font-family="sans-serif">time →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main + short-lived feature branches via PR</span></div>
      <div class="ln"><span class="k">·</span><span class="d">PR to main triggers CI; auto-deploys on merge</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Lightweight; ideal for continuous deployment</span></div>
    </div>

    <div class="cat s-env">
      <h3>Environment Branching</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- prod (top) -->
        <text x="4" y="16" font-size="6.5" fill="var(--accent,#0891b2)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">prod</text>
        <line x1="34" y1="16" x2="192" y2="16" stroke="var(--accent,#0891b2)" stroke-width="2.5"/>
        <circle cx="130" cy="16" r="3.5" fill="var(--accent,#0891b2)"/>
        <circle cx="174" cy="16" r="3.5" fill="var(--accent,#0891b2)"/>
        <!-- staging -->
        <text x="4" y="52" font-size="6.5" fill="#6366f1" font-family="sans-serif" font-weight="700" dominant-baseline="middle">staging</text>
        <line x1="46" y1="52" x2="192" y2="52" stroke="#6366f1" stroke-width="1.8"/>
        <circle cx="90" cy="52" r="3" fill="#6366f1"/>
        <circle cx="130" cy="52" r="3" fill="#6366f1"/>
        <!-- promote staging → prod -->
        <line x1="130" y1="49" x2="130" y2="20" stroke="var(--accent,#0891b2)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="130,20 126,26 134,26" fill="var(--accent,#0891b2)"/>
        <!-- QA -->
        <text x="4" y="85" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="700" dominant-baseline="middle">qa</text>
        <line x1="24" y1="85" x2="192" y2="85" stroke="#f59e0b" stroke-width="1.8"/>
        <circle cx="60" cy="85" r="3" fill="#f59e0b"/>
        <circle cx="90" cy="85" r="3" fill="#f59e0b"/>
        <!-- promote qa → staging -->
        <line x1="90" y1="82" x2="90" y2="56" stroke="#6366f1" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="90,56 86,62 94,62" fill="#6366f1"/>
        <!-- dev (bottom) -->
        <text x="4" y="116" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700" dominant-baseline="middle">dev</text>
        <line x1="24" y1="116" x2="192" y2="116" stroke="#22c55e" stroke-width="1.8"/>
        <circle cx="40" cy="116" r="3" fill="#22c55e"/>
        <circle cx="60" cy="116" r="3" fill="#22c55e"/>
        <!-- promote dev → qa -->
        <line x1="60" y1="113" x2="60" y2="89" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="60,89 56,95 64,95" fill="#f59e0b"/>
        <text x="158" y="35" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="sans-serif" font-style="italic">promote ↑</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">prod · staging · qa · dev</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Each branch mirrors a deployment environment</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Controlled flow; essential for backward compat &amp; hotfixes</span></div>
    </div>

    <div class="cat s-cli">
      <h3>Release Branching</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- main -->
        <text x="4" y="28" font-size="7" fill="var(--accent,#4f46e5)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="28" x2="192" y2="28" stroke="var(--accent,#4f46e5)" stroke-width="2.5"/>
        <circle cx="52" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <circle cx="82" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <circle cx="146" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <circle cx="178" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <!-- release/v1.0 -->
        <line x1="58" y1="28" x2="58" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="58" y1="68" x2="136" y2="68" stroke="#22c55e" stroke-width="1.8"/>
        <circle cx="82" cy="68" r="3" fill="#22c55e"/>
        <circle cx="110" cy="68" r="3" fill="#22c55e"/>
        <circle cx="136" cy="68" r="3" fill="#22c55e"/>
        <text x="58" y="61" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">release/v1.0</text>
        <text x="97" y="80" text-anchor="middle" font-size="5.5" fill="#22c55e" font-family="sans-serif" font-style="italic">bug fixes</text>
        <!-- release/v2.0 -->
        <line x1="150" y1="28" x2="150" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="150" y1="100" x2="192" y2="100" stroke="#f59e0b" stroke-width="1.8"/>
        <circle cx="168" cy="100" r="3" fill="#f59e0b"/>
        <circle cx="186" cy="100" r="3" fill="#f59e0b"/>
        <text x="150" y="93" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="600">release/v2.0</text>
        <text x="170" y="112" text-anchor="middle" font-size="5.5" fill="#f59e0b" font-family="sans-serif" font-style="italic">bug fixes</text>
        <text x="100" y="125" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="sans-serif">multiple versions live simultaneously</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main + release/vX.Y branches</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Dedicated branch per release; fixes applied per version</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Multiple live versions; supports low-frequency deploys</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-info" data-title="branch-strategies-2">
  <div class="kicker">Capítulo 3 · CI/CD y Repositorios</div>
  <h2>GitHub Flow · Environment · Release — <span class="accent">elegir según el modelo de deploy</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-info">
      <h3>GitHub Flow</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="76" font-size="7" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="76" x2="192" y2="76" stroke="var(--accent,#1d4ed8)" stroke-width="2.5"/>
        <circle cx="50" cy="76" r="3.5" fill="var(--accent,#1d4ed8)"/>
        <circle cx="108" cy="76" r="4" fill="var(--accent,#1d4ed8)"/>
        <circle cx="162" cy="76" r="4" fill="var(--accent,#1d4ed8)"/>
        <circle cx="184" cy="76" r="3.5" fill="var(--accent,#1d4ed8)"/>
        <line x1="58" y1="76" x2="58" y2="42" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="58" y1="42" x2="103" y2="42" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="103" y1="42" x2="108" y2="76" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="58" cy="76" r="3" fill="#22c55e"/>
        <circle cx="108" cy="76" r="4" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <text x="81" y="35" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feat-A</text>
        <text x="108" y="91" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700">PR+CI ✓</text>
        <line x1="78" y1="76" x2="78" y2="48" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="78" y1="48" x2="156" y2="48" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="156" y1="48" x2="162" y2="76" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="78" cy="76" r="3" fill="#f59e0b"/>
        <circle cx="162" cy="76" r="4" fill="#f59e0b" stroke="white" stroke-width="1.5"/>
        <text x="120" y="41" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="600">feat-B</text>
        <text x="162" y="91" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="700">PR+CI ✓</text>
        <rect x="156" y="106" width="36" height="14" rx="2" fill="var(--accent,#1d4ed8)" fill-opacity=".15" stroke="var(--accent,#1d4ed8)" stroke-width="0.8"/>
        <text x="174" y="113" text-anchor="middle" font-size="6.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">→ Deploy</text>
        <text x="40" y="122" font-size="6" fill="#aaa" font-family="sans-serif">tiempo →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main + feature branches de corta vida vía PR</span></div>
      <div class="ln"><span class="k">·</span><span class="d">PR a main dispara CI; auto-despliega al fusionar</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Liviano; ideal para deployment continuo</span></div>
    </div>

    <div class="cat s-env">
      <h3>Environment Branching</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="16" font-size="6.5" fill="var(--accent,#0891b2)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">prod</text>
        <line x1="34" y1="16" x2="192" y2="16" stroke="var(--accent,#0891b2)" stroke-width="2.5"/>
        <circle cx="130" cy="16" r="3.5" fill="var(--accent,#0891b2)"/>
        <circle cx="174" cy="16" r="3.5" fill="var(--accent,#0891b2)"/>
        <text x="4" y="52" font-size="6.5" fill="#6366f1" font-family="sans-serif" font-weight="700" dominant-baseline="middle">staging</text>
        <line x1="46" y1="52" x2="192" y2="52" stroke="#6366f1" stroke-width="1.8"/>
        <circle cx="90" cy="52" r="3" fill="#6366f1"/>
        <circle cx="130" cy="52" r="3" fill="#6366f1"/>
        <line x1="130" y1="49" x2="130" y2="20" stroke="var(--accent,#0891b2)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="130,20 126,26 134,26" fill="var(--accent,#0891b2)"/>
        <text x="4" y="85" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="700" dominant-baseline="middle">qa</text>
        <line x1="24" y1="85" x2="192" y2="85" stroke="#f59e0b" stroke-width="1.8"/>
        <circle cx="60" cy="85" r="3" fill="#f59e0b"/>
        <circle cx="90" cy="85" r="3" fill="#f59e0b"/>
        <line x1="90" y1="82" x2="90" y2="56" stroke="#6366f1" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="90,56 86,62 94,62" fill="#6366f1"/>
        <text x="4" y="116" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700" dominant-baseline="middle">dev</text>
        <line x1="24" y1="116" x2="192" y2="116" stroke="#22c55e" stroke-width="1.8"/>
        <circle cx="40" cy="116" r="3" fill="#22c55e"/>
        <circle cx="60" cy="116" r="3" fill="#22c55e"/>
        <line x1="60" y1="113" x2="60" y2="89" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="60,89 56,95 64,95" fill="#f59e0b"/>
        <text x="158" y="35" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="sans-serif" font-style="italic">promote ↑</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">prod · staging · qa · dev</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Cada branch refleja un entorno de deployment</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Flujo controlado; esencial para compat. y hotfixes</span></div>
    </div>

    <div class="cat s-cli">
      <h3>Release Branching</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="28" font-size="7" fill="var(--accent,#4f46e5)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="28" x2="192" y2="28" stroke="var(--accent,#4f46e5)" stroke-width="2.5"/>
        <circle cx="52" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <circle cx="82" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <circle cx="146" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <circle cx="178" cy="28" r="3.5" fill="var(--accent,#4f46e5)"/>
        <line x1="58" y1="28" x2="58" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="58" y1="68" x2="136" y2="68" stroke="#22c55e" stroke-width="1.8"/>
        <circle cx="82" cy="68" r="3" fill="#22c55e"/>
        <circle cx="110" cy="68" r="3" fill="#22c55e"/>
        <circle cx="136" cy="68" r="3" fill="#22c55e"/>
        <text x="58" y="61" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">release/v1.0</text>
        <text x="97" y="80" text-anchor="middle" font-size="5.5" fill="#22c55e" font-family="sans-serif" font-style="italic">bug fixes</text>
        <line x1="150" y1="28" x2="150" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="150" y1="100" x2="192" y2="100" stroke="#f59e0b" stroke-width="1.8"/>
        <circle cx="168" cy="100" r="3" fill="#f59e0b"/>
        <circle cx="186" cy="100" r="3" fill="#f59e0b"/>
        <text x="150" y="93" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="600">release/v2.0</text>
        <text x="170" y="112" text-anchor="middle" font-size="5.5" fill="#f59e0b" font-family="sans-serif" font-style="italic">bug fixes</text>
        <text x="100" y="125" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="sans-serif">múltiples versiones activas simultáneamente</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main + release/vX.Y</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Branch dedicado por release; fixes aplicados por versión</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Múltiples versiones en producción; deploys poco frecuentes</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
