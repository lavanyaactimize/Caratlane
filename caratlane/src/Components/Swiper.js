import { Typography,Grid,Button,Box ,Divider,Card, CardMedia} from "@mui/material";
import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Icon } from '@iconify/react';
const Swiperr =()=>{
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return(
        <>
 <Grid container spacing={1} sx={{ marginTop: "30px", paddingX: "28px" }}>
        <Grid item xs={12} sm={6} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png" style={{ width: '400px', height: "401px" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ textAlign: "center", marginBottom: '20px' }}>A Stylish Upgrade</Typography>
          <Divider sx={{ borderColor: '#8863fb', width: '30%', margin: '0 auto' }} />
          <Typography sx={{ textAlign: "center", marginTop: "20px", fontSize: "1rem", color: "#4f3267" }}>
            - Enjoy 0% Deduction On Your gold exchange value. Please note: 
            The old gold doesn't have to be from only CaratLane, it can be any gold jewellery you have.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <Button sx={{ backgroundColor: "#dc58e3", color: "#ffffff", fontSize: "1.1rem", textTransform: 'none',
             padding: "10px" }}>Know More</Button>
          </Box>
        </Grid>
      </Grid>


     
       <Grid container sx={{ backgroundColor: "#231535", minHeight: "35vh", justifyContent: "center", alignItems: "center" }}>
      <Grid item xs={10} md={8} lg={6} sx={{ textAlign: "center" }}>
        <img src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png" 
        alt="Craftsmanship and Innovation"style={{ maxWidth: "100%", height: "auto" }} />
        <Typography variant="body1" sx={{ color: "#c4ADE1", marginTop: "20px" }}>
          The highest quality of craftsmanship and innovation,
          that brings you modern, everyday designs.
        </Typography>
        <Button sx={{ marginTop: "20px", paddingY: "10px", color: "#ffffff", border: "5px solid #4f3267" }}>Know More</Button>
      </Grid>
    </Grid>
<Grid container sx={{marginTop:"39px",marginBottom:"40px"}} >
    <Grid item md={6} sx={{display:{xs:"none",sm:"none",md:"block"}}}>
<Typography sx={{marginLeft:4,fontSize:"1.7rem"}}>Best Of Caratlane</Typography>
<Divider sx={{ borderColor: '#8863fb', width: '30%', margin: '3' }} />
</Grid>
<Grid item md={6} sx={{textAlign:"end"}}>
<ToggleButtonGroup
      
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        '& .MuiButtonBase-root': {
          color: 'black', // Set text color
        },
        '& .MuiToggleButton-root': {
          backgroundColor: '#ffff', // Set background color
          borderColor: '#a484fc', // Set border color
          borderWidth: '2px', // Set border width
          borderStyle: 'solid', // Set border style
          width: '150px',
          '&.Mui-selected': {
            backgroundColor: '#dc58e3', // Set background color when selected
          },
        },
      }}
      
    >
      <ToggleButton value="web" >Women</ToggleButton>
      <ToggleButton value="android">Men</ToggleButton>
      
    </ToggleButtonGroup>


