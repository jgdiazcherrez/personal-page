import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Menu from '../Menu/MenuPresentational';
import useStyles from './style';
import TechSlideContainer from './TechSlideContainer';

const TechIndex = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Menu title={t('tech')}>
      <div>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <section spacing={3}>
              <br />
              <Typography variant="body1" gutterBottom>
                {t('techBody')}
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
