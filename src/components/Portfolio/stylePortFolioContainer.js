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
    width: '330px',
    margin: 'auto',
    height: '293px',
    border: '1px solid black',
    borderRadius: '5px'
  }
});
