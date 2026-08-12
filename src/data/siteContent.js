/**
 * Conteúdo do portfólio.
 * Textos, links e projetos ficam aqui para facilitar manutenção e escala.
 */

const WA_NUMBER = '5583999467796'
const WA_MESSAGE =
  'Olá Deyvison, vi seu portfólio e quero conversar sobre um projeto de sistema ou automação.'

export function buildWhatsAppUrl(message = WA_MESSAGE) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const whatsappUrl = buildWhatsAppUrl()

export const briefingOptions = [
  {
    id: 'web',
    label: 'Sistema web',
    message:
      'Olá Deyvison, vi seu portfólio e preciso de um sistema web sob medida. Podemos conversar?',
  },
  {
    id: 'automation',
    label: 'Automação',
    message:
      'Olá Deyvison, vi seu portfólio e quero automatizar rotinas manuais no meu negócio. Podemos conversar?',
  },
  {
    id: 'whatsapp',
    label: 'Integração WhatsApp',
    message:
      'Olá Deyvison, vi seu portfólio e quero integrar WhatsApp ao meu fluxo de atendimento. Podemos conversar?',
  },
  {
    id: 'other',
    label: 'Outro',
    message:
      'Olá Deyvison, vi seu portfólio e quero conversar sobre um projeto. Podemos falar?',
  },
]

export const hero = {
  name: 'Deyvison Chaves',
  title: 'Desenvolvedor Web e Automação',
  subtitle:
    'Sistemas, automações e integrações sob medida para o dia a dia do negócio.',
  ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
  ctaSecondary: { label: 'WhatsApp', href: whatsappUrl },
  techStackMarquee: [
    'HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Vuetify', 'Tailwind', 'Node.js', 'Python',
    'APIs REST', 'WhatsApp API', 'ADB', 'Git', 'Docker', 'Redis', 'MongoDB', 'VPS',
  ],
  photo: '/deyvison.png?v=6',
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
  transformTitle: 'Antes e depois',
  transform: {
    before: 'Planilha, cópia manual e retrabalho no dia a dia',
    after: 'Fluxo automatizado, menos erro e mais tempo útil',
  },
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
        'Plataforma de agendamento de serviços para organizar atendimento e reduzir faltas.',
      case: {
        problem: 'Agenda desorganizada e faltas frequentes',
        action: 'Agendamento online com lembretes no WhatsApp',
        result: 'Mais organização e melhor aproveitamento da agenda',
      },
      tech: ['Vue', 'Vuetify', 'JavaScript', 'Node.js', 'WhatsApp', 'Docker', 'Redis', 'MongoDB'],
      preview: '/aidate/1.png',
      demoUrl: 'https://aidate.com.br/',
      demoLabel: 'Ver online',
      githubUrl: null,
    },
    {
      id: 'aibox',
      name: 'Aibox',
      badge: null,
      description:
        'Aplicação em Python com ADB para gerenciar e automatizar dispositivos Android.',
      case: {
        problem: 'Operações manuais repetitivas em aparelhos Android',
        action: 'Automação via Python e ADB Platform Tools',
        result: 'Rotinas mais rápidas e menos intervenção manual',
      },
      tech: ['Python', 'ADB'],
      preview: '/aibox/1.png',
      demoUrl: null,
      demoLabel: null,
      githubUrl: null,
    },
    {
      id: 'feedback-intelite',
      name: 'Feedback Intelite',
      badge: null,
      description:
        'Sistema interno para gestão de equipe e registro de feedbacks entre colaboradores.',
      case: {
        problem: 'Feedbacks soltos e pouco acompanhamento de equipe',
        action: 'Painel para registrar e acompanhar feedbacks',
        result: 'Histórico claro e gestão mais consistente',
      },
      tech: ['JavaScript', 'Node.js', 'GitHub'],
      preview: '/feedback/1.png',
      demoUrl: null,
      demoLabel: null,
      githubUrl: null,
    },
    {
      id: 'intelitehub',
      name: 'InteliteHub',
      badge: null,
      description: 'Central interna de aplicações, tutoriais e documentação técnica.',
      case: {
        problem: 'Conhecimento e apps espalhados em vários lugares',
        action: 'Hub único com docs, tutoriais e acessos',
        result: 'Onboarding mais rápido e menos dúvida repetida',
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Git', 'GitHub'],
      preview: '/InteliteHub/1.png',
      demoUrl: null,
      demoLabel: null,
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
    { icon: 'whatsapp', label: 'WhatsApp', value: '(83) 99946-7796', href: whatsappUrl },
    { icon: 'email', label: 'E-mail', value: 'deyvisonchaves@gmail.com', href: 'mailto:deyvisonchaves@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'deyvison-chaves', href: 'https://www.linkedin.com/in/deyvison-chaves-70360436b/' },
    { icon: 'github', label: 'GitHub', value: 'ChavesSD', href: 'https://github.com/ChavesSD' },
  ],
  cta: { label: 'Falar comigo', href: whatsappUrl },
  ctaText: 'Escolha o que você precisa e eu já abro o WhatsApp com a mensagem certa.',
  responseHint: 'Resposta rápida, atendimento direto',
  briefingTitle: 'O que você precisa?',
  primaryButtons: [
    { label: 'WhatsApp', href: whatsappUrl, primary: true, icon: 'whatsapp' },
    { label: 'E-mail', href: 'mailto:deyvisonchaves@gmail.com', primary: false, icon: 'email' },
  ],
}

export const footer = {
  year: 2026,
  name: 'Deyvison Chaves',
  tagline: 'Desenvolvedor Web e Automação',
  rights: 'Todos os direitos reservados.',
  available: 'Aberto a novos projetos',
  links: [
    { label: 'WhatsApp', href: whatsappUrl },
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
