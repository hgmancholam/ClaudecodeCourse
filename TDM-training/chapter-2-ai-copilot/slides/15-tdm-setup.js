(window._deck = window._deck || []).push({
en: `
<section class="slide s-env" data-title="tdm-setup">
  <div class="kicker">Chapter 2 · TDM Assistant · Setup</div>
  <h2>Running in <span class="accent">4 Steps</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1</span><span><b>Prerequisites:</b> Claude Code CLI, Python 3.8+, PowerShell 7+, Outlook Desktop open and signed in.</span></li>
      <li><span class="ico">2</span><span><b>Clone &amp; configure:</b> clone the ADO repo, copy <code class="inline">.env.example</code> → <code class="inline">.env</code>, paste your <code class="inline">ANTHROPIC_API_KEY</code>.</span></li>
      <li><span class="ico">3</span><span><b>Install dependencies:</b> <code class="inline">pip install -r requirements.txt</code> — pandas, matplotlib, openpyxl, anthropic, mcp.</span></li>
      <li><span class="ico">4</span><span><b>First run:</b> open Claude Code in the repo folder, type <code class="inline">/tdm</code> — onboarding starts automatically and configures everything.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Terminal</span>
      </div>
      <pre><span class="cm"># 1 · Clone the TDM Assistant repo (ADO)</span>
git clone https://dev.azure.com/arroyoconsultingco/
  IGS%20practices/_git/tdm-assistant
cd tdm-assistant

<span class="cm"># 2 · Set your Anthropic API key</span>
cp .env.example .env
<span class="cm"># Edit .env → add ANTHROPIC_API_KEY=sk-ant-...</span>

<span class="cm"># 3 · Install Python dependencies</span>
pip install -r requirements.txt

<span class="cm"># 4 · Launch and onboard</span>
claude   <span class="st">→  /tdm</span>   <span class="cm"># onboarding runs once</span></pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`,
es: `
<section class="slide s-env" data-title="tdm-setup">
  <div class="kicker">Capítulo 2 · TDM Assistant · Configuración</div>
  <h2>Listo en <span class="accent">4 pasos</span></h2>
  <div class="body grid2">
    <ul class="points">
      <li><span class="ico">1</span><span><b>Prerrequisitos:</b> Claude Code CLI, Python 3.8+, PowerShell 7+, Outlook Desktop abierto y con sesión iniciada.</span></li>
      <li><span class="ico">2</span><span><b>Clonar y configurar:</b> clona el repo ADO, copia <code class="inline">.env.example</code> → <code class="inline">.env</code>, pega tu <code class="inline">ANTHROPIC_API_KEY</code>.</span></li>
      <li><span class="ico">3</span><span><b>Instalar dependencias:</b> <code class="inline">pip install -r requirements.txt</code> — pandas, matplotlib, openpyxl, anthropic, mcp.</span></li>
      <li><span class="ico">4</span><span><b>Primera ejecución:</b> abre Claude Code en la carpeta del repo, escribe <code class="inline">/tdm</code> — el onboarding arranca automáticamente y configura todo.</span></li>
    </ul>
    <div class="codeblock">
      <div class="cb-bar">
        <div class="cb-dots"><span></span><span></span><span></span></div>
        <span class="cb-lang">Terminal</span>
      </div>
      <pre><span class="cm"># 1 · Clona el repo TDM Assistant (ADO)</span>
git clone https://dev.azure.com/arroyoconsultingco/
  IGS%20practices/_git/tdm-assistant
cd tdm-assistant

<span class="cm"># 2 · Configura tu Anthropic API key</span>
cp .env.example .env
<span class="cm"># Edita .env → agrega ANTHROPIC_API_KEY=sk-ant-...</span>

<span class="cm"># 3 · Instala dependencias Python</span>
pip install -r requirements.txt

<span class="cm"># 4 · Lanza y haz el onboarding</span>
claude   <span class="st">→  /tdm</span>   <span class="cm"># el onboarding corre una sola vez</span></pre>
    </div>
  </div>
  <footer><span class="brand">AI Capabilities Training <span class="dot">·</span> Delivery Lead</span><span class="author">Giovanny Manchola</span><span class="pg"></span></footer>
</section>
`
});
