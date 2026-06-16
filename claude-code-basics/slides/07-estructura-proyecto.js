(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="estructura-proyecto">
  <div class="kicker">Project</div>
  <h2>Basic structure of a <span class="accent">project</span></h2>
  <div class="body grid2">

    <div class="filetree">
<span class="dir">my-project/</span>
├── <span class="dir">CLAUDE.md</span>
├── <span class="dir">.mcp.json</span>  <span class="note">← project MCP servers</span>
├── <span class="dir">.claude/</span>
│   ├── settings.json
│   ├── <span class="optional">settings.local.json</span>  <span class="note">← gitignore</span>
│   ├── <span class="dir">agents/</span>  <span class="note">← subagents</span>
│   │   └── my-subagent.md
│   ├── <span class="dir">skills/</span>  <span class="note">← slash commands</span>
│   │   └── my-skill/SKILL.md
│   ├── <span class="dir">hooks/</span>
│   │   └── pre-tool.sh
│   └── <span class="dir">workflows/</span>
│       └── my-workflow.js
├── <span class="optional dir">memory/</span>  <span class="note">← optional</span>
│   └── context.md
└── <span class="note">… rest of the project</span>
    </div>

    <dl class="defs">
      <dt>CLAUDE.md</dt>
      <dd>Permanent instructions for Claude: architecture, project commands, conventions. Loaded automatically every session.</dd>

      <dt>settings.json</dt>
      <dd>Permissions, lifecycle hooks, and project environment variables. Versioned with the repo.</dd>

      <dt>settings.local.json</dt>
      <dd>Personal overrides: extra permissions, local tokens. Goes in <code class="inline">.gitignore</code> — never to the repo.</dd>

      <dt>.mcp.json</dt>
      <dd>Project MCP servers — lives at the repo root and is versioned with it: defines which external tools (databases, APIs, services) are available to Claude.</dd>

      <dt>skills/</dt>
      <dd>Skills: each <code class="inline">.claude/skills/&lt;name&gt;/SKILL.md</code> adds a <code class="inline">/name</code> command, auto-triggered by its <code class="inline">description</code>. Legacy <code class="inline">.claude/commands/*.md</code> still work.</dd>

      <dt>hooks/</dt>
      <dd>Scripts that run automatically on lifecycle events: before/after each tool, when starting or stopping the session. Configured in <code class="inline">settings.json</code>.</dd>

      <dt>workflows/</dt>
      <dd>Saved multi-agent orchestration scripts. Run with <code class="inline">/workflows</code> or by invoking the name.</dd>

      <dt>memory/</dt>
      <dd>Project persistent memory files: user, feedback, context. Claude reads and updates them between sessions.</dd>
    </dl>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-feat" data-title="estructura-proyecto">
  <div class="kicker">Proyecto</div>
  <h2>Estructura básica de un <span class="accent">proyecto</span></h2>
  <div class="body grid2">

    <div class="filetree">
<span class="dir">mi-proyecto/</span>
├── <span class="dir">CLAUDE.md</span>
├── <span class="dir">.mcp.json</span>  <span class="note">← servidores MCP</span>
├── <span class="dir">.claude/</span>
│   ├── settings.json
│   ├── <span class="optional">settings.local.json</span>  <span class="note">← gitignore</span>
│   ├── <span class="dir">agents/</span>  <span class="note">← subagents</span>
│   │   └── mi-subagente.md
│   ├── <span class="dir">skills/</span>  <span class="note">← slash commands</span>
│   │   └── mi-skill/SKILL.md
│   ├── <span class="dir">hooks/</span>
│   │   └── pre-tool.sh
│   └── <span class="dir">workflows/</span>
│       └── mi-workflow.js
├── <span class="optional dir">memory/</span>  <span class="note">← opcional</span>
│   └── contexto.md
└── <span class="note">… resto del proyecto</span>
    </div>

    <dl class="defs">
      <dt>CLAUDE.md</dt>
      <dd>Instrucciones permanentes para Claude: arquitectura, comandos del proyecto, convenciones. Se carga en cada sesión automáticamente.</dd>

      <dt>settings.json</dt>
      <dd>Permisos, hooks del ciclo de vida y variables de entorno del proyecto. Se versiona con el repo.</dd>

      <dt>settings.local.json</dt>
      <dd>Overrides personales: permisos extra, tokens locales. Va en <code class="inline">.gitignore</code> — nunca al repo.</dd>

      <dt>.mcp.json</dt>
      <dd>Servidores MCP del proyecto — vive en la raíz del repo y se versiona con él: define qué herramientas externas (bases de datos, APIs, servicios) están disponibles para Claude.</dd>

      <dt>skills/</dt>
      <dd>Skills: cada <code class="inline">.claude/skills/&lt;nombre&gt;/SKILL.md</code> añade un comando <code class="inline">/nombre</code>, auto-activado por su <code class="inline">description</code>. Los <code class="inline">.claude/commands/*.md</code> heredados siguen funcionando.</dd>

      <dt>hooks/</dt>
      <dd>Scripts que se ejecutan automáticamente en eventos del ciclo de vida: antes/después de cada herramienta, al iniciar o detener la sesión. Se configuran en <code class="inline">settings.json</code>.</dd>

      <dt>workflows/</dt>
      <dd>Scripts de orquestación multi-agente guardados. Se ejecutan con <code class="inline">/workflows</code> o invocando el nombre.</dd>

      <dt>memory/</dt>
      <dd>Archivos de memoria persistente del proyecto: usuario, feedback, contexto. Claude los lee y actualiza entre sesiones.</dd>
    </dl>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
