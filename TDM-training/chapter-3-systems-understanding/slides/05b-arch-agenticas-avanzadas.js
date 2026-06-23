(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flow" data-title="arch-pipeline-reflection">
  <div class="kicker">Chapter 3 · AI Architecture</div>
  <h2>Pipeline &amp; <span class="accent">Reflection</span> patterns</h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-flow">
      <h3>Pipeline</h3>
      <svg class="archsvg" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Input -->
        <rect x="4" y="50" width="40" height="24" rx="4" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1.2"/>
        <text x="24" y="63" text-anchor="middle" font-size="9" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Input</text>
        <line x1="44" y1="62" x2="58" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="61,62 55,59 55,65" fill="#aaa"/>
        <!-- LLM 1 -->
        <rect x="61" y="42" width="60" height="40" rx="5" fill="var(--accent,#7c3aed)"/>
        <text x="91" y="58" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM 1</text>
        <text x="91" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">extract</text>
        <line x1="121" y1="62" x2="138" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="141,62 135,59 135,65" fill="#aaa"/>
        <!-- LLM 2 -->
        <rect x="141" y="42" width="60" height="40" rx="5" fill="var(--accent,#7c3aed)" fill-opacity=".8"/>
        <text x="171" y="58" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM 2</text>
        <text x="171" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">analyze</text>
        <line x1="201" y1="62" x2="218" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="221,62 215,59 215,65" fill="#aaa"/>
        <!-- LLM 3 -->
        <rect x="221" y="42" width="60" height="40" rx="5" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
        <text x="251" y="58" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM 3</text>
        <text x="251" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">format</text>
        <line x1="281" y1="62" x2="295" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="298,62 292,59 292,65" fill="#aaa"/>
        <!-- Output -->
        <rect x="298" y="50" width="18" height="24" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1.2"/>
        <text x="307" y="63" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Out</text>
        <!-- annotation -->
        <text x="160" y="100" text-anchor="middle" font-size="8" fill="#aaa" font-family="sans-serif" font-style="italic">output of step N becomes context for step N+1</text>
        <!-- step labels -->
        <text x="91" y="108" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif">Step 1</text>
        <text x="171" y="108" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif">Step 2</text>
        <text x="251" y="108" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif">Step 3</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Fixed sequence of focused LLM calls — each refines the output</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Each step can use a different model, prompt or tool set</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Deterministic and easy to monitor — no looping, no branches</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Failures are local: re-run from the broken step only</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Document processing, multi-step generation, LLM-powered ETL</span></div>
    </div>

    <div class="cat s-info">
      <h3>Reflection (Self-Critique)</h3>
      <svg class="archsvg" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Input -->
        <rect x="4" y="50" width="40" height="24" rx="4" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="24" y="63" text-anchor="middle" font-size="9" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Task</text>
        <line x1="44" y1="62" x2="58" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="61,62 55,59 55,65" fill="#aaa"/>
        <!-- Generator LLM -->
        <rect x="61" y="38" width="74" height="48" rx="5" fill="var(--accent,#1d4ed8)"/>
        <text x="98" y="56" text-anchor="middle" font-size="9.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Generator</text>
        <text x="98" y="68" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM</text>
        <line x1="135" y1="62" x2="152" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="155,62 149,59 149,65" fill="#aaa"/>
        <!-- Draft box -->
        <rect x="155" y="50" width="48" height="24" rx="4" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="179" y="63" text-anchor="middle" font-size="9" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Draft</text>
        <line x1="203" y1="62" x2="216" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="219,62 213,59 213,65" fill="#aaa"/>
        <!-- Critic LLM -->
        <rect x="219" y="38" width="74" height="48" rx="5" fill="var(--accent,#1d4ed8)" fill-opacity=".75"/>
        <text x="256" y="56" text-anchor="middle" font-size="9.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Critic</text>
        <text x="256" y="68" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM</text>
        <!-- Revision loop back -->
        <path d="M256,86 L256,112 L98,112 L98,86" fill="none" stroke="var(--accent,#1d4ed8)" stroke-width="1.5" stroke-dasharray="5,3"/>
        <polygon points="98,86 94,93 102,93" fill="var(--accent,#1d4ed8)"/>
        <text x="177" y="124" text-anchor="middle" font-size="8" fill="#aaa" font-family="sans-serif">revise if quality bar not met</text>
        <!-- OK output up-right -->
        <line x1="293" y1="55" x2="308" y2="42" stroke="#aaa" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="297" y="26" width="22" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="308" y="35" text-anchor="middle" font-size="7.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">✓ ok</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Generator produces draft; Critic evaluates against a quality bar</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Critic can use a stronger model or explicit scoring rubric</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Loops until criteria met or max iterations reached</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Generator and Critic can be the same model with different prompts</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Code generation, essays, structured reports, test-case QA</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-flow" data-title="arch-pipeline-reflection">
  <div class="kicker">Capítulo 3 · Arquitectura de IA</div>
  <h2>Patrones <span class="accent">Pipeline</span> y Reflection</h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-flow">
      <h3>Pipeline</h3>
      <svg class="archsvg" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="50" width="40" height="24" rx="4" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1.2"/>
        <text x="24" y="63" text-anchor="middle" font-size="9" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Input</text>
        <line x1="44" y1="62" x2="58" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="61,62 55,59 55,65" fill="#aaa"/>
        <rect x="61" y="42" width="60" height="40" rx="5" fill="var(--accent,#7c3aed)"/>
        <text x="91" y="58" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM 1</text>
        <text x="91" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">extraer</text>
        <line x1="121" y1="62" x2="138" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="141,62 135,59 135,65" fill="#aaa"/>
        <rect x="141" y="42" width="60" height="40" rx="5" fill="var(--accent,#7c3aed)" fill-opacity=".8"/>
        <text x="171" y="58" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM 2</text>
        <text x="171" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">analizar</text>
        <line x1="201" y1="62" x2="218" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="221,62 215,59 215,65" fill="#aaa"/>
        <rect x="221" y="42" width="60" height="40" rx="5" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
        <text x="251" y="58" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM 3</text>
        <text x="251" y="71" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">formatear</text>
        <line x1="281" y1="62" x2="295" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="298,62 292,59 292,65" fill="#aaa"/>
        <rect x="298" y="50" width="18" height="24" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1.2"/>
        <text x="307" y="63" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Out</text>
        <text x="160" y="100" text-anchor="middle" font-size="8" fill="#aaa" font-family="sans-serif" font-style="italic">la salida del paso N es el contexto del paso N+1</text>
        <text x="91" y="108" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif">Paso 1</text>
        <text x="171" y="108" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif">Paso 2</text>
        <text x="251" y="108" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif">Paso 3</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Secuencia fija de llamadas LLM enfocadas — cada una refina la salida</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Cada paso puede usar un modelo, prompt o set de tools diferente</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Determinista y fácil de monitorear — sin loops ni ramificaciones</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Fallos son locales: solo re-ejecutas el paso que falló</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Procesamiento de documentos, generación multi-paso, ETL con LLMs</span></div>
    </div>

    <div class="cat s-info">
      <h3>Reflection (Auto-crítica)</h3>
      <svg class="archsvg" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="50" width="40" height="24" rx="4" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="24" y="63" text-anchor="middle" font-size="9" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Tarea</text>
        <line x1="44" y1="62" x2="58" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="61,62 55,59 55,65" fill="#aaa"/>
        <rect x="61" y="38" width="74" height="48" rx="5" fill="var(--accent,#1d4ed8)"/>
        <text x="98" y="56" text-anchor="middle" font-size="9.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Generador</text>
        <text x="98" y="68" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM</text>
        <line x1="135" y1="62" x2="152" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="155,62 149,59 149,65" fill="#aaa"/>
        <rect x="155" y="50" width="48" height="24" rx="4" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="179" y="63" text-anchor="middle" font-size="9" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Borrador</text>
        <line x1="203" y1="62" x2="216" y2="62" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="219,62 213,59 213,65" fill="#aaa"/>
        <rect x="219" y="38" width="74" height="48" rx="5" fill="var(--accent,#1d4ed8)" fill-opacity=".75"/>
        <text x="256" y="56" text-anchor="middle" font-size="9.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Crítico</text>
        <text x="256" y="68" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM</text>
        <path d="M256,86 L256,112 L98,112 L98,86" fill="none" stroke="var(--accent,#1d4ed8)" stroke-width="1.5" stroke-dasharray="5,3"/>
        <polygon points="98,86 94,93 102,93" fill="var(--accent,#1d4ed8)"/>
        <text x="177" y="124" text-anchor="middle" font-size="8" fill="#aaa" font-family="sans-serif">revisar si no cumple el estándar de calidad</text>
        <line x1="293" y1="55" x2="308" y2="42" stroke="#aaa" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="297" y="26" width="22" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="308" y="35" text-anchor="middle" font-size="7.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">✓ ok</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Generador produce un borrador; Crítico evalúa contra un estándar</span></div>
      <div class="ln"><span class="k">·</span><span class="d">El crítico puede usar un modelo más potente o rúbrica explícita</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Itera hasta cumplir criterios o llegar al máximo de iteraciones</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Generador y Crítico pueden ser el mismo modelo con prompts distintos</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Generación de código, ensayos, reportes estructurados, QA</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
