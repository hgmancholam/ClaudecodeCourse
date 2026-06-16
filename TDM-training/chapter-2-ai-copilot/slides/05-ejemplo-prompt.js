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
      <div style="font-size:1.85cqmin;color:var(--muted);margin-top:.9cqmin;line-height:1.45;">
        ❌ No role · No context · No format<br>
        ❌ No constraint · No output spec<br>
        → Generic paragraphs. Directly useless.
      </div>
    </div>
    <div>
      <div style="font-size:1.9cqmin;font-weight:800;color:#1e8449;margin-bottom:.8cqmin;letter-spacing:.05cqmin;">✅ Expert prompt</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">Prompt</span>
        </div>
        <pre><span class="st">You are a senior delivery consultant
specialized in executive communication.</span>
<span class="cm">// ADO MCP:</span>
<span class="kw">Project:</span> <span class="fn">[ADO PROJECT]</span> <span class="kw">Team:</span> <span class="fn">[TEAM]</span>
<span class="cm">Sprint 4/8 · 3 P1 bugs · client escalated ×2</span>
Write today's weekly sponsor status.
<span class="kw">[OUTPUT]</span> Two labeled sections (max 150 words):
  🔴 <span class="nu">Risks &amp; Decisions Needed</span>
  ✅ <span class="nu">Progress &amp; Next Steps</span>
<span class="kw">[CONSTRAINT]</span> Lead with risk. No jargon (no SP,
no velocity). Flag: <span class="fn">"Sponsor decision needed on X."</span></pre>
      </div>
      <div style="font-size:1.85cqmin;color:var(--muted);margin-top:.9cqmin;line-height:1.45;">
        ✅ Role + Context + Task + Output + Constraint<br>
        ✅ ADO MCP fetches data automatically<br>
        → Structured, directly sendable draft.
      </div>
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
      <div style="font-size:1.85cqmin;color:var(--muted);margin-top:.9cqmin;line-height:1.45;">
        ❌ Sin rol · Sin contexto · Sin formato<br>
        ❌ Sin restricción · Sin spec de salida<br>
        → Párrafos genéricos. Directamente inútil.
      </div>
    </div>
    <div>
      <div style="font-size:1.9cqmin;font-weight:800;color:#1e8449;margin-bottom:.8cqmin;letter-spacing:.05cqmin;">✅ Prompt experto</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">Prompt</span>
        </div>
        <pre><span class="st">Eres un consultor senior de delivery
especializado en comunicación ejecutiva.</span>
<span class="cm">// ADO MCP:</span>
<span class="kw">Proyecto:</span> <span class="fn">[PROYECTO ADO]</span> <span class="kw">Equipo:</span> <span class="fn">[EQUIPO]</span>
<span class="cm">Sprint 4/8 · 3 bugs P1 · cliente escaló ×2</span>
Redacta el status semanal para el sponsor de hoy.
<span class="kw">[OUTPUT]</span> Dos secciones (máx 150 palabras):
  🔴 <span class="nu">Riesgos y Decisiones Necesarias</span>
  ✅ <span class="nu">Avance y Próximos Pasos</span>
<span class="kw">[RESTRICCIÓN]</span> Empieza por el riesgo. Sin jerga
(sin SP, sin velocity). Marca: <span class="fn">"Decisión sponsor: X."</span></pre>
      </div>
      <div style="font-size:1.85cqmin;color:var(--muted);margin-top:.9cqmin;line-height:1.45;">
        ✅ Rol + Contexto + Tarea + Output + Restricción<br>
        ✅ ADO MCP obtiene los datos automáticamente<br>
        → Borrador estructurado, listo para enviar.
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
