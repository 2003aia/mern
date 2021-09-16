import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Hidden } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../redux/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a mern post'}</Typography>
        <TextField required='true' name="creator" /* variant="outlined" */ label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField required name="title" /* variant="outlined" */ label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" /* variant="outlined" */ label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <div style={{ background: '#eee', width: '97%', borderRadius: 15, margin: 4 }}> </div>
        <label className={classes.fileInput}>выберите файл <div style={{ display: 'none' }}><FileBase64 type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div></label>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;