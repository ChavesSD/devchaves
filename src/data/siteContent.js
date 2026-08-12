/**
 * Conteúdo do portfólio.
 * Textos, links e projetos ficam aqui para facilitar manutenção e escala.
 */

export const hero = {
  name: 'Deyvison Chaves',
  title: 'Desenvolvedor Web e Automação',
  subtitle:
    'Desenvolvo sistemas, automações e integrações sob medida, com atenção a performance, praticidade e resultado no dia a dia do negócio.',
  trustLine: 'Atendimento direto, projetos personalizados e suporte após a entrega',
  highlights: [
    'Sistemas web, automação e integração',
    'Python, ADB e desenvolvimento full stack',
  ],
  ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
  ctaSecondary: { label: 'Entrar em contato', href: '#contato' },
  stats: [
    { value: '5+', label: 'Projetos entregues' },
    { value: 'Full stack', label: 'Web e automação' },
    { value: 'Direto', label: 'Atendimento comigo' },
  ],
  techStackMarquee: [
    'HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Vuetify', 'Tailwind', 'Node.js', 'Python',
    'APIs REST', 'WhatsApp API', 'ADB', 'Git', 'Docker', 'Redis', 'MongoDB', 'VPS',
  ],
  photo: '/deyvison.png?v=4',
  statusLabel: 'Disponível para novos projetos',
  scrollHint: 'Role para ver mais',
}

export const about = {
  title: 'Sobre mim',
  paragraphs: [
    'Trabalho com suporte técnico e desenvolvimento de sistemas. Gosto de construir soluções práticas, organizadas e fáceis de evoluir.',
    'Hoje desenvolvo aplicações web, automações e ferramentas que ajudam a reduzir trabalho manual, cortar custos e melhorar o fluxo das equipes.',
  ],
  atuacao: 'Suporte e desenvolvimento',
  chips: ['Automação', 'Sistemas web'],
  commitmentTitle: 'No que eu me comprometo',
  commitments: ['Qualidade', 'Organização', 'Performance', 'Resultado'],
  proofSocial: [
    'Projetos para empresas locais',
    'Sistemas internos de empresas',
    'Ferramentas próprias',
  ],
  proofCount: 'Mais de 5 projetos entregues',
}

export const diferenciais = {
  title: 'Diferenciais',
  items: [
    'Olho técnico e também de negócio',
    'Comunicação clara, sem enrolação',
    'Entregas organizadas e documentadas',
    'Soluções feitas para o seu contexto',
    'Acompanhamento depois da entrega',
  ],
  compromissoTitle: 'Como eu trabalho',
  compromisso: ['Qualidade', 'Performance', 'Organização', 'Resultado', 'Transparência', 'Compromisso'],
}

export const skills = {
  title: 'Tecnologias',
  groups: [
    {
      icon: 'frontend',
      label: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Vuetify', 'Tailwind CSS'],
    },
    {
      icon: 'backend',
      label: 'Backend',
      items: ['Node.js', 'Python', 'APIs REST', 'Docker', 'Redis', 'MongoDB'],
    },
    {
      icon: 'automation',
      label: 'Automação',
      items: ['ADB', 'Scripts', 'Bots', 'Automação web', 'Integrações'],
    },
    {
      icon: 'tools',
      label: 'Ferramentas e infra',
      items: ['Git', 'GitHub', 'VPS', 'Deploy', 'Windows Server'],
    },
  ],
}

export const techStackShowcase = {
  allTech: [
    'HTML', 'CSS', 'JavaScript',
    'Vue', 'React', 'Vuetify', 'Tailwind', 'Node.js', 'Python', 'APIs REST', 'WhatsApp', 'ADB',
    'Git', 'GitHub', 'Docker', 'Redis', 'MongoDB',
  ],
}

