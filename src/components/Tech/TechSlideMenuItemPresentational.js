// One item component
// selected prop will be passed

import React from 'react';
import useStyles from './styleSliderMenuItem';

const ChildrenMenuItem = ({ srcImage, url }) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  if (!url) { return <img src={srcImage} />; }
  return (
    <a href={url} target="_blank">
      <img src={srcImage} />
    </a>
  );
};

const MenuItem = ({ srcImage, selected, url }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.menuItem}
    >
      <ChildrenMenuItem srcImage={srcImage} url={url} />
    </div>
  );
};

const Arrow = ({ text, className }) => (
  <div
    className={className}
  >
    {text}
  </div>
);


const MenuScroll = (list, selected) => list.map((el, index) => {
  const { image, url } = el;
  return <MenuItem key={index} srcImage={image} url={url} selected={selected} />;
});


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export {
  ArrowLeft, ArrowRight, Arrow, MenuScroll
};
