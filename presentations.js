/* ──────────────────────────────────────────────────────────────────────
   Registro central de presentaciones.
   · /list lo lee para listar todas las presentaciones.
   · Cada entrada `slug` corresponde a una carpeta /<slug>/ con su index.html.
   · Para añadir una presentación: crea la carpeta /<slug>/ (copia el patrón de
     claude-code-basics/index.html) y agrega aquí una entrada bilingüe.
   ────────────────────────────────────────────────────────────────────── */
window.PRESENTATIONS = [
  {
    slug: 'claude-code-basics',
    accent: 's-proj',
    slides: 15,
    en: { tag: 'Internal Training', title: 'Claude Code Basics',
          desc: 'From zero to productive with Claude Code — a practical guide based on Anthropic’s official courses.' },
    es: { tag: 'Capacitación interna', title: 'Claude Code: Fundamentos',
          desc: 'De cero a productivo con Claude Code — una guía práctica basada en los cursos oficiales de Anthropic.' }
  },
  {
    slug: 'TDM-training',
    accent: 's-mode',
    slides: 1,
    en: { tag: 'Internal Training', title: 'TDM Training',
          desc: 'Test Data Management training deck. Work in progress.' },
    es: { tag: 'Capacitación interna', title: 'Capacitación TDM',
          desc: 'Deck de capacitación en Test Data Management. En construcción.' }
  }
];
