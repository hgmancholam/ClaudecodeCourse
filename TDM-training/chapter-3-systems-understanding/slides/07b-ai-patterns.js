(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-mode" data-title="ai-patterns">
  <div class="kicker">Chapter 3 · AI Architecture</div>
  <h2>Patterns that make AI <span class="accent">reliable in production</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info cat-split">
      <h3>Prompt Chaining</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="32" width="30" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1"/>
          <text x="19" y="41" text-anchor="middle" font-size="7" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Input</text>
          <line x1="34" y1="40" x2="42" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="45,40 39,37 39,43" fill="#aaa"/>
          <rect x="45" y="28" width="34" height="24" rx="3" fill="var(--accent,#1d4ed8)"/>
          <text x="62" y="38" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <text x="62" y="48" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Step 1</text>
          <line x1="79" y1="40" x2="87" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="90,40 84,37 84,43" fill="#aaa"/>
          <rect x="90" y="28" width="34" height="24" rx="3" fill="var(--accent,#1d4ed8)" fill-opacity=".8"/>
          <text x="107" y="38" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <text x="107" y="48" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Step 2</text>
          <line x1="124" y1="40" x2="132" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="135,40 129,37 129,43" fill="#aaa"/>
          <rect x="135" y="28" width="34" height="24" rx="3" fill="var(--accent,#1d4ed8)" fill-opacity=".6"/>
          <text x="152" y="38" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <text x="152" y="48" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Step 3</text>
          <line x1="169" y1="40" x2="177" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="180,40 174,37 174,43" fill="#aaa"/>
          <rect x="180" y="32" width="16" height="16" rx="2" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1"/>
          <text x="188" y="41" text-anchor="middle" font-size="6" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Out</text>
          <text x="100" y="70" text-anchor="middle" font-size="6.5" fill="#aaa" font-family="sans-serif" font-style="italic">output of N-1 = context for N</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Break complex task into sequential, focused LLM calls</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Each step specializes: extract → analyze → format</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Easier to test, fix and improve each step independently</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Data extraction, report generation, content transformation</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-flow cat-split">
      <h3>Self-Consistency</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="42" width="36" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
          <text x="22" y="51" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Prompt</text>
          <line x1="40" y1="45" x2="55" y2="28" stroke="#aaa" stroke-width="1"/>
          <line x1="40" y1="50" x2="55" y2="50" stroke="#aaa" stroke-width="1"/>
          <line x1="40" y1="55" x2="55" y2="72" stroke="#aaa" stroke-width="1"/>
          <rect x="55" y="20" width="48" height="16" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
          <text x="79" y="29" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM → ans 1</text>
          <rect x="55" y="42" width="48" height="16" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
          <text x="79" y="51" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM → ans 2</text>
          <rect x="55" y="64" width="48" height="16" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
          <text x="79" y="73" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM → ans 3</text>
          <line x1="103" y1="28" x2="116" y2="46" stroke="#aaa" stroke-width="1"/>
          <line x1="103" y1="50" x2="116" y2="50" stroke="#aaa" stroke-width="1"/>
          <line x1="103" y1="72" x2="116" y2="54" stroke="#aaa" stroke-width="1"/>
          <rect x="116" y="38" width="42" height="24" rx="3" fill="var(--accent,#7c3aed)"/>
          <text x="137" y="47" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Majority</text>
          <text x="137" y="57" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Vote</text>
          <line x1="158" y1="50" x2="168" y2="50" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="171,50 165,47 165,53" fill="#aaa"/>
          <rect x="171" y="42" width="26" height="16" rx="2" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
          <text x="184" y="51" text-anchor="middle" font-size="6.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Final</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Same prompt runs N times independently; answers voted</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Reduces single-sample variance and hallucinations</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Majority vote or LLM judge picks the winner</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Reasoning tasks, math, classification, high-stakes decisions</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-proj cat-split">
      <h3>ReAct Loop</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="42" width="30" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#0f766e)" stroke-width="1"/>
          <text x="19" y="51" text-anchor="middle" font-size="7" fill="var(--accent,#0f766e)" font-family="sans-serif" dominant-baseline="middle">Task</text>
          <line x1="34" y1="50" x2="44" y2="50" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="47,50 41,47 41,53" fill="#aaa"/>
          <rect x="47" y="32" width="36" height="16" rx="3" fill="var(--accent,#0f766e)" fill-opacity=".7"/>
          <text x="65" y="41" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Thought</text>
          <line x1="83" y1="40" x2="93" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="96,40 90,37 90,43" fill="#aaa"/>
          <rect x="96" y="32" width="36" height="16" rx="3" fill="var(--accent,#0f766e)"/>
          <text x="114" y="41" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Action</text>
          <line x1="132" y1="40" x2="142" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="145,40 139,37 139,43" fill="#aaa"/>
          <rect x="145" y="32" width="46" height="16" rx="3" fill="var(--accent,#0f766e)" fill-opacity=".5"/>
          <text x="168" y="41" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Observation</text>
          <path d="M168,48 L168,70 L65,70 L65,48" fill="none" stroke="var(--accent,#0f766e)" stroke-width="1" stroke-dasharray="3,2"/>
          <polygon points="65,48 62,55 68,55" fill="var(--accent,#0f766e)"/>
          <text x="116" y="80" text-anchor="middle" font-size="6.5" fill="#999" font-family="sans-serif">loop until done</text>
          <line x1="114" y1="32" x2="114" y2="18" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
          <polygon points="114,15 110,22 118,22" fill="#aaa"/>
          <text x="114" y="10" text-anchor="middle" font-size="6.5" fill="var(--accent,#0f766e)" font-family="sans-serif">done → Answer</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Thought → Action → Observation cycle per step</span></div>
          <div class="ln"><span class="k">·</span><span class="d">LLM reasons about what tool to call and why</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Foundation of Claude Code, Cursor, GitHub Copilot agents</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Any agentic task: coding, research, data analysis</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-env cat-split">
      <h3>Guardrails</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="34" width="30" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#b91c1c)" stroke-width="1"/>
          <text x="19" y="43" text-anchor="middle" font-size="7" fill="var(--accent,#b91c1c)" font-family="sans-serif" dominant-baseline="middle">Input</text>
          <line x1="34" y1="42" x2="44" y2="42" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="47,42 41,39 41,45" fill="#aaa"/>
          <rect x="47" y="32" width="38" height="20" rx="3" fill="var(--accent,#b91c1c)" fill-opacity=".7"/>
          <text x="66" y="40" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Input</text>
          <text x="66" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">Filter</text>
          <line x1="66" y1="52" x2="66" y2="64" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="66" y="74" text-anchor="middle" font-size="6.5" fill="var(--accent,#b91c1c)" font-family="sans-serif">✗ block</text>
          <line x1="85" y1="42" x2="95" y2="42" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="98,42 92,39 92,45" fill="#aaa"/>
          <rect x="98" y="32" width="36" height="20" rx="3" fill="var(--accent,#b91c1c)"/>
          <text x="116" y="43" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <line x1="134" y1="42" x2="144" y2="42" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="147,42 141,39 141,45" fill="#aaa"/>
          <rect x="147" y="32" width="38" height="20" rx="3" fill="var(--accent,#b91c1c)" fill-opacity=".7"/>
          <text x="166" y="40" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Output</text>
          <text x="166" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">Filter</text>
          <line x1="166" y1="52" x2="166" y2="64" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="166" y="74" text-anchor="middle" font-size="6.5" fill="var(--accent,#b91c1c)" font-family="sans-serif">✗ rewrite</text>
          <line x1="185" y1="42" x2="196" y2="42" stroke="#aaa" stroke-width="1"/>
          <text x="194" y="35" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">✓ ok</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Validation layer before and after the LLM call</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Blocks harmful inputs; rewrites or rejects unsafe outputs</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Can use a separate classifier model or rule engine</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Any production AI system — non-negotiable for regulated domains</span></div>
        </div>
      </div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-mode" data-title="ai-patterns">
  <div class="kicker">Capítulo 3 · Arquitectura de IA</div>
  <h2>Patrones que hacen la IA <span class="accent">confiable en producción</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info cat-split">
      <h3>Prompt Chaining</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="32" width="30" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1"/>
          <text x="19" y="41" text-anchor="middle" font-size="7" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Input</text>
          <line x1="34" y1="40" x2="42" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="45,40 39,37 39,43" fill="#aaa"/>
          <rect x="45" y="28" width="34" height="24" rx="3" fill="var(--accent,#1d4ed8)"/>
          <text x="62" y="38" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <text x="62" y="48" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Paso 1</text>
          <line x1="79" y1="40" x2="87" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="90,40 84,37 84,43" fill="#aaa"/>
          <rect x="90" y="28" width="34" height="24" rx="3" fill="var(--accent,#1d4ed8)" fill-opacity=".8"/>
          <text x="107" y="38" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <text x="107" y="48" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Paso 2</text>
          <line x1="124" y1="40" x2="132" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="135,40 129,37 129,43" fill="#aaa"/>
          <rect x="135" y="28" width="34" height="24" rx="3" fill="var(--accent,#1d4ed8)" fill-opacity=".6"/>
          <text x="152" y="38" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <text x="152" y="48" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Paso 3</text>
          <line x1="169" y1="40" x2="177" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="180,40 174,37 174,43" fill="#aaa"/>
          <rect x="180" y="32" width="16" height="16" rx="2" fill="#f0f4ff" stroke="var(--accent,#1d4ed8)" stroke-width="1"/>
          <text x="188" y="41" text-anchor="middle" font-size="6" fill="var(--accent,#1d4ed8)" font-family="sans-serif" dominant-baseline="middle">Out</text>
          <text x="100" y="70" text-anchor="middle" font-size="6.5" fill="#aaa" font-family="sans-serif" font-style="italic">salida de N-1 = contexto de N</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Divide una tarea compleja en llamadas LLM secuenciales y enfocadas</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Cada paso se especializa: extraer → analizar → formatear</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Fácil de testear, corregir y mejorar cada paso por separado</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Extracción de datos, generación de reportes, transformación de contenido</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-flow cat-split">
      <h3>Self-Consistency</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="42" width="36" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
          <text x="22" y="51" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Prompt</text>
          <line x1="40" y1="45" x2="55" y2="28" stroke="#aaa" stroke-width="1"/>
          <line x1="40" y1="50" x2="55" y2="50" stroke="#aaa" stroke-width="1"/>
          <line x1="40" y1="55" x2="55" y2="72" stroke="#aaa" stroke-width="1"/>
          <rect x="55" y="20" width="48" height="16" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
          <text x="79" y="29" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM → resp 1</text>
          <rect x="55" y="42" width="48" height="16" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
          <text x="79" y="51" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM → resp 2</text>
          <rect x="55" y="64" width="48" height="16" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
          <text x="79" y="73" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">LLM → resp 3</text>
          <line x1="103" y1="28" x2="116" y2="46" stroke="#aaa" stroke-width="1"/>
          <line x1="103" y1="50" x2="116" y2="50" stroke="#aaa" stroke-width="1"/>
          <line x1="103" y1="72" x2="116" y2="54" stroke="#aaa" stroke-width="1"/>
          <rect x="116" y="38" width="42" height="24" rx="3" fill="var(--accent,#7c3aed)"/>
          <text x="137" y="47" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Votación</text>
          <text x="137" y="57" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Mayoría</text>
          <line x1="158" y1="50" x2="168" y2="50" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="171,50 165,47 165,53" fill="#aaa"/>
          <rect x="171" y="42" width="26" height="16" rx="2" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
          <text x="184" y="51" text-anchor="middle" font-size="6.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Final</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">El mismo prompt corre N veces en paralelo; las respuestas se votan</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Reduce la varianza y las alucinaciones de una sola muestra</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Mayoría de votos o un LLM juez elige la mejor respuesta</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Razonamiento, matemáticas, clasificación, decisiones de alto riesgo</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-proj cat-split">
      <h3>ReAct Loop</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="42" width="30" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#0f766e)" stroke-width="1"/>
          <text x="19" y="51" text-anchor="middle" font-size="7" fill="var(--accent,#0f766e)" font-family="sans-serif" dominant-baseline="middle">Tarea</text>
          <line x1="34" y1="50" x2="44" y2="50" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="47,50 41,47 41,53" fill="#aaa"/>
          <rect x="47" y="32" width="36" height="16" rx="3" fill="var(--accent,#0f766e)" fill-opacity=".7"/>
          <text x="65" y="41" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Thought</text>
          <line x1="83" y1="40" x2="93" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="96,40 90,37 90,43" fill="#aaa"/>
          <rect x="96" y="32" width="36" height="16" rx="3" fill="var(--accent,#0f766e)"/>
          <text x="114" y="41" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Action</text>
          <line x1="132" y1="40" x2="142" y2="40" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="145,40 139,37 139,43" fill="#aaa"/>
          <rect x="145" y="32" width="46" height="16" rx="3" fill="var(--accent,#0f766e)" fill-opacity=".5"/>
          <text x="168" y="41" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Observation</text>
          <path d="M168,48 L168,70 L65,70 L65,48" fill="none" stroke="var(--accent,#0f766e)" stroke-width="1" stroke-dasharray="3,2"/>
          <polygon points="65,48 62,55 68,55" fill="var(--accent,#0f766e)"/>
          <text x="116" y="80" text-anchor="middle" font-size="6.5" fill="#999" font-family="sans-serif">loop hasta completar</text>
          <line x1="114" y1="32" x2="114" y2="18" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
          <polygon points="114,15 110,22 118,22" fill="#aaa"/>
          <text x="114" y="10" text-anchor="middle" font-size="6.5" fill="var(--accent,#0f766e)" font-family="sans-serif">listo → Respuesta</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Ciclo Thought → Action → Observation por cada paso</span></div>
          <div class="ln"><span class="k">·</span><span class="d">El LLM razona qué herramienta usar y por qué</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Base de Claude Code, Cursor y GitHub Copilot agents</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Cualquier tarea agéntica: código, investigación, análisis</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-env cat-split">
      <h3>Guardrails</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="34" width="30" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#b91c1c)" stroke-width="1"/>
          <text x="19" y="43" text-anchor="middle" font-size="7" fill="var(--accent,#b91c1c)" font-family="sans-serif" dominant-baseline="middle">Input</text>
          <line x1="34" y1="42" x2="44" y2="42" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="47,42 41,39 41,45" fill="#aaa"/>
          <rect x="47" y="32" width="38" height="20" rx="3" fill="var(--accent,#b91c1c)" fill-opacity=".7"/>
          <text x="66" y="40" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Filtro</text>
          <text x="66" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">Entrada</text>
          <line x1="66" y1="52" x2="66" y2="64" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="66" y="74" text-anchor="middle" font-size="6.5" fill="var(--accent,#b91c1c)" font-family="sans-serif">✗ bloquear</text>
          <line x1="85" y1="42" x2="95" y2="42" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="98,42 92,39 92,45" fill="#aaa"/>
          <rect x="98" y="32" width="36" height="20" rx="3" fill="var(--accent,#b91c1c)"/>
          <text x="116" y="43" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">LLM</text>
          <line x1="134" y1="42" x2="144" y2="42" stroke="#aaa" stroke-width="1.2"/>
          <polygon points="147,42 141,39 141,45" fill="#aaa"/>
          <rect x="147" y="32" width="38" height="20" rx="3" fill="var(--accent,#b91c1c)" fill-opacity=".7"/>
          <text x="166" y="40" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Filtro</text>
          <text x="166" y="48" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" dominant-baseline="middle">Salida</text>
          <line x1="166" y1="52" x2="166" y2="64" stroke="var(--accent,#b91c1c)" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="166" y="74" text-anchor="middle" font-size="6.5" fill="var(--accent,#b91c1c)" font-family="sans-serif">✗ reescribir</text>
          <line x1="185" y1="42" x2="196" y2="42" stroke="#aaa" stroke-width="1"/>
          <text x="194" y="35" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">✓ ok</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Capa de validación antes y después de la llamada al LLM</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Bloquea entradas dañinas; reescribe o rechaza salidas inseguras</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Puede usar un modelo clasificador separado o reglas explícitas</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Todo sistema IA en producción — obligatorio en dominios regulados</span></div>
        </div>
      </div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
