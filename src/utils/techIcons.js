/**
 * Ícones de tecnologias (DevIcon + Simple Icons). Usado no Marquee e no TechShowcase.
 */
const CDN_DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const CDN_SIMPLE = 'https://cdn.simpleicons.org'

export const techIconMap = {
  'HTML': 'html5',
  'CSS': 'css3',
  'JavaScript': 'javascript',
  'Vue': 'vuejs',
  'React': 'react',
  'Vuetify': 'vuetify',
  'Tailwind': 'tailwindcss',
  'Node.js': 'nodejs',
  'Python': 'python',
  'APIs REST': 'express',
  'WhatsApp API': `${CDN_SIMPLE}/whatsapp/25D366`,
  'WhatsApp': `${CDN_SIMPLE}/whatsapp/25D366`,
  'ADB': 'android',
  'Git': 'git',
  'GitHub': 'github',
  'Docker': 'docker',
  'Redis': 'redis',
  'MongoDB': 'mongodb',
  'VPS': 'nginx',
  'Linux': 'linux',
}

export function getTechIconUrl(name) {
  const mapped = techIconMap[name]
  if (!mapped) return null
  if (mapped.startsWith('http')) return mapped
  return `${CDN_DEVICON}/${mapped}/${mapped}-original.svg`
}
