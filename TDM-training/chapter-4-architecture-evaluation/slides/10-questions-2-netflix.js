(window._deck = window._deck || []).push({
en: `
<section class="slide s-env" data-title="questions-2-netflix">
  <div class="kicker">Scenario 2 · Netflix Migration · 15 minutes</div>
  <h2>What Would <span class="accent">You Decide?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Migration pattern.</b> Big bang (all at once), strangler fig (service by service over time), or parallel run (duplicate everything and switch)? Which pattern minimizes risk given 99.99% uptime requirement?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Database replacement.</b> Oracle enforces ACID transactions across billing, inventory, and streaming data. What database (or combination) replaces it in the cloud? What consistency guarantees can you safely sacrifice?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Resilience testing.</b> How do you know if a migrated service is truly resilient before cutting all traffic to it? How do you discover hidden dependencies between services that were invisible in the monolith?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Service discovery.</b> In the monolith, services call each other by method. In the cloud, services move between IPs constantly. What mechanism replaces hard-coded addresses for inter-service calls?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Use /sw-architect:</b> "Compare big-bang vs strangler fig migration patterns for a monolith with 100+ coupled services. What are the risk trade-offs?" Also ask about CAP implications of replacing Oracle with NoSQL.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Read first:</b>&nbsp;
        <a href="https://netflixtechblog.com/5-lessons-weve-learned-using-aws-1f2a28588e4c" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">5 Lessons from AWS — Netflix 2010</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Simian Army</a> &nbsp;·&nbsp;
        <a href="https://martinfowler.com/articles/microservices.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Microservices — Fowler &amp; Lewis</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-env" data-title="questions-2-netflix">
  <div class="kicker">Escenario 2 · Netflix Migration · 15 minutos</div>
  <h2>¿Qué <span class="accent">Decidirías Tú?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Patrón de migración.</b> ¿Big bang (todo de una vez), strangler fig (servicio por servicio), o ejecución paralela (duplicar todo y conmutar)? ¿Qué patrón minimiza el riesgo con un uptime requerido del 99.99%?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Reemplazo de base de datos.</b> Oracle aplica transacciones ACID en facturación, inventario y datos de streaming. ¿Qué BD (o combinación) la reemplaza en la nube? ¿Qué garantías de consistencia puedes sacrificar sin riesgo?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Prueba de resiliencia.</b> ¿Cómo saber si un servicio migrado es verdaderamente resiliente antes de enviarle todo el tráfico? ¿Cómo descubrir dependencias ocultas entre servicios que eran invisibles en el monolito?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Descubrimiento de servicios.</b> En el monolito, los servicios se llaman por método. En la nube, los servicios cambian de IP constantemente. ¿Qué mecanismo reemplaza las direcciones fijas en las llamadas entre servicios?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Usa /sw-architect:</b> "Compara los patrones big-bang vs strangler fig para migrar un monolito con 100+ servicios acoplados. ¿Cuáles son los trade-offs de riesgo?" También pregunta sobre las implicaciones CAP de reemplazar Oracle por NoSQL.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Lee primero:</b>&nbsp;
        <a href="https://netflixtechblog.com/5-lessons-weve-learned-using-aws-1f2a28588e4c" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">5 Lecciones de AWS — Netflix 2010</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Simian Army</a> &nbsp;·&nbsp;
        <a href="https://martinfowler.com/articles/microservices.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Microservicios — Fowler &amp; Lewis</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
