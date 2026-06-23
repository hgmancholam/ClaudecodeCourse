(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-env" data-title="git-intro">
  <div class="kicker">Chapter 3 · CI/CD &amp; Repositories</div>
  <h2>Git: <span class="accent">every clone is a full backup of the entire history</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-env">
      <h3>The Four Areas</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Working Directory -->
        <rect x="2" y="30" width="40" height="50" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".15" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <text x="22" y="48" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Working</text>
        <text x="22" y="60" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dir</text>
        <!-- git add arrow -->
        <line x1="42" y1="55" x2="52" y2="55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <polygon points="55,55 50,52 50,58" fill="var(--accent,#0d9488)"/>
        <text x="48" y="48" text-anchor="middle" font-size="5.5" fill="var(--accent,#0d9488)" font-family="sans-serif" font-style="italic">git add</text>
        <!-- Staging Area -->
        <rect x="55" y="30" width="40" height="50" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".3" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <text x="75" y="52" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Staging</text>
        <text x="75" y="63" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Area</text>
        <!-- git commit arrow -->
        <line x1="95" y1="55" x2="105" y2="55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <polygon points="108,55 103,52 103,58" fill="var(--accent,#0d9488)"/>
        <text x="101" y="46" text-anchor="middle" font-size="5.5" fill="var(--accent,#0d9488)" font-family="sans-serif" font-style="italic">git commit</text>
        <!-- Local Repo -->
        <rect x="108" y="20" width="42" height="68" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <text x="129" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Local</text>
        <text x="129" y="59" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Repo</text>
        <!-- git push arrow -->
        <line x1="150" y1="55" x2="160" y2="55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <polygon points="163,55 158,52 158,58" fill="var(--accent,#0d9488)"/>
        <text x="156" y="46" text-anchor="middle" font-size="5.5" fill="var(--accent,#0d9488)" font-family="sans-serif" font-style="italic">git push</text>
        <!-- Remote Repo -->
        <rect x="163" y="20" width="34" height="68" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".85"/>
        <text x="180" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Remote</text>
        <text x="180" y="59" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Repo</text>
        <text x="180" y="70" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">(origin)</text>
        <!-- git pull return arrow at bottom -->
        <path d="M 197,95 Q 100,115 5,95" stroke="#aaa" stroke-width="1.2" fill="none" stroke-dasharray="4,2"/>
        <polygon points="5,95 11,91 9,97" fill="#aaa"/>
        <text x="100" y="113" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">git pull / git fetch</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Working Dir: your local file edits (untracked changes)</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Staging: snapshot of what will go into the next commit</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Local repo: full history of commits on your machine</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Remote: shared repo on Azure DevOps / GitHub / GitLab</span></div>
    </div>

    <div class="cat s-proj">
      <h3>Why Git is Different</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Distributed: 3 clones, all equal -->
        <text x="100" y="10" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="800">DISTRIBUTED — every clone is complete</text>
        <!-- Remote server -->
        <rect x="72" y="18" width="56" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".8"/>
        <text x="100" y="29" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Remote Server</text>
        <!-- arrow to Dev A -->
        <line x1="80" y1="40" x2="40" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="38,60 42,53 47,59" fill="#aaa"/>
        <!-- arrow to Dev B -->
        <line x1="100" y1="40" x2="100" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="100,61 96,55 104,55" fill="#aaa"/>
        <!-- arrow to Dev C -->
        <line x1="120" y1="40" x2="160" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="162,60 153,59 158,53" fill="#aaa"/>
        <!-- Dev clones -->
        <rect x="10" y="61" width="54" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".5"/>
        <text x="37" y="72" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev A clone</text>
        <rect x="73" y="61" width="54" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".5"/>
        <text x="100" y="72" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev B clone</text>
        <rect x="136" y="61" width="54" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".5"/>
        <text x="163" y="72" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dev C clone</text>
        <!-- Each clone has full history label -->
        <text x="37" y="91" text-anchor="middle" font-size="6" fill="#777" font-family="sans-serif">full history</text>
        <text x="100" y="91" text-anchor="middle" font-size="6" fill="#777" font-family="sans-serif">full history</text>
        <text x="163" y="91" text-anchor="middle" font-size="6" fill="#777" font-family="sans-serif">full history</text>
        <!-- SHA commit chain -->
        <text x="100" y="104" text-anchor="middle" font-size="6.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="700">Commits are SHA-addressed and immutable</text>
        <rect x="20" y="110" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#818cf8" stroke-width="1"/>
        <text x="31" y="116" text-anchor="middle" font-size="5.5" fill="#4338ca" font-family="sans-serif" font-weight="700" dominant-baseline="middle">a1b2c3</text>
        <line x1="42" y1="116" x2="52" y2="116" stroke="#818cf8" stroke-width="1"/>
        <rect x="52" y="110" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#818cf8" stroke-width="1"/>
        <text x="63" y="116" text-anchor="middle" font-size="5.5" fill="#4338ca" font-family="sans-serif" font-weight="700" dominant-baseline="middle">d4e5f6</text>
        <line x1="74" y1="116" x2="84" y2="116" stroke="#818cf8" stroke-width="1"/>
        <rect x="84" y="110" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#818cf8" stroke-width="1"/>
        <text x="95" y="116" text-anchor="middle" font-size="5.5" fill="#4338ca" font-family="sans-serif" font-weight="700" dominant-baseline="middle">g7h8i9</text>
        <line x1="106" y1="116" x2="116" y2="116" stroke="#818cf8" stroke-width="1"/>
        <text x="130" y="116" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif" dominant-baseline="middle">→ HEAD</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Distributed: work offline; push when ready</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Every commit is a SHA hash — immutable and auditable</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Branches are cheap: just a pointer to a commit</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Merge or rebase to integrate parallel work streams</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-env" data-title="git-intro">
  <div class="kicker">Capítulo 3 · CI/CD y Repositorios</div>
  <h2>Git: <span class="accent">cada clone es una copia completa de todo el historial</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-env">
      <h3>Las Cuatro Áreas</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="30" width="40" height="50" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".15" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <text x="22" y="48" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Directorio</text>
        <text x="22" y="60" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">de Trabajo</text>
        <line x1="42" y1="55" x2="52" y2="55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <polygon points="55,55 50,52 50,58" fill="var(--accent,#0d9488)"/>
        <text x="48" y="48" text-anchor="middle" font-size="5.5" fill="var(--accent,#0d9488)" font-family="sans-serif" font-style="italic">git add</text>
        <rect x="55" y="30" width="40" height="50" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".3" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <text x="75" y="52" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Área de</text>
        <text x="75" y="63" text-anchor="middle" font-size="7" fill="var(--accent,#0d9488)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Staging</text>
        <line x1="95" y1="55" x2="105" y2="55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <polygon points="108,55 103,52 103,58" fill="var(--accent,#0d9488)"/>
        <text x="101" y="46" text-anchor="middle" font-size="5.5" fill="var(--accent,#0d9488)" font-family="sans-serif" font-style="italic">git commit</text>
        <rect x="108" y="20" width="42" height="68" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <text x="129" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Repo</text>
        <text x="129" y="59" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Local</text>
        <line x1="150" y1="55" x2="160" y2="55" stroke="var(--accent,#0d9488)" stroke-width="1.5"/>
        <polygon points="163,55 158,52 158,58" fill="var(--accent,#0d9488)"/>
        <text x="156" y="46" text-anchor="middle" font-size="5.5" fill="var(--accent,#0d9488)" font-family="sans-serif" font-style="italic">git push</text>
        <rect x="163" y="20" width="34" height="68" rx="4" fill="var(--accent,#0d9488)" fill-opacity=".85"/>
        <text x="180" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Repo</text>
        <text x="180" y="59" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Remoto</text>
        <text x="180" y="70" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">(origin)</text>
        <path d="M 197,95 Q 100,115 5,95" stroke="#aaa" stroke-width="1.2" fill="none" stroke-dasharray="4,2"/>
        <polygon points="5,95 11,91 9,97" fill="#aaa"/>
        <text x="100" y="113" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">git pull / git fetch</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Working Dir: ediciones locales sin rastrear aún</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Staging: snapshot de lo que irá en el próximo commit</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Repo local: historial completo de commits en tu máquina</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Remoto: repo compartido en Azure DevOps / GitHub / GitLab</span></div>
    </div>

    <div class="cat s-proj">
      <h3>Por qué Git es diferente</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="10" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="800">DISTRIBUIDO — cada clone es completo</text>
        <rect x="72" y="18" width="56" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".8"/>
        <text x="100" y="29" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Servidor Remoto</text>
        <line x1="80" y1="40" x2="40" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="38,60 42,53 47,59" fill="#aaa"/>
        <line x1="100" y1="40" x2="100" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="100,61 96,55 104,55" fill="#aaa"/>
        <line x1="120" y1="40" x2="160" y2="58" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="162,60 153,59 158,53" fill="#aaa"/>
        <rect x="10" y="61" width="54" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".5"/>
        <text x="37" y="72" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Clone Dev A</text>
        <rect x="73" y="61" width="54" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".5"/>
        <text x="100" y="72" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Clone Dev B</text>
        <rect x="136" y="61" width="54" height="22" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".5"/>
        <text x="163" y="72" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Clone Dev C</text>
        <text x="37" y="91" text-anchor="middle" font-size="6" fill="#777" font-family="sans-serif">historial completo</text>
        <text x="100" y="91" text-anchor="middle" font-size="6" fill="#777" font-family="sans-serif">historial completo</text>
        <text x="163" y="91" text-anchor="middle" font-size="6" fill="#777" font-family="sans-serif">historial completo</text>
        <text x="100" y="104" text-anchor="middle" font-size="6.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="700">Commits son SHA-addressed e inmutables</text>
        <rect x="20" y="110" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#818cf8" stroke-width="1"/>
        <text x="31" y="116" text-anchor="middle" font-size="5.5" fill="#4338ca" font-family="sans-serif" font-weight="700" dominant-baseline="middle">a1b2c3</text>
        <line x1="42" y1="116" x2="52" y2="116" stroke="#818cf8" stroke-width="1"/>
        <rect x="52" y="110" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#818cf8" stroke-width="1"/>
        <text x="63" y="116" text-anchor="middle" font-size="5.5" fill="#4338ca" font-family="sans-serif" font-weight="700" dominant-baseline="middle">d4e5f6</text>
        <line x1="74" y1="116" x2="84" y2="116" stroke="#818cf8" stroke-width="1"/>
        <rect x="84" y="110" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#818cf8" stroke-width="1"/>
        <text x="95" y="116" text-anchor="middle" font-size="5.5" fill="#4338ca" font-family="sans-serif" font-weight="700" dominant-baseline="middle">g7h8i9</text>
        <line x1="106" y1="116" x2="116" y2="116" stroke="#818cf8" stroke-width="1"/>
        <text x="130" y="116" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif" dominant-baseline="middle">→ HEAD</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Distribuido: trabaja offline, sincroniza cuando estés listo</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Cada commit es un SHA — inmutable y auditable</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Las ramas son baratas: solo un puntero a un commit</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Merge o rebase para integrar flujos de trabajo paralelos</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
