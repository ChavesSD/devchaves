/**
 * Conteúdo centralizado do portfólio.
 * Edite aqui para alterar textos, links e projetos sem mexer nos componentes.
 */

export const hero = {
  name: 'Deyvison Chaves',
  title: 'Desenvolvedor Web & Automação',
  subtitle:
    'Desenvolvo sistemas e automações que economizam tempo, reduzem custos e aumentam resultados.',
  trustLine: '• Atendimento direto • Projetos sob medida • Suporte pós-entrega',
  highlights: [
    'Especialista em sistemas web, automação e integração',
    'Foco em performance, praticidade e crescimento',
  ],
  ctaPrimary: { label: 'Ver Projetos', href: '#tecnologias' },
  ctaSecondary: { label: 'Entrar em Contato', href: '#contato' },
  stats: [
    { value: '5+', label: 'Projetos entregues' },
    { value: '100%', label: 'Foco em resultado' },
    { value: 'Full-stack', label: 'Web & Automação' },
  ],
  techStackMarquee: [
    'HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Vuetify', 'Tailwind', 'Node.js', 'Python',
    'APIs REST', 'WhatsApp API', 'ADB', 'Git', 'Docker', 'Redis', 'MongoDB', 'VPS', 'Linux',
  ],
}

export const about = {
  title: 'Sobre Mim',
  paragraphs: [
    'Sou desenvolvedor com atuação em suporte técnico e desenvolvimento de sistemas, focado em criar soluções práticas, modernas e escaláveis.',
    'Atuo desenvolvendo aplicações web, automações e ferramentas que otimizam processos, reduzem custos e aumentam a produtividade.',
  ],
  atuacao: 'Suporte + Dev',
  chips: ['Automação', 'Sistemas Web'],
  commitmentTitle: 'Meu compromisso é entregar projetos com:',
  commitments: ['Qualidade', 'Organização', 'Performance', 'Foco em resultado'],
  proofSocial: [
    'Projetos para empresas locais',
    'Sistemas internos corporativos',
    'Ferramentas próprias',
  ],
  proofCount: '+5 projetos reais entregues',
}

export const diferenciais = {
  title: 'Diferenciais',
  items: [
    'Visão técnica + visão de negócio',
    'Comunicação clara e objetiva',
    'Entregas organizadas e documentadas',
    'Soluções sob medida',
    'Suporte e acompanhamento pós-entrega',
  ],
  compromissoTitle: 'Compromisso',
  compromisso: ['Qualidade', 'Performance', 'Organização', 'Foco em resultado', 'Compromisso', 'Transparência'],
}

/** Referência do stack por categoria (opcional; a UI usa techStackShowcase.allTech). */
export const skills = {
  title: 'Tecnologias & Skills',
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
      items: ['ADB', 'Scripts', 'Bots', 'Automação Web', 'Integrações de Sistemas'],
    },
    {
      icon: 'tools',
      label: 'Ferramentas & Infra',
      items: ['Git', 'GitHub', 'VPS', 'Deploy', 'Linux', 'Windows Server'],
    },
  ],
}

/** Lista plana de tecnologias para o showcase (esquerda). Cada projeto usa um subconjunto em `tech`. */
export const techStackShowcase = {
  allTech: [
    'HTML', 'CSS', 'JavaScript',
    'Vue', 'React', 'Vuetify', 'Tailwind', 'Node.js', 'Python', 'APIs REST', 'WhatsApp', 'ADB',
    'Git', 'GitHub', 'Docker', 'Redis', 'MongoDB',
  ],
}

