import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../Menu/MenuPresentational';
import useStyles from './style';
import PortFolioListContainer from './PortFolioListContainer';
import { useTranslation } from 'react-i18next';

const PortFolioListPresentational = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Menu title={t('experience')}>
      <div>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <section spacing={3}>
              <br />
              <Typography variant="body1" gutterBottom>
                {t('jobExperience')}
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
