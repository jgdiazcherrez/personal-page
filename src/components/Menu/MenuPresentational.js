import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ConfigRoute from '../../ConfigRoute';
import useStyles from './style';

function MenuPresentational({ children, title }) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenurOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  const onClickHandleSpanishLanguage = () => i18n.changeLanguage('es');
  const onClickHandleEnglishLanguage = () => i18n.changeLanguage('en');

  const ref = useRef(null);
  const handleOutSideEventClick = (event) =>
    ref.current && !ref.current.contains(event.target) ? setMenuIsOpen(false) : null;

  // component didmount
  useEffect(() => {
    document.addEventListener('click', handleOutSideEventClick, true);
    return () => {
      // componentWillUnMount
      document.removeEventListener('click', handleOutSideEventClick, true);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            onClick={handleMenurOpen}
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            className={classes.titleMenu}
            gutterBottom
            id="headerTitle"
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        ref={ref}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        open={menuIsOpen}
      >
        <div className={classes.headerBackButton}>
          <IconButton onClick={handleMenuClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <div className={classes.drawerInner}>
          <ListItem button component={Link} to={ConfigRoute.root.path}>
            <ListItemText primary={t('aboutMe')} />
          </ListItem>
          <ListItem button component={Link} to={ConfigRoute.tech.path}>
            <ListItemText primary={t('tech')} />
          </ListItem>
          <ListItem button component={Link} to={ConfigRoute.portFolio.path}>
            <ListItemText primary={t('experience')} />
          </ListItem>
          <ListItem>
            <span
              className={[classes.flagLanguage, 'fi fi-us'].join(' ')}
              onClick={onClickHandleEnglishLanguage}
              role="presentation"
            />
            <span
              className={[classes.flagLanguage, 'fi fi-es'].join(' ')}
              onClick={onClickHandleSpanishLanguage}
              role="presentation"
            />
          </ListItem>
        </div>
      </Drawer>
      {children}
    </div>
  );
}

export default MenuPresentational;
