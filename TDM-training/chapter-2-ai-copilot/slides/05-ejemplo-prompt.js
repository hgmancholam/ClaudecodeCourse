(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-proj" data-title="ejemplo-prompt">
  <div class="kicker">Chapter 2 · Bad vs. Good</div>
  <h2>Same request — <span class="accent">completely different</span> result</h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.9cqmin;font-weight:800;color:#c0392b;margin-bottom:.8cqmin;letter-spacing:.05cqmin;">❌ Generic prompt</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">Prompt</span>
        </div>
        <pre>Summarize the project status.</pre>
      </div>
      <div style="font-size:2cqmin;color:var(--muted);margin-top:1cqmin;line-height:1.4;">No role · No data · No format<br>→ Output: generic paragraphs</div>
    </div>
    <div>
      <div style="font-size:1.9cqmin;font-weight:800;color:#1e8449;margin-bottom:.8cqmin;letter-spacing:.05cqmin;">✅ Effective prompt</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">Prompt</span>
        </div>
        <pre><span class="st">You are a senior delivery consultant
with experience in agile projects.</span>
<span class="cm">Team: 6 devs · sprint 4/8
3 critical bugs · client escalating.</span>
Write an executive summary (max 5 lines)
to send to the sponsor today.
<span class="kw">Tone:</span> direct, no alarmism, action-focused.</pre>
      </div>
      <div style="font-size:2cqmin;color:var(--muted);margin-top:1cqmin;line-height:1.4;">Role + Context + Task + Format + Constraint<br>→ Output: directly usable</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-proj" data-title="ejemplo-prompt">
  <div class="kicker">Capítulo 2 · Malo vs. Bueno</div>
  <h2>La misma solicitud — resultado <span class="accent">completamente diferente</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.9cqmin;font-weight:800;color:#c0392b;margin-bottom:.8cqmin;letter-spacing:.05cqmin;">❌ Prompt genérico</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">Prompt</span>
        </div>
        <pre>Resume el estado del proyecto.</pre>
      </div>
      <div style="font-size:2cqmin;color:var(--muted);margin-top:1cqmin;line-height:1.4;">Sin rol · Sin datos · Sin formato<br>→ Resultado: párrafos genéricos</div>
    </div>
    <div>
      <div style="font-size:1.9cqmin;font-weight:800;color:#1e8449;margin-bottom:.8cqmin;letter-spacing:.05cqmin;">✅ Prompt efectivo</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">Prompt</span>
        </div>
        <pre><span class="st">Eres un consultor senior de delivery
con experiencia en proyectos ágiles.</span>
<span class="cm">Equipo: 6 devs · sprint 4/8
3 bugs críticos · cliente escalando.</span>
Redacta un resumen ejecutivo (máx 5 líneas)
para enviar al sponsor hoy.
<span class="kw">Tono:</span> directo, sin alarmismo, orientado a acciones.</pre>
      </div>
      <div style="font-size:2cqmin;color:var(--muted);margin-top:1cqmin;line-height:1.4;">Rol + Contexto + Tarea + Formato + Restricción<br>→ Resultado: directamente usable</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
