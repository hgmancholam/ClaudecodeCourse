(window._deck = window._deck || []).push({
en: `
<section class="slide s-mode" data-title="claude-agent-sdk">
  <div class="kicker">Agent SDK</div>
  <h2>Claude Code as a <span class="accent">library</span></h2>
  <div class="body grid2">

    <div class="sdk-left">
      <ul class="points">
        <li><span class="ico">→</span><span><b>Same capabilities as the CLI,</b> but programmatic. Your app calls <code class="inline">query()</code> and Claude acts autonomously.</span></li>
        <li><span class="ico">⚙</span><span><b>Built-in tools:</b> Read, Write, Edit, Bash, Glob, Grep, WebSearch — no need to implement the loop yourself.</span></li>
        <li><span class="ico">🔗</span><span><b>Extensible:</b> hooks, subagents, MCP, and per-tool permission control.</span></li>
        <li><span class="ico">📦</span><span><b>Python</b> <code class="inline">claude-agent-sdk</code> · <b>TypeScript</b> <code class="inline">@anthropic-ai/claude-agent-sdk</code></span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Python</span>
      </div>
      <pre><span class="kw">from</span> claude_agent_sdk <span class="kw">import</span> <span class="fn">query</span>, ClaudeAgentOptions
<span class="kw">import</span> asyncio

<span class="kw">async def</span> <span class="fn">main</span>():
    <span class="kw">async for</span> msg <span class="kw">in</span> <span class="fn">query</span>(
        prompt=<span class="st">"Find and fix the bug in auth.py"</span>,
        options=ClaudeAgentOptions(
            allowed_tools=[<span class="st">"Read"</span>, <span class="st">"Edit"</span>, <span class="st">"Bash"</span>]
        ),
    ):
        <span class="kw">if</span> <span class="fn">hasattr</span>(msg, <span class="st">"result"</span>):
            <span class="fn">print</span>(msg.result)

asyncio.<span class="fn">run</span>(<span class="fn">main</span>())</pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-mode" data-title="claude-agent-sdk">
  <div class="kicker">Agent SDK</div>
  <h2>Claude Code como <span class="accent">librería</span></h2>
  <div class="body grid2">

    <div class="sdk-left">
      <ul class="points">
        <li><span class="ico">→</span><span><b>Mismas capacidades que la CLI,</b> pero programáticas. Tu app llama a <code class="inline">query()</code> y Claude actúa de forma autónoma.</span></li>
        <li><span class="ico">⚙</span><span><b>Herramientas built-in:</b> Read, Write, Edit, Bash, Glob, Grep, WebSearch — sin implementar el loop tú.</span></li>
        <li><span class="ico">🔗</span><span><b>Extensible:</b> hooks, subagentes, MCP y control de permisos por herramienta.</span></li>
        <li><span class="ico">📦</span><span><b>Python</b> <code class="inline">claude-agent-sdk</code> · <b>TypeScript</b> <code class="inline">@anthropic-ai/claude-agent-sdk</code></span></li>
      </ul>
    </div>

    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Python</span>
      </div>
      <pre><span class="kw">from</span> claude_agent_sdk <span class="kw">import</span> <span class="fn">query</span>, ClaudeAgentOptions
<span class="kw">import</span> asyncio

<span class="kw">async def</span> <span class="fn">main</span>():
    <span class="kw">async for</span> msg <span class="kw">in</span> <span class="fn">query</span>(
        prompt=<span class="st">"Encuentra y corrige el bug en auth.py"</span>,
        options=ClaudeAgentOptions(
            allowed_tools=[<span class="st">"Read"</span>, <span class="st">"Edit"</span>, <span class="st">"Bash"</span>]
        ),
    ):
        <span class="kw">if</span> <span class="fn">hasattr</span>(msg, <span class="st">"result"</span>):
            <span class="fn">print</span>(msg.result)

asyncio.<span class="fn">run</span>(<span class="fn">main</span>())</pre>
    </div>

  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Claude Code</span><span class="pg"></span></footer>
</section>
`
});
