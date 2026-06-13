(window._deck = window._deck || []).push({
en: `
<section class="slide s-flow" data-title="contexto-memoria">
  <div class="kicker">Context &amp; Memory</div>
  <h2>How Claude <span class="accent">remembers</span> your project</h2>
  <div class="body grid2">

    <div class="ctx-left">
      <ul class="points">
        <li><span class="ico">📄</span><span><code class="inline">CLAUDE.md</code> — instructions <b>you write</b>; loaded at the start of every session. The foundation of persistent context.</span></li>
        <li><span class="ico">🧠</span><span><b>Automatic memory</b> — Claude records learnings from your corrections without you writing anything.</span></li>
        <li><span class="ico">⚡</span><span><b>Context commands:</b> <code class="inline">/compact</code> compresses the conversation to free tokens; <code class="inline">/clear</code> resets history. Use them to keep long sessions sharp.</span></li>
        <li><span class="ico">🔍</span><span><code class="inline">/init</code> — Claude analyzes your project and <b>auto-generates CLAUDE.md</b>. Use <code class="inline">@file</code> in chat to pin specific files to context.</span></li>
      </ul>
    </div>

    <div class="callout">
      <b>CLAUDE.md Scopes</b><br><br>
      <code class="inline">~/.claude/CLAUDE.md</code><br>→ all your projects<br><br>
      <code class="inline">./CLAUDE.md</code><br>→ team via git<br><br>
      <code class="inline">./CLAUDE.local.md</code><br>→ just you (gitignore)
    </div>

  </div>
  <footer><span class="brand">Inspyr Global Solutions <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-flow" data-title="contexto-memoria">
  <div class="kicker">Contexto &amp; Memoria</div>
  <h2>Cómo Claude <span class="accent">recuerda</span> tu proyecto</h2>
  <div class="body grid2">

    <div class="ctx-left">
      <ul class="points">
        <li><span class="ico">📄</span><span><code class="inline">CLAUDE.md</code> — instrucciones que <b>tú escribes</b>; se cargan al inicio de cada sesión. La base del contexto persistente.</span></li>
        <li><span class="ico">🧠</span><span><b>Memoria automática</b> — Claude registra aprendizajes de tus correcciones sin que escribas nada.</span></li>
        <li><span class="ico">⚡</span><span><b>Comandos de contexto:</b> <code class="inline">/compact</code> comprime la conversación para liberar tokens; <code class="inline">/clear</code> reinicia el historial. Úsalos para mantener sesiones largas productivas.</span></li>
        <li><span class="ico">🔍</span><span><code class="inline">/init</code> — Claude analiza tu proyecto y <b>genera CLAUDE.md</b> automáticamente. Usa <code class="inline">@archivo</code> en el chat para fijar archivos específicos al contexto.</span></li>
      </ul>
    </div>

    <div class="callout">
      <b>Alcances de CLAUDE.md</b><br><br>
      <code class="inline">~/.claude/CLAUDE.md</code><br>→ todos tus proyectos<br><br>
      <code class="inline">./CLAUDE.md</code><br>→ equipo vía git<br><br>
      <code class="inline">./CLAUDE.local.md</code><br>→ solo tú (gitignore)
    </div>

  </div>
  <footer><span class="brand">Inspyr Global Solutions <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`
});
