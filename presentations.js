/* ──────────────────────────────────────────────────────────────────────
   Registro central de presentaciones.
   · /list lo lee para listar todas las presentaciones.
   · Cada entrada `slug` corresponde a una carpeta /<slug>/.
   · Una presentación es de uno de dos tipos:
       - DECK SIMPLE: trae `slides` (nº de slides). /<slug>/ ES el deck.
       - CURSO: trae `chapters: [...]`. /<slug>/ es un ÍNDICE de capítulos;
         cada capítulo es su propio deck en /<slug>/<chapter.slug>/.
   · Para añadir una presentación o capítulo: crea la(s) carpeta(s) (copia el
     patrón de los index.html existentes) y agrega aquí la entrada bilingüe.
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
    en: { tag: 'Internal Training', title: 'AI-Enabled Delivery Lead Program',
          desc: 'An 8-week program to lead delivery with technical judgment and AI — for Scrum Masters, PMs and Delivery Managers.' },
    es: { tag: 'Capacitación interna', title: 'Programa de Liderazgo de Delivery con IA',
          desc: 'Un programa de 8 semanas para liderar el delivery con criterio técnico e IA — para Scrum Masters, PMs y Delivery Managers.' },
    chapters: [
      {
        slug: 'chapter-0-overview', accent: 's-proj', slides: 7,
        en: { tag: 'Chapter 0', title: 'Overview',
              desc: 'Who it’s for, learning objectives, the 4-phase structure, format, session dynamics and executive takeaways.' },
        es: { tag: 'Capítulo 0', title: 'Resumen general',
              desc: 'Para quién es, objetivos de aprendizaje, la estructura en 4 fases, formato, dinámica de sesiones y takeaways ejecutivos.' }
      },
      {
        slug: 'chapter-1-role-evolution', accent: 's-info', slides: 2,
        en: { tag: 'Week 1 · Phase 1', title: 'Evolution of the Role',
              desc: 'Shifting market expectations, capability assessment, gap identification. Deliverable: individual Gap Map.' },
        es: { tag: 'Semana 1 · Fase 1', title: 'Evolución del Rol',
              desc: 'Cambio de expectativas del mercado, assessment de capacidades, identificación de brechas. Entregable: Gap Map individual.' }
      },
      {
        slug: 'chapter-2-ai-copilot', accent: 's-mode', slides: 2,
        en: { tag: 'Week 2 · Phase 1', title: 'AI as a Copilot',
              desc: 'Prompting for leaders; AI in backlog, risks and reporting. Deliverable: Prompt Pack.' },
        es: { tag: 'Semana 2 · Fase 1', title: 'IA como Copiloto',
              desc: 'Prompting para líderes; IA en backlog, riesgos y reporting. Entregable: Prompt Pack.' }
      },
      {
        slug: 'chapter-3-systems-understanding', accent: 's-feat', slides: 2,
        en: { tag: 'Week 3 · Phase 2', title: 'Understanding Systems',
              desc: 'Basic architecture; APIs, CI/CD, repositories. Deliverable: technical checklist.' },
        es: { tag: 'Semana 3 · Fase 2', title: 'Entendimiento de Sistemas',
              desc: 'Arquitectura básica; APIs, CI/CD, repositorios. Entregable: checklist técnico.' }
      },
      {
        slug: 'chapter-4-architecture-evaluation', accent: 's-flow', slides: 2,
        en: { tag: 'Week 4 · Phase 2', title: 'Evaluating Architecture',
              desc: 'Trade-offs, technical risks, intro to AI architectures. Deliverable: Risk Assessment.' },
        es: { tag: 'Semana 4 · Fase 2', title: 'Evaluación de Arquitectura',
              desc: 'Trade-offs, riesgos técnicos, introducción a AI architectures. Entregable: Risk Assessment.' }
      },
      {
        slug: 'chapter-5-ai-governance', accent: 's-env', slides: 2,
        en: { tag: 'Week 5 · Phase 3', title: 'AI-Enabled Governance',
              desc: 'Definition of Ready / Done and real metrics. Deliverable: AI-enabled DoR / DoD.' },
        es: { tag: 'Semana 5 · Fase 3', title: 'Governance AI-enabled',
              desc: 'DoR / DoD y métricas reales. Entregable: DoR / DoD AI-enabled.' }
      },
      {
        slug: 'chapter-6-code-literacy', accent: 's-cli', slides: 2,
        en: { tag: 'Week 6 · Phase 3', title: 'Code Literacy',
              desc: 'Reviewing PRs and detecting technical debt. Deliverable: Code Review Report.' },
        es: { tag: 'Semana 6 · Fase 3', title: 'Code Literacy',
              desc: 'Revisión de PRs y detección de deuda técnica. Entregable: Code Review Report.' }
      },
      {
        slug: 'chapter-7-poc-build', accent: 's-flag', slides: 2,
        en: { tag: 'Week 7 · Phase 4', title: 'Building a PoC',
              desc: 'Developing a simple solution with AI. Deliverable: working PoC.' },
        es: { tag: 'Semana 7 · Fase 4', title: 'Construcción de PoC',
              desc: 'Desarrollo de una solución simple con IA. Entregable: PoC funcional.' }
      },
      {
        slug: 'chapter-8-leadership-adoption', accent: 's-short', slides: 2,
        en: { tag: 'Week 8 · Phase 4', title: 'Leadership & Adoption',
              desc: 'Executive communication and organizational scaling. Deliverable: personal Playbook.' },
        es: { tag: 'Semana 8 · Fase 4', title: 'Liderazgo y Adopción',
              desc: 'Comunicación ejecutiva y escalamiento organizacional. Entregable: Playbook personal.' }
      }
    ]
  }
];
