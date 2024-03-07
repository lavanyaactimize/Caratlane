import React, { useState, useEffect } from "react";
import {  Grid } from "@mui/material";
import video from '../assert/Video.mp4';

const Main = () => {
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("video");
    if (videoElement) {
      setVideoHeight(videoElement.clientHeight);
    }
  }, []);

  return (
    <Grid container sx={{ paddingLeft: 7, paddingRight: 7, marginTop: "48px", border: '4px solid black' }}>
     
      <Grid item xs={6} sx={{ border: '4px solid yellow',height: videoHeight }}>
        <img src="asserts\images\videoframe_9862.png" alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} />
      </Grid>
     
      <Grid item xs={6}>
        <video id="video" src={video} autoPlay loop muted controls style={{ width: '100%', height: '100%', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }} />
      </Grid>
    </Grid>
  );
};

export default Main;

