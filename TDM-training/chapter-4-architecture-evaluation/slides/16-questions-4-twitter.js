(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="questions-4-twitter">
  <div class="kicker">Scenario 4 · Twitter Timelines · 15 minutes</div>
  <h2>What Would <span class="accent">You Decide?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Fanout strategy.</b> Fanout on Read (compute at request time), Fanout on Write (pre-compute into per-user cache), or a hybrid? What is the exact cost difference at 300K reads/sec and 6K writes/sec?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Celebrity threshold.</b> Below what follower count do you use fanout-on-write? Above that threshold, how do you merge a celebrity's tweets with the pre-computed timeline at read time without doubling latency?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Cache data structure.</b> What data structure gives O(1) reads for timeline retrieval at 300K QPS? How many tweet IDs do you store per user? What happens when the user scrolls past the cached window?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Delete and edit consistency.</b> A tweet is deleted 30 minutes after posting and is cached in 10M timelines. How do you propagate the delete without reading and rewriting 10M cache entries?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Use /sw-architect:</b> "Design a hybrid fanout architecture for a social feed with 150M users. How do you define the celebrity threshold? Show the data flow for a regular user and a celebrity posting a tweet." Compare your threshold logic with the team.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Read first:</b>&nbsp;
        <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Twitter at 150M — HighScalability</a> &nbsp;·&nbsp;
        <a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability/" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Timelines at Scale — Krikorian</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="questions-4-twitter">
  <div class="kicker">Escenario 4 · Twitter Timelines · 15 minutos</div>
  <h2>¿Qué <span class="accent">Decidirías Tú?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Estrategia de fanout.</b> ¿Fanout en Lectura (computar al solicitar), Fanout en Escritura (precomputar en caché por usuario) o híbrido? ¿Cuál es la diferencia de costo exacta a 300K lecturas/seg y 6K escrituras/seg?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Umbral de celebridades.</b> ¿Por debajo de cuántos seguidores usas fanout-en-escritura? Por encima de ese umbral, ¿cómo combinas los tweets de una celebridad con el timeline precomputado al leer sin duplicar la latencia?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Estructura de datos en caché.</b> ¿Qué estructura permite lecturas O(1) para recuperar el timeline a 300K QPS? ¿Cuántos IDs de tweets almacenas por usuario? ¿Qué ocurre cuando el usuario hace scroll más allá de la ventana cacheada?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Consistencia en eliminación y edición.</b> Un tweet se elimina 30 minutos después de publicarse y está cacheado en 10M timelines. ¿Cómo propagas la eliminación sin leer y reescribir 10M entradas de caché?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Usa /sw-architect:</b> "Diseña una arquitectura de fanout híbrido para un feed social con 150M usuarios. ¿Cómo defines el umbral de celebridades? Muestra el flujo de datos cuando un usuario regular y una celebridad publican un tweet." Compara tu lógica de umbral con el equipo.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Lee primero:</b>&nbsp;
        <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Twitter a 150M — HighScalability</a> &nbsp;·&nbsp;
        <a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability/" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Timelines a Escala — Krikorian</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
