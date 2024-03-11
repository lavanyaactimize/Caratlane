import { Typography, Grid, Box, Button, Divider } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { TypeSpecimenOutlined } from "@mui/icons-material";

// import './styles.css';

const Cards = () => {
  const cardImage = [
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_4.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_5.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_6.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_2.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_1.jpg" },

  ]
  const cardImages = [
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/02-FEB/AppBanner/Ref/01/2X.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/EasyPiercings/2X.webp" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/AppBanner/RTS/01/2x.gif" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/AppBanner/Best/01/2X.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/02-FEB/AppBanner/Mangalsutra/01/2X.jpg" },
    { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/AppBanner/solitaire/01/2X.jpg" },
  ]
  return (
    <>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ paddingX: "28px", paddingY: "45px" }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box sx={{
              borderRadius: "8px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}>
              <img src={cardImage[index % cardImage.length].url} alt={`Card ${index}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>
          </Grid>
        ))}
      </Grid>


      <Grid container spacing={2} sx={{ paddingX: "28px", marginTop: 5 }}>
        <Grid item xs={4} sm={4} md={4} sx={{
          display: { xs: 'none', md: 'none', lg: "block" },
          marginTop: "65px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: " scale(1.03)",
          }
        }}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item xs={4} sm={4} md={4} sx={{ display: { xs: 'none', md: 'none', lg: "block" } }} >
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Collection/alpona/Collection_Alpona.webp"
            style={{ maxWidth: "100%", height: "auto" }}
            className="image-hover"

          />
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "35px" }}>
            <Button sx={{ borderRadius: "5px", border: "2px solid #c6b1fc", color: "black", paddingY: "10px" }}>View All Collections</Button>
          </Box>
        </Grid>

        <Grid item xs={4} sm={4} md={4} sx={{
          display: { xs: 'none', md: 'none', lg: "block" },
          marginTop: "65px", transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: " scale(1.03)",
          }
        }}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/HPBanner/Collection/02/Collection_Harry_potter3.jpg" style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>

      </Grid>

      <Grid container spacing={2} sx={{ paddingX: "28px", marginTop: 2, display: { lg: 'none' } }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 2,


            },
            320: {
              slidesPerView: 2,


            },
          }}
        >
          <SwiperSlide> <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" style={{ maxWidth: "100%", height: "auto" }} /></SwiperSlide>
          <SwiperSlide> <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" style={{ maxWidth: "100%", height: "auto" }} /></SwiperSlide>
          <SwiperSlide> <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" style={{ maxWidth: "100%", height: "auto" }} /></SwiperSlide>
        </Swiper>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "55px", paddingX: "28px" }}>
        {cardImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <img src={image.url} alt={`Card ${index}`} style={{ width: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
      <Grid container sx={{ marginTop: "55px", paddingX: "28px" }}>
        <Grid item xs={12} sm={12} md={12}>
          <img src="asserts\images\video.png" style={{ width: "100%", height: "70%", borderRadius: "10px" }} />
        </Grid>
      </Grid>
    
      <Grid container spacing={2} sx={{ marginTop: "38px", padding: "28px", }}>

        {/* <Typography sx={{ zIndex:1,marginLeft:"1200px",border:"2px solid red"}}>Enter Pin Code or City</Typography> */}
        {/* <Typography sx={{ position: "absolute", top: "150px", marginLeft:"350px", fontSize: '2rem', fontWeight: 300 }}>Unsure Which Design To Pick?</Typography>
      <Typography  sx={{ position: "absolute", top: "240px", marginLeft:"395px" }}>Book A Free Home Trail!</Typography>
      <Typography  sx={{ position: "absolute", top: "280px", marginLeft:"395px" }}> 
      <Button sx={{backgroundColor:"#dc58e3",color:"#ffff",fontSize:"1.1rem",textTransform: 'none'}}>Schedule Appointment </Button></Typography>
      <Typography sx={{ position: "absolute", top: "150px", marginLeft:"1200px", fontSize: '1.8rem', fontWeight: 200 }}>Come Visit Us At Any Of Our Store</Typography> */}

        <Grid item xs={7} sm={6} md={5} >
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/T@H.webp" style={{ width: '100%', height: '98%',zIndex: -4 }}  />


        </Grid>
        
        <Grid item xs={7} sm={6} md={5} >



          {/* <Grid sx={{ position: "absolute", zIndex: -1, bottom: 1 }}>
            <Typography sx={{ fontSize: 20 }}>Enter Pin Code or City</Typography>
          </Grid> */}

<Grid style={{marginTop:100}}>
          <Typography textColor={'#FFFFFF'}  fontSize={{ lg: "24px", md: "20px", sm: "16px" }} fontFamily={'Manrope,sans-serif'}><b>LAvanya</b> </Typography>
</Grid>
          <Typography textAlign={'center'} textColor={'#FFFFFF'} fontSize={{ lg: "14px", md: "14px", sm: "12px" }} fontFamily={'Manrope,sans-serif'}> <b> 123 </b> </Typography>

          <div

            style={{

              position: 'absolute',

              top: '705%', // Adjust the vertical position of the text

              left: '60%', // Adjust the horizontal position of the text

              transform: 'translate(-50%, -50%)', // Center the text

              color: 'black', // Text color

              fontSize: '24px', // Text size
              zIndex: -1

            }}

          >


            <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/Store.webp" 
            style={{ width: '100%', height: '98%', zIndex: -4 }} />

          </div>


        </Grid>

       
      </Grid>
      {/* <Grid container spacing={1} sx={{marginTop:"30px",paddingX:"28px"}}>
  <Grid item xs={6} sm={6} md={5} sx={{marginLeft:"95px"}}>
    <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png" style={{width:'400', height:"401"}}/>
  </Grid>
  <Grid item xs={5} sm={6} md={5}>
<Typography sx={{textAlign:"center",marginTop:"60px",fontSize:"1.9rem"}}>A Stylish Upgrade</Typography>
<Divider sx={{ marginTop: 2,marginLeft:10, borderColor: '#8863fb', width: '30%' }} />
<Typography sx={{justifyContent:"center",marginTop:"20px",fontSize:"1rem",color:"#4f3267"}}> - Enjoy 0% Deduction On Your gold exchange value.Please note: The old gold doesnt have to be from only CaratLane,it can be any gold jewellery you have.</Typography>
<Typography  sx={{ marginTop:"30px" }}> <Button sx={{backgroundColor:"#dc58e3",color:"#ffff",fontSize:"1.1rem",textTransform: 'none',textAlign:"center",padding:"10px"}}>Know More </Button></Typography>
</Grid>
</Grid> */}
      {/* <Grid container spacing={1} sx={{ marginTop: "30px", paddingX: "28px" }}>
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
      </Grid> */}

    </>
  )
}
export default Cards;