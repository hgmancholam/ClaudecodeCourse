(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flow" data-title="arch-hexagonal-nlayer">
  <div class="kicker">Chapter 3 · Basic Architecture</div>
  <h2>Design for <span class="accent">change</span>: decouple what varies</h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-flow">
      <h3>Event-Driven</h3>
      <svg class="archsvg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="38" width="58" height="18" rx="3" fill="var(--accent,#7c3aed)"/>
        <text x="33" y="49" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Producer</text>
        <line x1="62" y1="47" x2="72" y2="47" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="75,47 69,44 69,50" fill="#aaa"/>
        <rect x="75" y="28" width="68" height="38" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
        <text x="109" y="43" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Event</text>
        <text x="109" y="57" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Bus</text>
        <line x1="143" y1="38" x2="156" y2="22" stroke="#aaa" stroke-width="1"/>
        <polygon points="158,19 151,23 157,28" fill="#aaa"/>
        <line x1="143" y1="47" x2="156" y2="47" stroke="#aaa" stroke-width="1"/>
        <polygon points="159,47 153,44 153,50" fill="#aaa"/>
        <line x1="143" y1="56" x2="156" y2="72" stroke="#aaa" stroke-width="1"/>
        <polygon points="158,75 151,69 157,75" fill="#aaa"/>
        <rect x="158" y="13" width="58" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
        <text x="187" y="22" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Consumer A</text>
        <rect x="158" y="38" width="58" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
        <text x="187" y="47" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Consumer B</text>
        <rect x="158" y="63" width="58" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
        <text x="187" y="72" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Consumer C</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Producers never know who consumes their events</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Bus: Kafka, RabbitMQ, SQS, Azure Service Bus</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Natural audit trail &amp; replay capability</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Real-time pipelines, fan-out, high-load async</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Simple CRUD, when strong consistency is required</span></div>
    </div>

    <div class="cat s-proj">
      <h3>Hexagonal (Ports &amp; Adapters)</h3>
      <svg class="archsvg" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Core domain in center -->
        <rect x="62" y="42" width="76" height="36" rx="5" fill="var(--accent,#0f766e)"/>
        <text x="100" y="57" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Domain</text>
        <text x="100" y="68" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Core</text>
        <!-- Top port: REST API -->
        <line x1="100" y1="42" x2="100" y2="28" stroke="#aaa" stroke-width="1.2"/>
        <rect x="65" y="14" width="70" height="14" rx="3" fill="#f0f4ff" stroke="var(--accent,#0f766e)" stroke-width="1"/>
        <text x="100" y="22" text-anchor="middle" font-size="7.5" fill="var(--accent,#0f766e)" font-family="sans-serif" dominant-baseline="middle">REST / GraphQL</text>
        <!-- Bottom port: CLI / Tests -->
        <line x1="100" y1="78" x2="100" y2="92" stroke="#aaa" stroke-width="1.2"/>
        <rect x="65" y="92" width="70" height="14" rx="3" fill="#f0f4ff" stroke="var(--accent,#0f766e)" stroke-width="1"/>
        <text x="100" y="100" text-anchor="middle" font-size="7.5" fill="var(--accent,#0f766e)" font-family="sans-serif" dominant-baseline="middle">CLI / Tests</text>
        <!-- Left port: DB Adapter -->
        <line x1="62" y1="60" x2="46" y2="60" stroke="#aaa" stroke-width="1.2"/>
        <rect x="4" y="52" width="42" height="16" rx="3" fill="#f5f5f5" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="25" y="60" text-anchor="middle" font-size="7" fill="#666" font-family="sans-serif" dominant-baseline="middle">DB Adapter</text>
        <!-- Right port: Messaging Adapter -->
        <line x1="138" y1="60" x2="154" y2="60" stroke="#aaa" stroke-width="1.2"/>
        <rect x="154" y="52" width="42" height="16" rx="3" fill="#f5f5f5" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="175" y="60" text-anchor="middle" font-size="7" fill="#666" font-family="sans-serif" dominant-baseline="middle">Messaging</text>
        <!-- Port labels -->
        <text x="25" y="50" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«adapter»</text>
        <text x="175" y="50" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«adapter»</text>
        <text x="100" y="10" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«port»</text>
        <text x="100" y="112" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«port»</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Domain core has zero external dependencies</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Ports = interfaces; Adapters = implementations</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Swap DB, UI or messaging without touching domain</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Complex domain, high testability, framework-agnostic core</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">Simple CRUD apps, small projects with thin domain</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-flow" data-title="arch-hexagonal-nlayer">
  <div class="kicker">Capítulo 3 · Arquitectura Básica</div>
  <h2>Desacopla lo que varía: <span class="accent">eventos y hexagonal</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-flow">
      <h3>Orientada a Eventos</h3>
      <svg class="archsvg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="38" width="58" height="18" rx="3" fill="var(--accent,#7c3aed)"/>
        <text x="33" y="49" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Productor</text>
        <line x1="62" y1="47" x2="72" y2="47" stroke="#aaa" stroke-width="1.5"/>
        <polygon points="75,47 69,44 69,50" fill="#aaa"/>
        <rect x="75" y="28" width="68" height="38" rx="4" fill="var(--accent,#7c3aed)" fill-opacity=".85"/>
        <text x="109" y="43" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Event</text>
        <text x="109" y="57" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Bus</text>
        <line x1="143" y1="38" x2="156" y2="22" stroke="#aaa" stroke-width="1"/>
        <polygon points="158,19 151,23 157,28" fill="#aaa"/>
        <line x1="143" y1="47" x2="156" y2="47" stroke="#aaa" stroke-width="1"/>
        <polygon points="159,47 153,44 153,50" fill="#aaa"/>
        <line x1="143" y1="56" x2="156" y2="72" stroke="#aaa" stroke-width="1"/>
        <polygon points="158,75 151,69 157,75" fill="#aaa"/>
        <rect x="158" y="13" width="58" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
        <text x="187" y="22" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Consumidor A</text>
        <rect x="158" y="38" width="58" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
        <text x="187" y="47" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Consumidor B</text>
        <rect x="158" y="63" width="58" height="16" rx="3" fill="#f0f4ff" stroke="var(--accent,#7c3aed)" stroke-width="1"/>
        <text x="187" y="72" text-anchor="middle" font-size="7" fill="var(--accent,#7c3aed)" font-family="sans-serif" dominant-baseline="middle">Consumidor C</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">Los productores nunca saben quién consume sus eventos</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Bus: Kafka, RabbitMQ, SQS, Azure Service Bus</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Trazabilidad natural y capacidad de replay</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Pipelines en tiempo real, fan-out, alta carga async</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">CRUD simple, cuando se requiere consistencia fuerte</span></div>
    </div>

    <div class="cat s-proj">
      <h3>Hexagonal (Puertos y Adaptadores)</h3>
      <svg class="archsvg" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="62" y="42" width="76" height="36" rx="5" fill="var(--accent,#0f766e)"/>
        <text x="100" y="57" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Dominio</text>
        <text x="100" y="68" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Core</text>
        <line x1="100" y1="42" x2="100" y2="28" stroke="#aaa" stroke-width="1.2"/>
        <rect x="65" y="14" width="70" height="14" rx="3" fill="#f0f4ff" stroke="var(--accent,#0f766e)" stroke-width="1"/>
        <text x="100" y="22" text-anchor="middle" font-size="7.5" fill="var(--accent,#0f766e)" font-family="sans-serif" dominant-baseline="middle">REST / GraphQL</text>
        <line x1="100" y1="78" x2="100" y2="92" stroke="#aaa" stroke-width="1.2"/>
        <rect x="65" y="92" width="70" height="14" rx="3" fill="#f0f4ff" stroke="var(--accent,#0f766e)" stroke-width="1"/>
        <text x="100" y="100" text-anchor="middle" font-size="7.5" fill="var(--accent,#0f766e)" font-family="sans-serif" dominant-baseline="middle">CLI / Tests</text>
        <line x1="62" y1="60" x2="46" y2="60" stroke="#aaa" stroke-width="1.2"/>
        <rect x="4" y="52" width="42" height="16" rx="3" fill="#f5f5f5" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="25" y="60" text-anchor="middle" font-size="7" fill="#666" font-family="sans-serif" dominant-baseline="middle">Adaptador DB</text>
        <line x1="138" y1="60" x2="154" y2="60" stroke="#aaa" stroke-width="1.2"/>
        <rect x="154" y="52" width="42" height="16" rx="3" fill="#f5f5f5" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="175" y="60" text-anchor="middle" font-size="7" fill="#666" font-family="sans-serif" dominant-baseline="middle">Mensajería</text>
        <text x="25" y="50" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«adaptador»</text>
        <text x="175" y="50" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«adaptador»</text>
        <text x="100" y="10" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«puerto»</text>
        <text x="100" y="112" text-anchor="middle" font-size="6" fill="#aaa" font-family="sans-serif">«puerto»</text>
      </svg>
      <div class="ln"><span class="k">·</span><span class="d">El núcleo de dominio no tiene dependencias externas</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Puertos = interfaces; Adaptadores = implementaciones</span></div>
      <div class="ln"><span class="k">·</span><span class="d">Cambia la DB, UI o mensajería sin tocar el dominio</span></div>
      <div class="ln"><span class="k">✓</span><span class="d">Dominio complejo, alta testabilidad, core agnóstico</span></div>
      <div class="ln"><span class="k">✗</span><span class="d">CRUD simple, proyectos pequeños con dominio delgado</span></div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