export const projects = {
  title: 'Projetos em Destaque',
  items: [
    {
      id: 'agendaqui',
      name: 'Agendaqui',
      badge: 'Projeto Principal',
      description:
        'Plataforma completa para agendamento inteligente de serviços, focada em otimizar o atendimento e reduzir faltas.',
      features: [
        'Agendamento online automatizado',
        'Seleção de profissionais e serviços',
        'Lembretes via WhatsApp',
        'Dashboard gerencial',
        'Relatórios de desempenho',
      ],
      result: 'Mais organização, menos faltas e mais produtividade para empresas.',
      tech: ['Vue', 'Vuetify', 'JavaScript', 'Node.js', 'WhatsApp', 'GitHub', 'Docker', 'Redis', 'MongoDB'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'autozap',
      name: 'AutoZap',
      badge: null,
      description:
        'Sistema de automação para WhatsApp com IA e Multichat com Multi Instâncias.',
      features: [
        'Automação com IA',
        'Multichat e multi instâncias',
        'Integração WhatsApp',
        'Backend escalável',
      ],
      result: null,
      tech: ['Vue', 'Vuetify', 'JavaScript', 'Node.js', 'MongoDB', 'Docker', 'Redis', 'WhatsApp', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'adb-logger',
      name: 'ADB Logger',
      badge: null,
      description: 'Sistema para debug e gerenciamento de dispositivos Android via ADB.',
      features: ['Coleta de logs', 'Gerenciamento de aplicativos', 'Manutenção básica', 'Integração com Platform Tools'],
      result: null,
      tech: ['Python', 'ADB', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'intelite-credenciais',
      name: 'Sistema de Cadastro de Credenciais (Intelite)',
      badge: null,
      description: 'Plataforma para controle seguro de acessos e senhas corporativas.',
      features: ['Gestão de usuários', 'Configuração de credenciais', 'Integração com totens', 'Interface moderna'],
      result: null,
      tech: ['React', 'Tailwind', 'JavaScript', 'Node.js', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'screnoid',
      name: 'Screnoid',
      badge: null,
      description:
        'Aplicação desktop para gravação de tela e uso como segunda tela em mini PCs Android.',
      features: ['Screen recording', 'Segunda tela via ADB', 'Interface amigável', 'Integração nativa'],
      result: null,
      tech: ['Python', 'ADB', 'Git', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 'intelitehub',
      name: 'InteliteHub',
      badge: null,
      description: 'Repositório interno para aplicações, tutoriais e documentação técnica.',
      features: ['Centralização de conteúdo', 'Organização de projetos', 'Padronização interna', 'Base de conhecimento'],
      result: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Git', 'GitHub'],
      demoUrl: null,
      githubUrl: null,
    },
  ],
}

export const experience = {
  title: 'Experiência',
  path: 'Suporte Técnico → Desenvolvimento → Automação',
  paragraphs: [
    'Iniciei atuando em suporte técnico, evoluindo para desenvolvimento de sistemas e automações, sempre focado em entregar soluções completas.',
    'Hoje, atuo integrando tecnologia, performance e estratégia para gerar valor real aos projetos.',
  ],
  highlights: [
    'Otimização de processos',
    'Automação de rotinas',
    'Desenvolvimento web',
  ],
}

export const testimonial = {
  title: 'Depoimento',
  quote: 'Profissional dedicado, organizado e comprometido com resultados.',
  author: '(Espaço reservado para futuros clientes.)',
  enabled: false,
}

// Preencha com seus dados reais antes de publicar:
// - WhatsApp: href no formato https://wa.me/55DDDNUMERO (ex: 5581999999999)
// - E-mail: href no formato mailto:seu@email.com
// - LinkedIn: URL do seu perfil
// - GitHub: URL do seu perfil
// - cta.href: normalmente o mesmo link do WhatsApp
export const contact = {
  title: 'Contato',
  headline: 'Vamos transformar sua ideia em um projeto real?',
  subtitle:
    'Estou pronto para desenvolver sua solução com qualidade, agilidade e foco em resultado.',
  channels: [
    { icon: 'whatsapp', label: 'WhatsApp', value: '(83) 9328-3219', href: 'https://wa.me/558393283219' },
    { icon: 'email', label: 'E-mail', value: 'deyvisonchaves@gmail.com', href: 'mailto:deyvisonchaves@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: '(adicione aqui)', href: 'https://linkedin.com/in/seu-perfil' },
    { icon: 'github', label: 'GitHub', value: 'ChavesSD', href: 'https://github.com/ChavesSD' },
  ],
  cta: { label: 'Fale Comigo Agora', href: 'https://wa.me/558393283219' },
  ctaHeadline: 'Pronto para tirar seu projeto do papel?',
  ctaText: 'Vamos transformar sua ideia em resultado. Sem burocracia, com atendimento direto.',
  conversionPhrase: 'Resposta rápida • Atendimento direto • Sem burocracia',
  guaranteePhrase: [
    'Orçamento sem compromisso',
    'Atendimento direto comigo',
    'Resposta rápida',
  ],
  primaryButtons: [
    { label: 'WhatsApp', href: 'https://wa.me/558393283219', primary: true, icon: 'whatsapp' },
    { label: 'E-mail', href: 'mailto:deyvisonchaves@gmail.com', primary: false, icon: 'email' },
  ],
}

export const footer = {
  year: 2026,
  name: 'Deyvison Chaves',
  tagline: 'Desenvolvedor Web & Automação',
  rights: 'Todos os direitos reservados.',
  available: 'Disponível para projetos em 2026',
  links: [
    { label: 'WhatsApp', href: 'https://wa.me/558393283219' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil' },
    { label: 'GitHub', href: 'https://github.com/ChavesSD' },
    { label: 'E-mail', href: 'mailto:deyvisonchaves@gmail.com' },
  ],
}
