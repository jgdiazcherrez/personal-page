let root = '/';
if (process.env.PRODUCTION) {
  root = '/personal-page/';
}

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
    portfolioList: `${root}resource/portfolio.json`,
    techList: `${root}resource/technologies.json`
  }
};
