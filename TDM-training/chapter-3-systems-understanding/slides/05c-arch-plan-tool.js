(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-mode" data-title="arch-plan-tool">
  <div class="kicker">Chapter 3 · AI Architecture</div>
  <h2>Give the LLM a plan <span class="accent">and the tools to carry it out</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-mode">
      <h3>Plan &amp; Execute</h3>
      <svg class="archsvg" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
        <!-- Goal input -->
        <rect x="96" y="4" width="88" height="22" rx="4" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1.2"/>
        <text x="140" y="16" text-anchor="middle" font-size="9" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Goal / Task</text>
        <line x1="140" y1="26" x2="140" y2="38" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="140,41 136,35 144,35" fill="#aaa"/>
        <!-- Planner -->
        <rect x="80" y="41" width="120" height="30" rx="5" fill="var(--accent,#ff8c00)"/>
        <text x="140" y="53" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Planner LLM</text>
        <text x="140" y="64" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">decomposes into steps</text>
        <!-- 3 fan-out arrows -->
        <line x1="100" y1="71" x2="44" y2="90" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="41,93 40,85 48,88" fill="#aaa"/>
        <line x1="140" y1="71" x2="140" y2="90" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="140,93 136,87 144,87" fill="#aaa"/>
        <line x1="180" y1="71" x2="236" y2="90" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="239,93 232,88 240,85" fill="#aaa"/>
        <!-- 3 executor boxes -->
        <rect x="8" y="93" width="68" height="26" rx="4" fill="var(--accent,#ff8c00)" fill-opacity=".72"/>
        <text x="42" y="104" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Executor 1</text>
        <text x="42" y="113" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ tools</text>
        <rect x="106" y="93" width="68" height="26" rx="4" fill="var(--accent,#ff8c00)" fill-opacity=".72"/>
        <text x="140" y="104" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Executor 2</text>
        <text x="140" y="113" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ tools</text>
        <rect x="204" y="93" width="68" height="26" rx="4" fill="var(--accent,#ff8c00)" fill-opacity=".72"/>
        <text x="238" y="104" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Executor 3</text>
        <text x="238" y="113" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ tools</text>
        <!-- merge to result -->
        <line x1="42" y1="119" x2="140" y2="135" stroke="#aaa" stroke-width="1"/>
        <line x1="140" y1="119" x2="140" y2="135" stroke="#aaa" stroke-width="1"/>
        <line x1="238" y1="119" x2="140" y2="135" stroke="#aaa" stroke-width="1"/>
        <rect x="96" y="135" width="88" height="22" rx="4" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1.5"/>
        <text x="140" y="147" text-anchor="middle" font-size="9" fill="var(--accent,#ff8c00)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Result</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Planner LLM decomposes the goal into an explicit step list</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Steps run in parallel or sequence by specialized executors</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Separates strategic reasoning from execution — cleaner roles</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Plan can be inspected and edited before execution begins</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Research tasks, code projects, multi-step automation</span></div>
    </div>

    <div class="cat s-env">
      <h3>Tool Use (Function Calling)</h3>
      <svg class="archsvg" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
        <!-- User -->
        <rect x="4" y="66" width="48" height="26" rx="4" fill="#f0f4ff" stroke="var(--accent,#b91c1c)" stroke-width="1.2"/>
        <text x="28" y="80" text-anchor="middle" font-size="9" fill="var(--accent,#b91c1c)" font-family="sans-serif" dominant-baseline="middle">User</text>
        <line x1="52" y1="79" x2="66" y2="79" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="69,79 63,76 63,82" fill="#aaa"/>
        <!-- LLM central -->
        <rect x="69" y="52" width="80" height="54" rx="6" fill="var(--accent,#b91c1c)"/>
        <text x="109" y="70" text-anchor="middle" font-size="11" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
        <text x="109" y="83" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">reasoning</text>
        <text x="109" y="93" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ context</text>
        <!-- tool call arrow right -->
        <line x1="149" y1="73" x2="166" y2="60" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="168,57 160,60 165,66" fill="#aaa"/>
        <text x="170" y="52" text-anchor="middle" font-size="7.5" fill="#777" font-family="sans-serif">tool call</text>
        <!-- Tool boxes (3) -->
        <rect x="176" y="22" width="60" height="22" rx="3" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="206" y="34" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Web Search</text>
        <rect x="176" y="52" width="60" height="22" rx="3" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="206" y="64" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Code Exec</text>
        <rect x="176" y="82" width="60" height="22" rx="3" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="206" y="94" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Database</text>
        <!-- result arrows back to LLM -->
        <line x1="176" y1="33" x2="162" y2="68" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="176" y1="63" x2="162" y2="75" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="176" y1="93" x2="162" y2="84" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="3,2"/>
        <polygon points="162,68 156,65 160,72" fill="var(--accent,#b91c1c)"/>
        <polygon points="162,75 156,72 160,79" fill="var(--accent,#b91c1c)"/>
        <polygon points="162,84 156,81 160,88" fill="var(--accent,#b91c1c)"/>
        <!-- response back to user -->
        <line x1="69" y1="86" x2="52" y2="86" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4,2"/>
        <polygon points="49,86 56,83 56,89" fill="#aaa"/>
        <!-- labels -->
        <text x="28" y="56" text-anchor="middle" font-size="8" fill="#aaa" font-family="sans-serif">response</text>
        <text x="240" y="122" text-anchor="middle" font-size="7.5" fill="#aaa" font-family="sans-serif" font-style="italic">result injects into context</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">LLM decides when, which and how to call external tools</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Tool result is injected back as context for the next turn</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Tools: web search, code execution, DB queries, file ops, APIs</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Foundation of all agentic AI: Claude Code, Cursor, Copilot</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Any agentic task that needs real-world data or actions</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-mode" data-title="arch-plan-tool">
  <div class="kicker">Capítulo 3 · Arquitectura de IA</div>
  <h2>Dale al LLM un plan <span class="accent">y las herramientas para ejecutarlo</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-mode">
      <h3>Plan &amp; Execute</h3>
      <svg class="archsvg" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="96" y="4" width="88" height="22" rx="4" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1.2"/>
        <text x="140" y="16" text-anchor="middle" font-size="9" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Objetivo / Tarea</text>
        <line x1="140" y1="26" x2="140" y2="38" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="140,41 136,35 144,35" fill="#aaa"/>
        <rect x="80" y="41" width="120" height="30" rx="5" fill="var(--accent,#ff8c00)"/>
        <text x="140" y="53" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Planificador LLM</text>
        <text x="140" y="64" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">descompone en pasos</text>
        <line x1="100" y1="71" x2="44" y2="90" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="41,93 40,85 48,88" fill="#aaa"/>
        <line x1="140" y1="71" x2="140" y2="90" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="140,93 136,87 144,87" fill="#aaa"/>
        <line x1="180" y1="71" x2="236" y2="90" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="239,93 232,88 240,85" fill="#aaa"/>
        <rect x="8" y="93" width="68" height="26" rx="4" fill="var(--accent,#ff8c00)" fill-opacity=".72"/>
        <text x="42" y="104" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Ejecutor 1</text>
        <text x="42" y="113" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ tools</text>
        <rect x="106" y="93" width="68" height="26" rx="4" fill="var(--accent,#ff8c00)" fill-opacity=".72"/>
        <text x="140" y="104" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Ejecutor 2</text>
        <text x="140" y="113" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ tools</text>
        <rect x="204" y="93" width="68" height="26" rx="4" fill="var(--accent,#ff8c00)" fill-opacity=".72"/>
        <text x="238" y="104" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Ejecutor 3</text>
        <text x="238" y="113" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ tools</text>
        <line x1="42" y1="119" x2="140" y2="135" stroke="#aaa" stroke-width="1"/>
        <line x1="140" y1="119" x2="140" y2="135" stroke="#aaa" stroke-width="1"/>
        <line x1="238" y1="119" x2="140" y2="135" stroke="#aaa" stroke-width="1"/>
        <rect x="96" y="135" width="88" height="22" rx="4" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1.5"/>
        <text x="140" y="147" text-anchor="middle" font-size="9" fill="var(--accent,#ff8c00)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Resultado</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">LLM planificador descompone el objetivo en pasos explícitos</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Pasos se ejecutan en paralelo o secuencia por ejecutores</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Separa razonamiento estratégico de ejecución — roles claros</span></div>
      <div class="ln"><span class="k">·</span><span class="d">El plan puede revisarse antes de ejecutar</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Investigación, proyectos de código, automatización multi-paso</span></div>
    </div>

    <div class="cat s-env">
      <h3>Tool Use (Function Calling)</h3>
      <svg class="archsvg" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="66" width="48" height="26" rx="4" fill="#f0f4ff" stroke="var(--accent,#b91c1c)" stroke-width="1.2"/>
        <text x="28" y="80" text-anchor="middle" font-size="9" fill="var(--accent,#b91c1c)" font-family="sans-serif" dominant-baseline="middle">Usuario</text>
        <line x1="52" y1="79" x2="66" y2="79" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="69,79 63,76 63,82" fill="#aaa"/>
        <rect x="69" y="52" width="80" height="54" rx="6" fill="var(--accent,#b91c1c)"/>
        <text x="109" y="70" text-anchor="middle" font-size="11" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
        <text x="109" y="83" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">razonamiento</text>
        <text x="109" y="93" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ contexto</text>
        <line x1="149" y1="73" x2="166" y2="60" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="168,57 160,60 165,66" fill="#aaa"/>
        <text x="170" y="52" text-anchor="middle" font-size="7.5" fill="#777" font-family="sans-serif">llamada tool</text>
        <rect x="176" y="22" width="60" height="22" rx="3" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="206" y="34" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Búsqueda Web</text>
        <rect x="176" y="52" width="60" height="22" rx="3" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="206" y="64" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Ejecución Código</text>
        <rect x="176" y="82" width="60" height="22" rx="3" fill="#f5f5f5" stroke="#bbb" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="206" y="94" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Base de Datos</text>
        <line x1="176" y1="33" x2="162" y2="68" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="176" y1="63" x2="162" y2="75" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="176" y1="93" x2="162" y2="84" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="3,2"/>
        <polygon points="162,68 156,65 160,72" fill="var(--accent,#b91c1c)"/>
        <polygon points="162,75 156,72 160,79" fill="var(--accent,#b91c1c)"/>
        <polygon points="162,84 156,81 160,88" fill="var(--accent,#b91c1c)"/>
        <line x1="69" y1="86" x2="52" y2="86" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4,2"/>
        <polygon points="49,86 56,83 56,89" fill="#aaa"/>
        <text x="28" y="56" text-anchor="middle" font-size="8" fill="#aaa" font-family="sans-serif">respuesta</text>
        <text x="240" y="122" text-anchor="middle" font-size="7.5" fill="#aaa" font-family="sans-serif" font-style="italic">resultado → al contexto</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">El LLM decide cuándo, cuál y cómo llamar herramientas externas</span></div>
      <div class="ln"><span class="k">·</span><span class="d">El resultado de la tool se inyecta al contexto del siguiente turno</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Tools: búsqueda web, ejecución de código, DB, archivos, APIs</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Base de toda IA agéntica: Claude Code, Cursor, Copilot</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Cualquier tarea agéntica que necesite datos o acciones reales</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