</Grid>
</Grid>
<Grid>
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1440: {
              slidesPerView: 4,
          },
          1024: {
              slidesPerView: 4,
          },
          764: {
              slidesPerView: 3,
          },
          576: {
              slidesPerView: 2,


          },
          320: {
              slidesPerView: 2,


          },
      }}
      >
        <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00066-PT0000_11_listfront.jpg"
        alt="Image"
      />
      </Card> 
       <Typography sx={{color:"#4f3267"}}>₹15,861<Typography>Helena Platinum Band for Her</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg"
        alt="Image"
      />
      </Card> <Typography sx={{color:"#4f3267"}}>₹23,553<Typography>Intertwined Glim Diamond Ring</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/G/UG00021-1Y0000_11_listfront.jpg"
        alt="Image"
      />
      </Card>  <Typography sx={{color:"#4f3267"}}>₹5,806<Typography>Exclusive Evil Eye Gold Charm</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT00685-1Y0000_11_listfront.jpg"
        alt="Image"
      />
      </Card>  <Typography sx={{color:"#4f3267"}}>₹7,822<Typography>Stellar Luminous Adjustable Gold Bracelet</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04315-1YP900_11_listfront.jpg"
        alt="Image"
      />
      </Card>  <Typography sx={{color:"#4f3267"}}>₹25,474<Typography>Estrena Dazzling Diamond Necklace</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04059-YGP900_11_listfront.jpg"
        alt="Image"
      />
      </Card>  <Typography sx={{color:"#4f3267"}}>₹24,969<Typography>Classic Leaves Diamond Stud Earrings</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE05164-1YP900_11_listfront.jpg"
        alt="Image"
      />
      </Card>  <Typography sx={{color:"#4f3267"}}>₹20,219<Typography>Ornate Floral Diamond Stud Earrings</Typography></Typography></SwiperSlide>
      <SwiperSlide>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
      <CardMedia
        component="img"
        image="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/N/JN00048-YGP900_11_listfront.jpg"
        alt="Image"
      />
      </Card>  <Typography sx={{color:"#4f3267"}}>₹7,822<Typography>Isha Delight Diamond Nose Pin</Typography></Typography></SwiperSlide>
      
      </Swiper>
</Grid>
<Grid container sx={{ backgroundColor: "#231535",minHeight: "45vh", justifyContent: "center", alignItems: "center",marginTop:"45px" }}>
<Grid container item xs={6} sm={6} md={6} justifyContent="center" alignItems="center">
  <Grid item>
    <Icon icon="material-symbols-light:local-shipping-outline" width="120" height="130" style={{ color: '#a484fc',marginTop:3 }} />
  </Grid>
  <Grid item>
  <Typography variant="body1" sx={{ marginLeft: 6, color:"#ffff" }}>
  100% Certified & Free Shipping<br />
  <Typography variant="body1" sx={{ marginLeft: 2,color:"#C4ADE1" }}>
    Our jewellery always comes with a<br/> certificate of authentication
  </Typography>
  </Typography>
  </Grid>
</Grid>
<Grid container item xs={6} sm={6} md={6} justifyContent="center" alignItems="center">
  <Grid item>
  <Icon icon="ri:money-rupee-circle-line" width="100" height="130"  style={{color: '#a484fc',marginTop:3}} />
  </Grid>
  <Grid item>
    <Typography variant="body1" sx={{ marginLeft: 2, color: "#ffff" }}>
      15 days money back<br />
      <Typography variant="body1" sx={{ color: "#C4ADE1" }}>
        Get 100% refund if you dont like <br />your jewellery.
      </Typography>
    </Typography>
  </Grid>
</Grid>
<Grid container item xs={6} sm={6} md={6} justifyContent="center" alignItems="center">
  <Grid item sx={{marginLeft:5}}>
  <Icon icon="mdi:hand-coin-outline" width="100" height="130"  style={{color: '#a484fc',marginTop:2}} />
  </Grid>
  <Grid item>
    <Typography variant="body1" sx={{ marginLeft: 4, color: "#ffff" }}>
      Lifetime Exchange<br />
      <Typography variant="body1" sx={{ color: "#C4ADE1" }}>
        Exchange your old designs <br />anytime you want an upgrade.
      </Typography>
    </Typography>
  </Grid>
</Grid>
<Grid container item xs={6} sm={6} md={6} justifyContent="center" alignItems="center">
  <Grid item sx={{marginLeft:5}}>
  <Icon icon="vaadin:diamond-o" width="100" height="110"  style={{color: '#a484fc',marginTop:2}} />
  </Grid>
  <Grid item>
    <Typography variant="body1" sx={{ marginLeft: 3, color: "#ffff" }}>
      One year Warranty<br />
      <Typography variant="body1" sx={{ color: "#C4ADE1" }}>
        If your jewellery has a defect,we <br />will fix it.
      </Typography>
    </Typography>
  </Grid>
</Grid>
</Grid>
        </>
    )
}
export default Swiperr;