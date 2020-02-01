import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../Menu/MenuPresentational';
import useStyles from './style';
import PortFolioListContainer from './PortFolioListContainer';


const PortFolioListPresentational = () => {
  const classes = useStyles();

  return (
    <Menu title="Experiencia">
      <div>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <section spacing={3}>
              <br />
              <Typography variant="body1" gutterBottom>
            Desde hace más de 6 años trabajo en importantes medios de comunicación, esta experiencia me ha servido para profundizar más mis conocimientos con el desarrollo web. Estas son algunas de las empresas en las que he trabajado y en las que he desempeñado rol diferente:
              </Typography>
              <PortFolioListContainer />
            </section>
          </Grid>
        </Grid>
      </div>
    </Menu>
  );
};


export default PortFolioListPresentational;
