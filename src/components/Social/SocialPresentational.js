import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaWordpress } from 'react-icons/fa';
import useStyles from './style';

const SocialPresentational = () => {
  const classes = useStyles();
  return (
    <>
      <ListItem
        button
        component="a"
        href="https://github.com/jgdiazcherrez"
        target="_blank"
      >
        <ListItemIcon>
          <FaGithub className={classes.socialItem} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component="a"
        href="https://twitter.es/jgdiazcherrez"
        target="_blank"
      >
        <ListItemIcon>
          <FaTwitter className={classes.socialItem} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component="a"
        href="https://linkedin.com/jgdiazcherrez"
        target="_blank"
      >
        <ListItemIcon>
          <FaLinkedin className={classes.socialItem} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component="a"
        href="https://jgdiazcherrez.wordpress.com"
        target="_blank"
      >
        <ListItemIcon>
          <FaWordpress className={classes.socialItem} />
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default SocialPresentational;
