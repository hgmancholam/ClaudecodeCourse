(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="solution-3-hystrix">
  <div class="kicker">Scenario 3 · Netflix Hystrix · Proposed Solution</div>
  <h2>What Netflix <span class="accent">Actually Built</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🧱</span><span><b>Bulkhead: separate thread pool per dependency.</b> Recommendations get 10 threads. Search gets 10. Billing gets 10. A recommendation timeout uses only recommendation threads — billing threads remain free. Named after watertight ship compartments (Nygard, 2007).</span></li>
      <li><span class="ico">⚡</span><span><b>Circuit Breaker: trip at 50% error rate.</b> If more than half of calls in a 10-second window fail, the circuit opens. All subsequent calls return immediately with a fallback — no waiting for timeouts. After 5 seconds, the circuit goes Half-Open and allows one test call.</span></li>
      <li><span class="ico">📋</span><span><b>Fallback: static cached recommendations.</b> When the circuit opens, users receive a pre-computed "popular right now" list. Not personalized — but the experience remains functional. Netflix measured: empty section = user abandonment; static list = continued engagement.</span></li>
      <li><span class="ico">📊</span><span><b>Scale result: 10B+ executions/day.</b> Hystrix added &lt;1ms latency overhead per call while protecting the entire API from cascading failures. By 2013, Netflix ran it in production on every inter-service call.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lesson:</b> Design your fallback before you design your happy path. The question "what do we show when X fails?" reveals whether you understand your users' minimum acceptable experience — and that forces better architecture decisions upstream.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Sources:</b>&nbsp;
        <a href="https://netflixtechblog.com/introducing-hystrix-for-resilience-engineering-13531c1ab362" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Introducing Hystrix — Netflix 2012</a> &nbsp;·&nbsp;
        <a href="https://www.oreilly.com/library/view/release-it-2nd/9781680504552/f_0047.xhtml" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Release It! — Stability Patterns (Nygard)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-feat" data-title="solution-3-hystrix">
  <div class="kicker">Escenario 3 · Netflix Hystrix · Solución propuesta</div>
  <h2>Lo Que Netflix <span class="accent">Realmente Construyó</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🧱</span><span><b>Bulkhead: pool de threads separado por dependencia.</b> Recomendaciones recibe 10 threads. Búsqueda recibe 10. Facturación recibe 10. Un timeout de recomendaciones solo usa threads de recomendaciones — los de facturación permanecen libres. Nombrado por los compartimentos estancos de los barcos (Nygard, 2007).</span></li>
      <li><span class="ico">⚡</span><span><b>Circuit Breaker: se activa al 50% de errores.</b> Si más de la mitad de las llamadas en una ventana de 10 segundos fallan, el circuito abre. Las llamadas siguientes retornan inmediatamente con un fallback — sin esperar timeouts. Tras 5 segundos, el circuito pasa a Semi-abierto y permite una llamada de prueba.</span></li>
      <li><span class="ico">📋</span><span><b>Fallback: recomendaciones estáticas cacheadas.</b> Cuando el circuito abre, los usuarios reciben una lista precalculada de "populares ahora." No personalizada — pero la experiencia sigue siendo funcional. Netflix midió: sección vacía = abandono; lista estática = engagement continuo.</span></li>
      <li><span class="ico">📊</span><span><b>Resultado a escala: 10B+ ejecuciones/día.</b> Hystrix añade &lt;1ms de latencia por llamada mientras protege toda la API de fallos en cascada. En 2013 Netflix lo ejecutaba en producción en cada llamada entre servicios.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lección:</b> Diseña tu fallback antes de diseñar tu camino feliz. La pregunta "¿qué mostramos cuando X falla?" revela si entiendes la experiencia mínima aceptable de tus usuarios — y eso obliga a tomar mejores decisiones de arquitectura aguas arriba.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Fuentes:</b>&nbsp;
        <a href="https://netflixtechblog.com/introducing-hystrix-for-resilience-engineering-13531c1ab362" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Introduciendo Hystrix — Netflix 2012</a> &nbsp;·&nbsp;
        <a href="https://www.oreilly.com/library/view/release-it-2nd/9781680504552/f_0047.xhtml" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Release It! — Patrones de Estabilidad (Nygard)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
