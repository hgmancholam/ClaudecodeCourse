(window._deck = window._deck || []).push({
en: `
<section class="slide s-short" data-title="custom-commands">
  <div class="kicker">Skills &amp; Commands</div>
  <h2><span class="accent">Custom</span> commands</h2>
  <div class="body grid2">

    <div class="skills-left">
      <ul class="points">
        <li><span class="ico">📄</span><span><b>Markdown files</b> that add <code class="inline">/name</code> to Claude — custom commands are now <b>Skills</b>. Write once, use in any session.</span></li>
        <li><span class="ico">📁</span><span><b>Two scopes:</b> project (<code class="inline">.claude/skills/</code>) for the repo, or personal (<code class="inline">~/.claude/skills/</code>) for all your projects.</span></li>
        <li><span class="ico">⚡</span><span><b>Dynamic context:</b> <code class="inline">!\`git diff HEAD\`</code> runs the command and injects its output into the prompt before sending to Claude.</span></li>
        <li><span class="ico">🔍</span><span>Invoke with <code class="inline">/name</code> or let Claude activate them <b>automatically</b> based on the <code class="inline">description</code>.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">SKILL.md</span>
      </div>
      <pre><span class="cm">---</span>
<span class="kw">description</span>: Review changes before commit.
<span class="cm">---</span>

<span class="fn">## Current Diff</span>
<span class="st">!\`git diff HEAD\`</span>

<span class="fn">## Instructions</span>
Analyze the changes and list:
<span class="nu">-</span> Potential bugs
<span class="nu">-</span> Security issues
<span class="nu">-</span> Tests to update</pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-short" data-title="custom-commands">
  <div class="kicker">Skills &amp; Comandos</div>
  <h2>Comandos <span class="accent">personalizados</span></h2>
  <div class="body grid2">

    <div class="skills-left">
      <ul class="points">
        <li><span class="ico">📄</span><span><b>Archivos Markdown</b> que añaden <code class="inline">/nombre</code> a Claude — los comandos personalizados ahora son <b>Skills</b>. Escríbelos una vez, úsalos en cualquier sesión.</span></li>
        <li><span class="ico">📁</span><span><b>Dos alcances:</b> proyecto (<code class="inline">.claude/skills/</code>) para el repo, o personal (<code class="inline">~/.claude/skills/</code>) para todos tus proyectos.</span></li>
        <li><span class="ico">⚡</span><span><b>Contexto dinámico:</b> <code class="inline">!\`git diff HEAD\`</code> ejecuta el comando e inyecta su salida en el prompt antes de enviarlo a Claude.</span></li>
        <li><span class="ico">🔍</span><span>Invoca con <code class="inline">/nombre</code> o deja que Claude los active <b>automáticamente</b> según la <code class="inline">description</code>.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">SKILL.md</span>
      </div>
      <pre><span class="cm">---</span>
<span class="kw">description</span>: Revisa cambios antes del commit.
<span class="cm">---</span>

<span class="fn">## Diff actual</span>
<span class="st">!\`git diff HEAD\`</span>

<span class="fn">## Instrucciones</span>
Analiza los cambios y lista:
<span class="nu">-</span> Bugs potenciales
<span class="nu">-</span> Problemas de seguridad
<span class="nu">-</span> Tests que actualizar</pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
