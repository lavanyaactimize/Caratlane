import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid,Input } from "@mui/material";
import { Icon } from '@iconify/react';
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
          <Box sx={{ p: 1 }}>
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
  const Navbar = () =>
  {
    const [value, setValue] = React.useState(0);

    const handleChange = ( newValue) => {
      setValue(newValue);
    };
    const handleTabLeave = () => {
        setValue(null);
      }
      const jewelleryData = [
        { label: "Rings", index: 0, number: "10px" },
        { label: "Earrings", index: 1, number: "10px" },
        { label: "Bracelets & Bangles", index: 2, number: "10px" },
        { label: "Solitaries", index: 3, number: "10px" },
        { label: "Mangalsutras", index: 4, number: "10px" },
        { label: "Necklaces", index: 5, number: "10px" },
        { label: "More Jewellery", index: 6, number: "10px" },
        { label: "Gifting", index: 7, number: "10px" },
       
       
    ];
    return(
        <>
        <Grid container alignItems="center"   sx={{marginTop:'40px'}}>
            <Grid item sx={{ position: 'absolute', top:"55px", left: "27px" }} >
            <img src="asserts\images\cartlane (2).png" width={30} height={34} alt="Cart Icon" />
            </Grid>
            <Grid  item sx={{ marginLeft: '50px' }}>
        <Box >
    <Box sx={{ width:{} ,marginTop:{md:'10px'}, display:{xs:'none', md:'block'},margin:'auto', }} onMouseLeave={() => handleTabLeave(-1)}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="#8863fb"  aria-label="basic tabs example">
            {jewelleryData.map((item) => (
          <Tab sx={{fontSize:'0.9rem',fontWeight:'500', textTransform: 'none',color:'#4f3267', marginLeft:item.number , '&:hover': {
            color: '#8863fb',
            borderBottom: '3px solid #8863fb',
            
            cursor: 'pointer',
            
          }, }} label={item.label} {...a11yProps(item.index)} onMouseEnter={() => handleChange(item.index)} />

            ))}
        
        
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        Item Three
      </CustomTabPanel>
    </Box>
    </Box>
    </Grid>
    <Grid item sx={{ position: 'fixed', top:"50px", right:260,zIndex: 1000}}>
        
                    <Input
                        placeholder="Search by"
                        sx={{
                            border: '1px solid rgb(229, 110, 235)',
                            borderRadius: '12px',
                            background: '#F4F4F4',
                            padding: "5px 15px 5px 26px",
                            '&:hover': { border: '1px rgb(229, 110, 235)', },
                            '&:focus': { outline: 'none', boxShadow: '0 2px 2px 0 #e9e9e9' },
                            '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                borderBottom: 'none',
                            },
                        }}
                    />
               </Grid>
               <Grid item sx={{ position: 'fixed', top:"50px", right:160,zIndex: 1000 }}>
                    <Typography variant="p" sx={{ color: '#4f3267'}}>Delivery & store
                    <Typography sx={{fontSize:"12px",color:"#DE57E5"}}>Enter Pincode</Typography></Typography>
                </Grid>
                <Grid item sx={{ position: 'fixed', top:"57px", right:120,zIndex: 1000 }}>
                    <img src="asserts\images\india.png" width={37} height={45}/>
                </Grid>
                <Grid item sx={{ position: 'fixed', top:"59px", right:80,zIndex: 1000 }}>
                <Icon icon="mdi:user" width="25" height="25"  style={{color: '#4f3267'}} />
                </Grid>
                <Grid item sx={{ position: 'fixed', top:"59px", right:50,zIndex: 1000 }}>
                <Icon icon="mdi:heart" width="25" height="25"  style={{color: '#4f3267'}} />
                </Grid>
                <Grid item sx={{ position: 'fixed', top:"59px", right:20,zIndex: 1000 }}>
                <Icon icon="bxs:cart" width="25" height="25"  style={{color:' #4f3267'}} />
                </Grid>
               
    </Grid>
        </>
    )
  }
  export default Navbar;




