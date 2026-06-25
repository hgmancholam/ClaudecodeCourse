(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="solution-1-dynamo">
  <div class="kicker">Scenario 1 · Amazon Dynamo · Proposed Solution</div>
  <h2>What Amazon <span class="accent">Actually Built</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">✅</span><span><b>AP over CP.</b> Dynamo chose availability — the cart always accepts writes, even during network partitions. Strong consistency was sacrificed intentionally.</span></li>
      <li><span class="ico">🔢</span><span><b>N=3, W=1, R=2.</b> Three replicas per key. One write quorum (fast writes, best effort). Two read quorum (stale-data detection). Since R+W &gt; N, most inconsistencies surface on read.</span></li>
      <li><span class="ico">🕰️</span><span><b>Vector clocks + app-level merge.</b> Each write carries a version vector. On conflict, the application (not the DB) reconciles — it keeps both cart versions and shows the user a merged result.</span></li>
      <li><span class="ico">🔑</span><span><b>Key insight:</b> For a cart, "always writable" beats "always correct." A customer who loses items from their cart abandons the purchase. A customer who briefly sees a stale cart usually refreshes and continues.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lesson for your projects:</b> Identify your system's "always writable" assets — the ones users abandon you over if they fail. Those are your AP candidates. Everything else can negotiate consistency for correctness.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Source:</b>&nbsp;
        <a href="https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Dynamo: Amazon's Highly Available Key-value Store — SOSP 2007</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-feat" data-title="solution-1-dynamo">
  <div class="kicker">Escenario 1 · Amazon Dynamo · Solución propuesta</div>
  <h2>Lo Que Amazon <span class="accent">Realmente Construyó</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">✅</span><span><b>AP sobre CP.</b> Dynamo eligió disponibilidad — el carrito siempre acepta escrituras, incluso durante particiones de red. La consistencia fuerte se sacrificó intencionalmente.</span></li>
      <li><span class="ico">🔢</span><span><b>N=3, W=1, R=2.</b> Tres réplicas por clave. Un quórum de escritura (rápido, mejor esfuerzo). Dos de lectura (detección de datos obsoletos). Como R+W &gt; N, la mayoría de inconsistencias aflora en la lectura.</span></li>
      <li><span class="ico">🕰️</span><span><b>Vector clocks + merge en la app.</b> Cada escritura lleva un vector de versión. En conflicto, la aplicación (no la BD) reconcilia — conserva ambas versiones del carrito y muestra un resultado fusionado al usuario.</span></li>
      <li><span class="ico">🔑</span><span><b>Insight clave:</b> Para un carrito, "siempre escribible" supera a "siempre correcto." Un cliente que pierde ítems abandona la compra. Uno que ve un carrito obsoleto por un instante generalmente refresca y continúa.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lección para tus proyectos:</b> Identifica los activos "siempre escribibles" de tu sistema — los que el usuario abandona si fallan. Esos son tus candidatos AP. Todo lo demás puede negociar consistencia a cambio de corrección.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Fuente:</b>&nbsp;
        <a href="https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Dynamo: Amazon's Highly Available Key-value Store — SOSP 2007</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
