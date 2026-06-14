(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-flag" data-title="atajos-cli">
  <div class="kicker">Reference</div>
  <h2>Shortcuts &amp; <span class="accent">CLI</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-cli">
      <h3>CLI Commands</h3>
      <div class="ln"><span class="k">claude</span><span class="d">Start interactive session</span></div>
      <div class="ln"><span class="k">claude "query"</span><span class="d">Start with an initial prompt</span></div>
      <div class="ln"><span class="k">claude -p "q"</span><span class="d">Non-interactive mode, then exit</span></div>
      <div class="ln"><span class="k">claude -c</span><span class="d">Resume the most recent session</span></div>
      <div class="ln"><span class="k">claude -r "ID"</span><span class="d">Resume session by ID</span></div>
      <div class="ln"><span class="k">claude --from-pr</span><span class="d">Resume from a PR</span></div>
      <div class="ln"><span class="k">claude update</span><span class="d">Update to the latest version</span></div>
      <div class="ln"><span class="k">claude mcp add</span><span class="d">Add/manage MCP servers</span></div>
      <div class="ln"><span class="k">claude auth login</span><span class="d">Authenticate</span></div>
      <div class="ln"><span class="k">claude plugin</span><span class="d">Plugin management</span></div>
      <div class="ln"><span class="k">claude install</span><span class="d">Install the native binary</span></div>
      <div class="ln"><span class="k">claude project</span><span class="d">Manage the project</span></div>
      <div class="ln"><span class="k">claude setup-token</span><span class="d">Long-lived token</span></div>
      <div class="ln"><span class="k">claude auto-mode</span><span class="d">Inspect Auto Mode rules</span></div>
      <div class="ln"><span class="k">claude ultrareview</span><span class="d">Cloud multi-agent review</span></div>
    </div>

    <div class="cat s-flag">
      <h3>CLI Flags</h3>
      <div class="ln"><span class="k">--worktree</span><span class="d">Isolated worktree for parallel work</span></div>
      <div class="ln"><span class="k">--tmux</span><span class="d">tmux session for the worktree</span></div>
      <div class="ln"><span class="k">--model opus</span><span class="d">Specify the model at startup</span></div>
      <div class="ln"><span class="k">--permission-mode</span><span class="d">Launch in Auto mode</span></div>
      <div class="ln"><span class="k">--agents '{json}'</span><span class="d">Define subagents at startup</span></div>
      <div class="ln"><span class="k">--append-system-prompt</span><span class="d">Append to the system prompt</span></div>
      <div class="ln"><span class="k">--fallback-model</span><span class="d">Fallback model if overloaded</span></div>
      <div class="ln"><span class="k">--max-budget-usd</span><span class="d">Fixed spending limit</span></div>
      <div class="ln"><span class="k">--bare</span><span class="d">Minimal, no customization</span></div>
      <div class="ln"><span class="k">--safe-mode</span><span class="d">Troubleshooting without customizations</span></div>
    </div>

    <div class="cat s-short">
      <h3>Shortcuts &amp; Notation</h3>
      <div class="ln"><span class="k">Esc</span><span class="d">Stop processing</span></div>
      <div class="ln"><span class="k">Esc + Esc</span><span class="d">Clear draft / rewind menu</span></div>
      <div class="ln"><span class="k">Shift+Tab</span><span class="d">Toggle modes (default, plan, auto)</span></div>
      <div class="ln"><span class="k">Option+T</span><span class="d">Toggle extended thinking</span></div>
      <div class="ln"><span class="k">Ctrl+B</span><span class="d">Background command</span></div>
      <div class="ln"><span class="k">Ctrl+T Ctrl+K</span><span class="d">Kill background commands</span></div>
      <div class="ln"><span class="k">Ctrl+O</span><span class="d">Toggle the transcript viewer</span></div>
      <div class="ln"><span class="k">Ctrl+T</span><span class="d">Toggle the task list</span></div>
      <div class="ln"><span class="k">Ctrl+V</span><span class="d">Paste an image from clipboard</span></div>
      <div class="ln"><span class="k">Ctrl+R</span><span class="d">Reverse history search</span></div>
      <div class="ln"><span class="k">@filename</span><span class="d">Reference file or directory</span></div>
      <div class="ln"><span class="k">!command</span><span class="d">Run a shell command</span></div>
      <div class="ln"><span class="k">ultracode</span><span class="d">Activate multi-agent orchestration</span></div>
    </div>

  </div>
  <footer><span class="brand">AI capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-flag" data-title="atajos-cli">
  <div class="kicker">Referencia</div>
  <h2>Atajos &amp; <span class="accent">CLI</span></h2>
  <div class="refgrid refgrid-3">

    <div class="cat s-cli">
      <h3>CLI Commands</h3>
      <div class="ln"><span class="k">claude</span><span class="d">Inicia sesión interactiva</span></div>
      <div class="ln"><span class="k">claude "query"</span><span class="d">Inicia con un prompt inicial</span></div>
      <div class="ln"><span class="k">claude -p "q"</span><span class="d">Modo no interactivo, luego sale</span></div>
      <div class="ln"><span class="k">claude -c</span><span class="d">Reanuda la sesión más reciente</span></div>
      <div class="ln"><span class="k">claude -r "ID"</span><span class="d">Reanuda sesión por ID</span></div>
      <div class="ln"><span class="k">claude --from-pr</span><span class="d">Reanuda desde un PR</span></div>
      <div class="ln"><span class="k">claude update</span><span class="d">Actualiza a la última versión</span></div>
      <div class="ln"><span class="k">claude mcp add</span><span class="d">Agrega/gestiona servidores MCP</span></div>
      <div class="ln"><span class="k">claude auth login</span><span class="d">Autenticarse</span></div>
      <div class="ln"><span class="k">claude plugin</span><span class="d">Gestión de plugins</span></div>
      <div class="ln"><span class="k">claude install</span><span class="d">Instala el binario nativo</span></div>
      <div class="ln"><span class="k">claude project</span><span class="d">Gestiona el proyecto</span></div>
      <div class="ln"><span class="k">claude setup-token</span><span class="d">Token de larga duración</span></div>
      <div class="ln"><span class="k">claude auto-mode</span><span class="d">Inspecciona reglas de Auto Mode</span></div>
      <div class="ln"><span class="k">claude ultrareview</span><span class="d">Review multi-agente en la nube</span></div>
    </div>

    <div class="cat s-flag">
      <h3>CLI Flags</h3>
      <div class="ln"><span class="k">--worktree</span><span class="d">Worktree aislado para trabajo paralelo</span></div>
      <div class="ln"><span class="k">--tmux</span><span class="d">Sesión tmux para el worktree</span></div>
      <div class="ln"><span class="k">--model opus</span><span class="d">Especifica el modelo al iniciar</span></div>
      <div class="ln"><span class="k">--permission-mode</span><span class="d">Lanza en modo Auto</span></div>
      <div class="ln"><span class="k">--agents '{json}'</span><span class="d">Define subagentes al iniciar</span></div>
      <div class="ln"><span class="k">--append-system-prompt</span><span class="d">Añade al system prompt</span></div>
      <div class="ln"><span class="k">--fallback-model</span><span class="d">Modelo de reserva si se sobrecarga</span></div>
      <div class="ln"><span class="k">--max-budget-usd</span><span class="d">Límite de gasto fijo</span></div>
      <div class="ln"><span class="k">--bare</span><span class="d">Mínimo, sin personalización</span></div>
      <div class="ln"><span class="k">--safe-mode</span><span class="d">Troubleshooting sin customizaciones</span></div>
    </div>

    <div class="cat s-short">
      <h3>Shortcuts &amp; Notación</h3>
      <div class="ln"><span class="k">Esc</span><span class="d">Detiene el procesamiento</span></div>
      <div class="ln"><span class="k">Esc + Esc</span><span class="d">Limpia borrador / menú rewind</span></div>
      <div class="ln"><span class="k">Shift+Tab</span><span class="d">Alterna modos (default, plan, auto)</span></div>
      <div class="ln"><span class="k">Option+T</span><span class="d">Alterna pensamiento extendido</span></div>
      <div class="ln"><span class="k">Ctrl+B</span><span class="d">Comando en background</span></div>
      <div class="ln"><span class="k">Ctrl+T Ctrl+K</span><span class="d">Mata comandos en background</span></div>
      <div class="ln"><span class="k">Ctrl+O</span><span class="d">Alterna el visor de transcripción</span></div>
      <div class="ln"><span class="k">Ctrl+T</span><span class="d">Alterna la lista de tareas</span></div>
      <div class="ln"><span class="k">Ctrl+V</span><span class="d">Pega una imagen del portapapeles</span></div>
      <div class="ln"><span class="k">Ctrl+R</span><span class="d">Búsqueda inversa del historial</span></div>
      <div class="ln"><span class="k">@filename</span><span class="d">Referencia archivo o directorio</span></div>
      <div class="ln"><span class="k">!command</span><span class="d">Ejecuta un comando de shell</span></div>
      <div class="ln"><span class="k">ultracode</span><span class="d">Activa orquestación multi-agente</span></div>
    </div>

  </div>
  <footer><span class="brand">AI capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`
});
