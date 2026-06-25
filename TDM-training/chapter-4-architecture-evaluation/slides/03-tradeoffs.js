(window._deck = window._deck || []).push({
en: `
<section class="slide s-flow" data-title="tradeoffs">
  <div class="kicker">Chapter 4 · Trade-offs</div>
  <h2>Every Decision Has a <span class="accent">Price</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">⚖️</span><span><b>No free lunch.</b> No trade-off-free choices exist — only undiscovered ones. <em>(Richards &amp; Ford, 2020)</em></span></li>
      <li><span class="ico">🔍</span><span><b>Transparency is not optional.</b> ADRs, RFCs, and decision logs surface trade-offs in meetings — not in incidents. <em>(CMU SEI)</em></span></li>
      <li><span class="ico">⚡</span><span><b>Failing fast is cheaper.</b> Each change after a defect makes it harder to fix; broken software forces the whole team to work around it. <em>(Google SRE)</em></span></li>
      <li><span class="ico">💸</span><span><b>Deferring compounds the debt.</b> Modules with arch. debt: bugs at <b>2.5× the average</b> and <b>295% ROI</b> from early refactoring. <em>(CMU SEI / DORA 2024)</em></span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1;display:flex;gap:3cqmin;align-items:flex-start">
      <div style="flex:1.3">
        <b>First Law of Software Architecture</b><br>
        <em style="font-size:1.8cqmin;opacity:.8">— Richards &amp; Ford, O'Reilly 2020</em><br><br>
        "Everything in software architecture is a trade-off. If you think you've found something that isn't a trade-off, you just haven't discovered it yet."
      </div>
      <div style="flex:1;padding-left:2.5cqmin;border-left:1px solid currentColor">
        <b>Two costs every decision carries</b><br>
        <em style="font-size:1.8cqmin;opacity:.7">— Google SRE, "Embracing Risk"</em><br><br>
        · <b>Direct</b> — compute, infra, engineering time.<br><br>
        · <b>Opportunity</b> — features <em>not built</em> because resources went elsewhere.
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-flow" data-title="tradeoffs">
  <div class="kicker">Capítulo 4 · Trade-offs</div>
  <h2>Toda Decisión Tiene un <span class="accent">Costo</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">⚖️</span><span><b>No hay almuerzo gratis.</b> No existen decisiones sin trade-off — solo trade-offs que aún no descubriste. <em>(Richards &amp; Ford, 2020)</em></span></li>
      <li><span class="ico">🔍</span><span><b>La transparencia no es opcional.</b> ADRs, RFCs y registros de decisiones hacen que los trade-offs aparezcan en reuniones, no en incidentes. <em>(CMU SEI)</em></span></li>
      <li><span class="ico">⚡</span><span><b>Fallar rápido es más barato.</b> Cada cambio tras un defecto lo hace más difícil de reparar; el software roto obliga a todo el equipo a trabajar alrededor. <em>(Google SRE)</em></span></li>
      <li><span class="ico">💸</span><span><b>Diferir acumula deuda.</b> Módulos con deuda arq.: bugs a <b>2.5× el promedio</b> y <b>295% de ROI</b> al refactorizar temprano. <em>(CMU SEI / DORA 2024)</em></span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1;display:flex;gap:3cqmin;align-items:flex-start">
      <div style="flex:1.3">
        <b>Primera Ley de la Arquitectura de Software</b><br>
        <em style="font-size:1.8cqmin;opacity:.8">— Richards &amp; Ford, O'Reilly 2020</em><br><br>
        "Todo en arquitectura de software es un trade-off. Si crees que encontraste algo que no lo es, simplemente aún no lo descubriste."
      </div>
      <div style="flex:1;padding-left:2.5cqmin;border-left:1px solid currentColor">
        <b>Dos costos que toda decisión lleva</b><br>
        <em style="font-size:1.8cqmin;opacity:.7">— Google SRE, "Embracing Risk"</em><br><br>
        · <b>Directo</b> — cómputo, infra, tiempo de ingeniería.<br><br>
        · <b>Oportunidad</b> — features <em>no construidas</em> porque los recursos fueron a otra cosa.
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
