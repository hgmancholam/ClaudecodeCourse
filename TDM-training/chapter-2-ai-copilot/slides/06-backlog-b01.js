(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-feat" data-title="backlog-b01">
  <div class="kicker">Chapter 2 · Backlog · B-01</div>
  <h2>User Story <span class="accent">Audit</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🎯</span><span><b>Use case:</b> refinement preparation — know if a story is ready to estimate before the meeting starts.</span></li>
      <li><span class="ico">⏱</span><span><b>When:</b> before every refinement session. 2 minutes, clear verdict.</span></li>
      <li><span class="ico">📤</span><span><b>Output:</b> INVEST evaluation + missing acceptance criteria + rewritten story.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT B-01</span>
      </div>
      <pre><span class="st">You are a senior Scrum Master
with technical judgment.</span>
Review this user story and tell me:
<span class="nu">1.</span> Does it meet <span class="kw">INVEST</span> criteria?
   <span class="cm">(Independent, Negotiable, Valuable,
   Estimable, Small, Testable)</span>
<span class="nu">2.</span> What's missing for clear
   acceptance criteria?
<span class="nu">3.</span> How would you rewrite it?

<span class="kw">Story:</span> <span class="fn">[PASTE STORY HERE]</span></pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-feat" data-title="backlog-b01">
  <div class="kicker">Capítulo 2 · Backlog · B-01</div>
  <h2>Auditoría de <span class="accent">Historia de Usuario</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🎯</span><span><b>Cuándo usar:</b> antes del refinamiento — saber si una historia está lista para estimarse antes de que empiece la sesión.</span></li>
      <li><span class="ico">⏱</span><span><b>Tiempo:</b> 2 minutos, veredicto claro.</span></li>
      <li><span class="ico">📤</span><span><b>Resultado:</b> evaluación INVEST + criterios de aceptación faltantes + historia reescrita.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT B-01</span>
      </div>
      <pre><span class="st">Eres un Scrum Master senior
con criterio técnico.</span>
Revisa esta historia de usuario y dime:
<span class="nu">1.</span> ¿Cumple el criterio <span class="kw">INVEST</span>?
   <span class="cm">(Independent, Negotiable, Valuable,
   Estimable, Small, Testable)</span>
<span class="nu">2.</span> ¿Qué le falta para tener criterios
   de aceptación claros?
<span class="nu">3.</span> ¿Cómo la reescribirías?

<span class="kw">Historia:</span> <span class="fn">[PEGA AQUÍ LA HISTORIA]</span></pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
