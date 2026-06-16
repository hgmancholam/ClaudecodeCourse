(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-info" data-title="reporting-rp02-rp03">
  <div class="kicker">Chapter 2 · Reporting · RP-02 / RP-03</div>
  <h2>Retrospective &amp; <span class="accent">Business Metrics</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">RP-02 · Retro Narrative</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT RP-02</span>
        </div>
        <pre><span class="st">You are an Agile Coach specialized in
psychologically safe retrospectives.</span>
<span class="kw">What went well:</span>     <span class="fn">[LIST — be specific]</span>
<span class="kw">What went wrong:</span>    <span class="fn">[LIST — facts, not blame]</span>
<span class="kw">Broken commitments:</span> <span class="fn">[LIST + root cause if known]</span>
<span class="kw">Team tensions:</span>      <span class="fn">[describe honestly]</span>

<span class="kw">[OUTPUT]</span> Three labeled Markdown sections:
<span class="nu">1.</span> <span class="fn">Opening</span> (2 sentences, non-blaming framing)
<span class="nu">2.</span> <span class="fn">3 facilitation questions</span>
   <span class="cm">(one per tension — invite reflection, not defense)</span>
<span class="nu">3.</span> <span class="fn">Agreement template</span> per improvement:
   <span class="cm">What · Who · By when (SMART)</span>
<span class="kw">[CONSTRAINT]</span> Don't minimize tensions — name them.
Agreements must be specific and time-bound.
No open-ended "we'll try to improve X."</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">💡 The night before the retro, not the morning of. Give the AI enough time to generate questions you can actually rehearse.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">RP-03 · Metrics → Business Language</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT RP-03</span>
        </div>
        <pre><span class="st">You are a delivery manager who
speaks fluent C-Level.</span>
<span class="cm">// ADO MCP: fetch last 4 sprint metrics
// for project [PROJECT] team [TEAM]</span>
<span class="kw">Velocity trend:</span>      <span class="fn">[N] SP avg (prev: [N])</span>
<span class="kw">Lead time:</span>           <span class="fn">[N] days avg</span>
<span class="kw">Bug escape rate:</span>     <span class="fn">[N]% (target: [N]%)</span>
<span class="kw">Deploy frequency:</span>    <span class="fn">[N]/week</span>
<span class="kw">Business context:</span>   <span class="fn">[product + who uses it + Q goal]</span>

<span class="kw">[OUTPUT]</span> Three sections:
<span class="nu">1.</span> One business sentence per metric
   <span class="cm">(no units — "SP" → "features", "deploys" → "improvements shipped")</span>
<span class="nu">2.</span> 3-line steering committee opening
<span class="nu">3.</span> One risk in business terms to flag
<span class="kw">[CONSTRAINT]</span> No technical units in final output.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">⚠️ Include velocity trend (not just current) — a 🟢 number going down is a hidden risk worth surfacing.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-info" data-title="reporting-rp02-rp03">
  <div class="kicker">Capítulo 2 · Reporting · RP-02 / RP-03</div>
  <h2>Retrospectiva y <span class="accent">Métricas de Negocio</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">RP-02 · Narrativa de Retro</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT RP-02</span>
        </div>
        <pre><span class="st">Eres un Agile Coach especializado en
retrospectivas psicológicamente seguras.</span>
<span class="kw">Qué salió bien:</span>      <span class="fn">[LISTA — sé específico]</span>
<span class="kw">Qué salió mal:</span>       <span class="fn">[LISTA — hechos, no culpas]</span>
<span class="kw">Compromisos rotos:</span>   <span class="fn">[LISTA + causa raíz si conocida]</span>
<span class="kw">Tensiones del equipo:</span><span class="fn">[describe con honestidad]</span>

<span class="kw">[OUTPUT]</span> Tres secciones Markdown:
<span class="nu">1.</span> <span class="fn">Apertura</span> (2 frases, sin asignar culpa)
<span class="nu">2.</span> <span class="fn">3 preguntas de facilitación</span>
   <span class="cm">(una por tensión — invita reflexión, no defensa)</span>
<span class="nu">3.</span> <span class="fn">Plantilla de acuerdos</span> por mejora:
   <span class="cm">Qué · Quién · Para cuándo (SMART)</span>
<span class="kw">[RESTRICCIÓN]</span> No minimices tensiones — nómbralas.
Acuerdos deben ser específicos y con fecha límite.
Nada de "intentaremos mejorar X."</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">💡 La noche anterior a la retro, no la mañana del día. Dale tiempo a la IA para generar preguntas que puedas ensayar.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">RP-03 · Métricas → Lenguaje de Negocio</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT RP-03</span>
        </div>
        <pre><span class="st">Eres un delivery manager que
habla con fluidez C-Level.</span>
<span class="cm">// ADO MCP: obtén métricas de los últimos
// 4 sprints para proyecto [X] equipo [Y]</span>
<span class="kw">Velocidad (tendencia):</span> <span class="fn">[N] SP prom (ant: [N])</span>
<span class="kw">Lead time:</span>            <span class="fn">[N] días promedio</span>
<span class="kw">Bug escape rate:</span>      <span class="fn">[N]% (objetivo: [N]%)</span>
<span class="kw">Frecuencia de deploy:</span> <span class="fn">[N]/semana</span>
<span class="kw">Contexto negocio:</span>    <span class="fn">[producto + usuarios + meta Q]</span>

<span class="kw">[OUTPUT]</span> Tres secciones:
<span class="nu">1.</span> Una frase de negocio por métrica
   <span class="cm">(sin unidades — "SP" → "funcionalidades", "deploys" → "mejoras enviadas")</span>
<span class="nu">2.</span> Párrafo de apertura para steering committee (3 líneas)
<span class="nu">3.</span> Un riesgo en términos de negocio para señalar
<span class="kw">[RESTRICCIÓN]</span> Sin unidades técnicas en el output final.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">⚠️ Incluye la tendencia de velocidad (no solo el valor actual) — un número 🟢 que baja es un riesgo oculto que vale la pena mostrar.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
