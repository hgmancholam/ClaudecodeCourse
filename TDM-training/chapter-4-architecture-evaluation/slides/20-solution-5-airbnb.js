(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="solution-5-airbnb">
  <div class="kicker">Scenario 5 · Airbnb ML Risk · Proposed Solution</div>
  <h2>What Airbnb <span class="accent">Identified &amp; Fixed</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">⚠️</span><span><b>Risk 1 — Training-serving skew.</b> Features computed in Python ≠ features computed in Java. PMML serialization gaps silently change behavior. <b>Fix: Chronon (Zipline)</b> — a unified feature platform that generates the same code from one definition for both offline training and online serving. One declaration, zero divergence.</span></li>
      <li><span class="ico">⏳</span><span><b>Risk 2 — Label delay = stale training data.</b> Model trains on 90-day-old confirmed labels → underestimates current fraud rate → recall drops silently. <b>Fix:</b> proxy labels (dispute initiation, velocity signals), survival analysis, and point-in-time correct feature joins to avoid future leakage.</span></li>
      <li><span class="ico">📉</span><span><b>Risk 3 — Concept drift is invisible until costly.</b> No error is thrown; accuracy metrics stay green while losses grow. <b>Fix:</b> monitor input feature distributions (PSI), model output score distributions, and business KPIs (dispute rate, loss rate) as drift proxies — before ground truth arrives.</span></li>
      <li><span class="ico">💡</span><span><b>Root cause insight (Airbnb, 2014):</b> "If your ground truth is inaccurate, you've already set an upper limit on your model quality." No algorithm improvement can exceed the ceiling imposed by bad labels.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lesson for your AI projects:</b> In ML pipelines, data quality is architecture. Training-serving skew, label delay, and concept drift are not model bugs — they are system design decisions. Instrument them before you ship, not after you lose money.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Sources:</b>&nbsp;
        <a href="https://medium.com/airbnb-engineering/architecting-a-machine-learning-system-for-risk-941abbba5a60" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">ML System for Risk — Airbnb</a> &nbsp;·&nbsp;
        <a href="https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Hidden Technical Debt in ML — NeurIPS 2015</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-feat" data-title="solution-5-airbnb">
  <div class="kicker">Escenario 5 · Airbnb ML Risk · Solución propuesta</div>
  <h2>Lo Que Airbnb <span class="accent">Identificó y Resolvió</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">⚠️</span><span><b>Riesgo 1 — Training-serving skew.</b> Features en Python ≠ features en Java. Las brechas de serialización PMML cambian el comportamiento silenciosamente. <b>Fix: Chronon (Zipline)</b> — plataforma unificada de features que genera el mismo código desde una sola definición para entrenamiento offline y serving online. Una declaración, cero divergencia.</span></li>
      <li><span class="ico">⏳</span><span><b>Riesgo 2 — Demora de etiquetas = datos de entrenamiento obsoletos.</b> El modelo entrena con etiquetas confirmadas con 90 días de antigüedad → subestima la tasa de fraude actual → el recall cae silenciosamente. <b>Fix:</b> etiquetas proxy (inicio de disputa, señales de velocidad), análisis de supervivencia y joins de features correctos en el tiempo para evitar leakage futuro.</span></li>
      <li><span class="ico">📉</span><span><b>Riesgo 3 — El concept drift es invisible hasta que sale caro.</b> No se lanza ningún error; las métricas de precisión siguen en verde mientras las pérdidas crecen. <b>Fix:</b> monitorear distribuciones de features de entrada (PSI), distribuciones del score del modelo y KPIs de negocio (tasa de disputa, tasa de pérdida) como proxies de drift — antes de que llegue el ground truth.</span></li>
      <li><span class="ico">💡</span><span><b>Insight raíz (Airbnb, 2014):</b> "Si tu ground truth es inexacto, ya estableciste un límite máximo a la calidad de tu modelo." Ninguna mejora algorítmica puede superar el techo impuesto por etiquetas deficientes.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Lección para tus proyectos de IA:</b> En pipelines de ML, la calidad de datos es arquitectura. El training-serving skew, la demora de etiquetas y el concept drift no son bugs del modelo — son decisiones de diseño del sistema. Instrumméntalos antes de lanzar, no después de perder dinero.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Fuentes:</b>&nbsp;
        <a href="https://medium.com/airbnb-engineering/architecting-a-machine-learning-system-for-risk-941abbba5a60" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Sistema ML para Riesgo — Airbnb</a> &nbsp;·&nbsp;
        <a href="https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Deuda Técnica Oculta en ML — NeurIPS 2015</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
