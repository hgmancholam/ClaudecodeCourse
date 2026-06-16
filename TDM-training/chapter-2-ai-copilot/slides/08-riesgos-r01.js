(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flag" data-title="riesgos-r01">
  <div class="kicker">Chapter 2 · Risks · R-01</div>
  <h2>Proactive Risk <span class="accent">Identification</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🎯</span><span><b>Use case:</b> identify the 5 most probable risks before a sprint or milestone — before they surprise you.</span></li>
      <li><span class="ico">⏱</span><span><b>When:</b> start of every sprint planning. Structured risk list in under 3 minutes.</span></li>
      <li><span class="ico">📤</span><span><b>Output:</b> probability + impact + one concrete mitigation per risk.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT R-01</span>
      </div>
      <pre><span class="st">You are a risk manager specialized
in technology projects.</span>
Identify the 5 most likely risks
in the next 2 weeks.

<span class="kw">Industry:</span>      <span class="fn">[INDUSTRY]</span>
<span class="kw">Team size:</span>     <span class="fn">[N]</span> people
<span class="kw">Stack:</span>         <span class="fn">[TECHNOLOGY]</span>
<span class="kw">Situation:</span>     <span class="fn">[3 LINES MAX]</span>
<span class="kw">Delivery date:</span> <span class="fn">[DATE]</span>

Per risk: probability (H/M/L),
impact (H/M/L), mitigation action.</pre>
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
      <li><span class="ico">🎯</span><span><b>Cuándo usar:</b> identifica los 5 riesgos más probables antes de un sprint o milestone — antes de que te sorprendan.</span></li>
      <li><span class="ico">⏱</span><span><b>Tiempo:</b> inicio de cada sprint planning. Lista estructurada en menos de 3 minutos.</span></li>
      <li><span class="ico">📤</span><span><b>Resultado:</b> probabilidad + impacto + una acción de mitigación concreta por riesgo.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT R-01</span>
      </div>
      <pre><span class="st">Eres un risk manager especializado
en proyectos de tecnología.</span>
Identifica los 5 riesgos más probables
para las próximas 2 semanas.

<span class="kw">Industria:</span>    <span class="fn">[INDUSTRIA]</span>
<span class="kw">Equipo:</span>       <span class="fn">[N]</span> personas
<span class="kw">Stack:</span>        <span class="fn">[TECNOLOGÍA]</span>
<span class="kw">Situación:</span>    <span class="fn">[MÁX 3 LÍNEAS]</span>
<span class="kw">Fecha entrega:</span> <span class="fn">[FECHA]</span>

Por riesgo: probabilidad (A/M/B),
impacto (A/M/B), acción de mitigación.</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
