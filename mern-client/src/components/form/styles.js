import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
 /*    background: '#bbf2ef' */
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
    background: '#eee',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontSize: 15,
    borderRadius: 5,
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));