(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-mode" data-title="arch-agenticas">
  <div class="kicker">Chapter 3 · AI Architecture</div>
  <h2>Agentic <span class="accent">architectures</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-mode">
      <h3>Single Agent (ReAct)</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Input -->
        <rect x="4" y="56" width="32" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="20" y="66" text-anchor="middle" font-size="8" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Input</text>
        <line x1="36" y1="65" x2="46" y2="65" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="49,65 43,62 43,68" fill="#aaa"/>
        <!-- LLM central box -->
        <rect x="49" y="44" width="60" height="42" rx="5" fill="var(--accent,#ff8c00)"/>
        <text x="79" y="58" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
        <text x="79" y="70" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">Thought</text>
        <text x="79" y="79" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">→ Action</text>
        <!-- Tool -->
        <line x1="109" y1="65" x2="122" y2="65" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="125,65 119,62 119,68" fill="#aaa"/>
        <rect x="125" y="52" width="44" height="26" rx="3" fill="#f5f5f5" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="147" y="62" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Tool</text>
        <text x="147" y="72" text-anchor="middle" font-size="6.5" fill="#777" font-family="sans-serif" dominant-baseline="middle">result</text>
        <!-- Observation loop back -->
        <path d="M147,78 L147,105 L79,105 L79,86" fill="none" stroke="var(--accent,#ff8c00)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="79,86 75,93 83,93" fill="var(--accent,#ff8c00)"/>
        <text x="113" y="117" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif">Observation → loop</text>
        <!-- Output when done -->
        <line x1="79" y1="44" x2="79" y2="28" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <rect x="55" y="12" width="48" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1.5"/>
        <text x="79" y="21" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Answer ✓</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Reason → Act → Observe loop until task is done</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Single LLM + tool set, predictable flow</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Low operational complexity, easy to debug</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Well-scoped tasks, clear tool set, single domain</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Multi-domain tasks, deep specialization needed</span></div>
    </div>

    <div class="cat s-feat">
      <h3>Multi-Agent</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Orchestrator -->
        <rect x="52" y="6" width="96" height="28" rx="5" fill="var(--accent,#16a34a)"/>
        <text x="100" y="18" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Orchestrator</text>
        <text x="100" y="28" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM — delegates tasks</text>
        <!-- 3 fan-out lines -->
        <line x1="72" y1="34" x2="30" y2="56" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="27,59 28,51 35,55" fill="#aaa"/>
        <line x1="100" y1="34" x2="100" y2="56" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="100,59 96,53 104,53" fill="#aaa"/>
        <line x1="128" y1="34" x2="170" y2="56" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="173,59 165,55 172,51" fill="#aaa"/>
        <!-- 3 agent boxes -->
        <rect x="4" y="59" width="52" height="28" rx="3" fill="var(--accent,#16a34a)" fill-opacity=".75"/>
        <text x="30" y="70" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Agent A</text>
        <text x="30" y="80" text-anchor="middle" font-size="6.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ Tools</text>
        <rect x="74" y="59" width="52" height="28" rx="3" fill="var(--accent,#16a34a)" fill-opacity=".75"/>
        <text x="100" y="70" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Agent B</text>
        <text x="100" y="80" text-anchor="middle" font-size="6.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ Tools</text>
        <rect x="144" y="59" width="52" height="28" rx="3" fill="var(--accent,#16a34a)" fill-opacity=".75"/>
        <text x="170" y="70" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Agent C</text>
        <text x="170" y="80" text-anchor="middle" font-size="6.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ Tools</text>
        <!-- results dashed up -->
        <line x1="30" y1="87" x2="30" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="100" y1="87" x2="100" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="170" y1="87" x2="170" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="100" y="112" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif">results merge back to orchestrator</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Orchestrator LLM delegates to specialized sub-agents</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Parallel execution, fault isolation per agent</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Each agent has focused context &amp; tools</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Complex workflows, expert decomposition, parallelism</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Simple tasks (overhead), shared mutable state</span></div>
    </div>

    <div class="cat s-info">
      <h3>RAG</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <!-- Query -->
        <rect x="68" y="4" width="64" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="100" y="14" text-anchor="middle" font-size="8.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Query</text>
        <!-- split lines -->
        <line x1="82" y1="22" x2="42" y2="38" stroke="#aaa" stroke-width="1.2"/>
        <line x1="118" y1="22" x2="158" y2="38" stroke="#aaa" stroke-width="1.2"/>
        <!-- Retriever (left) -->
        <rect x="8" y="38" width="68" height="20" rx="3" fill="var(--accent,#1d4ed8)"/>
        <text x="42" y="49" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Retriever</text>
        <line x1="42" y1="58" x2="42" y2="70" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="42,73 38,67 46,67" fill="#aaa"/>
        <!-- Vector DB -->
        <rect x="8" y="73" width="68" height="20" rx="3" fill="var(--accent,#1d4ed8)" fill-opacity=".65"/>
        <text x="42" y="84" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Vector DB</text>
        <!-- context arrow to LLM -->
        <line x1="76" y1="83" x2="112" y2="60" stroke="var(--accent,#1d4ed8)" stroke-width="1.5" stroke-dasharray="4,2"/>
        <polygon points="114,58 106,60 111,66" fill="var(--accent,#1d4ed8)"/>
        <text x="94" y="72" text-anchor="middle" font-size="6.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-style="italic">context</text>
        <!-- LLM (right) -->
        <rect x="124" y="38" width="68" height="28" rx="3" fill="var(--accent,#1d4ed8)"/>
        <text x="158" y="50" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
        <text x="158" y="60" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ context</text>
        <!-- LLM to answer -->
        <line x1="158" y1="66" x2="158" y2="82" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="158,85 154,79 162,79" fill="#aaa"/>
        <rect x="124" y="85" width="68" height="20" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.5"/>
        <text x="158" y="96" text-anchor="middle" font-size="7.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Grounded Answer</text>
        <!-- label -->
        <text x="42" y="107" text-anchor="middle" font-size="6.5" fill="#aaa" font-family="sans-serif" font-style="italic">retrieved chunks</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Retrieves relevant chunks before generating</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Reduces hallucination with grounded context</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Knowledge base stays independent of the model</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Domain Q&amp;A, large knowledge base, real-time updates</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">General tasks, when context fits in a single prompt</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-mode" data-title="arch-agenticas">
  <div class="kicker">Capítulo 3 · Arquitectura de IA</div>
  <h2>Arquitecturas <span class="accent">agénticas</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-mode">
      <h3>Agente Único (ReAct)</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="56" width="32" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1"/>
        <text x="20" y="66" text-anchor="middle" font-size="8" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Input</text>
        <line x1="36" y1="65" x2="46" y2="65" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="49,65 43,62 43,68" fill="#aaa"/>
        <rect x="49" y="44" width="60" height="42" rx="5" fill="var(--accent,#ff8c00)"/>
        <text x="79" y="58" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
        <text x="79" y="70" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">Razonar</text>
        <text x="79" y="79" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">→ Actuar</text>
        <line x1="109" y1="65" x2="122" y2="65" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="125,65 119,62 119,68" fill="#aaa"/>
        <rect x="125" y="52" width="44" height="26" rx="3" fill="#f5f5f5" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="147" y="62" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif" dominant-baseline="middle">Tool</text>
        <text x="147" y="72" text-anchor="middle" font-size="6.5" fill="#777" font-family="sans-serif" dominant-baseline="middle">resultado</text>
        <path d="M147,78 L147,105 L79,105 L79,86" fill="none" stroke="var(--accent,#ff8c00)" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polygon points="79,86 75,93 83,93" fill="var(--accent,#ff8c00)"/>
        <text x="113" y="117" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif">Observación → loop</text>
        <line x1="79" y1="44" x2="79" y2="28" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <rect x="55" y="12" width="48" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#ff8c00)" stroke-width="1.5"/>
        <text x="79" y="21" text-anchor="middle" font-size="7.5" fill="var(--accent,#ff8c00)" font-family="sans-serif" dominant-baseline="middle">Respuesta ✓</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Loop Razonar → Actuar → Observar hasta completar</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Un solo LLM + set de herramientas, flujo predecible</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Baja complejidad operativa, fácil de debuggear</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Tareas acotadas, herramientas claras, dominio único</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Tareas multi-dominio, especialización profunda necesaria</span></div>
    </div>

    <div class="cat s-feat">
      <h3>Multi-Agente</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="52" y="6" width="96" height="28" rx="5" fill="var(--accent,#16a34a)"/>
        <text x="100" y="18" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Orquestador</text>
        <text x="100" y="28" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM — delega tareas</text>
        <line x1="72" y1="34" x2="30" y2="56" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="27,59 28,51 35,55" fill="#aaa"/>
        <line x1="100" y1="34" x2="100" y2="56" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="100,59 96,53 104,53" fill="#aaa"/>
        <line x1="128" y1="34" x2="170" y2="56" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="173,59 165,55 172,51" fill="#aaa"/>
        <rect x="4" y="59" width="52" height="28" rx="3" fill="var(--accent,#16a34a)" fill-opacity=".75"/>
        <text x="30" y="70" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Agente A</text>
        <text x="30" y="80" text-anchor="middle" font-size="6.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ Tools</text>
        <rect x="74" y="59" width="52" height="28" rx="3" fill="var(--accent,#16a34a)" fill-opacity=".75"/>
        <text x="100" y="70" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Agente B</text>
        <text x="100" y="80" text-anchor="middle" font-size="6.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ Tools</text>
        <rect x="144" y="59" width="52" height="28" rx="3" fill="var(--accent,#16a34a)" fill-opacity=".75"/>
        <text x="170" y="70" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Agente C</text>
        <text x="170" y="80" text-anchor="middle" font-size="6.5" fill="white" font-family="sans-serif" dominant-baseline="middle">+ Tools</text>
        <line x1="30" y1="87" x2="30" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="100" y1="87" x2="100" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="170" y1="87" x2="170" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="100" y="112" text-anchor="middle" font-size="7" fill="#aaa" font-family="sans-serif">resultados vuelven al orquestador</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">LLM orquestador delega a sub-agentes especializados</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Ejecución paralela, aislamiento de fallos por agente</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Cada agente tiene contexto y herramientas enfocados</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Flujos complejos, descomposición por expertise, paralelismo</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Tareas simples (overhead), estado compartido mutable</span></div>
    </div>

    <div class="cat s-info">
      <h3>RAG</h3>
      <svg class="archsvg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="68" y="4" width="64" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.2"/>
        <text x="100" y="14" text-anchor="middle" font-size="8.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Query</text>
        <line x1="82" y1="22" x2="42" y2="38" stroke="#aaa" stroke-width="1.2"/>
        <line x1="118" y1="22" x2="158" y2="38" stroke="#aaa" stroke-width="1.2"/>
        <rect x="8" y="38" width="68" height="20" rx="3" fill="var(--accent,#1d4ed8)"/>
        <text x="42" y="49" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Retriever</text>
        <line x1="42" y1="58" x2="42" y2="70" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="42,73 38,67 46,67" fill="#aaa"/>
        <rect x="8" y="73" width="68" height="20" rx="3" fill="var(--accent,#1d4ed8)" fill-opacity=".65"/>
        <text x="42" y="84" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Vector DB</text>
        <line x1="76" y1="83" x2="112" y2="60" stroke="var(--accent,#1d4ed8)" stroke-width="1.5" stroke-dasharray="4,2"/>
        <polygon points="114,58 106,60 111,66" fill="var(--accent,#1d4ed8)"/>
        <text x="94" y="72" text-anchor="middle" font-size="6.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-style="italic">contexto</text>
        <rect x="124" y="38" width="68" height="28" rx="3" fill="var(--accent,#1d4ed8)"/>
        <text x="158" y="50" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
        <text x="158" y="60" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">+ contexto</text>
        <line x1="158" y1="66" x2="158" y2="82" stroke="#aaa" stroke-width="1.2"/>
        <polygon points="158,85 154,79 162,79" fill="#aaa"/>
        <rect x="124" y="85" width="68" height="20" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1.5"/>
        <text x="158" y="96" text-anchor="middle" font-size="7.5" fill="var(--accent,#1d4ed8)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Respuesta Fundamentada</text>
        <text x="42" y="107" text-anchor="middle" font-size="6.5" fill="#aaa" font-family="sans-serif" font-style="italic">chunks recuperados</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Recupera chunks relevantes antes de generar</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Reduce alucinaciones con contexto fundamentado</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Base de conocimiento independiente del modelo</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Q&amp;A de dominio, KB grande, conocimiento actualizado</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Tareas generales, cuando el contexto cabe en el prompt</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
