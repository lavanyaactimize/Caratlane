import React from "react";
import Appbar from "../Components/Appbar";
import Appbarr from "../Components/Appbarr";
import { Grid, Typography } from "@mui/material";

const Products =()=>
{
    return(
        <>
        <Appbar/>
        <Appbarr/>
        <Grid container sx={{ backgroundColor: "#F6F3F9", minHeight: "15vh",  marginTop:"90px" }}>
<Grid item container alignItems="center"sx={{marginTop:2,marginLeft:9}}>
    <Typography variant="h3"sx={{fontSize:"1rem",fontWeight:"bold"}}>18 KT White Rings</Typography>
    <Typography variant="h3"sx={{marginLeft:1}}>475 Designs</Typography>
    <Grid item >
       < Typography>ad</Typography>
    </Grid>
</Grid>
        </Grid>
        </>
    )
}
export default Products