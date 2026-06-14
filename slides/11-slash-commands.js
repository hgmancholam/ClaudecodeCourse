(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-cli" data-title="slash-commands">
  <div class="kicker">Reference</div>
  <h2>Slash <span class="accent">commands</span></h2>
  <div class="refgrid refgrid-4">

    <div class="cat s-proj">
      <h3>Project Management</h3>
      <div class="ln"><span class="k">/init</span><span class="d">Auto-generates a CLAUDE.md for the project</span></div>
      <div class="ln"><span class="k">/memory</span><span class="d">Edit CLAUDE.md and memory files</span></div>
      <div class="ln"><span class="k">/compact</span><span class="d">Compress context to free up space</span></div>
      <div class="ln"><span class="k">/clear</span><span class="d">Reset the conversation history</span></div>
      <div class="ln"><span class="k">/resume</span><span class="d">Resume a previous session</span></div>
      <div class="ln"><span class="k">/branch</span><span class="d">Fork a copy of the conversation</span></div>
      <div class="ln"><span class="k">/fork</span><span class="d">Spawn a forked subagent</span></div>
      <div class="ln"><span class="k">/rename</span><span class="d">Move the session to a new directory</span></div>
      <div class="ln"><span class="k">/add-dir</span><span class="d">Add an extra directory to the context</span></div>
      <div class="ln"><span class="k">/copy</span><span class="d">Select and copy code blocks</span></div>
      <div class="ln"><span class="k">/diff</span><span class="d">Changes in an interactive viewer</span></div>
      <div class="ln"><span class="k">/export</span><span class="d">Export to file or clipboard</span></div>
    </div>

    <div class="cat s-mode">
      <h3>Mode &amp; Model</h3>
      <div class="ln"><span class="k">/model</span><span class="d">Switch between Opus, Sonnet, and Haiku</span></div>
      <div class="ln"><span class="k">/fast</span><span class="d">Toggle fast mode (faster Opus)</span></div>
      <div class="ln"><span class="k">/plan</span><span class="d">Plan mode, with optional verbosity</span></div>
      <div class="ln"><span class="k">/effort</span><span class="d">Effort level, from low to ultracode</span></div>
      <div class="ln"><span class="k">/goal</span><span class="d">Set a target condition</span></div>
      <div class="ln"><span class="k">/advisor</span><span class="d">Second model reviews your work</span></div>
      <div class="ln"><span class="k">/voice</span><span class="d">Voice input (hold, tap, off)</span></div>
      <div class="ln"><span class="k">/tui</span><span class="d">Change the interface renderer</span></div>
    </div>

    <div class="cat s-feat">
      <h3>Feature Management</h3>
      <div class="ln"><span class="k">/hooks</span><span class="d">Configure lifecycle hooks</span></div>
      <div class="ln"><span class="k">/agents</span><span class="d">Create and manage subagents</span></div>
      <div class="ln"><span class="k">/permissions</span><span class="d">Change permission settings</span></div>
      <div class="ln"><span class="k">/sandbox</span><span class="d">Enable sandbox mode</span></div>
      <div class="ln"><span class="k">/config</span><span class="d">Open the configuration UI</span></div>
      <div class="ln"><span class="k">/rewind</span><span class="d">Revert chat and code changes</span></div>
      <div class="ln"><span class="k">/skills</span><span class="d">Skill management</span></div>
      <div class="ln"><span class="k">/reload-skills</span><span class="d">Reload skills without restarting</span></div>
      <div class="ln"><span class="k">/reload-plugins</span><span class="d">Reload plugins without restarting</span></div>
      <div class="ln"><span class="k">/login</span><span class="d">Re-authenticate</span></div>
      <div class="ln"><span class="k">/logout</span><span class="d">Log out</span></div>
    </div>

    <div class="cat s-info">
      <h3>Information &amp; Status</h3>
      <div class="ln"><span class="k">/usage</span><span class="d">Token usage vs. plan limits</span></div>
      <div class="ln"><span class="k">/cost</span><span class="d">Current session cost</span></div>
      <div class="ln"><span class="k">/usage-credits</span><span class="d">Enable credit-based usage</span></div>
      <div class="ln"><span class="k">/help</span><span class="d">List all commands</span></div>
      <div class="ln"><span class="k">/status</span><span class="d">Version, model, account, connection</span></div>
      <div class="ln"><span class="k">/stats</span><span class="d">Usage statistics report</span></div>
      <div class="ln"><span class="k">/debug</span><span class="d">Troubleshooting info</span></div>
      <div class="ln"><span class="k">/doctor</span><span class="d">Environment diagnostics</span></div>
      <div class="ln"><span class="k">/insights</span><span class="d">Session analytics</span></div>
      <div class="ln"><span class="k">/release-notes</span><span class="d">View the changelog</span></div>
      <div class="ln"><span class="k">/power-up</span><span class="d">Interactive feature lessons</span></div>
    </div>

    <div class="cat s-env">
      <h3>Environment</h3>
      <div class="ln"><span class="k">/terminal-setup</span><span class="d">Configure the Shift+Enter shortcut</span></div>
      <div class="ln"><span class="k">/keybindings</span><span class="d">Open keybindings config</span></div>
      <div class="ln"><span class="k">/theme</span><span class="d">Change the color theme</span></div>
      <div class="ln"><span class="k">/upgrade</span><span class="d">Upgrade your plan</span></div>
    </div>

    <div class="cat s-integ">
      <h3>Integrations</h3>
      <div class="ln"><span class="k">/install-github-app</span><span class="d">Auto-review GitHub PRs</span></div>
      <div class="ln"><span class="k">/install-slack-app</span><span class="d">Install Claude in Slack</span></div>
      <div class="ln"><span class="k">/plugin</span><span class="d">Plugin management and marketplace</span></div>
      <div class="ln"><span class="k">/mcp</span><span class="d">MCP status and authentication</span></div>
      <div class="ln"><span class="k">/chrome</span><span class="d">Control the browser from Claude</span></div>
      <div class="ln"><span class="k">/ide</span><span class="d">Manage IDE integrations</span></div>
      <div class="ln"><span class="k">/desktop</span><span class="d">Continue the session on desktop</span></div>
      <div class="ln"><span class="k">/mobile</span><span class="d">QR code for the mobile app</span></div>
      <div class="ln"><span class="k">/teleport</span><span class="d">Bring the web session to the terminal</span></div>
      <div class="ln"><span class="k">/remote-env</span><span class="d">Environment for cloud agents</span></div>
    </div>

    <div class="cat s-flow">
      <h3>Workflows &amp; Automation</h3>
      <div class="ln"><span class="k">/workflows</span><span class="d">View, pause, and resume workflows</span></div>
      <div class="ln"><span class="k">/code-review</span><span class="d">Review your diff for bugs</span></div>
      <div class="ln"><span class="k">/review</span><span class="d">Review a PR</span></div>
      <div class="ln"><span class="k">/security-review</span><span class="d">Security review of changes</span></div>
      <div class="ln"><span class="k">/simplify</span><span class="d">Simplify and clean up code</span></div>
      <div class="ln"><span class="k">/run</span><span class="d">Launch the app to confirm a change</span></div>
      <div class="ln"><span class="k">/ultraplan</span><span class="d">Exhaustive multi-agent plan</span></div>
      <div class="ln"><span class="k">/ultrareview</span><span class="d">Deep multi-agent review</span></div>
      <div class="ln"><span class="k">/autofix-pr</span><span class="d">Watch a PR and send fixes</span></div>
      <div class="ln"><span class="k">/deep-research</span><span class="d">Multi-source research</span></div>
      <div class="ln"><span class="k">/batch</span><span class="d">Parallel changes in worktrees</span></div>
      <div class="ln"><span class="k">/loop</span><span class="d">Run at recurring intervals</span></div>
      <div class="ln"><span class="k">/schedule</span><span class="d">Cron routines</span></div>
      <div class="ln"><span class="k">/stop</span><span class="d">Stop a background task</span></div>
    </div>

  </div>
  <footer><span class="brand">AI capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-cli" data-title="slash-commands">
  <div class="kicker">Referencia</div>
  <h2>Slash <span class="accent">commands</span></h2>
  <div class="refgrid refgrid-4">

    <div class="cat s-proj">
      <h3>Project Management</h3>
      <div class="ln"><span class="k">/init</span><span class="d">Auto-genera un CLAUDE.md del proyecto</span></div>
      <div class="ln"><span class="k">/memory</span><span class="d">Edita CLAUDE.md y archivos de memoria</span></div>
      <div class="ln"><span class="k">/compact</span><span class="d">Comprime el contexto para liberar espacio</span></div>
      <div class="ln"><span class="k">/clear</span><span class="d">Reinicia el historial de conversación</span></div>
      <div class="ln"><span class="k">/resume</span><span class="d">Reanuda una sesión anterior</span></div>
      <div class="ln"><span class="k">/branch</span><span class="d">Bifurca una copia de la conversación</span></div>
      <div class="ln"><span class="k">/fork</span><span class="d">Genera un subagente bifurcado</span></div>
      <div class="ln"><span class="k">/rename</span><span class="d">Mueve la sesión a un nuevo directorio</span></div>
      <div class="ln"><span class="k">/add-dir</span><span class="d">Agrega un directorio extra al contexto</span></div>
      <div class="ln"><span class="k">/copy</span><span class="d">Selecciona y copia bloques de código</span></div>
      <div class="ln"><span class="k">/diff</span><span class="d">Cambios en un visor interactivo</span></div>
      <div class="ln"><span class="k">/export</span><span class="d">Exporta a archivo o portapapeles</span></div>
    </div>

    <div class="cat s-mode">
      <h3>Mode &amp; Model</h3>
      <div class="ln"><span class="k">/model</span><span class="d">Cambia entre Opus, Sonnet y Haiku</span></div>
      <div class="ln"><span class="k">/fast</span><span class="d">Alterna modo rápido (Opus más veloz)</span></div>
      <div class="ln"><span class="k">/plan</span><span class="d">Modo plan, con verbosidad opcional</span></div>
      <div class="ln"><span class="k">/effort</span><span class="d">Nivel de esfuerzo, de bajo a ultracode</span></div>
      <div class="ln"><span class="k">/goal</span><span class="d">Fija una condición objetivo</span></div>
      <div class="ln"><span class="k">/advisor</span><span class="d">Segundo modelo opina sobre tu trabajo</span></div>
      <div class="ln"><span class="k">/voice</span><span class="d">Indicaciones por voz (hold, tap, off)</span></div>
      <div class="ln"><span class="k">/tui</span><span class="d">Cambia el renderizador de interfaz</span></div>
    </div>

    <div class="cat s-feat">
      <h3>Feature Management</h3>
      <div class="ln"><span class="k">/hooks</span><span class="d">Configura hooks del ciclo de vida</span></div>
      <div class="ln"><span class="k">/agents</span><span class="d">Crea y gestiona subagentes</span></div>
      <div class="ln"><span class="k">/permissions</span><span class="d">Cambia ajustes de permisos</span></div>
      <div class="ln"><span class="k">/sandbox</span><span class="d">Activa el modo sandbox</span></div>
      <div class="ln"><span class="k">/config</span><span class="d">Abre la interfaz de configuración</span></div>
      <div class="ln"><span class="k">/rewind</span><span class="d">Revierte cambios de chat y código</span></div>
      <div class="ln"><span class="k">/skills</span><span class="d">Gestión de skills</span></div>
      <div class="ln"><span class="k">/reload-skills</span><span class="d">Recarga skills sin reiniciar</span></div>
      <div class="ln"><span class="k">/reload-plugins</span><span class="d">Recarga plugins sin reiniciar</span></div>
      <div class="ln"><span class="k">/login</span><span class="d">Re-autenticarse</span></div>
      <div class="ln"><span class="k">/logout</span><span class="d">Cerrar sesión</span></div>
    </div>

    <div class="cat s-info">
      <h3>Information &amp; Status</h3>
      <div class="ln"><span class="k">/usage</span><span class="d">Uso de tokens vs. límites del plan</span></div>
      <div class="ln"><span class="k">/cost</span><span class="d">Costo de la sesión actual</span></div>
      <div class="ln"><span class="k">/usage-credits</span><span class="d">Habilita el uso por créditos</span></div>
      <div class="ln"><span class="k">/help</span><span class="d">Lista todos los comandos</span></div>
      <div class="ln"><span class="k">/status</span><span class="d">Versión, modelo, cuenta, conexión</span></div>
      <div class="ln"><span class="k">/stats</span><span class="d">Reporte de estadísticas de uso</span></div>
      <div class="ln"><span class="k">/debug</span><span class="d">Info de troubleshooting</span></div>
      <div class="ln"><span class="k">/doctor</span><span class="d">Diagnóstico del entorno</span></div>
      <div class="ln"><span class="k">/insights</span><span class="d">Análisis de la sesión</span></div>
      <div class="ln"><span class="k">/release-notes</span><span class="d">Ver el changelog</span></div>
      <div class="ln"><span class="k">/power-up</span><span class="d">Lecciones interactivas de funciones</span></div>
    </div>

    <div class="cat s-env">
      <h3>Environment</h3>
      <div class="ln"><span class="k">/terminal-setup</span><span class="d">Configura el atajo Shift+Enter</span></div>
      <div class="ln"><span class="k">/keybindings</span><span class="d">Abre la config de atajos</span></div>
      <div class="ln"><span class="k">/theme</span><span class="d">Cambia el tema de color</span></div>
      <div class="ln"><span class="k">/upgrade</span><span class="d">Mejora tu plan</span></div>
    </div>

    <div class="cat s-integ">
      <h3>Integrations</h3>
      <div class="ln"><span class="k">/install-github-app</span><span class="d">Auto-review de GitHub PR</span></div>
      <div class="ln"><span class="k">/install-slack-app</span><span class="d">Instala Claude en Slack</span></div>
      <div class="ln"><span class="k">/plugin</span><span class="d">Gestión y marketplace de plugins</span></div>
      <div class="ln"><span class="k">/mcp</span><span class="d">Estado y autenticación de MCP</span></div>
      <div class="ln"><span class="k">/chrome</span><span class="d">Controla el navegador desde Claude</span></div>
      <div class="ln"><span class="k">/ide</span><span class="d">Gestiona integraciones IDE</span></div>
      <div class="ln"><span class="k">/desktop</span><span class="d">Continúa la sesión en escritorio</span></div>
      <div class="ln"><span class="k">/mobile</span><span class="d">Código QR para la app móvil</span></div>
      <div class="ln"><span class="k">/teleport</span><span class="d">Lleva la sesión web a la terminal</span></div>
      <div class="ln"><span class="k">/remote-env</span><span class="d">Entorno para agentes en la nube</span></div>
    </div>

    <div class="cat s-flow">
      <h3>Workflows &amp; Automation</h3>
      <div class="ln"><span class="k">/workflows</span><span class="d">Ver, pausar y reanudar workflows</span></div>
      <div class="ln"><span class="k">/code-review</span><span class="d">Revisa tu diff en busca de bugs</span></div>
      <div class="ln"><span class="k">/review</span><span class="d">Revisa un PR</span></div>
      <div class="ln"><span class="k">/security-review</span><span class="d">Revisión de seguridad de cambios</span></div>
      <div class="ln"><span class="k">/simplify</span><span class="d">Simplifica y limpia el código</span></div>
      <div class="ln"><span class="k">/run</span><span class="d">Lanza la app para confirmar un cambio</span></div>
      <div class="ln"><span class="k">/ultraplan</span><span class="d">Plan exhaustivo multi-agente</span></div>
      <div class="ln"><span class="k">/ultrareview</span><span class="d">Review profundo multi-agente</span></div>
      <div class="ln"><span class="k">/autofix-pr</span><span class="d">Vigila un PR y envía cambios</span></div>
      <div class="ln"><span class="k">/deep-research</span><span class="d">Investigación multi-fuente</span></div>
      <div class="ln"><span class="k">/batch</span><span class="d">Cambios paralelos en worktrees</span></div>
      <div class="ln"><span class="k">/loop</span><span class="d">Ejecuta en intervalos recurrentes</span></div>
      <div class="ln"><span class="k">/schedule</span><span class="d">Rutinas en cron</span></div>
      <div class="ln"><span class="k">/stop</span><span class="d">Detiene una tarea en background</span></div>
    </div>

  </div>
  <footer><span class="brand">AI capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`
});
