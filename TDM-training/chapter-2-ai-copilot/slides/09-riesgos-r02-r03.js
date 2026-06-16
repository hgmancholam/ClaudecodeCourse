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
        <pre><span class="st">You are an experienced Scrum Master.</span>
Generate a stoplight report (🔴🟡🟢)
for: Velocity · Quality · Risks ·
Team morale · Stakeholders.

<span class="kw">Sprint:</span>       <span class="fn">[N]</span> of <span class="fn">[TOTAL]</span>
<span class="kw">Committed SP:</span> <span class="fn">[N]</span> · <span class="kw">Done:</span> <span class="fn">[N]</span>
<span class="kw">Open bugs:</span>    <span class="fn">[N]</span> critical, <span class="fn">[N]</span> minor
<span class="kw">Blockers:</span>     <span class="fn">[DESCRIBE]</span>
<span class="kw">Client feedback:</span> <span class="fn">[DESCRIBE]</span>

For each 🔴/🟡: one immediate action.</pre>
      </div>
      <div style="font-size:1.7cqmin;color:var(--muted);margin-top:.7cqmin;">Use in: mid-sprint check-in, stakeholder updates.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">R-03 · When &amp; How to Escalate</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT R-03</span>
        </div>
        <pre><span class="st">You are a senior delivery manager.</span>
I have this risk and need to decide
if I escalate to the sponsor today.

<span class="kw">Situation:</span>        <span class="fn">[DESCRIBE]</span>
<span class="kw">Potential impact:</span> <span class="fn">[DESCRIBE]</span>
<span class="kw">Already tried:</span>    <span class="fn">[DESCRIBE]</span>

Tell me:
<span class="nu">1.</span> Should I escalate? Why?
<span class="nu">2.</span> If yes, draft the exact message
<span class="nu">3.</span> What info do I need ready?</pre>
      </div>
      <div style="font-size:1.7cqmin;color:var(--muted);margin-top:.7cqmin;">Use in: any risk that may affect scope, date or budget.</div>
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
        <pre><span class="st">Eres un Scrum Master experimentado.</span>
Genera un reporte de salud (🔴🟡🟢)
para: Velocidad · Calidad · Riesgos ·
Moral del equipo · Stakeholders.

<span class="kw">Sprint:</span>      <span class="fn">[N]</span> de <span class="fn">[TOTAL]</span>
<span class="kw">SP comprometidos:</span> <span class="fn">[N]</span> · <span class="kw">Completados:</span> <span class="fn">[N]</span>
<span class="kw">Bugs abiertos:</span> <span class="fn">[N]</span> críticos, <span class="fn">[N]</span> menores
<span class="kw">Bloqueos:</span>    <span class="fn">[DESCRIBE]</span>
<span class="kw">Feedback cliente:</span> <span class="fn">[DESCRIBE]</span>

Por cada 🔴/🟡: una acción inmediata.</pre>
      </div>
      <div style="font-size:1.7cqmin;color:var(--muted);margin-top:.7cqmin;">Usar en: revisión mid-sprint, actualizaciones a stakeholders.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">R-03 · ¿Cuándo y Cómo Escalar?</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT R-03</span>
        </div>
        <pre><span class="st">Eres un delivery manager senior.</span>
Tengo esta situación de riesgo y
necesito decidir si escalo al
sponsor hoy.

<span class="kw">Situación:</span>       <span class="fn">[DESCRIBE]</span>
<span class="kw">Impacto potencial:</span> <span class="fn">[DESCRIBE]</span>
<span class="kw">Lo que intenté:</span>  <span class="fn">[DESCRIBE]</span>

Dime:
<span class="nu">1.</span> ¿Debo escalar? ¿Por qué?
<span class="nu">2.</span> Si escalo, redacta el mensaje exacto
<span class="nu">3.</span> ¿Qué información debo tener lista?</pre>
      </div>
      <div style="font-size:1.7cqmin;color:var(--muted);margin-top:.7cqmin;">Usar en: cualquier riesgo que pueda afectar alcance, fecha o presupuesto.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
