export interface TimelineTranslation {
  title: string;
  org?: string;
  summary: string | null;
  tools: string[];
  itemTitles?: string[];
}

export const timelineEn: Record<string, TimelineTranslation> = {
  'vox-qa-lead': {
    title: 'QA Lead',
    summary: 'Software quality for an online store and its surrounding systems: an internal sales platform, CMS, and interior design app. Analyzing logs for patterns and anomalies, clarifying requirements with stakeholders alongside Product Owners, tailoring Jira workflows to teams, introducing Scrum in two teams, and running store performance tests.',
    tools: ['log analysis', 'Jira', 'Scrum', 'Locust', 'manual testing'],
  },
  'esvelo-head-of-qa': {
    title: 'Head of Quality Assurance',
    summary: 'A team of ten QA specialists across product teams; nine hired and onboarded in six months. QA pay analysis that led the company to change its salary bands; department OKRs, evaluations and individual goals, a QA newsletter, and a workshop on roles and responsibilities.',
    tools: ['recruitment', 'onboarding', 'OKRs', 'pay analysis', 'meeting facilitation'],
  },
  'venturedevs-qa-lead': {
    title: 'QA Lead',
    summary: 'The company’s first E2E testing framework, internal workshops on test automation, and technical recruitment of QA specialists. Facilitating retrospectives, refinement sessions, reviews, and demos, including sessions with clients.',
    tools: ['E2E automation', 'internal workshops', 'technical recruitment', 'meeting facilitation'],
  },
  'venturedevs-qa-specialist': {
    title: 'QA Specialist',
    summary: 'Test plans, exploratory and ad hoc testing of web apps (PWAs) across systems and devices; test automation in Python with behave. Reporting and reproducing bugs, assessing risk, estimating work, and working with business and technical requirements.',
    tools: ['exploratory testing', 'PWA', 'Python', 'behave', 'risk assessment'],
  },
  'pag-projektowo-kosztorysowy': {
    title: 'Design and Cost Estimation Specialist',
    summary: 'Supporting designers and site managers with technical drawings, design documentation, proposals, and cost estimates.',
    tools: ['technical drawings', 'design documentation', 'cost estimation', 'proposals'],
  },
  'deon-inzynier-budowy': {
    title: 'Assistant Designer / Site Engineer',
    summary: 'Several dozen detailed and as-built designs for connecting apartment buildings to FTTH networks in Lublin, Radom, and Rzeszów, prepared independently. Coordinating design work and onboarding five new people in the design office.',
    tools: ['detailed designs', 'as-built designs', 'FTTH', 'work coordination', 'onboarding'],
  },
  'pwmerpol-inzynier-budowy': {
    title: 'Assistant Designer / Site Engineer',
    summary: 'Coordinating work based on contract requirements, technical documentation, and schedules. Supporting the designer and site manager with technical drawings and proposals.',
    tools: ['technical documentation', 'schedules', 'technical drawings', 'proposals'],
  },
  'lubella-elektryk': {
    title: 'Electrician',
    summary: 'Industrial maintenance in a production plant: fixing faults, maintaining equipment, and diagnosing failures using electrical diagrams and PLC programs.',
    tools: ['industrial maintenance', 'electrical diagrams', 'PLC', 'fault diagnosis'],
  },
  'mw-lublin-asystent-automatyka': {
    title: 'Automation Assistant',
    summary: 'Industrial maintenance: analyzing electrical diagrams and PLC programs, assisting with repairs and fault diagnosis.',
    tools: ['industrial maintenance', 'electrical diagrams', 'PLC'],
  },
  'altest-asystent-projektanta': {
    title: 'Design Assistant',
    summary: 'Architectural base drawings, cost estimates, bills of quantities, and stock lists in a design office.',
    tools: ['architectural base drawings', 'cost estimates', 'bills of quantities'],
  },
  'strona-mariusznazar': {
    title: 'This website',
    summary: 'A personal website with a bio and materials about my working methods. Built with Astro and hosted on Cloudflare Pages.',
    tools: ['Astro', 'Cloudflare Pages'],
  },
  'canvas-ai-managers-3': {
    title: 'AI implementation canvas from AI_Managers 3',
    summary: 'Final course assignment: a canvas for an AI implementation project in an organization. To be shared after anonymization or as a written description.',
    tools: [],
  },
  'esvelo-artefakty-2021': {
    title: 'QA newsletter, articles, and presentations on feedback',
    summary: 'Work from six months at Esvelo: a QA department newsletter I designed and launched; two articles for the feedback culture group, the only pieces I can share from that period; and two company-wide presentations.',
    tools: [],
    itemTitles: [
      'QA newsletter',
      'Two internal articles on feedback',
      'Presentations “Feed with feedback” and “Psychological safety in teams”',
    ],
  },
  'framework-e2e-venturedevs': {
    title: 'The company’s first E2E testing framework',
    summary: 'An E2E framework in Python, using behave for Gherkin scenarios. Used by me and two other teams.',
    tools: ['Python', 'behave', 'Gherkin'],
  },
  'projekty-ftth': {
    title: 'Several dozen detailed and as-built FTTH designs',
    summary: 'Documentation for connecting apartment buildings to fiber optic networks in Lublin, Radom, and Rzeszów.',
    tools: ['detailed designs', 'as-built designs'],
  },
  'brave-jesien-2026': {
    title: 'BRAVE.courses training, autumn 2026',
    summary: 'The goal of these courses is to learn and find practical ways to use AI in my day-to-day work.',
    tools: [],
    itemTitles: ['10xDevs 4.0', 'MEGA.dev', 'AI Product Heroes 3', 'AI Tech Leaders', 'AI_Sales 2', 'AI_Marketers 3'],
  },
  'brave-wiosna-2026': {
    title: 'BRAVE.courses training, spring 2026',
    summary: 'Four courses in the AI_devs, AI Product Heroes, 10xDevs, and AI_Managers series. AI_Managers 3 concluded with an AI implementation canvas; certificate issued July 11, 2026.',
    tools: [],
    itemTitles: ['AI_Managers 3', '10xDevs 3.0', 'AI Product Heroes 2', 'AI_devs 4'],
  },
  'ai-devs-3': {
    title: 'AI_devs 3 Agents',
    summary: 'A five-week hands-on course on generative AI tools, focused on building autonomous systems. Certificate issued December 9, 2024.',
    tools: [],
  },
  'swps-agile-leadership': {
    title: 'Agile Leadership',
    summary: 'Postgraduate studies in servant leadership and working with teams amid uncertainty and constant change.',
    tools: [],
  },
  'warsztaty-public-speaking': {
    title: 'Public speaking workshop',
    summary: 'A workshop on preparing for presentations.',
    tools: [],
  },
  'warsztaty-kultura-feedbacku': {
    title: 'Building a feedback culture workshop',
    summary: 'Techniques for giving feedback and ways to build and strengthen a feedback culture in an organization.',
    tools: ['FUKO', 'SBI'],
  },
  'testuj-pl-selenium': {
    title: 'Selenium WebDriver with Python programming basics',
    summary: 'The basics of writing automated tests.',
    tools: ['Selenium', 'Python'],
  },
  'sii-automation-tester': {
    title: 'Automation Tester course',
    summary: 'An introduction to working as a test automation engineer.',
    tools: [],
  },
  'istqb-ctfl': {
    title: 'ISTQB Certified Tester Foundation Level',
    summary: 'Foundation-level ISTQB certification.',
    tools: [],
  },
  'sii-zostan-testerem': {
    title: 'Become a Tester course',
    summary: 'The basics of software testing and preparation for ISTQB certification.',
    tools: [],
  },
  'politechnika-lubelska': {
    title: 'Master of Engineering, Intelligent Technologies in Electrical Engineering',
    org: 'Lublin University of Technology',
    summary: null,
    tools: [],
  },
};
