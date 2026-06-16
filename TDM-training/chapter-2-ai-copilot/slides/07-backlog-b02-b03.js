(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-feat" data-title="backlog-b02-b03">
  <div class="kicker">Chapter 2 · Backlog · B-02 / B-03</div>
  <h2>Dependencies &amp; <span class="accent">Prioritization</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">B-02 · Hidden Dependencies</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT B-02</span>
        </div>
        <pre><span class="st">You are a delivery manager specialized
in dependency and sequencing risk.</span>
<span class="cm">// ADO MCP: fetch sprint items</span>
<span class="kw">Project:</span> <span class="fn">[ADO PROJECT]</span> <span class="kw">Team:</span> <span class="fn">[TEAM]</span>
<span class="kw">Sprint:</span>  <span class="fn">[SPRINT NAME or NUMBER]</span>

For each story, identify:
- Direct blocks (Story A → Story B)
- External deps (other team/system/API)
- Sequencing risk if order is wrong

<span class="kw">[OUTPUT]</span> Dependency table + ordered list:
<span class="cm">| Story ID | Depends On | Dep Type | Risk |</span>
Then: recommended commit order (1 → N).
<span class="kw">[CONSTRAINT]</span> Mark uncertain deps as
<span class="fn">[VERIFY WITH TEAM]</span>. Don't assume resolved.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">💡 Ask this <b>before</b> committing the sprint — not after the first blocker appears.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">B-03 · Business Prioritization</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT B-03</span>
        </div>
        <pre><span class="st">You are a Product Manager with
strategic and commercial vision.</span>
<span class="kw">Quarter goal:</span> <span class="fn">[SPECIFIC BUSINESS GOAL]</span>
<span class="kw">Items:</span> <span class="fn">[LIST or ADO backlog fetch]</span>
<span class="kw">Team capacity:</span> <span class="fn">[N]</span> SP this quarter

Score each item using <span class="kw">RICE</span>:
<span class="cm">Reach × Impact × Confidence ÷ Effort
(1–10 scale; Effort in person-weeks)</span>

<span class="kw">[OUTPUT]</span> Ranked Markdown table:
<span class="cm">| Item | R | I | C | E | RICE | Verdict |</span>
Top 3: add <span class="fn">"Why now?"</span> (1 line each).
<span class="kw">[CONSTRAINT]</span> If data is missing → estimate
and mark <span class="fn">(est.)</span>. Flag items that conflict
with the quarter goal.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">⚠️ "Priorizar todo" no es priorizar. RICE fuerza una decisión numérica defendible ante stakeholders.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-feat" data-title="backlog-b02-b03">
  <div class="kicker">Capítulo 2 · Backlog · B-02 / B-03</div>
  <h2>Dependencias y <span class="accent">Priorización</span></h2>
  <div class="body grid2">
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">B-02 · Dependencias Ocultas</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT B-02</span>
        </div>
        <pre><span class="st">Eres un delivery manager especializado
en dependencias y riesgo de secuenciación.</span>
<span class="cm">// ADO MCP: obtén historias del sprint</span>
<span class="kw">Proyecto:</span> <span class="fn">[PROYECTO ADO]</span> <span class="kw">Equipo:</span> <span class="fn">[EQUIPO]</span>
<span class="kw">Sprint:</span>   <span class="fn">[NOMBRE o NÚMERO DEL SPRINT]</span>

Por cada historia, identifica:
- Bloqueos directos (Historia A → Historia B)
- Deps externas (otro equipo/sistema/API)
- Riesgo de secuenciación si el orden es incorrecto

<span class="kw">[OUTPUT]</span> Tabla de dependencias + lista ordenada:
<span class="cm">| ID Historia | Depende De | Tipo Dep | Riesgo |</span>
Luego: orden de commit recomendado (1 → N).
<span class="kw">[RESTRICCIÓN]</span> Marca deps inciertas como
<span class="fn">[VERIFICAR CON EQUIPO]</span>. No asumas resueltas.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">💡 Úsalo <b>antes</b> de comprometer el sprint — no después del primer bloqueo.</div>
    </div>
    <div>
      <div style="font-size:1.7cqmin;font-weight:800;color:var(--accent);margin-bottom:.7cqmin;text-transform:uppercase;letter-spacing:.12cqmin;">B-03 · Priorización con Criterio</div>
      <div class="codeblock">
        <div class="cb-bar">
          <div class="cb-dots"><span></span><span></span><span></span></div>
          <span class="cb-lang">PROMPT B-03</span>
        </div>
        <pre><span class="st">Eres un Product Manager con
visión estratégica y comercial.</span>
<span class="kw">Objetivo del trimestre:</span> <span class="fn">[META DE NEGOCIO]</span>
<span class="kw">Ítems:</span> <span class="fn">[LISTA o fetch backlog ADO]</span>
<span class="kw">Capacidad del equipo:</span> <span class="fn">[N]</span> SP este trimestre

Puntúa cada ítem con <span class="kw">RICE</span>:
<span class="cm">Reach × Impact × Confidence ÷ Effort
(escala 1–10; Effort en persona-semanas)</span>

<span class="kw">[OUTPUT]</span> Tabla Markdown ordenada:
<span class="cm">| Ítem | R | I | C | E | RICE | Veredicto |</span>
Top 3: agrega <span class="fn">"¿Por qué ahora?"</span> (1 línea c/u).
<span class="kw">[RESTRICCIÓN]</span> Si faltan datos → estima y marca
<span class="fn">(est.)</span>. Señala ítems que contradigan el objetivo.</pre>
      </div>
      <div style="font-size:1.65cqmin;color:var(--muted);margin-top:.6cqmin;">⚠️ "Priorizar todo" no es priorizar. RICE genera una decisión numérica defendible ante stakeholders.</div>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
