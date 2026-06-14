(window._deck = window._deck || []).push({
en: `
<section class="slide s-feat" data-title="estructura-proyecto">
  <div class="kicker">Project</div>
  <h2>Basic structure of a <span class="accent">project</span></h2>
  <div class="body grid2">

    <div class="filetree">
<span class="dir">my-project/</span>
├── <span class="dir">CLAUDE.md</span>
├── <span class="dir">.claude/</span>
│   ├── settings.json
│   ├── <span class="optional">settings.local.json</span>  <span class="note">← gitignore</span>
│   ├── mcp.json
│   ├── <span class="dir">agents/</span>  <span class="note">← subagents</span>
│   │   └── my-subagent.md
│   ├── <span class="dir">commands/</span>  <span class="note">← skills</span>
│   │   └── my-skill.md
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

      <dt>mcp.json</dt>
      <dd>Project MCP servers: defines which external tools (databases, APIs, services) are available to Claude in this context.</dd>

      <dt>commands/</dt>
      <dd>Skills (custom commands). Each <code class="inline">.md</code> file adds a <code class="inline">/name</code> command, auto-triggered by its <code class="inline">description</code> frontmatter.</dd>

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
├── <span class="dir">.claude/</span>
│   ├── settings.json
│   ├── <span class="optional">settings.local.json</span>  <span class="note">← gitignore</span>
│   ├── mcp.json
│   ├── <span class="dir">agents/</span>  <span class="note">← subagents</span>
│   │   └── my-subagent.md
│   ├── <span class="dir">commands/</span>  <span class="note">← skills</span>
│   │   └── mi-skill.md
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

      <dt>mcp.json</dt>
      <dd>Servidores MCP del proyecto: define qué herramientas externas (bases de datos, APIs, servicios) están disponibles para Claude en este contexto.</dd>

      <dt>commands/</dt>
      <dd>Skills (comandos personalizados). Cada archivo <code class="inline">.md</code> añade un comando <code class="inline">/nombre</code>, auto-activado por su campo <code class="inline">description</code>.</dd>

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
