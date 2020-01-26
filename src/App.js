import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ConfigRoute from './ConfigRoute'
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import PortFolioIndex from "./views/Portfolio";
import TechIndex from "./views/Tech";

let store = configureStore();



const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#f7f7f7',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.0,
    },
});


const App = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router>

                    {
                        (() => {
                            if (process.env.NODE_ENV === 'development') {
                                 const DevTools = require('./dev/DevTools').default;
                                 return <DevTools/>
                             }
                        })()
                    }

                <Switch>
                    <Route exact path={ConfigRoute.root.path} render={() => <Home/>}/>
                    <Route path={ConfigRoute.portFolio.path} render={() => <PortFolioIndex/>}/>
                    <Route path={ConfigRoute.tech.path} render={() => <TechIndex/>}/>/}
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>

);

export default App;