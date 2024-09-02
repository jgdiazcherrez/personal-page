const root = '/';
console.log(process.env);
if (process.env.PRODUCTION) {
  // root = '/';
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
  }
};
export const mainRootPath = root;
