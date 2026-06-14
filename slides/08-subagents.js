(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="subagents">
  <div class="kicker">Parallelism</div>
  <h2>Sub<span class="accent">agents</span></h2>
  <div class="body grid2">

    <div class="sdk-left">
      <ul class="points">
        <li><span class="ico">1</span><span><b>Isolated workers.</b> Each subagent has its own context window — the main session stays focused and uncluttered.</span></li>
        <li><span class="ico">2</span><span><b>Run in parallel.</b> Spawn multiple agents for independent tasks; they work concurrently and report back when done.</span></li>
        <li><span class="ico">3</span><span><b>Built-in types:</b> General, Explore (code search), code-reviewer, Plan. Define custom agents in <code class="inline">CLAUDE.md</code>.</span></li>
        <li><span class="ico">4</span><span>Trigger via the <b>Agent tool</b> in chat, or programmatically with the <b>Claude Agent SDK</b> for automated pipelines.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Agent tool</span>
      </div>
      <pre><span class="cm"># Delegate parallel subtasks:</span>

<span class="st">"Use the Agent tool to run
 these independently:
  - Find auth vulnerabilities
  - Review API endpoints
  - Check test coverage"</span>

<span class="cm"># Each agent gets its own context.</span>
<span class="cm"># Main session synthesizes results.</span></pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="subagents">
  <div class="kicker">Paralelismo</div>
  <h2>Sub<span class="accent">agentes</span></h2>
  <div class="body grid2">

    <div class="sdk-left">
      <ul class="points">
        <li><span class="ico">1</span><span><b>Trabajadores aislados.</b> Cada subagente tiene su propia ventana de contexto — la sesión principal se mantiene enfocada.</span></li>
        <li><span class="ico">2</span><span><b>Ejecución paralela.</b> Lanza múltiples agentes para tareas independientes; trabajan de forma concurrente e informan al terminar.</span></li>
        <li><span class="ico">3</span><span><b>Tipos integrados:</b> General, Explore (búsqueda de código), code-reviewer, Plan. Define agentes personalizados en <code class="inline">CLAUDE.md</code>.</span></li>
        <li><span class="ico">4</span><span>Se activan con la <b>herramienta Agent</b> en el chat, o programáticamente con el <b>Claude Agent SDK</b> para pipelines automatizados.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Agent tool</span>
      </div>
      <pre><span class="cm"># Delegar subtareas en paralelo:</span>

<span class="st">"Usa la herramienta Agent para
 ejecutar esto de forma independiente:
  - Busca vulnerabilidades de auth
  - Revisa los endpoints API
  - Verifica cobertura de tests"</span>

<span class="cm"># Cada agente tiene su propio contexto.</span>
<span class="cm"># La sesión principal sintetiza resultados.</span></pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
