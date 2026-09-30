export type Locale = 'pl' | 'en';
export type Page = 'home' | 'bio' | 'materials';

export function pagePath(locale: Locale, page: Page): string {
  if (locale === 'pl') {
    if (page === 'home') return '/';
    return page === 'bio' ? '/bio/' : '/materialy/';
  }
  if (page === 'home') return '/en/';
  return page === 'bio' ? '/en/bio/' : '/en/articles/';
}

export function articlePath(locale: Locale, slug: string): string {
  return `${pagePath(locale, 'materials')}${slug}/`;
}

export const site = {
  name: 'Mariusz Nazar',
  repo: 'https://github.com/mariusznazar/mariusznazar.com',
  copy: {
    pl: {
      tagline: 'testowanie · procesy zespołów · warsztat pracy z agentami AI',
      intro: [
        'Od 2018 roku zajmuję się jakością oprogramowania i sposobem, w\u00a0jaki powstaje. Badam problemy, szukam rozwiązań i wspieram użytkowników, zespoły oraz interesariuszy. Poza pracą buduję własny warsztat i sprawdzam, co zmieniają w\u00a0nim kolejne wersje narzędzi AI.',
      ],
      description: 'Mariusz Nazar: QA Lead. Testowanie, procesy zespołów, warsztat pracy z agentami AI.',
      portraitAlt: 'Portret Mariusza Nazara',
      materials: 'Materiały',
      materialsIntro: 'Teksty i przykłady z mojej pracy.',
      viewAllMaterials: 'Zobacz wszystkie materiały',
      backToMaterials: 'Wszystkie materiały',
      sourceCode: 'kod tej strony',
      email: 'e-mail',
    },
    en: {
      tagline: 'software testing · team processes · working with AI agents',
      intro: [
        'Since 2018, I’ve worked on software quality and how software gets built. I investigate problems, look for solutions, and support users, teams, and stakeholders. Outside work, I’m developing my own practice with AI agents and exploring how new generations of tools reshape it.',
      ],
      description: 'Mariusz Nazar: QA Lead. Software testing, team processes, and working with AI agents.',
      portraitAlt: 'Portrait of Mariusz Nazar',
      materials: 'Articles',
      materialsIntro: 'Writing and examples from my work.',
      viewAllMaterials: 'See all articles',
      backToMaterials: 'All articles',
      sourceCode: 'source code',
      email: 'email',
    },
  },
};
