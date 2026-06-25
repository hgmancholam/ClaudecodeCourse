(window._deck = window._deck || []).push({
en: `
<section class="slide s-flag" data-title="questions-3-hystrix">
  <div class="kicker">Scenario 3 · Netflix Hystrix · 15 minutes</div>
  <h2>What Would <span class="accent">You Decide?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Isolation strategy.</b> How do you prevent the recommendation service's slowness from consuming threads used by billing, search, or login? What is the Bulkhead pattern and why is it named after a ship design?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Circuit breaker threshold.</b> After how many failures (or what failure rate) should you stop calling a service? How long do you wait before trying again? What distinguishes "Closed," "Open," and "Half-Open" states?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Fallback design.</b> When recommendations are unavailable, what does the user see? A static top-10 list? An empty section? An error message? Which fallback maximizes engagement while minimizing engineering cost?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Recovery detection.</b> Once the recommendations service recovers, how does the circuit breaker know to start routing traffic to it again? How do you test recovery without flooding a still-fragile service?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Use /sw-architect:</b> "Design a bulkhead + circuit breaker architecture for an API that fans out to 20 microservices. What thread pool sizing would you recommend per service?" Then compare your fallback strategy with the team.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Read first:</b>&nbsp;
        <a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Circuit Breaker — Fowler 2014</a> &nbsp;·&nbsp;
        <a href="https://github.com/Netflix/Hystrix/wiki/How-it-Works" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Hystrix: How it Works</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/introducing-hystrix-for-resilience-engineering-13531c1ab362" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Introducing Hystrix — 2012</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-flag" data-title="questions-3-hystrix">
  <div class="kicker">Escenario 3 · Netflix Hystrix · 15 minutos</div>
  <h2>¿Qué <span class="accent">Decidirías Tú?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Estrategia de aislamiento.</b> ¿Cómo evitas que la lentitud del servicio de recomendaciones consuma los threads usados por facturación, búsqueda o login? ¿Qué es el patrón Bulkhead y por qué lleva el nombre de un diseño naval?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Umbral del circuit breaker.</b> ¿Después de cuántos fallos (o qué tasa de error) dejas de llamar a un servicio? ¿Cuánto tiempo esperas antes de intentarlo de nuevo? ¿Qué distingue los estados "Cerrado," "Abierto" y "Semi-abierto"?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Diseño de fallback.</b> Cuando las recomendaciones no están disponibles, ¿qué ve el usuario? ¿Un top-10 estático? ¿Una sección vacía? ¿Un mensaje de error? ¿Qué fallback maximiza el engagement con el menor costo de ingeniería?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Detección de recuperación.</b> Cuando el servicio de recomendaciones se recupera, ¿cómo sabe el circuit breaker que debe volver a enrutarle tráfico? ¿Cómo pruebas la recuperación sin saturar un servicio aún frágil?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Usa /sw-architect:</b> "Diseña una arquitectura de bulkhead + circuit breaker para una API que hace fan-out a 20 microservicios. ¿Qué tamaño de pool de threads recomendarías por servicio?" Luego compara tu estrategia de fallback con el equipo.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Lee primero:</b>&nbsp;
        <a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Circuit Breaker — Fowler 2014</a> &nbsp;·&nbsp;
        <a href="https://github.com/Netflix/Hystrix/wiki/How-it-Works" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Hystrix: Cómo Funciona</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/introducing-hystrix-for-resilience-engineering-13531c1ab362" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Introduciendo Hystrix — 2012</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
