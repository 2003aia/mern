import React, {useState, useEffect} from 'react'

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles'
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import { useDispatch } from 'react-redux';
import {getPosts} from './redux/posts'


function App() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">mern</Typography>
        {/*   <img className={classes.image} src={memories} alt="icon" height="60" /> */}
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>

    </div>
  );
}

export default App;
