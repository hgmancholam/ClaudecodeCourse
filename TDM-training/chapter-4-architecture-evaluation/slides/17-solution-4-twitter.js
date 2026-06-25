(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="solution-4-twitter">
  <div class="kicker">Scenario 4 · Twitter Timelines · Proposed Solution</div>
  <h2>What Twitter <span class="accent">Actually Built</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">✅</span><span><b>Hybrid fanout: write for most, read for celebrities.</b> For accounts under ~10K followers, tweets are fanned out to each follower's Redis timeline cache on post. For celebrities (10K+ followers), tweets are fetched at read time and merged with the pre-computed cache.</span></li>
      <li><span class="ico">🔴</span><span><b>Redis sorted sets: 800 tweet IDs per user.</b> Each user's timeline is a Redis sorted set keyed by timestamp. Only tweet IDs are stored (not content). Scores = post timestamp. Range queries give O(log N) retrieval. 3x replication for read throughput.</span></li>
      <li><span class="ico">🔢</span><span><b>Result: 300K reads/sec at ~2ms.</b> Redis serves timelines from memory with microsecond latency. The database is queried only for timeline hydration (content lookup by ID) — not for timeline assembly.</span></li>
      <li><span class="ico">🗑️</span><span><b>Delete: lazy invalidation.</b> Deleted tweet IDs are added to a tombstone set. At read time, tombstoned IDs are filtered from the Redis sorted set before serving. No cache invalidation needed — the merge step handles it.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lesson:</b> At scale, "correct" and "fast" are two different SLAs. Twitter made a deliberate choice: eventual consistency on timeline composition is acceptable — a tweet appearing 1 second late is not a product failure. A 10-second timeline load <em>is</em>.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Source:</b>&nbsp;
        <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">The Architecture Twitter Uses — HighScalability 2013</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-feat" data-title="solution-4-twitter">
  <div class="kicker">Escenario 4 · Twitter Timelines · Solución propuesta</div>
  <h2>Lo Que Twitter <span class="accent">Realmente Construyó</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">✅</span><span><b>Fanout híbrido: escritura para la mayoría, lectura para celebridades.</b> Para cuentas con menos de ~10K seguidores, los tweets se distribuyen a la caché Redis de cada seguidor al publicar. Para celebridades (10K+ seguidores), los tweets se obtienen en lectura y se fusionan con la caché precomputada.</span></li>
      <li><span class="ico">🔴</span><span><b>Redis sorted sets: 800 IDs de tweets por usuario.</b> El timeline de cada usuario es un sorted set en Redis con clave de timestamp. Solo se almacenan IDs de tweets (no el contenido). Score = timestamp de publicación. Consultas de rango dan recuperación O(log N). Replicación 3x para throughput de lectura.</span></li>
      <li><span class="ico">🔢</span><span><b>Resultado: 300K lecturas/seg a ~2ms.</b> Redis sirve los timelines desde memoria con latencia de microsegundos. La BD solo se consulta para hidratar el timeline (buscar contenido por ID) — no para ensamblar el timeline.</span></li>
      <li><span class="ico">🗑️</span><span><b>Eliminación: invalidación lazy.</b> Los IDs de tweets eliminados se agregan a un set de "tombstones." Al leer, los IDs marcados se filtran del sorted set de Redis antes de servir. No se necesita invalidación de caché — el paso de merge lo maneja.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lección:</b> A escala, "correcto" y "rápido" son dos SLAs distintos. Twitter tomó una decisión deliberada: la consistencia eventual en la composición del timeline es aceptable — un tweet que aparece 1 segundo tarde no es un fallo del producto. Una carga de 10 segundos <em>sí lo es</em>.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Fuente:</b>&nbsp;
        <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">La Arquitectura que usa Twitter — HighScalability 2013</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
