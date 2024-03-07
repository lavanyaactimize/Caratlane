import { Typography, Grid, Box, Button } from "@mui/material";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
// import SwiperCore, {
//   Pagination
// } from 'swiper/core';
// SwiperCore.use([Pagination]);

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 
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
          marginTop: "65px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: " scale(1.03)",
          }
        }}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item xs={4} sm={4} md={4} >
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Collection/alpona/Collection_Alpona.webp"
            style={{ maxWidth: "100%", height: "auto" }}
            className="image-hover"

          />
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "35px", }}>
            <Button sx={{ borderRadius: "5px", border: "2px solid #c6b1fc", color: "black", paddingY: "10px" }}>View All Collections</Button>
          </Box>
        </Grid>

        <Grid item xs={4} sm={4} md={4} sx={{
          marginTop: "65px", transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: " scale(1.03)",
          }
        }}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/HPBanner/Collection/02/Collection_Harry_potter3.jpg" style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>

      </Grid>


      {/* <Grid container spacing={2} sx={{ marginTop: "55px", paddingX: "28px" }}>
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
      </Grid> */}

      <Grid>
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

    </>
  )
}
export default Cards;