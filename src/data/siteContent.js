/**
 * Conteúdo do portfólio.
 * Textos, links e projetos ficam aqui para facilitar manutenção e escala.
 */

export const hero = {
  name: 'Deyvison Chaves',
  title: 'Desenvolvedor Web e Automação',
  subtitle:
    'Sistemas, automações e integrações sob medida para o dia a dia do negócio.',
  ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
  ctaSecondary: { label: 'Entrar em contato', href: '#contato' },
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
    'Comecei no suporte técnico e hoje desenvolvo aplicações web, automações e ferramentas que reduzem trabalho manual e melhoram o fluxo das equipes.',
  ],
  focusTitle: 'Foco',
  focus: ['Aplicações web', 'Automação', 'Integrações'],
}

export const diferenciais = {
  title: 'Como eu trabalho',
  items: [
    'Olho técnico e de negócio',
    'Comunicação direta',
    'Entregas documentadas',
    'Acompanhamento após a entrega',
  ],
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
  listTitle: 'Seleção',
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
  summary:
    'Do suporte técnico ao desenvolvimento e à automação, sempre com foco em entregar algo completo e útil.',
  pathTitle: 'Percurso',
  stepsTitle: 'Trajetória',
  steps: ['Suporte técnico', 'Desenvolvimento', 'Automação'],
  stepNotes: [
    'Base em atendimento, diagnóstico e resolução de problemas reais.',
    'Sistemas web e ferramentas internas pensadas para o uso diário.',
    'Rotinas e integrações que cortam retrabalho e ganham tempo.',
  ],
}

export const testimonial = {
  title: 'Depoimento',
  quote: 'Profissional dedicado, organizado e comprometido com o que entrega.',
  author: 'Espaço reservado para próximos clientes',
  enabled: false,
}

export const contact = {
  title: 'Contato',
  headline: 'Vamos conversar?',
  channelsTitle: 'Canais',
  channels: [
    { icon: 'whatsapp', label: 'WhatsApp', value: '(83) 99946-7796', href: 'https://wa.me/5583999467796' },
    { icon: 'email', label: 'E-mail', value: 'deyvisonchaves@gmail.com', href: 'mailto:deyvisonchaves@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'deyvison-chaves', href: 'https://www.linkedin.com/in/deyvison-chaves-70360436b/' },
    { icon: 'github', label: 'GitHub', value: 'ChavesSD', href: 'https://github.com/ChavesSD' },
  ],
  cta: { label: 'Falar comigo', href: 'https://wa.me/5583999467796' },
  ctaText: 'Me chama no WhatsApp ou no e-mail.',
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
  inicio: '01 Início',
  sobre: '02 Sobre',
  projetos: '03 Projetos',
  experiencia: '04 Experiência',
  contato: '05 Contato',
}
