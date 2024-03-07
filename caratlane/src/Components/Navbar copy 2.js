import React from "react";
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

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
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

  return (
    <>
      {/* <CustomCarousel/> */}
      <Grid container alignItems="center" sx={{ marginTop: '40px', padding: 0 }}>
        {/* First Grid Item: Cart Icon */}
        <Grid item xs={2} md={1} sx={{ position: 'absolute', top: "55px", left: "27px" }} >
          <img src="asserts\images\cartlane (2).png" width={30} height={38} alt="Cart Icon" />
        </Grid>
        {/* Second Grid Item: Tabs */}
        <Grid item xs={1} md={12} lg ={12}sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: { xs: '60px', md: '0' } }}>
          <Box sx={{ marginTop: { md: '10px' }, display: { xs: 'none', md: 'block' }, margin: 'auto' }} onMouseLeave={() => handleTabLeave(-1)}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', }}>
              <Tabs value={value} onChange={handleChange} indicatorColor="#8863fb" aria-label="basic tabs example">
                {jewelleryData.map((item) => (
                  <Tab sx={{
                    fontSize: '0.9rem', fontWeight: '500', textTransform: 'none', color: '#4f3267', marginLeft: item.number, '&:hover': {
                      color: '#8863fb',
                      borderBottom: '3px solid #8863fb',
                      cursor: 'pointer',
                    },
                  }} label={item.label} {...a11yProps(item.index)} onMouseEnter={() => handleChange(item.index)} />
                ))}
              </Tabs>
            </Box>
            {/* Tab Panels */}
            {jewelleryData.map((item, index) => (
              <CustomTabPanel key={index} value={value} index={item.index}>
                {item.label === 'Rings' && <Rings />}
                {item.label === 'Earrings' && <Earings />}
                {item.label === 'Bracelets & Bangles' && <Bracelets />}
                {item.label === 'Solitaries' && <Solitaries />}
                {item.label === 'More Jewellery' && <Morejewellery />}
                {item.label === 'Gifting' && <Gifts />}
              </CustomTabPanel>
            ))}
          </Box>
        </Grid>
        {/* Third Grid Item: Search Icon */}
        <Grid item xs={12}  sm={12} md={6} sx={{ position: 'absolute', top: { xs: "50px", sm:"50px", md: "45px" }, right: { xs: '5px', md: '110px', lg: '300px' }, zIndex: 1000 }}>
          <Input
            placeholder="Search by"
            sx={{
              border: '1px solid rgb(229, 110, 235)',
              borderRadius: '12px',
              background: '#F4F4F4',
              padding: "9px 20px 9px 28px",
              position: 'relative',
              '&:hover': { border: '1px rgb(229, 110, 235)', },
              '&:focus': { outline: 'none', boxShadow: '0 2px 2px 0 #e9e9e9' },
              '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: 'none',
              },
            }}
          />
        </Grid>
        {/* Fourth Grid Item: Additional Icons */}
        <Grid item xs={12} md={5} sx={{ position: 'absolute', top: { xs: "100px", md: "45px" }, right: { md: '120px', lg: '60px' }, zIndex: 1000 }}>
          <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <Typography variant="p" sx={{ color: '#4f3267' }}>Delivery & store
              <Typography sx={{ fontSize: "12px", color: "#DE57E5" }}>Enter Pincode</Typography></Typography>
            <img src="asserts\images\india.png" width={35} height={35} />
            <Icon icon="mdi:user" width="25" height="25" style={{ color: '#4f3267' }} />
            <Icon icon="mdi:heart" width="25" height="25" style={{ color: '#4f3267' }} />
            <Icon icon="bxs:cart" width="25" height="25" style={{ color: ' #4f3267' }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Navbar;
