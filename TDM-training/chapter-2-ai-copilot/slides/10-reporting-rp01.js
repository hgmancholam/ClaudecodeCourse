(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-info" data-title="reporting-rp01">
  <div class="kicker">Chapter 2 · Reporting · RP-01</div>
  <h2>Executive <span class="accent">Status Report</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💡</span><span><b>Key tip:</b> lead with risk, not achievements. Sponsors don't read status reports to celebrate — they read them to decide. Structure: risk first, action second.</span></li>
      <li><span class="ico">⚠️</span><span><b>Common mistake:</b> "no technical jargon" is too vague. Be explicit: no story points, no velocity, no PRs, no CI/CD. Say "we shipped X to production."</span></li>
      <li><span class="ico">🔗</span><span><b>With ADO MCP:</b> Claude fetches completed and blocked items from the current iteration — replaces 20 min of manual data prep with an automatic query.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT RP-01</span>
      </div>
      <pre><span class="st">You are an executive communication consultant
specialized in technology delivery.</span>
<span class="cm">// ADO MCP: fetch completed + blocked items
// from current iteration</span>
<span class="kw">Project:</span> <span class="fn">[PROJECT]</span> <span class="kw">Team:</span> <span class="fn">[TEAM]</span>
<span class="kw">Need from sponsor:</span> <span class="fn">[decisions / unblocks needed]</span>
<span class="kw">Active risks:</span> <span class="fn">[list — be specific]</span>

Write this week's sponsor status (max 180 words).
<span class="kw">[OUTPUT]</span> Two Markdown sections:
  🔴 <span class="fn">Risks &amp; Decisions Needed</span> — lead here
  ✅ <span class="fn">Progress &amp; Next Steps</span>
<span class="kw">[CONSTRAINT]</span>
- No: "story points", "velocity", "PRs", "CI/CD"
- Yes: "we shipped X", "feature Y is live"
- Don't bury bad news in the middle
- <span class="fn">"Sponsor decision needed:"</span> must be explicit</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-info" data-title="reporting-rp01">
  <div class="kicker">Capítulo 2 · Reporting · RP-01</div>
  <h2>Status Report <span class="accent">Ejecutivo</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💡</span><span><b>Clave:</b> empieza por el riesgo, no por los logros. Los sponsors no leen status reports para celebrar — los leen para decidir. Estructura: riesgo primero, acción después.</span></li>
      <li><span class="ico">⚠️</span><span><b>Error común:</b> "sin jerga técnica" es muy vago. Sé explícito: sin story points, sin velocity, sin PRs, sin CI/CD. Di "desplegamos X a producción."</span></li>
      <li><span class="ico">🔗</span><span><b>Con ADO MCP:</b> Claude obtiene ítems completados y bloqueados de la iteración actual — reemplaza 20 min de preparación manual con una consulta automática.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT RP-01</span>
      </div>
      <pre><span class="st">Eres un consultor de comunicación ejecutiva
especializado en delivery de tecnología.</span>
<span class="cm">// ADO MCP: obtén ítems completados + bloqueados
// de la iteración actual</span>
<span class="kw">Proyecto:</span> <span class="fn">[PROYECTO]</span> <span class="kw">Equipo:</span> <span class="fn">[EQUIPO]</span>
<span class="kw">Necesito del sponsor:</span> <span class="fn">[decisiones / desbloqueos]</span>
<span class="kw">Riesgos activos:</span> <span class="fn">[lista — sé específico]</span>

Redacta el status semanal para el sponsor (máx 180 palabras).
<span class="kw">[OUTPUT]</span> Dos secciones Markdown:
  🔴 <span class="fn">Riesgos y Decisiones Necesarias</span> — empieza aquí
  ✅ <span class="fn">Avance y Próximos Pasos</span>
<span class="kw">[RESTRICCIÓN]</span>
- No: "story points", "velocity", "PRs", "CI/CD"
- Sí: "desplegamos X", "la función Y está en prod"
- No enterres las malas noticias en el medio
- <span class="fn">"Decisión del sponsor necesaria:"</span> debe ser explícita</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