export const projects = {
  title: 'Projetos',
  items: [
    {
      id: 'agendaqui',
      name: 'Aidate',
      badge: 'Projeto principal',
      description:
        'Plataforma de agendamento de serviços, pensada para organizar o atendimento e reduzir faltas.',
      features: [
        'Agendamento online',
        'Escolha de profissionais e serviços',
        'Lembretes no WhatsApp',
        'Painel de gestão',
        'Relatórios de desempenho',
      ],
      result: 'Mais organização no dia a dia, menos faltas e melhor aproveitamento da agenda.',
      tech: ['Vue', 'Vuetify', 'JavaScript', 'Node.js', 'WhatsApp', 'GitHub', 'Docker', 'Redis', 'MongoDB'],
      demoUrl: 'https://aidate.com.br/',
      githubUrl: null,
    },
    {
      id: 'aibox',
      name: 'Aibox',
      badge: null,
      description:
        'Aplicação em Python com ADB Platform Tools para gerenciar e automatizar dispositivos Android.',
      features: [
        'Feito em Python',
        'Integração com ADB Platform Tools',
      ],
      result: null,
      tech: ['Python', 'ADB'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'feedback-intelite',
      name: 'Feedback Intelite',
      badge: null,
      description:
        'Sistema para gestão de equipe, com acompanhamento e registro de feedbacks entre colaboradores.',
      features: [
        'Gestão de equipe',
        'Acompanhamento de colaboradores',
        'Registro de feedbacks',
      ],
      result: null,
      tech: ['JavaScript', 'Node.js', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'intelitehub',
      name: 'InteliteHub',
      badge: null,
      description: 'Central interna de aplicações, tutoriais e documentação técnica.',
      features: [
        'Conteúdo em um só lugar',
        'Organização de projetos',
        'Padronização interna',
        'Base de conhecimento',
      ],
      result: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Git', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
  ],
}

export const experience = {
  title: 'Experiência',
  path: 'Suporte técnico, desenvolvimento e automação',
  steps: ['Suporte técnico', 'Desenvolvimento', 'Automação'],
  paragraphs: [
    'Comecei no suporte técnico e fui migrando para desenvolvimento de sistemas e automações, sempre com o objetivo de entregar algo completo e útil.',
    'Hoje junto código, processo e prática para montar soluções que realmente ajudam no trabalho das pessoas.',
  ],
  highlights: [
    'Otimização de processos',
    'Automação de rotinas',
    'Desenvolvimento web',
  ],
  focusTitle: 'O que faço hoje',
}

export const testimonial = {
  title: 'Depoimento',
  quote: 'Profissional dedicado, organizado e comprometido com o que entrega.',
  author: 'Espaço reservado para próximos clientes',
  enabled: false,
}

export const contact = {
  title: 'Contato',
  headline: 'Quer conversar sobre um projeto?',
  subtitle: 'Posso ajudar a tirar sua ideia do papel com organização e atenção ao que realmente importa.',
  channels: [
    { icon: 'whatsapp', label: 'WhatsApp', value: '(83) 99946-7796', href: 'https://wa.me/5583999467796' },
    { icon: 'email', label: 'E-mail', value: 'deyvisonchaves@gmail.com', href: 'mailto:deyvisonchaves@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'deyvison-chaves', href: 'https://www.linkedin.com/in/deyvison-chaves-70360436b/' },
    { icon: 'github', label: 'GitHub', value: 'ChavesSD', href: 'https://github.com/ChavesSD' },
  ],
  cta: { label: 'Falar comigo', href: 'https://wa.me/5583999467796' },
  ctaHeadline: 'Vamos conversar?',
  ctaText: 'Me chama no WhatsApp ou no e-mail. Atendimento direto, sem burocracia.',
  conversionPhrase: 'Resposta rápida, atendimento direto e sem burocracia',
  guaranteePhrase: [
    'Orçamento sem compromisso',
    'Atendimento direto comigo',
    'Resposta rápida',
  ],
  primaryButtons: [
    { label: 'WhatsApp', href: 'https://wa.me/5583999467796', primary: true, icon: 'whatsapp' },
    { label: 'E-mail', href: 'mailto:deyvisonchaves@gmail.com', primary: false, icon: 'email' },
  ],
}

export const footer = {
  year: 2026,
  name: 'Deyvison Chaves',
  tagline: 'Desenvolvedor Web e Automação',
  rights: 'Todos os direitos reservados.',
  available: 'Aberto a novos projetos em 2026',
  links: [
    { label: 'WhatsApp', href: 'https://wa.me/5583999467796' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/deyvison-chaves-70360436b/' },
    { label: 'GitHub', href: 'https://github.com/ChavesSD' },
    { label: 'E-mail', href: 'mailto:deyvisonchaves@gmail.com' },
  ],
}

export const sectionLabels = {
  sobre: '02 Sobre',
  projetos: '03 Projetos',
  experiencia: '04 Experiência',
  contato: '05 Contato',
}
