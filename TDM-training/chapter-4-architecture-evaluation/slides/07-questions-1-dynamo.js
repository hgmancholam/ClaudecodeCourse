(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="questions-1-dynamo">
  <div class="kicker">Scenario 1 · Amazon Dynamo · 15 minutes</div>
  <h2>What Would <span class="accent">You Decide?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Consistency model.</b> Strong consistency (all replicas agree before responding) or eventual consistency (resolve conflicts after)? What is the user impact of each choice on a shopping cart?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Conflict resolution.</b> When two writes conflict on different replicas, who wins? Last-write-wins, application-level merge, or vector clocks? What does the user actually see?</span></li>
      <li><span class="ico">3️⃣</span><span><b>N / W / R quorum.</b> How many replicas (N), writes (W), reads (R) must succeed? How does each combination affect availability vs consistency? Where on the CAP triangle does your choice land?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Acceptable failure mode.</b> Is it worse to (a) lose a cart item because of a failed write, or (b) show a user two conflicting cart states briefly? Which failure is more recoverable?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Use /sw-architect:</b> "Model the trade-offs of AP vs CP for an e-commerce cart. What are the user-visible failure modes of each?" Then debate your N/W/R choice with the team.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Read first:</b>&nbsp;
        <a href="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Dynamo PDF — sections 1, 3 &amp; 4</a> &nbsp;·&nbsp;
        <a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">CAP Theorem</a> &nbsp;·&nbsp;
        <a href="https://www.allthingsdistributed.com/2008/12/eventually_consistent.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Eventually Consistent — Vogels</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="questions-1-dynamo">
  <div class="kicker">Escenario 1 · Amazon Dynamo · 15 minutos</div>
  <h2>¿Qué <span class="accent">Decidirías Tú?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Modelo de consistencia.</b> ¿Consistencia fuerte (todas las réplicas acuerdan antes de responder) o eventual (resolver conflictos después)? ¿Cuál es el impacto visible para el usuario del carrito?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Resolución de conflictos.</b> Cuando dos escrituras chocan en réplicas distintas, ¿quién gana? ¿Última escritura, merge en la app o vector clocks? ¿Qué ve realmente el usuario?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Quórum N / W / R.</b> ¿Cuántas réplicas (N), escrituras (W), lecturas (R) deben tener éxito? ¿Cómo afecta cada combinación a disponibilidad vs consistencia? ¿Dónde cae tu elección en el triángulo CAP?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Modo de falla aceptable.</b> ¿Es peor (a) perder un ítem del carrito por escritura fallida, o (b) mostrar brevemente dos estados contradictorios? ¿Cuál falla es más recuperable?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Usa /sw-architect:</b> "Modela los trade-offs de AP vs CP para un carrito e-commerce. ¿Cuáles son los modos de falla visibles para el usuario en cada caso?" Luego debate tu elección N/W/R con el equipo.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Lee primero:</b>&nbsp;
        <a href="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">PDF Dynamo — secc. 1, 3 y 4</a> &nbsp;·&nbsp;
        <a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Teorema CAP</a> &nbsp;·&nbsp;
        <a href="https://www.allthingsdistributed.com/2008/12/eventually_consistent.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Eventually Consistent — Vogels</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
