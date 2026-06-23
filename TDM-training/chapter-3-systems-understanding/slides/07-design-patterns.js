(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-feat" data-title="design-patterns">
  <div class="kicker">Chapter 3 · Basic Architecture</div>
  <h2>These four patterns prevent the most common <span class="accent">distributed system failures</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info cat-split">
      <h3>API Gateway</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="44" width="28" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#3b82f6)" stroke-width="1.2"/>
          <text x="16" y="53" text-anchor="middle" font-size="7" fill="var(--accent,#3b82f6)" font-family="sans-serif" dominant-baseline="middle">Client</text>
          <line x1="30" y1="53" x2="40" y2="53" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="43,53 38,50 38,56" fill="#aaa"/>
          <rect x="43" y="35" width="38" height="36" rx="5" fill="var(--accent,#3b82f6)"/>
          <text x="62" y="48" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">API GW</text>
          <text x="62" y="60" text-anchor="middle" font-size="5.5" fill="white" font-family="sans-serif" dominant-baseline="middle">auth · rate · log</text>
          <line x1="81" y1="46" x2="95" y2="24" stroke="#aaa" stroke-width="1"/>
          <polygon points="97,21 90,24 94,30" fill="#aaa"/>
          <line x1="81" y1="53" x2="95" y2="53" stroke="#aaa" stroke-width="1"/>
          <polygon points="98,53 93,50 93,56" fill="#aaa"/>
          <line x1="81" y1="60" x2="95" y2="82" stroke="#aaa" stroke-width="1"/>
          <polygon points="97,85 94,78 90,82" fill="#aaa"/>
          <rect x="98" y="14" width="38" height="16" rx="3" fill="var(--accent,#3b82f6)" fill-opacity=".6"/>
          <text x="117" y="22" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Svc A</text>
          <rect x="98" y="45" width="38" height="16" rx="3" fill="var(--accent,#3b82f6)" fill-opacity=".6"/>
          <text x="117" y="53" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Svc B</text>
          <rect x="98" y="76" width="38" height="16" rx="3" fill="var(--accent,#3b82f6)" fill-opacity=".6"/>
          <text x="117" y="84" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Svc C</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Single entry point for all clients</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Routing, auth, rate limiting &amp; logging centralized</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Shields clients from internal service topology</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Microservices, multi-client (web, mobile, IoT)</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-env cat-split">
      <h3>Circuit Breaker</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="20" rx="34" ry="14" fill="var(--accent,#0d9488)" opacity=".9"/>
          <text x="70" y="20" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">CLOSED ✓</text>
          <line x1="90" y1="30" x2="108" y2="57" stroke="#ef4444" stroke-width="1.3"/>
          <polygon points="109,61 102,56 108,52" fill="#ef4444"/>
          <text x="117" y="44" font-size="6" fill="#ef4444" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">fail↑</text>
          <ellipse cx="105" cy="75" rx="30" ry="14" fill="#ef4444" opacity=".85"/>
          <text x="105" y="75" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">OPEN ✗</text>
          <line x1="77" y1="83" x2="57" y2="83" stroke="#f59e0b" stroke-width="1.3"/>
          <polygon points="54,83 60,80 60,86" fill="#f59e0b"/>
          <text x="67" y="94" font-size="6" fill="#f59e0b" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">timeout</text>
          <ellipse cx="35" cy="75" rx="30" ry="14" fill="#f59e0b" opacity=".85"/>
          <text x="35" y="75" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">HALF-OPEN</text>
          <line x1="46" y1="62" x2="57" y2="33" stroke="var(--accent,#0d9488)" stroke-width="1.3"/>
          <polygon points="58,30 52,35 59,39" fill="var(--accent,#0d9488)"/>
          <text x="38" y="45" font-size="6" fill="var(--accent,#0d9488)" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">ok</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">States: Closed → Open → Half-Open → Closed</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Trips when failure rate exceeds threshold</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Prevents cascade failures across services</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Distributed systems, calls to external services</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-proj cat-split">
      <h3>Repository</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="4" width="130" height="22" rx="4" fill="var(--accent,#7c3aed)"/>
          <text x="70" y="15" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Domain Logic</text>
          <line x1="70" y1="26" x2="70" y2="34" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="70,37 66,31 74,31" fill="#aaa"/>
          <rect x="5" y="37" width="130" height="20" rx="4" fill="none" stroke="var(--accent,#7c3aed)" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="70" y="47" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">«interface» Repository</text>
          <line x1="70" y1="57" x2="70" y2="65" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="70,68 66,62 74,62" fill="#aaa"/>
          <rect x="5" y="68" width="60" height="18" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
          <text x="35" y="77" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">SQL Adapter</text>
          <rect x="75" y="68" width="60" height="18" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
          <text x="105" y="77" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">NoSQL Adapter</text>
          <line x1="35" y1="86" x2="35" y2="93" stroke="#aaa" stroke-width="1"/>
          <text x="35" y="101" text-anchor="middle" font-size="7" fill="#555" font-family="sans-serif" dominant-baseline="middle">Postgres</text>
          <line x1="105" y1="86" x2="105" y2="93" stroke="#aaa" stroke-width="1"/>
          <text x="105" y="101" text-anchor="middle" font-size="7" fill="#555" font-family="sans-serif" dominant-baseline="middle">MongoDB</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Abstraction layer between domain &amp; data access</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Swap DB without touching business logic</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Enables clean unit tests with mocks</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Clean architecture, testability, multiple data sources</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-flow cat-split">
      <h3>Saga</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="36" height="20" rx="4" fill="var(--accent,#d97706)"/>
          <text x="20" y="15" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Tx 1</text>
          <text x="20" y="24" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Order</text>
          <line x1="38" y1="18" x2="48" y2="18" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="51,18 46,15 46,21" fill="#aaa"/>
          <rect x="52" y="8" width="36" height="20" rx="4" fill="var(--accent,#d97706)"/>
          <text x="70" y="15" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Tx 2</text>
          <text x="70" y="24" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Payment</text>
          <line x1="88" y1="18" x2="98" y2="18" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="101,18 96,15 96,21" fill="#aaa"/>
          <rect x="102" y="8" width="36" height="20" rx="4" fill="var(--accent,#d97706)"/>
          <text x="120" y="15" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Tx 3</text>
          <text x="120" y="24" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Ship</text>
          <line x1="4" y1="38" x2="136" y2="38" stroke="#eee" stroke-width="1"/>
          <text x="70" y="48" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" dominant-baseline="middle">⚠ Tx 3 fails → compensate backwards</text>
          <rect x="52" y="57" width="86" height="16" rx="3" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="95" y="65" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" dominant-baseline="middle">← Refund Payment (C-Tx2)</text>
          <line x1="52" y1="73" x2="52" y2="79" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2"/>
          <rect x="2" y="79" width="136" height="16" rx="3" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="70" y="87" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" dominant-baseline="middle">← Cancel Order (C-Tx1)</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Distributed tx as a sequence of local transactions</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Rollback via compensating transactions on failure</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Choreography (events) or Orchestration (coordinator)</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Microservices, long-running tx, eventual consistency</span></div>
        </div>
      </div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-feat" data-title="design-patterns">
  <div class="kicker">Capítulo 3 · Arquitectura Básica</div>
  <h2>Estos cuatro patrones previenen los fallos más comunes <span class="accent">en sistemas distribuidos</span></h2>
  <div class="refgrid refgrid-2">

    <div class="cat s-info cat-split">
      <h3>API Gateway</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="44" width="28" height="18" rx="3" fill="#f0f4ff" stroke="var(--accent,#3b82f6)" stroke-width="1.2"/>
          <text x="16" y="53" text-anchor="middle" font-size="7" fill="var(--accent,#3b82f6)" font-family="sans-serif" dominant-baseline="middle">Client</text>
          <line x1="30" y1="53" x2="40" y2="53" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="43,53 38,50 38,56" fill="#aaa"/>
          <rect x="43" y="35" width="38" height="36" rx="5" fill="var(--accent,#3b82f6)"/>
          <text x="62" y="48" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">API GW</text>
          <text x="62" y="60" text-anchor="middle" font-size="5.5" fill="white" font-family="sans-serif" dominant-baseline="middle">auth · rate · log</text>
          <line x1="81" y1="46" x2="95" y2="24" stroke="#aaa" stroke-width="1"/>
          <polygon points="97,21 90,24 94,30" fill="#aaa"/>
          <line x1="81" y1="53" x2="95" y2="53" stroke="#aaa" stroke-width="1"/>
          <polygon points="98,53 93,50 93,56" fill="#aaa"/>
          <line x1="81" y1="60" x2="95" y2="82" stroke="#aaa" stroke-width="1"/>
          <polygon points="97,85 94,78 90,82" fill="#aaa"/>
          <rect x="98" y="14" width="38" height="16" rx="3" fill="var(--accent,#3b82f6)" fill-opacity=".6"/>
          <text x="117" y="22" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Svc A</text>
          <rect x="98" y="45" width="38" height="16" rx="3" fill="var(--accent,#3b82f6)" fill-opacity=".6"/>
          <text x="117" y="53" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Svc B</text>
          <rect x="98" y="76" width="38" height="16" rx="3" fill="var(--accent,#3b82f6)" fill-opacity=".6"/>
          <text x="117" y="84" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" dominant-baseline="middle">Svc C</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Punto único de entrada para todos los clientes</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Routing, auth, rate limiting y logging centralizado</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Oculta la topología interna de servicios al cliente</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Microservicios, multi-cliente (web, móvil, IoT)</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-env cat-split">
      <h3>Circuit Breaker</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="20" rx="34" ry="14" fill="var(--accent,#0d9488)" opacity=".9"/>
          <text x="70" y="20" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">CLOSED ✓</text>
          <line x1="90" y1="30" x2="108" y2="57" stroke="#ef4444" stroke-width="1.3"/>
          <polygon points="109,61 102,56 108,52" fill="#ef4444"/>
          <text x="117" y="44" font-size="6" fill="#ef4444" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">fallo↑</text>
          <ellipse cx="105" cy="75" rx="30" ry="14" fill="#ef4444" opacity=".85"/>
          <text x="105" y="75" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">OPEN ✗</text>
          <line x1="77" y1="83" x2="57" y2="83" stroke="#f59e0b" stroke-width="1.3"/>
          <polygon points="54,83 60,80 60,86" fill="#f59e0b"/>
          <text x="67" y="94" font-size="6" fill="#f59e0b" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">timeout</text>
          <ellipse cx="35" cy="75" rx="30" ry="14" fill="#f59e0b" opacity=".85"/>
          <text x="35" y="75" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">HALF-OPEN</text>
          <line x1="46" y1="62" x2="57" y2="33" stroke="var(--accent,#0d9488)" stroke-width="1.3"/>
          <polygon points="58,30 52,35 59,39" fill="var(--accent,#0d9488)"/>
          <text x="38" y="45" font-size="6" fill="var(--accent,#0d9488)" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">ok</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Estados: Closed → Open → Half-Open → Closed</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Se activa cuando la tasa de fallos supera el umbral</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Evita fallos en cascada entre servicios</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Sistemas distribuidos, llamadas a servicios externos</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-proj cat-split">
      <h3>Repository</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="4" width="130" height="22" rx="4" fill="var(--accent,#7c3aed)"/>
          <text x="70" y="15" text-anchor="middle" font-size="8.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Lógica de Dominio</text>
          <line x1="70" y1="26" x2="70" y2="34" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="70,37 66,31 74,31" fill="#aaa"/>
          <rect x="5" y="37" width="130" height="20" rx="4" fill="none" stroke="var(--accent,#7c3aed)" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="70" y="47" text-anchor="middle" font-size="7.5" fill="var(--accent,#7c3aed)" font-family="sans-serif" font-weight="700" dominant-baseline="middle">«interface» Repository</text>
          <line x1="70" y1="57" x2="70" y2="65" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="70,68 66,62 74,62" fill="#aaa"/>
          <rect x="5" y="68" width="60" height="18" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
          <text x="35" y="77" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">SQL Adapter</text>
          <rect x="75" y="68" width="60" height="18" rx="3" fill="var(--accent,#7c3aed)" fill-opacity=".6"/>
          <text x="105" y="77" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">NoSQL Adapter</text>
          <line x1="35" y1="86" x2="35" y2="93" stroke="#aaa" stroke-width="1"/>
          <text x="35" y="101" text-anchor="middle" font-size="7" fill="#555" font-family="sans-serif" dominant-baseline="middle">Postgres</text>
          <line x1="105" y1="86" x2="105" y2="93" stroke="#aaa" stroke-width="1"/>
          <text x="105" y="101" text-anchor="middle" font-size="7" fill="#555" font-family="sans-serif" dominant-baseline="middle">MongoDB</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Capa de abstracción entre dominio y acceso a datos</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Cambia la DB sin tocar la lógica de negocio</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Permite tests unitarios limpios con mocks</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Arquitectura limpia, testabilidad, múltiples fuentes de datos</span></div>
        </div>
      </div>
    </div>

    <div class="cat s-flow cat-split">
      <h3>Saga</h3>
      <div class="cat-cols">
        <svg class="archsvg" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="36" height="20" rx="4" fill="var(--accent,#d97706)"/>
          <text x="20" y="15" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Tx 1</text>
          <text x="20" y="24" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Orden</text>
          <line x1="38" y1="18" x2="48" y2="18" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="51,18 46,15 46,21" fill="#aaa"/>
          <rect x="52" y="8" width="36" height="20" rx="4" fill="var(--accent,#d97706)"/>
          <text x="70" y="15" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Tx 2</text>
          <text x="70" y="24" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Pago</text>
          <line x1="88" y1="18" x2="98" y2="18" stroke="#aaa" stroke-width="1.4"/>
          <polygon points="101,18 96,15 96,21" fill="#aaa"/>
          <rect x="102" y="8" width="36" height="20" rx="4" fill="var(--accent,#d97706)"/>
          <text x="120" y="15" text-anchor="middle" font-size="7.5" fill="white" font-family="sans-serif" font-weight="700" dominant-baseline="middle">Tx 3</text>
          <text x="120" y="24" text-anchor="middle" font-size="6" fill="white" font-family="sans-serif" dominant-baseline="middle">Envío</text>
          <line x1="4" y1="38" x2="136" y2="38" stroke="#eee" stroke-width="1"/>
          <text x="70" y="48" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" dominant-baseline="middle">⚠ Tx 3 falla → compensar hacia atrás</text>
          <rect x="52" y="57" width="86" height="16" rx="3" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="95" y="65" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" dominant-baseline="middle">← Reembolsar Pago (C-Tx2)</text>
          <line x1="52" y1="73" x2="52" y2="79" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2"/>
          <rect x="2" y="79" width="136" height="16" rx="3" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="70" y="87" text-anchor="middle" font-size="6" fill="#ef4444" font-family="sans-serif" dominant-baseline="middle">← Cancelar Orden (C-Tx1)</text>
        </svg>
        <div class="cat-text">
          <div class="ln"><span class="k">·</span><span class="d">Tx distribuida como secuencia de transacciones locales</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Rollback vía transacciones compensatorias ante fallos</span></div>
          <div class="ln"><span class="k">·</span><span class="d">Coreografía (eventos) u Orquestación (coordinador central)</span></div>
          <div class="ln"><span class="k">✓</span><span class="d">Microservicios, tx long-running, consistencia eventual</span></div>
        </div>
      </div>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
