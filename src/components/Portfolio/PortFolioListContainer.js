import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typography from '@material-ui/core/Typography';
import { fetchListAction } from '../../actions/portfolio';
import portFolioSelector from '../../selectors/portfolio';
import useStyles from './stylePortFolioContainer';

const List = () => {
  const { list } = useSelector(portFolioSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    // component Did mount
    dispatch(fetchListAction());
  }, []);
  const classes = useStyles();

  return (
    <>
      {(() =>
        list.map((elem, index) => (
          <Grid item className={classes.styleContainerPorfolio} key={elem.image}>
            <article>
              <div>
                <LazyLoadImage
                  data-id={index}
                  alt={elem.name}
                  className={classes.imgStyle}
                  src={require(`@/assets/img/company/${elem.image}`)}
                />
              </div>
              <div>
                <Typography variant="h5" gutterBottom>
                  {elem.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {elem.position}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  {elem.shortDescription}
                </Typography>
              </div>
              {/* <Anchor href={elem.url} alt={elem.name} target={"_blank"}> */}
              {/* </Anchor> */}
            </article>
          </Grid>
        )))()}
    </>
  );
};

export default List;
