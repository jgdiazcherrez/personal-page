import React from 'react';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigRoute from './ConfigRoute';
import HomePresentational from './components/Home/HomePresentational';
import configureStore from './store/configureStore';
import PortFolioListPresentational from './components/Portfolio/PortFolioListPresentational';
import TechPresentational from './components/Tech/TechPresentational';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const store = configureStore();
const theme = createTheme({
  palette: {
    primary: {
      main: '#f7f7f7'
    },
    contrastThreshold: 3,
    tonalOffset: 0.0
  }
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        {
          // eslint-disable-next-line consistent-return
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('./dev/DevTools').default;
              return <DevTools />;
            }
          })()
        }

        <Switch>
          <Route
            exact
            path={ConfigRoute.root.path}
            render={() => <HomePresentational />}
          />
          <Route
            path={ConfigRoute.portFolio.path}
            render={() => <PortFolioListPresentational />}
          />
          <Route
            path={ConfigRoute.tech.path}
            render={() => <TechPresentational />}
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
