(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-feat" data-title="backlog-b01">
  <div class="kicker">Chapter 2 · Backlog · B-01</div>
  <h2>User Story <span class="accent">Audit</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💡</span><span><b>Key tip:</b> INVEST analysis is only as good as your context. Include tech stack and team experience — a "Small" story for a senior differs from a junior's.</span></li>
      <li><span class="ico">⚠️</span><span><b>Common mistake:</b> asking "is this a good story?" — too vague. Ask for INVEST criterion-by-criterion and Gherkin ACs specifically.</span></li>
      <li><span class="ico">🔗</span><span><b>With ADO MCP:</b> replace [PASTE STORY] with the work item ID. Claude fetches title, description, and existing ACs automatically.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT B-01</span>
      </div>
      <pre><span class="st">You are a senior Scrum Master and
certified Business Analyst.</span>
<span class="cm">// ADO MCP: fetch work item #[ID]
// Otherwise: paste story below</span>
<span class="kw">Story:</span> <span class="fn">[#ID or paste here]</span>
<span class="kw">Team context:</span> <span class="fn">[seniority · stack · sprint N]</span>

Evaluate this story:
<span class="nu">1.</span> <span class="kw">INVEST</span> — one line per criterion: ✅/❌ + reason
<span class="nu">2.</span> Acceptance criteria in <span class="kw">Gherkin</span>:
   <span class="cm">Given [context] When [action] Then [outcome]</span>
<span class="nu">3.</span> Rewrite: <span class="cm">As a [user] I want [goal] So that [value]</span>

<span class="kw">[OUTPUT]</span> Three Markdown sections:
<span class="cm">## INVEST | ## Acceptance Criteria | ## Rewrite</span>
<span class="kw">[CONSTRAINT]</span> Don't invent ACs → mark <span class="fn">[NEEDS CLARIFICATION]</span>
If story seems &gt; 8 SP → suggest how to split it.</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-feat" data-title="backlog-b01">
  <div class="kicker">Capítulo 2 · Backlog · B-01</div>
  <h2>Auditoría de <span class="accent">Historia de Usuario</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">💡</span><span><b>Clave:</b> el análisis INVEST es tan bueno como tu contexto. Incluye stack y experiencia del equipo — una historia "Small" para un senior no lo es para un junior.</span></li>
      <li><span class="ico">⚠️</span><span><b>Error común:</b> preguntar "¿es una buena historia?" — demasiado vago. Pide INVEST criterio por criterio y ACs en Gherkin específicamente.</span></li>
      <li><span class="ico">🔗</span><span><b>Con ADO MCP:</b> reemplaza [PEGAR HISTORIA] con el ID del work item. Claude obtiene título, descripción y ACs existentes automáticamente.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">PROMPT B-01</span>
      </div>
      <pre><span class="st">Eres un Scrum Master senior y
Business Analyst certificado.</span>
<span class="cm">// ADO MCP: obtén work item #[ID]
// Si no: pega la historia abajo</span>
<span class="kw">Historia:</span> <span class="fn">[#ID o pegar aquí]</span>
<span class="kw">Contexto:</span> <span class="fn">[seniority · stack · sprint N]</span>

Evalúa esta historia:
<span class="nu">1.</span> <span class="kw">INVEST</span> — una línea por criterio: ✅/❌ + razón
<span class="nu">2.</span> Criterios de aceptación en <span class="kw">Gherkin</span>:
   <span class="cm">Given [contexto] When [acción] Then [resultado]</span>
<span class="nu">3.</span> Reescritura: <span class="cm">As a [usuario] I want [goal] So that [valor]</span>

<span class="kw">[OUTPUT]</span> Tres secciones Markdown:
<span class="cm">## INVEST | ## Criterios Aceptación | ## Reescritura</span>
<span class="kw">[RESTRICCIÓN]</span> No inventes ACs → marca <span class="fn">[NECESITA ACLARACIÓN]</span>
Si parece &gt; 8 SP → sugiere cómo dividirla.</pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
