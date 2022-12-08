import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Menu from '../Menu/MenuPresentational';
import useStyles from './style';
import SocialPresentational from '../Social/SocialPresentational';

const HomePresentational = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Menu title={t('aboutMe')}>
      <div>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <section spacing={3}>
              <Typography component="h1" variant="h2" gutterBottom className={classes.title}>
                {t('name')}
              </Typography>
              <img
                src={require('@/assets/img/profile.jpeg')}
                className={classes.imgProfile}
                alt="me"
              />
              <Typography variant="h6" gutterBottom>
                {t('jobTitleHome')}
              </Typography>
              <div className={classes.socialContainer}>
                <SocialPresentational />
              </div>

              <Typography variant="body1" gutterBottom>
                {t('bodyHome')}
              </Typography>
            </section>
          </Grid>
        </Grid>
      </div>
    </Menu>
  );
};

export default HomePresentational;
