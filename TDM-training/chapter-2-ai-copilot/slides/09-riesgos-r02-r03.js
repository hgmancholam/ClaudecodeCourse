(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flag" data-title="riesgos-r02-r03">
  <div class="kicker">Chapter 2 · Risks · R-02 / R-03</div>
  <h2>Sprint Health &amp; <span class="accent">Escalation</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">R-02 · Sprint Health Stoplight</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT R-02</span>
        </div>
        <pre><span class="st">You are a Scrum Master and
delivery metrics specialist.</span>
<span class="cm">// ADO MCP: get_iteration_work_items</span>
<span class="kw">Project:</span> <span class="fn">[PROJECT]</span> <span class="kw">Sprint:</span> <span class="fn">[N/TOTAL]</span>
<span class="kw">Done SP:</span> <span class="fn">[N]</span> / <span class="kw">Committed:</span> <span class="fn">[N]</span>
<span class="kw">Open bugs:</span> <span class="fn">[N]</span> P1, <span class="fn">[N]</span> P2
<span class="kw">Blockers:</span> <span class="fn">[describe]</span> <span class="kw">Remaining days:</span> <span class="fn">[N]</span>

<span class="kw">[OUTPUT]</span> Stoplight table:
<span class="cm">| Dimension | 🔴/🟡/🟢 | Trend | Action | Owner |</span>
Dimensions: Velocity · Quality · Risk
  · Team Morale · Stakeholder Relationship
<span class="kw">[CONSTRAINT]</span> 🟢 only if velocity ≥ 70% of
commitment. Each 🔴/🟡 = specific action + owner.
Don't mark 🟢 to avoid difficult conversations.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">💡 The Trend column ("↑ ↓ →") is as important as the color — a 🟡 improving is different from a 🟡 worsening.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">R-03 · When &amp; How to Escalate</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT R-03</span>
        </div>
        <pre><span class="st">You are a senior delivery manager with
experience in difficult conversations.</span>
<span class="kw">Situation:</span>      <span class="fn">[specific — dates, facts, numbers]</span>
<span class="kw">Scope at risk:</span>  <span class="fn">[date · budget · feature affected]</span>
<span class="kw">Already tried:</span> <span class="fn">[actions + dates]</span>
<span class="kw">Sponsor expects:</span><span class="fn">[what they were last told]</span>

<span class="kw">[OUTPUT]</span> Three labeled sections:
<span class="nu">1.</span> <span class="fn">Escalate?</span> Yes/No + 2-line reasoning
<span class="nu">2.</span> <span class="fn">Message draft:</span> Subject + 3 paragraphs max
   <span class="cm">(situation · impact · ask — no history recap)</span>
<span class="nu">3.</span> <span class="fn">3 facts</span> to have ready before the call
<span class="kw">[CONSTRAINT]</span> Don't soften the recommendation.
Message tone: direct, not apologetic.
If scope/date is at risk, say it plainly.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">⚠️ Escalate too late = loss of credibility. Escalate with no draft message = wasted sponsor time.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-flag" data-title="riesgos-r02-r03">
  <div class="kicker">Capítulo 2 · Riesgos · R-02 / R-03</div>
  <h2>Salud del Sprint y <span class="accent">Escalación</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">R-02 · Semáforo de Salud del Sprint</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT R-02</span>
        </div>
        <pre><span class="st">Eres un Scrum Master y especialista
en métricas de delivery.</span>
<span class="cm">// ADO MCP: get_iteration_work_items</span>
<span class="kw">Proyecto:</span> <span class="fn">[PROYECTO]</span> <span class="kw">Sprint:</span> <span class="fn">[N/TOTAL]</span>
<span class="kw">SP hechos:</span> <span class="fn">[N]</span> / <span class="kw">Comprometidos:</span> <span class="fn">[N]</span>
<span class="kw">Bugs abiertos:</span> <span class="fn">[N]</span> P1, <span class="fn">[N]</span> P2
<span class="kw">Bloqueos:</span> <span class="fn">[describe]</span> <span class="kw">Días restantes:</span> <span class="fn">[N]</span>

<span class="kw">[OUTPUT]</span> Tabla semáforo:
<span class="cm">| Dimensión | 🔴/🟡/🟢 | Tendencia | Acción | Dueño |</span>
Dimensiones: Velocidad · Calidad · Riesgo
  · Moral del equipo · Relación stakeholders
<span class="kw">[RESTRICCIÓN]</span> 🟢 solo si velocidad ≥ 70% del
compromiso. Cada 🔴/🟡 = acción concreta + dueño.
No pongas 🟢 para evitar conversaciones difíciles.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">💡 La columna Tendencia ("↑ ↓ →") es tan importante como el color — un 🟡 mejorando es distinto a un 🟡 empeorando.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">R-03 · ¿Cuándo y Cómo Escalar?</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT R-03</span>
        </div>
        <pre><span class="st">Eres un delivery manager senior con
experiencia en conversaciones difíciles.</span>
<span class="kw">Situación:</span>      <span class="fn">[específica — fechas, hechos, números]</span>
<span class="kw">Alcance en riesgo:</span><span class="fn">[fecha · presupuesto · feature]</span>
<span class="kw">Lo que intenté:</span><span class="fn">[acciones + fechas]</span>
<span class="kw">Sponsor espera:</span> <span class="fn">[qué se le comunicó la última vez]</span>

<span class="kw">[OUTPUT]</span> Tres secciones etiquetadas:
<span class="nu">1.</span> <span class="fn">¿Escalar?</span> Sí/No + 2 líneas de razonamiento
<span class="nu">2.</span> <span class="fn">Borrador del mensaje:</span> Asunto + 3 párrafos máx
   <span class="cm">(situación · impacto · pedido — sin historial)</span>
<span class="nu">3.</span> <span class="fn">3 datos</span> que debo tener listos antes de la llamada
<span class="kw">[RESTRICCIÓN]</span> No suavices la recomendación.
Tono: directo, no apologético.
Si fecha/alcance está en riesgo, dilo claramente.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">⚠️ Escalar tarde = pérdida de credibilidad. Escalar sin borrador = desperdiciar el tiempo del sponsor.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
