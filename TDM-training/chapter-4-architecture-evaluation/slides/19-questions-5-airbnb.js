(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="questions-5-airbnb">
  <div class="kicker">Scenario 5 · Airbnb ML Risk · 15 minutes</div>
  <h2>What Would <span class="accent">You Decide?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Training-serving skew.</b> Python computes features for training; Java computes features for scoring. If the logic diverges 5%, the model's real-world performance will be systematically worse than its test accuracy. What architectural change eliminates this risk entirely?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Ground truth delay.</b> A model trained with 30-day-old labels underestimates recent fraud patterns — fraud rate appears artificially low while it is actually rising. How do you train reliably when your labels arrive weeks late? What proxy signals could substitute?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Concept drift detection.</b> The model's offline AUC is 0.92, but real fraud losses are increasing. No system alert is triggered because no code changed. How do you detect that the model is degrading in production without waiting for chargeback reports?</span></li>
      <li><span class="ico">4️⃣</span><span><b>PMML serialization risk.</b> PMML is a standard, but producers (scikit-learn) and consumers (JPMML) implement subsets of the spec differently. A valid PMML file may silently score differently in Java than in Python. How do you validate the serialization before deploying?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Use /ai-architect:</b> "Identify the architectural risks in a Python-trained, PMML-serialized, Java-scored fraud detection pipeline with 30–90 day label delay. For each risk, propose a mitigation." Then compare risk ranking with the team.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Read first:</b>&nbsp;
        <a href="https://medium.com/airbnb-engineering/architecting-a-machine-learning-system-for-risk-941abbba5a60" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Airbnb ML for Risk — 2014</a> &nbsp;·&nbsp;
        <a href="https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Hidden Technical Debt in ML Systems</a> &nbsp;·&nbsp;
        <a href="https://medium.com/airbnb-engineering/fighting-financial-fraud-with-targeted-friction-82d950d8900e" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Fighting Financial Fraud — Airbnb</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="questions-5-airbnb">
  <div class="kicker">Escenario 5 · Airbnb ML Risk · 15 minutos</div>
  <h2>¿Qué <span class="accent">Decidirías Tú?</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1️⃣</span><span><b>Training-serving skew.</b> Python calcula features para entrenamiento; Java las calcula para scoring. Si la lógica diverge un 5%, el rendimiento real del modelo será sistemáticamente peor que su precisión en pruebas. ¿Qué cambio arquitectónico elimina completamente este riesgo?</span></li>
      <li><span class="ico">2️⃣</span><span><b>Demora del ground truth.</b> Un modelo entrenado con etiquetas de 30 días de antigüedad subestima los patrones de fraude recientes — la tasa de fraude parece artificialmente baja mientras en realidad está subiendo. ¿Cómo entrenas de forma confiable cuando las etiquetas llegan semanas tarde? ¿Qué señales proxy podrían sustituirlas?</span></li>
      <li><span class="ico">3️⃣</span><span><b>Detección de concept drift.</b> El AUC offline del modelo es 0.92, pero las pérdidas por fraude están aumentando. No se activa ninguna alerta porque no hubo cambios en el código. ¿Cómo detectas que el modelo se está degradando en producción sin esperar los reportes de contracargos?</span></li>
      <li><span class="ico">4️⃣</span><span><b>Riesgo de serialización PMML.</b> PMML es un estándar, pero productores (scikit-learn) y consumidores (JPMML) implementan subconjuntos distintos de la especificación. Un archivo PMML válido puede dar scores silenciosamente diferentes en Java que en Python. ¿Cómo validas la serialización antes de desplegar?</span></li>
    </ul>
    <div class="callout" style="grid-column:1/-1">
      <b>💡 Usa /ai-architect:</b> "Identifica los riesgos arquitectónicos en un pipeline de detección de fraude entrenado en Python, serializado en PMML y puntuado en Java con demora de etiquetas de 30–90 días. Por cada riesgo, propón una mitigación." Luego compara el ranking de riesgos con el equipo.
      <div style="margin-top:1.2cqmin;padding-top:1cqmin;border-top:1px solid rgba(255,255,255,.2);font-size:1.55cqmin;opacity:.85">
        📚 <b>Lee primero:</b>&nbsp;
        <a href="https://medium.com/airbnb-engineering/architecting-a-machine-learning-system-for-risk-941abbba5a60" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">ML para Riesgo — Airbnb 2014</a> &nbsp;·&nbsp;
        <a href="https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Deuda Técnica Oculta en Sistemas ML</a> &nbsp;·&nbsp;
        <a href="https://medium.com/airbnb-engineering/fighting-financial-fraud-with-targeted-friction-82d950d8900e" target="_blank" rel="noopener" style="color:currentColor;text-decoration:underline">Combatiendo el Fraude — Airbnb</a>
      </div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
