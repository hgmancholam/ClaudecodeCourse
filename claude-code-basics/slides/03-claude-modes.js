(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="claude-modes">
  <div class="kicker">Interaction</div>
  <h2>Interaction <span class="accent">modes</span></h2>
  <div class="body grid2">

    <div class="sdk-left">
      <ul class="points">
        <li><span class="ico">1</span><span><b>Default</b> — asks for approval before running any potentially harmful tool. The safe mode for everyday development.</span></li>
        <li><span class="ico">2</span><span><b>Plan</b> — Claude drafts every step before touching code. Review and adjust the plan, then confirm execution.</span></li>
        <li><span class="ico">3</span><span><b>Auto</b> — runs without routine permission prompts; a background classifier blocks any action that escalates beyond your request or targets unrecognized infrastructure.</span></li>
        <li><span class="ico">⇧</span><span><b>Shift+Tab</b> cycles Default → accept-edits → Plan in any session. Launch a mode directly with <code class="inline">claude --permission-mode plan</code>.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Shift+Tab</span>
      </div>
      <pre>  <span class="kw">Default</span>      <span class="cm">← safe, asks permission</span>
    ↓ Shift+Tab

  <span class="kw">accept-edits</span> <span class="cm">← auto-applies file edits</span>
    ↓ Shift+Tab

  <span class="kw">Plan</span>         <span class="cm">← plan first, then act</span>
    ↓ Shift+Tab → Default


<span class="cm"># Launch a mode directly</span>
<span class="st">claude --permission-mode plan</span>
<span class="st">claude --permission-mode acceptEdits</span></pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="claude-modes">
  <div class="kicker">Interacción</div>
  <h2>Modos de <span class="accent">interacción</span></h2>
  <div class="body grid2">

    <div class="sdk-left">
      <ul class="points">
        <li><span class="ico">1</span><span><b>Default</b> — pide aprobación antes de ejecutar herramientas potencialmente peligrosas. El modo seguro para el trabajo diario.</span></li>
        <li><span class="ico">2</span><span><b>Plan</b> — Claude redacta cada paso antes de tocar el código. Revisa el plan, ajusta si es necesario y confirma la ejecución.</span></li>
        <li><span class="ico">3</span><span><b>Auto</b> — ejecuta sin pedir permisos de rutina; un clasificador en segundo plano bloquea cualquier acción que exceda tu petición o apunte a infraestructura no reconocida.</span></li>
        <li><span class="ico">⇧</span><span><b>Shift+Tab</b> alterna Default → accept-edits → Plan en cualquier sesión. Inicia un modo directo con <code class="inline">claude --permission-mode plan</code>.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Shift+Tab</span>
      </div>
      <pre>  <span class="kw">Default</span>      <span class="cm">← seguro, pide permiso</span>
    ↓ Shift+Tab

  <span class="kw">accept-edits</span> <span class="cm">← auto-aplica ediciones</span>
    ↓ Shift+Tab

  <span class="kw">Plan</span>         <span class="cm">← planifica primero</span>
    ↓ Shift+Tab → Default


<span class="cm"># Iniciar un modo directo</span>
<span class="st">claude --permission-mode plan</span>
<span class="st">claude --permission-mode acceptEdits</span></pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
