
import { makeStyles } from '@material-ui/core/styles';
import commonStyle from '../style';

export default makeStyles({
  socialContainer: {
    display: 'inline-flex'
  },
  title: {
    fontSize: '3em',
    margin: '12px'
  },
  imgProfile: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'middle',
    border: '1px solid black'
  },
  ...commonStyle
});
