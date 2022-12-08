import { makeStyles } from '@material-ui/core/styles';
import commonStyle from '../style';

export default makeStyles({
  ...commonStyle,
  styleContainerPorfolio: {
    display: 'inline-block',
    flexDirection: 'row',
    margin: '8px',
    cursor: 'pointer'
  },
  imgStyle: {
    width: '205px',
    margin: 'auto',
    height: '185px',
    border: '1px solid black',
    borderRadius: '92px'
  }
});
