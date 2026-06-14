# PostToolUse hook: cuando se edita un slide (slides/*.js), pide a Claude
# que lo evalúe con la skill `evaluador-slides`. Lee el JSON del evento por stdin.
$ErrorActionPreference = 'Stop'
try {
    $raw = [Console]::In.ReadToEnd()
    if (-not $raw) { exit 0 }
    $data = $raw | ConvertFrom-Json

    # La ruta editada puede venir de Edit/Write (file_path) o MultiEdit.
    $fp = $data.tool_input.file_path
    if (-not $fp) { $fp = $data.tool_input.path }
    if (-not $fp) { exit 0 }

    $norm = ($fp -replace '\\', '/')

    # Solo reaccionar a archivos de slides individuales (slides/NN-nombre.js).
    if ($norm -notmatch '/slides/\d+[^/]*\.js$') { exit 0 }
    if (-not (Test-Path -LiteralPath $fp)) { exit 0 }   # archivo renombrado / borrado

    $name = Split-Path $fp -Leaf

    $msg = "Se acaba de modificar el slide '$name'. Evalua su contenido AHORA " +
           "invocando la skill 'evaluador-slides' (herramienta Skill) con el argumento " +
           "'$name'. Sigue su rubrica: si encuentras mejoras de alto valor, proponlas o " +
           "aplicalas; si ya esta bien, responde brevemente que el slide esta OK."

    $out = @{
        hookSpecificOutput = @{
            hookEventName     = 'PostToolUse'
            additionalContext = $msg
        }
    } | ConvertTo-Json -Compress -Depth 5

    Write-Output $out
}
catch {
    # No bloquear nunca la edición por un fallo del hook.
    exit 0
}
exit 0
