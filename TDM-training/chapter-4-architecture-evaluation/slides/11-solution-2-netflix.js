(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="solution-2-netflix">
  <div class="kicker">Scenario 2 · Netflix Migration · Proposed Solution</div>
  <h2>What Netflix <span class="accent">Actually Did</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🐌</span><span><b>Strangler fig over 7 years (2008–2016).</b> One service at a time. Start with low-risk services (search, recommendations), finish with high-risk (billing, Oracle DB). The monolith shrank gradually — never a big bang.</span></li>
      <li><span class="ico">🐵</span><span><b>Chaos Monkey built resilience into the culture.</b> Netflix intentionally killed random production instances to force engineers to design for failure from day one. If a service couldn't survive a random kill, it couldn't pass code review.</span></li>
      <li><span class="ico">🗄️</span><span><b>Oracle → Cassandra (NoSQL).</b> Eventual consistency, horizontal sharding, no schema migrations. Over 1 million writes/second benchmarked on AWS. The queue service migrated first (SimpleDB → Cassandra) as a proof of concept.</span></li>
      <li><span class="ico">🔍</span><span><b>Eureka + Ribbon + Hystrix.</b> Eureka: service registry (replaces DNS). Ribbon: client-side load balancing. Hystrix: circuit breaking per dependency. Together they form the cloud-native replacement for monolith RPC.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lesson:</b> Resilience is not a feature you add — it's a culture you build by making failure routine. Chaos Monkey wasn't a test tool; it was the forcing function that made Netflix engineers think about recovery before they thought about shipping.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Sources:</b>&nbsp;
        <a href="https://about.netflix.com/en/news/completing-the-netflix-cloud-migration" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Completing the Migration — Netflix 2016</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Simian Army — 2011</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/nosql-at-netflix-e937b660b4c" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">NoSQL at Netflix</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-feat" data-title="solution-2-netflix">
  <div class="kicker">Escenario 2 · Netflix Migration · Solución propuesta</div>
  <h2>Lo Que Netflix <span class="accent">Realmente Hizo</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🐌</span><span><b>Strangler fig en 7 años (2008–2016).</b> Un servicio a la vez. Primero los de bajo riesgo (búsqueda, recomendaciones), por último los de alto riesgo (facturación, Oracle). El monolito se redujo gradualmente — nunca un big bang.</span></li>
      <li><span class="ico">🐵</span><span><b>Chaos Monkey incorporó la resiliencia a la cultura.</b> Netflix terminaba instancias de producción aleatoriamente para obligar a los ingenieros a diseñar para el fallo desde el primer día. Si un servicio no sobrevivía un kill aleatorio, no pasaba code review.</span></li>
      <li><span class="ico">🗄️</span><span><b>Oracle → Cassandra (NoSQL).</b> Consistencia eventual, sharding horizontal, sin migraciones de esquema. Más de 1 millón de escrituras/segundo en AWS. El servicio de cola fue el primero en migrar (SimpleDB → Cassandra) como prueba de concepto.</span></li>
      <li><span class="ico">🔍</span><span><b>Eureka + Ribbon + Hystrix.</b> Eureka: registro de servicios (reemplaza DNS). Ribbon: balanceo de carga en el cliente. Hystrix: circuit breaking por dependencia. Juntos forman el reemplazo cloud-native del RPC del monolito.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lección:</b> La resiliencia no es una feature que se agrega — es una cultura que se construye haciendo del fallo algo rutinario. Chaos Monkey no fue una herramienta de prueba; fue el mecanismo que obligó a los ingenieros de Netflix a pensar en la recuperación antes de pensar en el envío.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Fuentes:</b>&nbsp;
        <a href="https://about.netflix.com/en/news/completing-the-netflix-cloud-migration" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Completando la Migración — Netflix 2016</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Simian Army — 2011</a> &nbsp;·&nbsp;
        <a href="https://netflixtechblog.com/nosql-at-netflix-e937b660b4c" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">NoSQL at Netflix</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
