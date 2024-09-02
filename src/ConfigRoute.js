const root = '/';
export default {
  root: {
    path: root
  },
  tech: {
    path: `${root}technologies`
  },
  portFolio: {
    path: `${root}experience`
  },
  api: {
    portfolioList: new URL(`./assets/resource/portfolio.json`, import.meta.url).href,
    techList: new URL(`./assets/resource/technologies.json`, import.meta.url).href
  }
};
