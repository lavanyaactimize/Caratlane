import React from "react";
import {AppBar,Grid,Typography} from "@mui/material";

const Appbar =()=> {
    return(
        <>
       
        
        <AppBar sx={{
            backgroundColor:"#503464"
   
     
    }}>
       <Grid container alignItems="center" sx={{ justifyContent: { xs: 'center', md: 'center' } }}>
      <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="p"
          sx={{
            color: 'white',
            textAlign: 'center',
            animation: 'dropTopAnimation 3s infinite',
            '@keyframes dropTopAnimation': {
              '0%': { opacity: 0, transform: 'translateY(-30px)' },
              '50%': { opacity: 1 },
              '100%': { opacity: 0, transform: 'translateY(10px)' },
            },
          }}
        >
          CaratLane-A Tanishq Partnership
        </Typography>
        <Typography variant="p"
          sx={{
            color: 'white',
            textAlign: 'center',
            animation: 'riseBottomAnimation 4.2s infinite',
            '@keyframes riseBottomAnimation': {
              '0%': { opacity: 0, transform: 'translateY(7px)' },
              '50%': { opacity: 1 },
              '100%': { opacity: 0, transform: 'translateY(-10px)' },
            },
          }}
        >
          Introducing CartLane Pop!Plan you Purchase here
        </Typography>
      </Grid>
      </Grid>
        </AppBar>
        
        </>
    )
}
export default Appbar;