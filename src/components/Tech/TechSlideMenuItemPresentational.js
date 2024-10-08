import React from 'react';
import useStyles from './styleSliderMenuItem';

function ChildrenMenuItem({ srcImage, url }) {
  if (!url) {
    return <img src={srcImage} alt="img-item" />;
  }
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={srcImage} alt="img-item" />
    </a>
  );
}

function MenuItem({ srcImage, url }) {
  const classes = useStyles();
  return (
    <div className={classes.menuItem}>
      <ChildrenMenuItem srcImage={srcImage} url={url} />
    </div>
  );
}

function Arrow({ text, className }) {
  return <div className={className}>{text}</div>;
}

const MenuScroll = (list, selected) =>
  list.map((el, index) => {
    const { image, url } = el;
    return <MenuItem key={`{menu-item-${index}}`} srcImage={image} url={url} selected={selected} />;
  });

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export { ArrowLeft, ArrowRight, Arrow, MenuScroll };
