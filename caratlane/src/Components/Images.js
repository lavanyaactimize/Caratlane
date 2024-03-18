import React from "react";
import { Typography, Grid } from "@mui/material";

const Image = () => {
    return (
        <>
           
             <Grid container spacing={2} sx={{ marginTop: 15, paddingLeft: 7, paddingRight: 7 }}>
      <Grid item xs={12} sm={6}>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/03March/Responsive/5/Responsive_1.jpg" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/03_MAR/AppBanner/Newin/01/1X.jpg" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12}>
            <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/02-FEB/AppBanner/Womensday/Curation/01/2X.gif" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
        </>
    )
}

export default Image;
