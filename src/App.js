import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ConfigRoute from './ConfigRoute'
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './views/home';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ffffff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00'
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
    <MuiThemeProvider theme={theme}>
        <Router>
            <div>
                {
                    (() => {
                        /* if (process.env.NODE_ENV === 'development') {
                             const DevTools = require('./containers/DevTools').default;
                             return <DevTools/>
                         }*/
                    })()
                }
                <Route exact path={ConfigRoute.root} component={Home}/>
            </div>
        </Router>
    </MuiThemeProvider>
);

export default App;