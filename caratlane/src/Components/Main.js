import React, { useState, useEffect } from "react";
import {  Grid } from "@mui/material";
import video from '../assert/Video.mp4';

const Main = () => {
  const [videoHeight, setVideoHeight] = useState(0);

  const handleVideoLoadedMetadata = (event) => {
    setVideoHeight(event.target.clientHeight);
  };
  return (
    <Grid container sx={{ paddingLeft: 7, paddingRight: 7, marginTop: "48px" ,display:{xs:"none",sm:"none"}}}>
     
      <Grid item xs={6} sx={{height: videoHeight,display:{xs:"none",md:"block",lg:"block"} }}>
        <img src="asserts\images\videoframe_9862.png" alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} />
      </Grid>
     
      <Grid item xs={6} sx={{height: '98%',}}>
        <video id="video" src={video} autoPlay loop muted controls onLoadedMetadata={handleVideoLoadedMetadata} style={{ width: '100%',  borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }} />
      </Grid>
    </Grid>
  );
};

export default Main;

