(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-proj" data-title="arch-comparacion">
  <div class="kicker">Chapter 3 · Basic Architecture</div>
  <h2>12 patterns — one <span class="accent">decision table</span></h2>
  <div class="body top">
    <table class="ctable">
      <thead>
        <tr>
          <th>Architecture</th>
          <th>Setup</th>
          <th>Scaling</th>
          <th>Team fit</th>
          <th>Best for</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="grp"><td colspan="6">Traditional Software</td></tr>
        <tr><td class="feat">Monolith</td><td>Low</td><td>Vertical</td><td>&lt; 10 devs</td><td>MVP &amp; prototypes</td><td>Amazon (1995)</td></tr>
        <tr><td class="feat">Microservices</td><td>High</td><td>Horizontal per svc</td><td>10+ devs</td><td>Enterprise &amp; cloud-native</td><td>Netflix</td></tr>
        <tr><td class="feat">Event-Driven</td><td>Medium</td><td>Async fan-out</td><td>Any</td><td>Real-time pipelines</td><td>Uber</td></tr>
        <tr><td class="feat">Hexagonal</td><td>Medium</td><td>Any</td><td>Any</td><td>Complex domain, high testability</td><td>Stripe</td></tr>
        <tr><td class="feat">N-Layer</td><td>Low</td><td>Vertical</td><td>Any</td><td>Enterprise CRUD, ERP</td><td>SAP ERP</td></tr>
        <tr class="grp"><td colspan="6">Agentic AI</td></tr>
        <tr><td class="feat">Single Agent (ReAct)</td><td>Low</td><td>Single process</td><td>Any</td><td>Scoped AI tasks</td><td>Claude Code</td></tr>
        <tr><td class="feat">Multi-Agent</td><td>High</td><td>Parallel agents</td><td>Any</td><td>Complex AI workflows</td><td>Copilot M365</td></tr>
        <tr><td class="feat">RAG</td><td>Medium</td><td>Knowledge-based</td><td>Any</td><td>Domain Q&amp;A, grounded answers</td><td>Perplexity</td></tr>
        <tr><td class="feat">Pipeline</td><td>Low</td><td>Sequential</td><td>Any</td><td>Multi-step document processing</td><td>AWS Textract</td></tr>
        <tr><td class="feat">Reflection</td><td>Low</td><td>Iterative</td><td>Any</td><td>Quality-sensitive generation</td><td>OpenAI o1</td></tr>
        <tr><td class="feat">Plan &amp; Execute</td><td>Medium</td><td>Parallel steps</td><td>Any</td><td>Research &amp; complex automation</td><td>Devin</td></tr>
        <tr><td class="feat">Tool Use</td><td>Low</td><td>On-demand</td><td>Any</td><td>Any task needing real-world data</td><td>ChatGPT</td></tr>
      </tbody>
    </table>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-proj" data-title="arch-comparacion">
  <div class="kicker">Capítulo 3 · Arquitectura Básica</div>
  <h2>Comparación de <span class="accent">arquitecturas</span></h2>
  <div class="body top">
    <table class="ctable">
      <thead>
        <tr>
          <th>Arquitectura</th>
          <th>Setup</th>
          <th>Escalado</th>
          <th>Equipo ideal</th>
          <th>Ideal para</th>
          <th>Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr class="grp"><td colspan="6">Software Tradicional</td></tr>
        <tr><td class="feat">Monolito</td><td>Bajo</td><td>Vertical</td><td>&lt; 10 devs</td><td>MVP y prototipos</td><td>Amazon (1995)</td></tr>
        <tr><td class="feat">Microservicios</td><td>Alto</td><td>Horizontal por svc</td><td>10+ devs</td><td>Enterprise y cloud-native</td><td>Netflix</td></tr>
        <tr><td class="feat">Orientado a Eventos</td><td>Medio</td><td>Async fan-out</td><td>Cualquiera</td><td>Pipelines en tiempo real</td><td>Uber</td></tr>
        <tr><td class="feat">Hexagonal</td><td>Medio</td><td>Cualquiera</td><td>Cualquiera</td><td>Dominio complejo, alta testabilidad</td><td>Stripe</td></tr>
        <tr><td class="feat">N-Capas</td><td>Bajo</td><td>Vertical</td><td>Cualquiera</td><td>CRUD Enterprise, ERP</td><td>SAP ERP</td></tr>
        <tr class="grp"><td colspan="6">IA Agéntica</td></tr>
        <tr><td class="feat">Agente Único (ReAct)</td><td>Bajo</td><td>Proceso único</td><td>Cualquiera</td><td>Tareas IA acotadas</td><td>Claude Code</td></tr>
        <tr><td class="feat">Multi-Agente</td><td>Alto</td><td>Agentes paralelos</td><td>Cualquiera</td><td>Flujos IA complejos</td><td>Copilot M365</td></tr>
        <tr><td class="feat">RAG</td><td>Medio</td><td>Por conocimiento</td><td>Cualquiera</td><td>Q&amp;A de dominio, respuestas fundamentadas</td><td>Perplexity</td></tr>
        <tr><td class="feat">Pipeline</td><td>Bajo</td><td>Secuencial</td><td>Cualquiera</td><td>Procesamiento multi-paso de documentos</td><td>AWS Textract</td></tr>
        <tr><td class="feat">Reflection</td><td>Bajo</td><td>Iterativo</td><td>Cualquiera</td><td>Generación sensible a calidad</td><td>OpenAI o1</td></tr>
        <tr><td class="feat">Plan &amp; Execute</td><td>Medio</td><td>Pasos paralelos</td><td>Cualquiera</td><td>Investigación y automatización compleja</td><td>Devin</td></tr>
        <tr><td class="feat">Tool Use</td><td>Bajo</td><td>Bajo demanda</td><td>Cualquiera</td><td>Cualquier tarea con datos del mundo real</td><td>ChatGPT</td></tr>
      </tbody>
    </table>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
