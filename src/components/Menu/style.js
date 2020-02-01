
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  titleMenu: { display: 'block', margin: '-35px', textAlign: 'center' },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolBar:
      { display: 'inline-block' },
  headerBackButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px'
  }
});
