
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { fetchTechListAction } from '../../actions/tech';
import techSelector from '../../selectors/tech';
import useStyles from './styleSlider';
import { MenuScroll, ArrowLeft, ArrowRight } from './TechSlideMenuItemPresentational';

const TechSlide = () => {
  const { list } = useSelector(techSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    // component Did mount
    dispatch(fetchTechListAction());
  }, []);

  return (
    <div>
      {(() => list.map((elem, index) => {
        const selected = 1;
        const totalItemMenu = MenuScroll(elem.items, selected);

        return (
          <section className={classes.containerScroll} key={index}>
            <Typography variant="h6" gutterBottom>
              {elem.spanishText}
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
