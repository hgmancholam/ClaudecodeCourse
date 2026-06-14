(window._deck = window._deck || []).push({
en: `
<section class="slide s-env" data-title="hooks">
  <div class="kicker">Automation</div>
  <h2>Hooks: <span class="accent">deterministic</span> control</h2>
  <div class="body grid2">

    <div class="hooks-left">
      <ul class="points">
        <li><span class="ico">🔒</span><span><b>Always run,</b> independent of the LLM. Ideal for non-optional project rules.</span></li>
        <li><span class="ico">⬅</span><span><code class="inline">PreToolUse</code> — before a tool. Can <b>block</b> the action (exit 2) or modify the input.</span></li>
        <li><span class="ico">➡</span><span><code class="inline">PostToolUse</code> — after a tool. E.g.: auto-format, logs, validations.</span></li>
        <li><span class="ico">🔔</span><span><code class="inline">Notification</code> / <code class="inline">SessionStart</code> — alerts when Claude is waiting for input; re-inject context after compaction.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">settings.json</span>
      </div>
      <pre><span class="st">"hooks"</span>: {
  <span class="st">"PreToolUse"</span>: [{
    <span class="kw">"matcher"</span>: <span class="st">"Edit|Write"</span>,
    <span class="kw">"hooks"</span>: [{
      <span class="kw">"type"</span>: <span class="st">"command"</span>,
      <span class="kw">"command"</span>: <span class="st">".claude/hooks/protect-files.sh"</span>
    }]
  }],
  <span class="st">"PostToolUse"</span>: [{
    <span class="kw">"matcher"</span>: <span class="st">"Edit|Write"</span>,
    <span class="kw">"hooks"</span>: [{
      <span class="kw">"type"</span>: <span class="st">"command"</span>,
      <span class="kw">"command"</span>: <span class="st">"npx prettier --write"</span>
    }]
  }]
}</pre>
    </div>

  </div>
  <footer><span class="brand">AI capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-env" data-title="hooks">
  <div class="kicker">Automatización</div>
  <h2>Hooks: control <span class="accent">determinístico</span></h2>
  <div class="body grid2">

    <div class="hooks-left">
      <ul class="points">
        <li><span class="ico">🔒</span><span><b>Siempre se ejecutan,</b> sin depender del LLM. Ideales para reglas de proyecto que no son opcionales.</span></li>
        <li><span class="ico">⬅</span><span><code class="inline">PreToolUse</code> — antes de una herramienta. Puede <b>bloquear</b> la acción (exit 2) o modificar el input.</span></li>
        <li><span class="ico">➡</span><span><code class="inline">PostToolUse</code> — después de una herramienta. Ej: auto-formato, logs, validaciones.</span></li>
        <li><span class="ico">🔔</span><span><code class="inline">Notification</code> / <code class="inline">SessionStart</code> — alertas cuando Claude espera input; re-inyectar contexto tras compactación.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">settings.json</span>
      </div>
      <pre><span class="st">"hooks"</span>: {
  <span class="st">"PreToolUse"</span>: [{
    <span class="kw">"matcher"</span>: <span class="st">"Edit|Write"</span>,
    <span class="kw">"hooks"</span>: [{
      <span class="kw">"type"</span>: <span class="st">"command"</span>,
      <span class="kw">"command"</span>: <span class="st">".claude/hooks/protect-files.sh"</span>
    }]
  }],
  <span class="st">"PostToolUse"</span>: [{
    <span class="kw">"matcher"</span>: <span class="st">"Edit|Write"</span>,
    <span class="kw">"hooks"</span>: [{
      <span class="kw">"type"</span>: <span class="st">"command"</span>,
      <span class="kw">"command"</span>: <span class="st">"npx prettier --write"</span>
    }]
  }]
}</pre>
    </div>

  </div>
  <footer><span class="brand">AI capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`
});
