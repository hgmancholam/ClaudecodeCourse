(window._deck = window._deck || []).push({
en: `
<section class="slide s-info" data-title="installing-claude">
  <div class="kicker">Getting Started</div>
  <h2>Installing <span class="accent">Claude Code</span></h2>
  <div class="body grid2">

    <div class="install-left">
      <ul class="points">
        <li><span class="ico">📦</span><span><b>npm</b> (macOS / Linux / Windows): <code class="inline">npm install -g @anthropic-ai/claude-code</code> — requires Node.js 18+.</span></li>
        <li><span class="ico">⚡</span><span><b>Native binary:</b> after npm setup, run <code class="inline">claude install</code> to replace the Node.js wrapper with a faster native binary.</span></li>
        <li><span class="ico">🔑</span><span><b>Authenticate:</b> <code class="inline">claude auth login</code> (Pro / Max / Enterprise) or export <code class="inline">ANTHROPIC_API_KEY</code> for API-key access.</span></li>
        <li><span class="ico">🖥</span><span><b>IDEs:</b> <b>VS Code</b> extension and <b>JetBrains</b> plugin (IntelliJ, WebStorm, PyCharm…) — install from each marketplace or run <code class="inline">/ide</code> inside a session.</span></li>
        <li><span class="ico">🌐</span><span><b>No install:</b> full Claude Code on the web at <b>claude.ai/code</b>, or download the <b>Claude Desktop</b> app — both work without npm.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Terminal</span>
      </div>
      <pre><span class="cm"># 1 · Install (Node.js 18+ required)</span>
<span class="st">npm install -g @anthropic-ai/claude-code</span>

<span class="cm"># 2 · Optional: native binary</span>
<span class="st">claude install</span>

<span class="cm"># 3 · Authenticate</span>
<span class="st">claude auth login</span>
<span class="cm"># or:</span>
<span class="kw">export</span> <span class="fn">ANTHROPIC_API_KEY</span>=sk-...

<span class="cm"># 4 · Start a session</span>
<span class="st">cd my-project &amp;&amp; claude</span></pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-info" data-title="installing-claude">
  <div class="kicker">Primeros pasos</div>
  <h2>Instalar <span class="accent">Claude Code</span></h2>
  <div class="body grid2">

    <div class="install-left">
      <ul class="points">
        <li><span class="ico">📦</span><span><b>npm</b> (macOS / Linux / Windows): <code class="inline">npm install -g @anthropic-ai/claude-code</code> — requiere Node.js 18+.</span></li>
        <li><span class="ico">⚡</span><span><b>Binario nativo:</b> luego del setup con npm, ejecuta <code class="inline">claude install</code> para reemplazar el wrapper de Node.js por un binario nativo más rápido.</span></li>
        <li><span class="ico">🔑</span><span><b>Autenticarse:</b> <code class="inline">claude auth login</code> (Pro / Max / Enterprise) o exporta <code class="inline">ANTHROPIC_API_KEY</code> para acceso por API key.</span></li>
        <li><span class="ico">🖥</span><span><b>IDEs:</b> extensión para <b>VS Code</b> y plugin para <b>JetBrains</b> (IntelliJ, WebStorm, PyCharm…) — instala desde cada marketplace o ejecuta <code class="inline">/ide</code> en sesión.</span></li>
        <li><span class="ico">🌐</span><span><b>Sin instalación:</b> Claude Code completo en la web en <b>claude.ai/code</b>, o descarga la app <b>Claude Desktop</b> — ambos funcionan sin npm.</span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Terminal</span>
      </div>
      <pre><span class="cm"># 1 · Instalar (requiere Node.js 18+)</span>
<span class="st">npm install -g @anthropic-ai/claude-code</span>

<span class="cm"># 2 · Opcional: binario nativo</span>
<span class="st">claude install</span>

<span class="cm"># 3 · Autenticarse</span>
<span class="st">claude auth login</span>
<span class="cm"># o con API key:</span>
<span class="kw">export</span> <span class="fn">ANTHROPIC_API_KEY</span>=sk-...

<span class="cm"># 4 · Iniciar sesión</span>
<span class="st">cd mi-proyecto &amp;&amp; claude</span></pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
