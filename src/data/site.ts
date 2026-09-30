export type Locale = 'pl' | 'en';
export type Page = 'home' | 'bio';

export function pagePath(locale: Locale, page: Page): string {
  if (locale === 'pl') return page === 'home' ? '/' : '/bio/';
  return page === 'home' ? '/en/' : '/en/bio/';
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
      comingSoon: 'materiały wkrótce',
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
      comingSoon: 'more to come',
      sourceCode: 'source code',
      email: 'email',
    },
  },
};
