(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-integ" data-title="ado-mcp">
  <div class="kicker">Chapter 2 · Power Feature</div>
  <h2>Azure DevOps MCP — <span class="accent">No More Copy-Paste</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🔌</span><span><b>Connect once:</b> with the ADO MCP active, Claude reads your work items, sprint backlog, and team velocity live — no screenshots, no pasting.</span></li>
      <li><span class="ico">🆔</span><span><b>Reference by ID or name:</b> "Audit story #4521" → Claude fetches it, evaluates INVEST, and returns structured output.</span></li>
      <li><span class="ico">💡</span><span><b>Why it matters:</b> removes the 10–15 min of data prep before every prompt. You shift from data collector to decision-maker.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">ADO MCP — Example Prompt</span>
      </div>
      <pre><span class="st">You are a senior delivery manager.</span>

<span class="cm">// ADO MCP — Claude fetches live data:</span>
<span class="kw">Project:</span> <span class="fn">[YOUR ADO PROJECT]</span>
<span class="kw">Team:</span>    <span class="fn">[YOUR TEAM NAME]</span>

Fetch the current active sprint and tell me:
<span class="nu">1.</span> Stories with no acceptance criteria
<span class="nu">2.</span> Work items blocked &gt; 2 days
<span class="nu">3.</span> Velocity trend vs. last 3 sprints

<span class="kw">[OUTPUT]</span> Markdown table per finding:
<span class="cm">| ID | Title | Issue | Recommended Action |</span>

<span class="cm">// Instead of: "Here is my sprint data: [paste]"
// You say:    "Fetch sprint from ADO above."</span></pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-integ" data-title="ado-mcp">
  <div class="kicker">Capítulo 2 · Función Avanzada</div>
  <h2>ADO MCP — <span class="accent">Fin del Copiar y Pegar</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🔌</span><span><b>Conecta una vez:</b> con el MCP de ADO activo, Claude lee tus work items, backlog de sprint y velocidad del equipo en tiempo real — sin capturas, sin pegar datos.</span></li>
      <li><span class="ico">🆔</span><span><b>Referencia por ID o nombre:</b> "Audita la historia #4521" → Claude la obtiene, evalúa INVEST y devuelve output estructurado.</span></li>
      <li><span class="ico">💡</span><span><b>Por qué importa:</b> elimina los 10–15 min de preparación de datos antes de cada prompt. Pasas de recolector de datos a tomador de decisiones.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">ADO MCP — Prompt de Ejemplo</span>
      </div>
      <pre><span class="st">Eres un delivery manager senior.</span>

<span class="cm">// ADO MCP — Claude obtiene datos en vivo:</span>
<span class="kw">Proyecto:</span> <span class="fn">[TU PROYECTO ADO]</span>
<span class="kw">Equipo:</span>   <span class="fn">[NOMBRE DE TU EQUIPO]</span>

Obtén el sprint activo actual y dime:
<span class="nu">1.</span> Historias sin criterios de aceptación
<span class="nu">2.</span> Work items bloqueados &gt; 2 días
<span class="nu">3.</span> Tendencia de velocidad vs. últimos 3 sprints

<span class="kw">[OUTPUT]</span> Tabla Markdown por hallazgo:
<span class="cm">| ID | Título | Problema | Acción Recomendada |</span>

<span class="cm">// En vez de: "Aquí mis datos del sprint: [pegar]"
// Dices:     "Obtén el sprint de ADO arriba."</span></pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
