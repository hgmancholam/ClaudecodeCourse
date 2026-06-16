(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-proj" data-title="anatomia-prompt">
  <div class="kicker">Chapter 2 · Key Concept</div>
  <h2>Anatomy of a <span class="accent">Leader's Prompt</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1</span><span><b>Role</b> — specific expertise + mindset: "senior SM specialized in distributed teams"</span></li>
      <li><span class="ico">2</span><span><b>Context</b> — sprint #, team size, open P1s, last client contact</span></li>
      <li><span class="ico">3</span><span><b>Task</b> — one concrete deliverable, not a vague question</span></li>
      <li><span class="ico">4</span><span><b>Output Format</b> — Markdown table, Gherkin, bullet list, JSON. <em>Most-skipped component.</em></span></li>
      <li><span class="ico">5</span><span><b>Constraint</b> — what NOT to invent · tone · what to flag as unknown</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Template</span>
      </div>
      <pre><span class="kw">[ROLE]</span>    <span class="cm">→ Senior [X] specialized in [Y]</span>
<span class="kw">[CONTEXT]</span> <span class="cm">→ Sprint N · team · open issues · dates</span>
<span class="kw">[TASK]</span>    <span class="cm">→ One specific deliverable</span>
<span class="kw">[OUTPUT]</span>  <span class="cm">→ Format: table | Gherkin | bullets | JSON</span>
<span class="kw">[CONSTRAINT]</span> <span class="cm">→ Don't invent · flag unknowns · tone</span>

<span class="cm">// Bonus — ADO MCP connected:</span>
<span class="fn">[TOOLS]</span>  <span class="cm">→ Fetch from ADO: project [X] team [Y]</span>
<span class="cm">         No more copy-pasting sprint data.</span></pre>
    </div>
    <div class="callout" style="grid-column:1/-1;"><b>Output Format is the most-skipped component</b> — and the one most likely to turn a useful answer into an unreadable wall of text. Always specify: table, Gherkin, Markdown, or JSON.</div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-proj" data-title="anatomia-prompt">
  <div class="kicker">Capítulo 2 · Concepto Clave</div>
  <h2>Anatomía de un <span class="accent">Prompt para Líderes</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1</span><span><b>Rol</b> — experiencia específica + mentalidad: "SM senior especializado en equipos distribuidos"</span></li>
      <li><span class="ico">2</span><span><b>Contexto</b> — sprint #, tamaño del equipo, P1s abiertos, último contacto con cliente</span></li>
      <li><span class="ico">3</span><span><b>Tarea</b> — un entregable concreto, no una pregunta vaga</span></li>
      <li><span class="ico">4</span><span><b>Formato de Salida</b> — tabla Markdown, Gherkin, lista, JSON. <em>El componente más omitido.</em></span></li>
      <li><span class="ico">5</span><span><b>Restricción</b> — qué NO inventar · tono · qué marcar como desconocido</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Plantilla</span>
      </div>
      <pre><span class="kw">[ROL]</span>     <span class="cm">→ Senior [X] especializado en [Y]</span>
<span class="kw">[CONTEXTO]</span><span class="cm">→ Sprint N · equipo · P1s · fechas</span>
<span class="kw">[TAREA]</span>   <span class="cm">→ Un entregable específico</span>
<span class="kw">[OUTPUT]</span>  <span class="cm">→ Formato: tabla | Gherkin | lista | JSON</span>
<span class="kw">[RESTRICCIÓN]</span><span class="cm">→ No inventar · marcar desconocidos</span>

<span class="cm">// Bonus — ADO MCP conectado:</span>
<span class="fn">[TOOLS]</span>  <span class="cm">→ Obtén de ADO: proyecto [X] equipo [Y]</span>
<span class="cm">         Sin copiar y pegar datos del sprint.</span></pre>
    </div>
    <div class="callout" style="grid-column:1/-1;"><b>El Formato de Salida es el componente más omitido</b> — y el que con más frecuencia convierte una respuesta útil en un muro de texto ilegible. Siempre especifica: tabla, Gherkin, Markdown o JSON.</div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
