import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../Menu/MenuPresentational';
import useStyles from './style';
import TechSlideContainer from './TechSlideContainer';


const TechIndex = () => {
  const classes = useStyles();
  return (
    <Menu title="Tecnologías">
      <div>
        <Grid container class={classes.container}>
          <Grid item xs={12}>
            <section spacing={3}>
              <br />
              <Typography variant="body1" gutterBottom>
                               Las tecnologías hoy en día te obligan estar al día, en esta profesión la renovación debe ser constante, estas son algunas de las tecnologías más relevantes con las que he trabajado a lo largo de mi carrera profesional:
              </Typography>
              <TechSlideContainer />
            </section>
          </Grid>
        </Grid>
      </div>
    </Menu>
  );
};


export default TechIndex;
