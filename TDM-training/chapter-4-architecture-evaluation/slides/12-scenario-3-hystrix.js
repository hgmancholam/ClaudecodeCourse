(window._deck = window._deck || []).push({
en: `
<section class="slide s-env" data-title="scenario-3-hystrix">
  <div class="kicker">Chapter 4 · Scenario 3 of 5 · Netflix</div>
  <h2>Cascading Failure: <span class="accent">Resilience Patterns</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🌊</span><span><b>2011: The cascade.</b> Netflix API handles 1B+ calls/day. Each request fans out to ~20 microservices. The recommendation service slows from 200ms to 2,000ms. Threads pile up waiting. The <em>shared</em> thread pool fills. The entire API becomes unresponsive.</span></li>
      <li><span class="ico">🔗</span><span><b>The shared resource problem.</b> All 20 downstream services draw from the same thread pool. A single slow service can starve all others — even fast, healthy ones like search or user profiles.</span></li>
      <li><span class="ico">📉</span><span><b>Degradation cascades upward.</b> A slow recommendation service → API thread exhaustion → billing calls time out → login fails → users cannot stream. One service brought down the whole platform.</span></li>
      <li><span class="ico">🎯</span><span><b>The goal:</b> 99.99% API availability = max 52 minutes of downtime per year. The current architecture makes a single dependency outage able to consume that entire budget in one incident.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Your mission</b> — Design a resilience architecture for the Netflix API. How do you prevent one slow service from taking down all others? What fallback does the user get when recommendations fail? When do you stop calling a failing service?
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>References:</b>&nbsp;
        <a href="https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Fault Tolerance at Netflix — 2012</a> &nbsp;·&nbsp;
        <a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Circuit Breaker — Fowler</a> &nbsp;·&nbsp;
        <a href="https://github.com/Netflix/Hystrix/wiki/How-it-Works" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">How Hystrix Works</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-env" data-title="scenario-3-hystrix">
  <div class="kicker">Capítulo 4 · Escenario 3 de 5 · Netflix</div>
  <h2>Fallo en Cascada: <span class="accent">Patrones de Resiliencia</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🌊</span><span><b>2011: La cascada.</b> La API de Netflix maneja 1B+ llamadas/día. Cada petición hace fan-out a ~20 microservicios. El servicio de recomendaciones se ralentiza de 200ms a 2,000ms. Los threads se acumulan esperando. El pool <em>compartido</em> se llena. Toda la API queda sin respuesta.</span></li>
      <li><span class="ico">🔗</span><span><b>El problema del recurso compartido.</b> Los 20 servicios downstream consumen del mismo pool de threads. Un servicio lento puede privar a todos los demás — incluso a los rápidos y sanos como búsqueda o perfiles.</span></li>
      <li><span class="ico">📉</span><span><b>La degradación asciende.</b> Recomendaciones lentas → threads de la API agotados → llamadas de facturación fallan → login falla → los usuarios no pueden hacer streaming. Un servicio derribó toda la plataforma.</span></li>
      <li><span class="ico">🎯</span><span><b>El objetivo:</b> 99.99% de disponibilidad de la API = máximo 52 minutos de downtime al año. La arquitectura actual permite que un solo servicio caído consuma todo ese presupuesto en un incidente.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Tu misión</b> — Diseña una arquitectura de resiliencia para la API de Netflix. ¿Cómo evitas que un servicio lento derribe a todos los demás? ¿Qué fallback recibe el usuario cuando las recomendaciones fallan? ¿Cuándo dejas de llamar a un servicio que falla?
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Referencias:</b>&nbsp;
        <a href="https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Fault Tolerance en Netflix — 2012</a> &nbsp;·&nbsp;
        <a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Circuit Breaker — Fowler</a> &nbsp;·&nbsp;
        <a href="https://github.com/Netflix/Hystrix/wiki/How-it-Works" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Cómo Funciona Hystrix</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
