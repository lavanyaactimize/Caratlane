import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Icon } from '@iconify/react';
import { Grid, Typography ,Button} from "@mui/material";
import SwiperCore from 'swiper/core';
const Textswiper =()=>{
    SwiperCore.use([Pagination]);
    return(

        <>
       
       

       <Swiper
        autoplay={{ delay: 1000 }}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper"
  style={{ width: '100%', marginTop: '28px' }}
  breakpoints={{
    1440: {
        slidesPerView: 1,
    },
    1024: {
        slidesPerView: 1,
    },
    764: {
        slidesPerView: 1,
    },
    576: {
        slidesPerView: 1,


    },
    320: {
        slidesPerView: 1,


    },
}} // Ensure Swiper takes full width
>
  <SwiperSlide>
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Icon icon="lucide:instagram" width="30" height="30" style={{ color: '#a484fc' }} />
      </Grid>
      <Grid item textAlign="center">
        <Typography variant="h1" sx={{marginTop:3,color:"#9D9FA4",fontSize:'2.3rem'}}>"I Recived this Mangalsutra bracelet as my first karva chauth gift!Its simple and sweet,<br/>just like my husband</Typography>
        <Typography variant="h3" sx={{marginTop:3 ,fontSize:"1.4rem"}}>-Akanksha joshi via instagram</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
          Read More
        </Button>
      </Grid>
    </Grid>
  </SwiperSlide>
  <SwiperSlide>
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Icon icon="lucide:instagram" width="30" height="30" style={{ color: '#a484fc' }} />
      </Grid>
      <Grid item textAlign="center">
      <Typography variant="h1" sx={{marginTop:3,color:"#9D9FA4",fontSize:'2.3rem'}}>"I Recived this Mangalsutra bracelet as my first karva chauth gift!Its simple and sweet,<br/>just like my husband</Typography>
        <Typography variant="h3" sx={{marginTop:3 ,fontSize:"1.4rem"}}>-Akanksha joshi via instagram</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ marginTop: '3px' }}>
          Read More
        </Button>
      </Grid>
    </Grid>
  </SwiperSlide>
  <SwiperSlide>
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Icon icon="lucide:instagram" width="30" height="30" style={{ color: '#a484fc' }} />
      </Grid>
      <Grid item textAlign="center">
      <Typography variant="h1" sx={{marginTop:3,color:"#9D9FA4",fontSize:'2.3rem'}}>"I Recived this Mangalsutra bracelet as my first karva chauth gift!Its simple and sweet,<br/>just like my husband</Typography>
        <Typography variant="h3" sx={{marginTop:3 ,fontSize:"1.4rem"}}>-Akanksha joshi via instagram</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ marginTop: '3px' }}>
          Read More
        </Button>
      </Grid>
    </Grid>
  </SwiperSlide>
</Swiper>;
<Grid container sx={{marginTop:"39px",marginBottom:"40px",padding:"20px"}} >
    <Grid item md={6} >
<Typography sx={{marginLeft:4,fontSize:"1.7rem"}}>Shop Our Instagram</Typography>
</Grid> 
<Grid item md={6} >
<Typography sx={{marginLeft:59,fontSize:"1.7rem"}}>#MyCaratlane Story</Typography>
</Grid> 
<Grid container sx={{ marginTop: "20px", height: "100%" }}>
  <Grid item xs={6} sm={6} md={6} >
    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/1.jpg" style={{ width: '100%', height: '80%' }} />
  </Grid>
  <Grid container xs={6} sm={6} md={6} style={{ height: "100%" }}>
    {/* First group of three images */}
    <Grid item md={4}>
      <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/2.jpg" style={{ width: '100%', height: '100%' }} />
    </Grid>
    <Grid item md={4}>
      <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/3.jpg" style={{ width: '100%', height: 'auto' }} />
    </Grid>
    <Grid item md={4}>
      <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/4.jpg" style={{ width: '100%', height: 'auto' }} />
    </Grid>

    {/* Second group of three images */}
    <Grid item md={4}>
      <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/2.jpg" style={{ width: '100%', height: 'auto' }} />
    </Grid>
    <Grid item md={4}>
      <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/3.jpg" style={{ width: '100%', height: 'auto' }} />
    </Grid>
    <Grid item md={4}>
      <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/4.jpg" style={{ width: '100%', height: 'auto' }} />
    </Grid>
  </Grid>
</Grid>

</Grid>


        </>
    )
}
export default Textswiper;