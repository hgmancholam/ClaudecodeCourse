(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flag" data-title="riesgos-r01">
  <div class="kicker">Chapter 2 · Risks · R-01</div>
  <h2>Proactive Risk <span class="accent">Identification</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💡</span><span><b>Key tip:</b> "identify all risks" returns a generic list. Bound it: "top 5 risks for the next 2 weeks." Bounded scope = ranked, actionable output.</span></li>
      <li><span class="ico">⚠️</span><span><b>Common mistake:</b> omitting open bugs and recent incidents. AI can't infer your specific situation — every P1 open is risk context.</span></li>
      <li><span class="ico">🔗</span><span><b>With ADO MCP:</b> Claude queries open bugs (severity ≥ P2) and blocked work items from the current sprint automatically — no manual data gathering.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT R-01</span>
      </div>
      <pre><span class="st">You are a risk manager specialized
in agile technology delivery.</span>
<span class="cm">// ADO MCP: fetch open P1/P2 bugs +
// blocked stories from current sprint</span>
<span class="kw">Project:</span> <span class="fn">[ADO PROJECT]</span> <span class="kw">Team:</span> <span class="fn">[TEAM]</span>
<span class="kw">Committed delivery:</span> <span class="fn">[DATE]</span>
<span class="kw">Additional context:</span> <span class="fn">[recent incidents · client mood]</span>

Identify the <span class="kw">top 5 risks for next 2 weeks</span>.
Score each: <span class="kw">Probability × Impact</span> (H=3 M=2 L=1)

<span class="kw">[OUTPUT]</span> Sorted Markdown risk table (desc. score):
<span class="cm">| Risk | Probability | Impact | Score | Owner | Mitigation |</span>
Flag risks requiring <span class="fn">sponsor awareness</span>.
<span class="kw">[CONSTRAINT]</span> Don't repeat raw sprint data back.
Base mitigations on actual team capacity.</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-flag" data-title="riesgos-r01">
  <div class="kicker">Capítulo 2 · Riesgos · R-01</div>
  <h2>Identificación <span class="accent">Proactiva</span> de Riesgos</h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💡</span><span><b>Clave:</b> "identifica todos los riesgos" devuelve una lista genérica. Acótalo: "top 5 riesgos de las próximas 2 semanas." Alcance acotado = output rankeado y accionable.</span></li>
      <li><span class="ico">⚠️</span><span><b>Error común:</b> omitir bugs abiertos e incidentes recientes. La IA no infiere tu situación específica — cada P1 abierto es contexto de riesgo.</span></li>
      <li><span class="ico">🔗</span><span><b>Con ADO MCP:</b> Claude consulta bugs abiertos (severidad ≥ P2) y work items bloqueados del sprint actual automáticamente — sin recolección manual.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT R-01</span>
      </div>
      <pre><span class="st">Eres un risk manager especializado
en delivery ágil de tecnología.</span>
<span class="cm">// ADO MCP: obtén bugs P1/P2 abiertos +
// historias bloqueadas del sprint actual</span>
<span class="kw">Proyecto:</span> <span class="fn">[PROYECTO ADO]</span> <span class="kw">Equipo:</span> <span class="fn">[EQUIPO]</span>
<span class="kw">Entrega comprometida:</span> <span class="fn">[FECHA]</span>
<span class="kw">Contexto adicional:</span> <span class="fn">[incidentes · ánimo cliente]</span>

Identifica los <span class="kw">top 5 riesgos de las próximas 2 semanas</span>.
Puntúa cada uno: <span class="kw">Probabilidad × Impacto</span> (A=3 M=2 B=1)

<span class="kw">[OUTPUT]</span> Tabla de riesgos Markdown (orden desc.):
<span class="cm">| Riesgo | Prob | Impacto | Score | Dueño | Mitigación |</span>
Marca riesgos que requieran <span class="fn">atención del sponsor</span>.
<span class="kw">[RESTRICCIÓN]</span> No repitas los datos del sprint.
Basa mitigaciones en la capacidad real del equipo.</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
