import configStoreProd from './configureStore.prod';
import configStoreDev from './configureStore.dev';

// eslint-disable-next-line import/no-mutable-exports
let configStore = configStoreDev;
if (process.env.NODE_ENV !== 'development') {
  configStore = configStoreProd;
}
export default configStore;
