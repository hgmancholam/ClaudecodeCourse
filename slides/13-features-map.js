(window._deck = window._deck || []).push({
en: `
<section class="slide no-export s-feat" data-title="features-map">
  <div class="kicker">Platform Overview</div>
  <h2>Claude Code · <span class="accent">Features Comparison</span></h2>
  <table class="ctable">
    <colgroup>
      <col style="width:11%">
      <col style="width:21%">
      <col style="width:15%">
      <col style="width:22%">
      <col style="width:31%">
    </colgroup>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Where / Config</th>
        <th>Type</th>
        <th>Trigger / Activation</th>
        <th>Primary Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="feat">CLAUDE.md</td>
        <td class="loc">repo root · home dir · parent dirs</td>
        <td>Context injection</td>
        <td class="trg">Auto-loaded every session</td>
        <td>Project rules, conventions, codebase docs fed to Claude</td>
      </tr>
      <tr>
        <td class="feat">Memory</td>
        <td class="loc">~/.claude/projects/…/memory/</td>
        <td>Persistent context</td>
        <td class="trg">Read/written by Claude across sessions</td>
        <td>User prefs, past decisions, feedback, project references</td>
      </tr>
      <tr>
        <td class="feat">Settings</td>
        <td class="loc">.claude/settings.json · ~/.claude/settings.json</td>
        <td>JSON configuration</td>
        <td class="trg">Applied at startup · Project / Global / Enterprise</td>
        <td>Permissions, allow/deny lists, env vars, hooks &amp; MCP config</td>
      </tr>
      <tr>
        <td class="feat">Subagents</td>
        <td class="loc">Agent tool · Claude Agent SDK</td>
        <td>Task delegation</td>
        <td class="trg">agent() call · isolated context window</td>
        <td>Parallel tasks, multi-step work, specialized expert agents</td>
      </tr>
      <tr>
        <td class="feat">Skills</td>
        <td class="loc">.claude/commands/ · ~/.claude/commands/</td>
        <td>Custom commands</td>
        <td class="trg">/name or auto-triggered by description</td>
        <td>Reusable workflows, code review, deploys, team standards</td>
      </tr>
      <tr>
        <td class="feat">Hooks</td>
        <td class="loc">settings.json → "hooks"</td>
        <td>Shell automation</td>
        <td class="trg">PreToolUse · PostToolUse · Notification · SessionStart</td>
        <td>Auto-format, validate, block actions, log, send alerts</td>
      </tr>
      <tr>
        <td class="feat">MCP</td>
        <td class="loc">settings.json → "mcpServers"</td>
        <td>Tool extension</td>
        <td class="trg">JSON-RPC over stdio / SSE / HTTP</td>
        <td>DBs, internal APIs, cloud services, custom tool ecosystems</td>
      </tr>
      <tr>
        <td class="feat">Agent SDK</td>
        <td class="loc">claude-agent-sdk · @anthropic-ai/claude-agent-sdk</td>
        <td>Programmatic API</td>
        <td class="trg">query(prompt, options) → async stream</td>
        <td>Embed Claude autonomy in pipelines, CI/CD, and apps</td>
      </tr>
    </tbody>
  </table>
  <footer><span class="brand">Inspyr Global Solutions <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide no-export s-feat" data-title="features-map">
  <div class="kicker">Resumen de Plataforma</div>
  <h2>Claude Code · <span class="accent">Comparativa de Funciones</span></h2>
  <table class="ctable">
    <colgroup>
      <col style="width:11%">
      <col style="width:21%">
      <col style="width:15%">
      <col style="width:22%">
      <col style="width:31%">
    </colgroup>
    <thead>
      <tr>
        <th>Función</th>
        <th>Dónde / Config</th>
        <th>Tipo</th>
        <th>Disparador / Activación</th>
        <th>Uso Principal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="feat">CLAUDE.md</td>
        <td class="loc">raíz del repo · home dir · dirs padre</td>
        <td>Inyección de contexto</td>
        <td class="trg">Auto-carga en cada sesión</td>
        <td>Reglas de proyecto, convenciones, docs del código para Claude</td>
      </tr>
      <tr>
        <td class="feat">Memory</td>
        <td class="loc">~/.claude/projects/…/memory/</td>
        <td>Contexto persistente</td>
        <td class="trg">Claude lee/escribe entre sesiones</td>
        <td>Preferencias, decisiones pasadas, feedback, referencias</td>
      </tr>
      <tr>
        <td class="feat">Settings</td>
        <td class="loc">.claude/settings.json · ~/.claude/settings.json</td>
        <td>Configuración JSON</td>
        <td class="trg">Se aplica al iniciar · Proyecto / Global / Enterprise</td>
        <td>Permisos, listas allow/deny, env vars, hooks y configuración MCP</td>
      </tr>
      <tr>
        <td class="feat">Subagentes</td>
        <td class="loc">Herramienta Agent · Claude Agent SDK</td>
        <td>Delegación de tareas</td>
        <td class="trg">llamada agent() · ventana de contexto aislada</td>
        <td>Tareas paralelas, trabajo multi-paso, agentes especializados</td>
      </tr>
      <tr>
        <td class="feat">Skills</td>
        <td class="loc">.claude/commands/ · ~/.claude/commands/</td>
        <td>Comandos personalizados</td>
        <td class="trg">/nombre o auto por campo description</td>
        <td>Flujos reutilizables, code review, deploys, estándares de equipo</td>
      </tr>
      <tr>
        <td class="feat">Hooks</td>
        <td class="loc">settings.json → "hooks"</td>
        <td>Automatización shell</td>
        <td class="trg">PreToolUse · PostToolUse · Notification · SessionStart</td>
        <td>Auto-formato, validar, bloquear acciones, loggear, alertas</td>
      </tr>
      <tr>
        <td class="feat">MCP</td>
        <td class="loc">settings.json → "mcpServers"</td>
        <td>Extensión de herramientas</td>
        <td class="trg">JSON-RPC sobre stdio / SSE / HTTP</td>
        <td>BDs, APIs internas, servicios cloud, ecosistemas de herramientas</td>
      </tr>
      <tr>
        <td class="feat">Agent SDK</td>
        <td class="loc">claude-agent-sdk · @anthropic-ai/claude-agent-sdk</td>
        <td>API programática</td>
        <td class="trg">query(prompt, options) → stream asíncrono</td>
        <td>Embeber autonomía de Claude en pipelines, CI/CD y apps</td>
      </tr>
    </tbody>
  </table>
  <footer><span class="brand">Inspyr Global Solutions <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`
});
