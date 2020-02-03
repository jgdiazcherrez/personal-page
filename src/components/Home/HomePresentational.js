import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../Menu/MenuPresentational';
import useStyles from './style';
import SocialPresentational from '../Social/SocialPresentational';


const HomePresentational = () => {
  const classes = useStyles();

  return (
    <Menu title="Acerca de mí">
      <div>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <section spacing={3}>
              <Typography component="h1" variant="h2" gutterBottom className={classes.title}>Jonathan Díaz</Typography>
              <img src="./img/profile.jpeg" className={classes.imgProfile} alt="me" />
              <Typography variant="h6" gutterBottom> Full Stack Engineer </Typography>
              <div className={classes.socialContainer}>
                <SocialPresentational />
              </div>
              <Typography variant="body1" gutterBottom>
                    Soy un apasionado de la ingeniería de software y de todo lo que este relacionado con el mismo. Me considero una persona muy inquieta que intenta estar al día en este mundo tecnológico tan complicado que requiere de una renovación constante. Cada experiencia me ha servido para profundizar y adquirir más conocimientos relacionados con la ingeniería de software, es por ello que disfruto creando y manteniendo software.
              </Typography>
            </section>
          </Grid>
        </Grid>
      </div>
    </Menu>
  );
};


export default HomePresentational;
