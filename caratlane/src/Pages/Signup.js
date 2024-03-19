import React from "react";
import Appbarr from "../Components/Appbarr";
import Footer from "../Components/Footer";
import TextField from '@mui/material/TextField';
import { Grid, Typography,Divider,Box,Button, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Icon } from "@iconify/react";
import Checkbox from '@mui/material/Checkbox';
import Appbar from "../Components/Appbar";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Signup=()=>{
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <>
        <Appbar/>
        <Appbarr/>
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="95px" padding="85px">
  <Grid item>
    <Stack direction="column" alignItems="center">
      <Stack direction="column" alignItems="center">
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint sx={{ fontSize: '2.8rem' }} />
        </IconButton>
        <Typography>Signup with CaratLane</Typography>
      </Stack>
      <Typography variant="p" sx={{fontSize:"0.7rem",marginTop:2}}>Unlock Best prices and become an insider for our exclusive launches & offers.<br/>
       Complete your profile and get ₹250 worth of xCLusive Points.</Typography>
    </Stack>
    <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop = "20px" >
        <Grid item>
          <Icon icon="flat-color-icons:google" width="50" height="50" style={{marginRight: 15}}/>
          <Icon icon="logos:facebook" width="47" height="47" />
          <Divider sx={{marginTop:7}}> Or continue with</Divider>
        </Grid>
    </Grid>
  </Grid>
</Grid>
<Grid container spacing={2} justifyContent="center" alignItems="center">
  <Grid item sx={{width:"50%"}}>
    <Box component="form" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="mobile Number"
            required
            fullWidth
            id="Mobile Number"
            placeholder="Mobile Number"
        sx={{backgroundColor:"#f4ecf4",borderRadius:"20px",
        '& .MuiOutlinedInput-root': {
            borderRadius: "20px", // Set the border radius for the input element
          },}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="emailId"
            required
            fullWidth
            id="EmailId"
           placeholder="EmailId"
           sx={{backgroundColor:"#f4ecf4",borderRadius:"20px",
           '& .MuiOutlinedInput-root': {
               borderRadius: "20px", // Set the border radius for the input element
             },}}
          />
        </Grid>
      </Grid>
    </Box>
  </Grid>
</Grid>
<Grid container spacing={2} justifyContent="center" alignItems="center">
  <Grid item sx={{width:"50%"}}>
    <Box component="form" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
           placeholder="First Name"
           sx={{backgroundColor:"#f4ecf4",borderRadius:"20px",
        '& .MuiOutlinedInput-root': {
            borderRadius: "20px", // Set the border radius for the input element
          },}}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
           placeholder="Last Name"
            name="lastName"
            sx={{backgroundColor:"#f4ecf4",borderRadius:"20px",
            '& .MuiOutlinedInput-root': {
                borderRadius: "20px", // Set the border radius for the input element
              },}}
          />
        </Grid>
       
       
      </Grid>
    </Box>
  </Grid>
  
</Grid>
<Grid container spacing={2} justifyContent="center" alignItems="center">
  <Grid item sx={{width:"50%"}}>
    <Box component="form" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="password"
            required
            fullWidth
            id="password"
           placeholder="Password"
           sx={{backgroundColor:"#f4ecf4",borderRadius:"20px",
           '& .MuiOutlinedInput-root': {
               borderRadius: "20px", // Set the border radius for the input element
             },}}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="conformpassword"
           placeholder="Confirm Password"
            name="Confirmpassword"
            sx={{backgroundColor:"#f4ecf4",borderRadius:"20px",
        '& .MuiOutlinedInput-root': {
            borderRadius: "20px", // Set the border radius for the input element
          },}}
          
          />
        </Grid>
       
       
      </Grid>
    </Box>
  </Grid>
  </Grid>
  <Grid container alignItems="center" justifyContent="center"marginTop= "58px">
  
  <Grid item xs={12} md={6} sx={{
  backgroundColor: "#E5F4E0",
  borderRadius: "20px",
  display: 'flex',
  alignItems: 'center', // Align items vertically in the flex container
  justifyContent: 'space-between', // Distribute space between items in the flex container
  padding: '12px', // Add padding for better spacing
  '& .MuiOutlinedInput-root': {
    borderRadius: "20px",
  },
}}>
  <Typography sx={{ color: "#4F3267", fontSize: "1rem" }} variant="h1">
    <Checkbox {...label} defaultChecked color="default" /> 
    Opt for Whatsapp support<br/>
    <Typography variant="p"sx={{marginLeft:6 ,fontSize:"0.7rem"}}>We will be sharing Delivery & precious order related communication. 
    Also provide you with an interactive whatsapp support</Typography>
  </Typography>
 
  <Icon icon="logos:whatsapp-icon" width="30" height="30" />
</Grid>
  </Grid>
  <Grid container justifyContent="center" alignItems="center" direction="column">

  <Grid item sx={{ marginTop: 3 }}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio style={{ color: '#a484fc' }} />} // Change color here
                label="Female"
                sx={{ color: 'black' }} // Change color here
              />
              <FormControlLabel
                value="male"
                control={<Radio style={{ color: '#a484fc' }} />} // Change color here
                label="Male"
                sx={{ color: 'black' }} // Change color here
              />
              <FormControlLabel
                value="other"
                control={<Radio style={{ color: '#a484fc' }} />} // Change color here
                label="I dont want to specify"
                sx={{ color: 'black' }} // Change color here
              />
            </RadioGroup>
          </FormControl>
          </Grid>
          <Grid item>
    <Button sx={{width:"350px", borderRadius: '10px', backgroundColor: '#cf60e9', marginTop: '10px',color:"#ffff"}}>SIGN ME UP</Button>
  </Grid>
  
  <Grid item sx={{marginTop:1}}>
    <Typography variant="p">
  Already have an account?
  <Link  sx={{ color: '#ff69b4', textDecoration: 'none' }}>Log In</Link>
  </Typography>
  </Grid>
        </Grid>

        <Footer/>
        </>
    )
}
export default Signup;