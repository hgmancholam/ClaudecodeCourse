(window._deck = window._deck || []).push({
en: `
<section class="slide s-flow" data-title="scenario-4-twitter">
  <div class="kicker">Chapter 4 · Scenario 4 of 5 · Twitter</div>
  <h2>Social Timelines: <span class="accent">Fanout at 300K QPS</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">📱</span><span><b>2012: Twitter at 150M active users.</b> Each user follows ~200 accounts. Loading a timeline means: fetch the last 20 tweets from each followed account, sort by time, serve in &lt;100ms. At 300,000 reads/second that is 60 million DB queries per second.</span></li>
      <li><span class="ico">✍️</span><span><b>6,000 tweets posted per second.</b> The write load is manageable. The read load is the crisis. Every read at this scale triggers a fan-in aggregation query that no relational database can sustain.</span></li>
      <li><span class="ico">⭐</span><span><b>The celebrity problem.</b> @KatyPerry has 50M followers. One tweet → 50 million timeline updates. If you pre-compute timelines on write, one post by a celebrity costs 50M cache write operations in seconds.</span></li>
      <li><span class="ico">⚡</span><span><b>Two competing approaches:</b> <b>Fanout on Read</b> — compute timeline at read time (flexible, but 60M DB queries/sec). <b>Fanout on Write</b> — push tweets into each follower's cache on post (fast reads, expensive celebrity writes).</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Your mission</b> — Design a timeline architecture for 150M users. Choose fanout on read, fanout on write, or a hybrid. Define your caching strategy, data structure, and how you handle accounts with 10M+ followers.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>References:</b>&nbsp;
        <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Twitter Architecture — HighScalability 2013</a> &nbsp;·&nbsp;
        <a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability/" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Timelines at Scale — Krikorian (QCon 2012)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-flow" data-title="scenario-4-twitter">
  <div class="kicker">Capítulo 4 · Escenario 4 de 5 · Twitter</div>
  <h2>Timelines Sociales: <span class="accent">Fanout a 300K QPS</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">📱</span><span><b>2012: Twitter con 150M usuarios activos.</b> Cada usuario sigue ~200 cuentas. Cargar un timeline significa: obtener los últimos 20 tweets de cada cuenta seguida, ordenarlos por tiempo y servirlos en &lt;100ms. A 300,000 lecturas/segundo eso son 60 millones de consultas a BD por segundo.</span></li>
      <li><span class="ico">✍️</span><span><b>6,000 tweets publicados por segundo.</b> La carga de escritura es manejable. La carga de lectura es la crisis. Cada lectura a esta escala dispara una consulta de agregación fan-in que ninguna BD relacional puede sostener.</span></li>
      <li><span class="ico">⭐</span><span><b>El problema de las celebridades.</b> @KatyPerry tiene 50M seguidores. Un tweet → 50 millones de actualizaciones de timeline. Si precomputes los timelines al escribir, un post de una celebridad cuesta 50M operaciones de escritura en caché en segundos.</span></li>
      <li><span class="ico">⚡</span><span><b>Dos enfoques en competencia:</b> <b>Fanout en Lectura</b> — computar el timeline al leer (flexible, pero 60M consultas/seg). <b>Fanout en Escritura</b> — empujar tweets a la caché de cada seguidor al publicar (lecturas rápidas, escrituras costosas con celebridades).</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Tu misión</b> — Diseña una arquitectura de timeline para 150M usuarios. Elige fanout en lectura, en escritura o híbrido. Define tu estrategia de caché, estructura de datos y cómo manejas cuentas con 10M+ seguidores.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Referencias:</b>&nbsp;
        <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Arquitectura de Twitter — HighScalability 2013</a> &nbsp;·&nbsp;
        <a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability/" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Timelines a Escala — Krikorian (QCon 2012)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
