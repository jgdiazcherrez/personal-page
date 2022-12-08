import { makeStyles } from '@material-ui/core/styles';
import commonStyle from '../style';

export default makeStyles({
  ...commonStyle,
  menuItem: {
    padding: '0 15px',
    margin: '5px 10px',
    userSelect: 'none',
    cursor: 'none',
    border: 'none',
    '& img': {
      width: '177px',
      height: '103px'
    }
  }
});
