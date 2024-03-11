import { Typography,Grid,Button,Box ,Divider} from "@mui/material";
import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const Swiper =()=>{
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return(
        <>
 <Grid container spacing={1} sx={{ marginTop: "30px", paddingX: "28px" }}>
        <Grid item xs={6} sm={6} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png" style={{ width: '400px', height: "401px" }} />
        </Grid>
        <Grid item xs={5} sm={6} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ textAlign: "center", marginBottom: '20px' }}>A Stylish Upgrade</Typography>
          <Divider sx={{ borderColor: '#8863fb', width: '30%', margin: '0 auto' }} />
          <Typography sx={{ textAlign: "center", marginTop: "20px", fontSize: "1rem", color: "#4f3267" }}>
            - Enjoy 0% Deduction On Your gold exchange value. Please note: The old gold doesn't have to be from only CaratLane, it can be any gold jewellery you have.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <Button sx={{ backgroundColor: "#dc58e3", color: "#ffffff", fontSize: "1.1rem", textTransform: 'none', padding: "10px" }}>Know More</Button>
          </Box>
        </Grid>
      </Grid>


      <Grid container sx={{ backgroundColor: "#231535", height: "35vh", justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <img src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png" />
          <Typography variant="body1" sx={{ color: "#c4ADE1" }}>The highest quality of craftsmanship and innovation,
            that brings you modern, everyday designs.</Typography>
          <Button sx={{ paddingY: "10px", colour: "#ffff", border: "5px solid #4f3267" }}>Know More</Button>
        </Grid>
      </Grid>
<Grid container sx={{marginTop:"39px"}} >
    <Grid item xs={6}>
<Typography sx={{marginLeft:4,fontSize:"1.7rem"}}>Best Of Caratlane</Typography>
<Divider sx={{ borderColor: '#8863fb', width: '30%', margin: '3' }} />
</Grid>
<Grid item xs={6} sx={{marginLeft:60}}>
<ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      
    </ToggleButtonGroup>


</Grid>
</Grid>

        </>
    )
}
export default Swiper;