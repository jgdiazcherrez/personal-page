import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { fetchTechListAction } from '../../actions/tech';
import techSelector from '../../selectors/tech';
import useStyles from './styleSlider';
import {
  MenuScroll,
  ArrowLeft,
  ArrowRight
} from './TechSlideMenuItemPresentational';
import './styleMenu.css';

const TechSlide = () => {
  const { list } = useSelector(techSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    // component Did mount
    dispatch(fetchTechListAction());
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      {(() =>
        list.map((elem, index) => {
          const selected = 1;
          const images = [];
          elem.items.forEach((item) => {
            const img = document.createElement('img');
            img.src = require(`@/assets/${item.image}`);
            images.push({
              url: item.url,
              image: img.src
            });
          });
          const totalItemMenu = MenuScroll(images, selected);

          return (
            <section className={classes.containerScroll} key={index}>
              <Typography variant="h6" gutterBottom>
                {t(elem.textKey)}
              </Typography>
              <ScrollMenu
                data={totalItemMenu}
                arrowLeft={ArrowLeft}
                hideSingleArrow
                wheel={false}
                arrowRight={ArrowRight}
                selected={selected}
              />
            </section>
          );
        }))()}
    </div>
  );
};

export default TechSlide;
