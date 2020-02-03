
const root = window.location.pathname;

export default {
  root: {
    path: root,
    text: 'Acerca de mí'
  },
  tech: {
    path: `${root}technologies`,
    text: 'Tecnologías'
  },
  portFolio: {
    path: `${root}portfolio`,
    text: 'Experiencia profesional'
  },
  api: {
    portfolioList: `${root}resource/portfolio.json`,
    techList: `${root}resource/technologies.json`,
  }
};
