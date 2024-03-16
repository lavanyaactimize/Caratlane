import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Input } from "@mui/material";
import { Icon } from '@iconify/react';
import Rings from "./Rings";
import Earings from "./Earings";
import Bracelets from "./Bracelets";
import Solitaries from "./Solitaries";
import Morejewellery from "./Morejewellery";
import Gifts from "./Gifts";
import CustomCarousel from "./Carousel";
import Appbar from "./Appbar";
import Modal from '@mui/material/Modal';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const style = {

  position: 'absolute',

  top: '50%',

  left: '50%',

  transform: 'translate(-50%, -50%)',

  width: 250,

  bgcolor: 'background.paper',

  boxShadow: 24,

};
const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleTabLeave = () => {
    setValue(null);
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const [tabValue, setTabValue] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [openModalForm, setOpenModalForm] = useState(false);

  
  let token = localStorage.getItem('accessToken');

  const Name = localStorage.getItem('displayName');

  console.log('this is the name in nav bar', Name);

  console.log("this is the token in nav bar ", token)

  const handleOpenForm = () => {

    setOpenModalForm(true);

    setAnchorEl(null);

  }

  const jewelleryData = [
    { label: "Rings", index: 0, number: "1px" },
    { label: "Earrings", index: 1, number: "1px" },
    { label: "Bracelets & Bangles", index: 2, number: "1px" },
    { label: "Solitaries", index: 3, number: "1px" },
    { label: "Mangalsutras", index: 4, number: "1px" },
    { label: "Necklaces", index: 5, number: "1px" },
    { label: "More Jewellery", index: 6, number: "1px" },
    { label: "Gifting", index: 7, number: "1px" },
  ];
  const handleCloseForm = () => setOpenModalForm(false);
  return (
    <>
     

<Grid container alignItems="center" sx={{ marginTop: '36px',padding:0,position:"fixed", backgroundColor:"#ffff"}}>
  
<Grid sx={{ marginRight: { xs: '5px', sm: '10px' }, marginLeft: { xs: '5px', sm: '10px' }, display: { xs: 'block', md: 'none', color: 'black' } }}>

<Icon 
// onClick={handleOpen}
 icon="el:lines" width="20" height="20" />


</Grid>
<Grid item sx={{ position: 'absolute', top: "17px", left: "17px" ,display: { xs: 'none', md: 'block' }}} >
  <img src="asserts\images\cartlane (2).png" width={30} height={38} alt="Cart Icon" />
</Grid>
<Grid item sx={{lg:'100%', marginLeft: '30px' }}>
  <Box >
    <Box sx={{ marginTop: { md: '10px' }, display: { xs: 'none', md: 'block' }, margin: 'auto' }} onMouseLeave={() => handleTabLeave(-1)}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="#8863fb" aria-label="basic tabs example">
          {jewelleryData.map((item) => (
            <Tab sx={{
              fontSize: '0.9rem', fontWeight: '500', textTransform: 'none', color: '#4f3267', 
              marginLeft: {
                // Set default value for smaller screens
                md: '-20px', // Set value for medium screens
                lg: '1px', // Set value for large screens
                xl: '4px', // Set value for extra large screens
              },
              '&:hover': {
                color: '#8863fb',
                borderBottom: '3px solid #8863fb',

                cursor: 'pointer',

              },
            }} label={item.label} {...a11yProps(item.index)} onMouseEnter={() => handleChange(item.index)} />

          ))}
          

          <Grid item sx={{marginTop:'5px', right: 260, zIndex: 1000,width:'90%',display: {  md: 'none',lg:"block" } }}>

          <Input
              placeholder="Search by"
              sx={{
                border: '1px solid rgb(229, 110, 235)',
                borderRadius: '12px',
                background: '#F4F4F4',
                padding: "9px 20px 9px 28px",
                '&:hover': { border: '1px rgb(229, 110, 235)', },
                '&:focus': { outline: 'none', boxShadow: '0 2px 2px 0 #e9e9e9' },
                '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottom: 'none',
                },
              }}
            />
          </Grid>
          <Grid container sx={{alignItems:'center'  }}>

          
          <Grid item sx={{ top: "50px", right: 160, zIndex: 1000,marginLeft:2}}>
            <Typography variant="p" sx={{ color: '#4f3267' }}>Delivery & store
              <Typography sx={{ fontSize: "12px", color: "#DE57E5" }}>Enter Pincode</Typography></Typography>
          </Grid>
          <Grid item sx={{ paddingTop:'8px',marginLeft:2 }}>
            <img src="asserts\images\india.png" width={35} height={35} />
          </Grid>
          <Grid item sx={{ top: "59px", right: 80, zIndex: 1000,marginLeft:2 }}>
            <Icon icon="mdi:user" width="25" height="25" style={{ color: '#4f3267' }} />
          </Grid>
          <Grid item sx={{ top: "59px", right: 50, zIndex: 1000,marginLeft:1.8 }}>
            <Icon icon="mdi:heart" width="25" height="25" style={{ color: '#4f3267' }} />
          </Grid>
          <Grid item sx={{ top: "59px", right: 20, zIndex: 1000 ,display: { sm: "block" }}}>
            <Icon icon="bxs:cart" width="25" height="25" style={{ color: ' #4f3267', }} />
          </Grid>
          </Grid>



        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Rings />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Earings />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Bracelets />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Solitaries />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Morejewellery />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Gifts />
      </CustomTabPanel>

    </Box>
  </Box>
</Grid>

 {token ? (

<>

  <Grid sx={{ display: { xs: 'block', md: 'none' } }}>





    <Grid sx={{ display: 'flex', alignItems: 'center', }}>

      <Icon onClick={handleOpenForm} icon="ant-design:user-outlined" width="20" height="20" style={{ color: 'black', marginRight: '5px' }} />



      <Modal

        open={openModalForm}

        onClose={handleCloseForm}

        aria-labelledby="modal-modal-title"

        aria-describedby="modal-modal-description"

      >

        <Box sx={style}>



          <Grid sx={{ textAlign: 'center', margin: '5px', }}>

            <Typography sx={{ fontSize: '16px', fontWeight: 550, marginBottom: '20px', marginTop: '20px' }}>

              Are you sure you want to Log out.?

            </Typography>

            <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', fontWeight: 'bold', color: '#E80071', cursor: 'pointer' }}>Logout from all devices</Typography>

            <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', fontWeight: 'bold', color: '#E80071', marginBottom: '10px', cursor: 'pointer' }} onClick={handleCloseForm}>Cancle</Typography>

          </Grid>



        </Box>

      </Modal>



      <Typography sx={{ color: 'black', fontSize: '12px', marginRight: '10px' }}>{Name}</Typography>



    </Grid>

  </Grid>

</>

) :

(

  <>

    <Grid>


      <Grid container sx={{ alignItems: 'center', }}>

        <Grid item sx={{ paddingTop: '4px', marginLeft: 2, display: { xs: 'block', md: 'none' }, }}>
          <img src="asserts\images\cartlane (2).png" width={30} height={38} alt="Cart Icon" />
        </Grid>
        <Grid item sx={{ top: "50px", right: 160, zIndex: 1000, marginLeft: 2, display: { xs: 'block', md: 'none' }, }}>
          <Typography variant="p" sx={{ color: '#4f3267' }}>Delivery & store
            <Typography sx={{ fontSize: "12px", color: "#DE57E5" }}>Enter Pincode</Typography></Typography>
        </Grid>
        <Grid item sx={{ paddingTop: '8px', marginLeft: 2, display: { xs: 'block', md: 'none' }, }}>
          <img src="asserts\images\india.png" width={35} height={35} />
        </Grid>
        <Grid item sx={{ top: "59px", right: 80, zIndex: 1000, marginLeft: 2, display: { xs: 'block', md: 'none' }, }}>
          <Icon icon="mdi:user" width="25" height="25" style={{ color: '#4f3267' }} />
        </Grid>
        <Grid item sx={{ top: "59px", right: 80, zIndex: 1000, marginLeft: 1.8, display: { xs: 'block', md: 'none' }, }}>
          <Icon icon="mdi:heart" width="25" height="25" style={{ color: '#4f3267' }} />
        </Grid>

      </Grid>

    </Grid>

  </>

)}

<Grid>

<Box
  sx={{
    flexGrow: 1,
    display: { xs: 'block', sm: 'block', md: "none" },
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  }}
>
  <Input
    placeholder="Search by"
    sx={{
      border: '1px solid rgb(229, 110, 235)',
      borderRadius: '12px',
      background: '#F4F4F4',
      padding: '9px 20px 9px 28px',
      '&:hover': { border: '1px rgb(229, 110, 235)' },
      '&:focus': { outline: 'none', boxShadow: '0 2px 2px 0 #e9e9e9' },
      '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
      },
    }}
  />
</Box>


</Grid>



</Grid >

    </>
  )
}

export default Navbar;
