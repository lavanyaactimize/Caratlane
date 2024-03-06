import { Typography,Grid } from "@mui/material";
import React from "react";
const Image =()=>
{
    return(
        <>
        <Grid container spacing={2}sx={{ marginTop:70}}>
            <Grid item xs={6} sx={{boarder:'2px solid black'}}>
                <img src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/03March/Responsive/5/Responsive_1.jpg"/>
            </Grid>
            <Grid item xs={6} sx={{boarder:'2px solid green'}}>
                <Typography>hello</Typography>
            </Grid>
        </Grid>
        </>
    )
}
export default Image;