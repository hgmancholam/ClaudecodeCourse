(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="scenario-2-netflix">
  <div class="kicker">Chapter 4 · Scenario 2 of 5 · Netflix</div>
  <h2>Monolith to Cloud: <span class="accent">Migration at Scale</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💥</span><span><b>2008: 3-day outage.</b> An Oracle DB corruption during maintenance halts DVD shipments for 72 hours. The monolith is exposed as a single point of failure. Leadership mandates a full cloud migration.</span></li>
      <li><span class="ico">📈</span><span><b>Rapid growth pressure.</b> Netflix will grow from 25M to 75M+ subscribers over 7 years. The current on-premises infrastructure cannot scale without expensive hardware purchases with long lead times.</span></li>
      <li><span class="ico">🔗</span><span><b>100+ tightly coupled services.</b> The monolith contains billing, streaming, recommendations, search, and content ingestion — all sharing the same Oracle database and deployment pipeline.</span></li>
      <li><span class="ico">🚫</span><span><b>Zero downtime tolerance.</b> Streaming must remain available 99.99% of the time during migration. A big-bang cutover is not an option. The migration must run in parallel with production traffic.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Your mission</b> — Define a migration strategy: How do you decompose the monolith? What database replaces Oracle in a distributed cloud context? How do you test resilience before fully cutting over? What order do you migrate services?
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>References:</b>&nbsp;
        <a href="https://about.netflix.com/en/news/completing-the-netflix-cloud-migration" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Completing the Netflix Cloud Migration</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">The Netflix Simian Army</a> &nbsp;·&nbsp;
        <a href="https://martinfowler.com/articles/microservices.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Microservices — Fowler &amp; Lewis</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="scenario-2-netflix">
  <div class="kicker">Capítulo 4 · Escenario 2 de 5 · Netflix</div>
  <h2>Monolito a la Nube: <span class="accent">Migración a Escala</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💥</span><span><b>2008: caída de 3 días.</b> Una corrupción en la BD Oracle durante mantenimiento detiene los envíos de DVDs por 72 horas. El monolito queda expuesto como único punto de falla. La dirección ordena migración total a la nube.</span></li>
      <li><span class="ico">📈</span><span><b>Presión de crecimiento acelerado.</b> Netflix pasará de 25M a 75M+ suscriptores en 7 años. La infraestructura on-premises no puede escalar sin compras costosas de hardware con largo tiempo de entrega.</span></li>
      <li><span class="ico">🔗</span><span><b>100+ servicios fuertemente acoplados.</b> El monolito contiene facturación, streaming, recomendaciones, búsqueda e ingesta de contenido — todos compartiendo la misma BD Oracle y pipeline de despliegue.</span></li>
      <li><span class="ico">🚫</span><span><b>Cero tolerancia a inactividad.</b> El streaming debe estar disponible el 99.99% del tiempo durante la migración. Un corte total no es opción. La migración debe correr en paralelo con el tráfico en producción.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Tu misión</b> — Define una estrategia de migración: ¿Cómo descompones el monolito? ¿Qué BD reemplaza a Oracle en un contexto distribuido en la nube? ¿Cómo pruebas la resiliencia antes del corte final? ¿En qué orden migras los servicios?
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Referencias:</b>&nbsp;
        <a href="https://about.netflix.com/en/news/completing-the-netflix-cloud-migration" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Completing the Netflix Cloud Migration</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">The Netflix Simian Army</a> &nbsp;·&nbsp;
        <a href="https://martinfowler.com/articles/microservices.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Microservicios — Fowler &amp; Lewis</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
