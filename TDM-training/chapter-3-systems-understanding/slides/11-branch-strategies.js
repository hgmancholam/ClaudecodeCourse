(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-mode" data-title="branch-strategies">
  <div class="kicker">Chapter 3 · CI/CD &amp; Repositories</div>
  <h2>Trunk-Based · Feature · Gitflow — <span class="accent">the 3 most widely used strategies</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-mode">
      <h3>Trunk-Based Dev</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="75" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="75" x2="192" y2="75" stroke="var(--accent,#7c3aed)" stroke-width="2.5"/>
        <circle cx="50" cy="75" r="3.5" fill="var(--accent,#7c3aed)"/>
        <circle cx="68" cy="75" r="3.5" fill="var(--accent,#7c3aed)"/>
        <circle cx="128" cy="75" r="4" fill="var(--accent,#7c3aed)"/>
        <circle cx="170" cy="75" r="4" fill="var(--accent,#7c3aed)"/>
        <circle cx="186" cy="75" r="3.5" fill="var(--accent,#7c3aed)"/>
        <!-- feat-A -->
        <line x1="78" y1="75" x2="78" y2="44" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="78" y1="44" x2="120" y2="44" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="120" y1="44" x2="120" y2="75" stroke="#22c55e" stroke-width="1.5"/>
        <circle cx="78" cy="75" r="3" fill="#22c55e"/>
        <circle cx="120" cy="75" r="4" fill="#22c55e"/>
        <text x="99" y="37" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feat-A · &lt;2 days</text>
        <text x="120" y="90" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700">CI ✓</text>
        <!-- feat-B -->
        <line x1="140" y1="75" x2="140" y2="50" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="140" y1="50" x2="162" y2="50" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="162" y1="50" x2="162" y2="75" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="140" cy="75" r="3" fill="#f59e0b"/>
        <circle cx="162" cy="75" r="4" fill="#f59e0b"/>
        <text x="151" y="43" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="600">feat-B</text>
        <text x="162" y="90" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="700">CI ✓</text>
        <text x="40" y="118" font-size="6" fill="#aaa" font-family="sans-serif">time →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">Single main / trunk only</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Commit directly to main; branches live &lt; 2 days</span></div>
      <div class="ln"><span class="k">⚠</span><span class="d">Needs robust CI/CD &amp; high team maturity</span></div>
    </div>

    <div class="cat s-feat">
      <h3>Feature Branching</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="108" font-size="7" fill="var(--accent,#f97316)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="108" x2="192" y2="108" stroke="var(--accent,#f97316)" stroke-width="2.5"/>
        <circle cx="48" cy="108" r="3.5" fill="var(--accent,#f97316)"/>
        <circle cx="110" cy="108" r="4" fill="var(--accent,#f97316)"/>
        <circle cx="162" cy="108" r="4" fill="var(--accent,#f97316)"/>
        <circle cx="184" cy="108" r="3.5" fill="var(--accent,#f97316)"/>
        <!-- feature/login -->
        <line x1="56" y1="108" x2="56" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="56" y1="68" x2="105" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="105" y1="68" x2="110" y2="108" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="56" cy="108" r="3" fill="#22c55e"/>
        <circle cx="110" cy="108" r="4" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <text x="81" y="61" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feature/login</text>
        <text x="110" y="94" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700">PR ✓</text>
        <!-- feature/api -->
        <line x1="78" y1="108" x2="78" y2="28" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="78" y1="28" x2="156" y2="28" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="156" y1="28" x2="162" y2="108" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="78" cy="108" r="3" fill="#a855f7"/>
        <circle cx="162" cy="108" r="4" fill="#a855f7" stroke="white" stroke-width="1.5"/>
        <text x="118" y="21" text-anchor="middle" font-size="6.5" fill="#a855f7" font-family="sans-serif" font-weight="600">feature/api</text>
        <text x="162" y="94" text-anchor="middle" font-size="6.5" fill="#a855f7" font-family="sans-serif" font-weight="700">PR ✓</text>
        <text x="40" y="124" font-size="6" fill="#aaa" font-family="sans-serif">time →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main + feature/*</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Isolated branch per feature; merged via pull request</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Small apps with independently shippable features</span></div>
    </div>

    <div class="cat s-flow">
      <h3>Gitflow</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- main -->
        <text x="4" y="108" font-size="7" fill="#ef4444" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="108" x2="192" y2="108" stroke="#ef4444" stroke-width="2.5"/>
        <!-- develop -->
        <text x="4" y="68" font-size="7" fill="#3b82f6" font-family="sans-serif" font-weight="700" dominant-baseline="middle">dev</text>
        <line x1="36" y1="68" x2="172" y2="68" stroke="#3b82f6" stroke-width="1.8"/>
        <line x1="36" y1="108" x2="36" y2="68" stroke="#3b82f6" stroke-width="1.2"/>
        <!-- feature/1 -->
        <line x1="58" y1="68" x2="58" y2="30" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="58" y1="30" x2="98" y2="30" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="98" y1="30" x2="98" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <circle cx="58" cy="68" r="3.5" fill="#22c55e"/>
        <circle cx="98" cy="68" r="3.5" fill="#22c55e"/>
        <text x="78" y="23" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feat/1</text>
        <!-- feature/2 -->
        <line x1="112" y1="68" x2="112" y2="34" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="112" y1="34" x2="150" y2="34" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="150" y1="34" x2="150" y2="68" stroke="#a855f7" stroke-width="1.5"/>
        <circle cx="112" cy="68" r="3.5" fill="#a855f7"/>
        <circle cx="150" cy="68" r="3.5" fill="#a855f7"/>
        <text x="131" y="27" text-anchor="middle" font-size="6.5" fill="#a855f7" font-family="sans-serif" font-weight="600">feat/2</text>
        <!-- release -->
        <line x1="165" y1="68" x2="188" y2="108" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="165" cy="68" r="3.5" fill="#f59e0b"/>
        <circle cx="188" cy="108" r="4" fill="#f59e0b"/>
        <text x="182" y="85" font-size="6" fill="#f59e0b" font-family="sans-serif" font-weight="600">rel</text>
        <!-- hotfix -->
        <line x1="40" y1="108" x2="40" y2="90" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="40" y1="90" x2="56" y2="90" stroke="#ef4444" stroke-width="1.5"/>
        <line x1="56" y1="90" x2="56" y2="108" stroke="#ef4444" stroke-width="1.5"/>
        <circle cx="40" cy="108" r="3.5" fill="#ef4444"/>
        <circle cx="56" cy="108" r="3.5" fill="#ef4444"/>
        <text x="48" y="84" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" font-weight="600">hotfix</text>
        <text x="40" y="122" font-size="6" fill="#aaa" font-family="sans-serif">time →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main · develop · feature · release · hotfix</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Features branch from develop; release merges to main</span></div>
      <div class="ln"><span class="k">⚠</span><span class="d">Many branches — complex but ideal for versioned releases</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-mode" data-title="branch-strategies">
  <div class="kicker">Capítulo 3 · CI/CD y Repositorios</div>
  <h2>Trunk-Based · Feature · Gitflow — <span class="accent">las 3 estrategias más usadas</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-mode">
      <h3>Trunk-Based Dev</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="75" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="75" x2="192" y2="75" stroke="var(--accent,#7c3aed)" stroke-width="2.5"/>
        <circle cx="50" cy="75" r="3.5" fill="var(--accent,#7c3aed)"/>
        <circle cx="68" cy="75" r="3.5" fill="var(--accent,#7c3aed)"/>
        <circle cx="128" cy="75" r="4" fill="var(--accent,#7c3aed)"/>
        <circle cx="170" cy="75" r="4" fill="var(--accent,#7c3aed)"/>
        <circle cx="186" cy="75" r="3.5" fill="var(--accent,#7c3aed)"/>
        <line x1="78" y1="75" x2="78" y2="44" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="78" y1="44" x2="120" y2="44" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="120" y1="44" x2="120" y2="75" stroke="#22c55e" stroke-width="1.5"/>
        <circle cx="78" cy="75" r="3" fill="#22c55e"/>
        <circle cx="120" cy="75" r="4" fill="#22c55e"/>
        <text x="99" y="37" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feat-A · &lt;2 días</text>
        <text x="120" y="90" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700">CI ✓</text>
        <line x1="140" y1="75" x2="140" y2="50" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="140" y1="50" x2="162" y2="50" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="162" y1="50" x2="162" y2="75" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="140" cy="75" r="3" fill="#f59e0b"/>
        <circle cx="162" cy="75" r="4" fill="#f59e0b"/>
        <text x="151" y="43" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="600">feat-B</text>
        <text x="162" y="90" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-family="sans-serif" font-weight="700">CI ✓</text>
        <text x="40" y="118" font-size="6" fill="#aaa" font-family="sans-serif">tiempo →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">Solo main / trunk</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Commits directo a main; branches viven &lt; 2 días</span></div>
      <div class="ln"><span class="k">⚠</span><span class="d">Requiere CI/CD robusto y alta madurez del equipo</span></div>
    </div>

    <div class="cat s-feat">
      <h3>Feature Branching</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="108" font-size="7" fill="var(--accent,#f97316)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="108" x2="192" y2="108" stroke="var(--accent,#f97316)" stroke-width="2.5"/>
        <circle cx="48" cy="108" r="3.5" fill="var(--accent,#f97316)"/>
        <circle cx="110" cy="108" r="4" fill="var(--accent,#f97316)"/>
        <circle cx="162" cy="108" r="4" fill="var(--accent,#f97316)"/>
        <circle cx="184" cy="108" r="3.5" fill="var(--accent,#f97316)"/>
        <line x1="56" y1="108" x2="56" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="56" y1="68" x2="105" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="105" y1="68" x2="110" y2="108" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="56" cy="108" r="3" fill="#22c55e"/>
        <circle cx="110" cy="108" r="4" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <text x="81" y="61" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feature/login</text>
        <text x="110" y="94" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="700">PR ✓</text>
        <line x1="78" y1="108" x2="78" y2="28" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="78" y1="28" x2="156" y2="28" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="156" y1="28" x2="162" y2="108" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="78" cy="108" r="3" fill="#a855f7"/>
        <circle cx="162" cy="108" r="4" fill="#a855f7" stroke="white" stroke-width="1.5"/>
        <text x="118" y="21" text-anchor="middle" font-size="6.5" fill="#a855f7" font-family="sans-serif" font-weight="600">feature/api</text>
        <text x="162" y="94" text-anchor="middle" font-size="6.5" fill="#a855f7" font-family="sans-serif" font-weight="700">PR ✓</text>
        <text x="40" y="124" font-size="6" fill="#aaa" font-family="sans-serif">tiempo →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main + feature/*</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Branch aislado por feature; se fusiona vía pull request</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Apps pequeñas con features entregables independientemente</span></div>
    </div>

    <div class="cat s-flow">
      <h3>Gitflow</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="108" font-size="7" fill="#ef4444" font-family="sans-serif" font-weight="700" dominant-baseline="middle">main</text>
        <line x1="36" y1="108" x2="192" y2="108" stroke="#ef4444" stroke-width="2.5"/>
        <text x="4" y="68" font-size="7" fill="#3b82f6" font-family="sans-serif" font-weight="700" dominant-baseline="middle">dev</text>
        <line x1="36" y1="68" x2="172" y2="68" stroke="#3b82f6" stroke-width="1.8"/>
        <line x1="36" y1="108" x2="36" y2="68" stroke="#3b82f6" stroke-width="1.2"/>
        <line x1="58" y1="68" x2="58" y2="30" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="58" y1="30" x2="98" y2="30" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="98" y1="30" x2="98" y2="68" stroke="#22c55e" stroke-width="1.5"/>
        <circle cx="58" cy="68" r="3.5" fill="#22c55e"/>
        <circle cx="98" cy="68" r="3.5" fill="#22c55e"/>
        <text x="78" y="23" text-anchor="middle" font-size="6.5" fill="#22c55e" font-family="sans-serif" font-weight="600">feat/1</text>
        <line x1="112" y1="68" x2="112" y2="34" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="112" y1="34" x2="150" y2="34" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="150" y1="34" x2="150" y2="68" stroke="#a855f7" stroke-width="1.5"/>
        <circle cx="112" cy="68" r="3.5" fill="#a855f7"/>
        <circle cx="150" cy="68" r="3.5" fill="#a855f7"/>
        <text x="131" y="27" text-anchor="middle" font-size="6.5" fill="#a855f7" font-family="sans-serif" font-weight="600">feat/2</text>
        <line x1="165" y1="68" x2="188" y2="108" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="165" cy="68" r="3.5" fill="#f59e0b"/>
        <circle cx="188" cy="108" r="4" fill="#f59e0b"/>
        <text x="182" y="85" font-size="6" fill="#f59e0b" font-family="sans-serif" font-weight="600">rel</text>
        <line x1="40" y1="108" x2="40" y2="90" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="40" y1="90" x2="56" y2="90" stroke="#ef4444" stroke-width="1.5"/>
        <line x1="56" y1="90" x2="56" y2="108" stroke="#ef4444" stroke-width="1.5"/>
        <circle cx="40" cy="108" r="3.5" fill="#ef4444"/>
        <circle cx="56" cy="108" r="3.5" fill="#ef4444"/>
        <text x="48" y="84" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" font-weight="600">hotfix</text>
        <text x="40" y="122" font-size="6" fill="#aaa" font-family="sans-serif">tiempo →</text>
      </svg>
      <div class="ln"><span class="k">Branches</span><span class="d">main · develop · feature · release · hotfix</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Features desde develop; release se fusiona a main</span></div>
      <div class="ln"><span class="k">⚠</span><span class="d">Muchos branches — complejo pero ideal para releases versionados</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
