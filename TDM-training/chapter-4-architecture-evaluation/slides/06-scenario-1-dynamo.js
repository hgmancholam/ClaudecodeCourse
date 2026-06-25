(window._deck = window._deck || []).push({
en: `
<section class="slide s-info" data-title="scenario-1-dynamo">
  <div class="kicker">Chapter 4 · Scenario 1 of 5 · Amazon</div>
  <h2>Shopping Cart: <span class="accent">Availability vs Consistency</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🏪</span><span><b>2006, Amazon at scale.</b> Millions of simultaneous shoppers. A single Oracle DB is the bottleneck — and a single point of failure for the cart service.</span></li>
      <li><span class="ico">📊</span><span><b>Read : Write = 10 : 1.</b> The cart is read far more than written, but writes (add/remove items) must <em>never</em> fail — even during partial node outages.</span></li>
      <li><span class="ico">⚠️</span><span><b>Partitions are inevitable.</b> At AWS scale, nodes will go offline. The system must accept purchases even when parts of the cluster are unreachable.</span></li>
      <li><span class="ico">🔀</span><span><b>Conflict scenario:</b> User adds an item from laptop and removes it from phone at the same instant on different replicas. What is the correct cart state?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Your mission</b> — Design a key-value store for the shopping cart. Choose: (a) strong consistency — all replicas agree before responding, or (b) eventual consistency — respond immediately and resolve conflicts later. Define your replication strategy (N, W, R) and conflict resolution approach.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>References:</b>&nbsp;
        <a href="https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Dynamo Paper — Vogels 2007</a> &nbsp;·&nbsp;
        <a href="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">PDF (sections 1–3)</a> &nbsp;·&nbsp;
        <a href="https://www.allthingsdistributed.com/2008/12/eventually_consistent.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Eventually Consistent</a> &nbsp;·&nbsp;
        <a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">CAP Theorem (Wikipedia)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-info" data-title="scenario-1-dynamo">
  <div class="kicker">Capítulo 4 · Escenario 1 de 5 · Amazon</div>
  <h2>Carrito de Compras: <span class="accent">Disponibilidad vs Consistencia</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">🏪</span><span><b>2006, Amazon a escala.</b> Millones de compradores simultáneos. Una BD Oracle es el cuello de botella — y único punto de falla del servicio de carrito.</span></li>
      <li><span class="ico">📊</span><span><b>Lectura : Escritura = 10 : 1.</b> El carrito se lee mucho más de lo que se escribe, pero las escrituras (agregar/quitar ítems) <em>nunca</em> deben fallar — ni durante fallas parciales.</span></li>
      <li><span class="ico">⚠️</span><span><b>Las particiones son inevitables.</b> A escala de AWS los nodos se desconectan. El sistema debe aceptar compras aunque partes del cluster sean inalcanzables.</span></li>
      <li><span class="ico">🔀</span><span><b>Escenario de conflicto:</b> El usuario agrega un ítem desde el laptop y lo elimina desde el celular al mismo instante en réplicas distintas. ¿Cuál es el estado correcto del carrito?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Tu misión</b> — Diseña un almacén clave-valor para el carrito. Elige: (a) consistencia fuerte — todas las réplicas acuerdan antes de responder, o (b) consistencia eventual — responde de inmediato y resuelve conflictos después. Define tu estrategia de replicación (N, W, R) y resolución de conflictos.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Referencias:</b>&nbsp;
        <a href="https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Paper Dynamo — Vogels 2007</a> &nbsp;·&nbsp;
        <a href="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">PDF (secciones 1–3)</a> &nbsp;·&nbsp;
        <a href="https://www.allthingsdistributed.com/2008/12/eventually_consistent.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Eventually Consistent</a> &nbsp;·&nbsp;
        <a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Teorema CAP (Wikipedia)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
