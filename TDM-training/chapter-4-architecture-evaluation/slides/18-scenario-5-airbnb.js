(window._deck = window._deck || []).push({
en: `
<section class="slide s-short" data-title="scenario-5-airbnb">
  <div class="kicker">Chapter 4 · Scenario 5 of 5 · Airbnb</div>
  <h2>ML Fraud Detection: <span class="accent">Risks in Production</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💸</span><span><b>2014: $10M+/year in payment fraud.</b> Airbnb trains a fraud risk model in Python (scikit-learn) on historical booking data. The model is serialized to PMML and executed in Java (via Openscoring/JPMML) at booking time to produce a risk score.</span></li>
      <li><span class="ico">⏳</span><span><b>30–90 day ground truth delay.</b> Whether a booking was fraudulent is confirmed only when a chargeback or dispute arrives — weeks after the booking. The model trains on incomplete labels for recent transactions.</span></li>
      <li><span class="ico">🔄</span><span><b>Feature computation mismatch.</b> Training features are computed in Python. Production risk scores are computed in Java using a different code path. Any divergence between the two creates a systematic gap between what the model learned and what it scores.</span></li>
      <li><span class="ico">🦹</span><span><b>Adversarial drift.</b> Fraud patterns evolve as criminals observe and adapt to the model's behavior. A model trained on Q1 fraud tactics may miss Q3 fraud tactics entirely — without any visible system error.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Your mission</b> — Identify the top 3 architectural risks in this pipeline. For each risk, define: (a) how it manifests in production, (b) how you would detect it, and (c) one architectural change that mitigates it.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>References:</b>&nbsp;
        <a href="https://medium.com/airbnb-engineering/architecting-a-machine-learning-system-for-risk-941abbba5a60" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">ML System for Risk — Airbnb 2014</a> &nbsp;·&nbsp;
        <a href="https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Hidden Technical Debt in ML — Sculley et al. (NeurIPS 2015)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-short" data-title="scenario-5-airbnb">
  <div class="kicker">Capítulo 4 · Escenario 5 de 5 · Airbnb</div>
  <h2>Detección de Fraude con ML: <span class="accent">Riesgos en Producción</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💸</span><span><b>2014: $10M+/año en fraude de pagos.</b> Airbnb entrena un modelo de riesgo de fraude en Python (scikit-learn) con datos históricos de reservas. El modelo se serializa a PMML y se ejecuta en Java (via Openscoring/JPMML) al momento de la reserva para generar un score de riesgo.</span></li>
      <li><span class="ico">⏳</span><span><b>Demora de 30–90 días en el ground truth.</b> Si una reserva fue fraudulenta se confirma solo cuando llega un contracargo o disputa — semanas después. El modelo entrena con etiquetas incompletas para transacciones recientes.</span></li>
      <li><span class="ico">🔄</span><span><b>Desajuste en el cálculo de features.</b> Las features de entrenamiento se calculan en Python. Los scores de riesgo en producción se calculan en Java con un camino de código diferente. Cualquier divergencia crea una brecha sistemática entre lo que el modelo aprendió y lo que puntúa.</span></li>
      <li><span class="ico">🦹</span><span><b>Drift adversarial.</b> Los patrones de fraude evolucionan a medida que los defraudadores observan y adaptan su comportamiento al modelo. Un modelo entrenado con tácticas de fraude del Q1 puede pasar por alto completamente las del Q3 — sin ningún error visible del sistema.</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>Tu misión</b> — Identifica los 3 riesgos arquitectónicos principales en este pipeline. Por cada riesgo, define: (a) cómo se manifiesta en producción, (b) cómo lo detectarías, y (c) un cambio arquitectónico que lo mitigue.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Referencias:</b>&nbsp;
        <a href="https://medium.com/airbnb-engineering/architecting-a-machine-learning-system-for-risk-941abbba5a60" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Sistema ML para Riesgo — Airbnb 2014</a> &nbsp;·&nbsp;
        <a href="https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Deuda Técnica Oculta en ML — Sculley et al. (NeurIPS 2015)</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
