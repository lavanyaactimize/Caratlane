import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Icon } from '@iconify/react';
import { Grid, Typography ,Button} from "@mui/material";
import SwiperCore from 'swiper/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
}} 
>
  <SwiperSlide>
    <Grid container direction="column" alignItems="center"sx={{ maxWidth: '100%' }}>
      <Grid item>
        <Icon icon="lucide:instagram" width="30" height="30" style={{ color: '#a484fc' }} />
      </Grid>
      <Grid item textAlign="center">
        <Typography variant="h1" sx={{marginTop:3,color:"#9D9FA4",fontSize:'2.3rem'}}>"I Recived this Mangalsutra bracelet as my first karva chauth gift!Its simple and sweet,<br/>just like my husband</Typography>
        <Typography variant="h3" sx={{marginTop:3 ,fontSize:"1.4rem"}}>-Akanksha joshi via instagram</Typography>
      </Grid>
      <Grid item style={{ marginBottom: '30px' }}> {/* Add margin-bottom to create space */}
       
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
       
      </Grid>
    </Grid>
  </SwiperSlide>
</Swiper>

 <Grid container sx={{ marginTop: "39px", padding: "20px" }}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ marginLeft: 4, fontSize: "1.7rem" }}>Shop Our Instagram</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ marginLeft: 4, fontSize: "1.7rem" }}>#MyCaratlane Story</Typography>
      </Grid>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/1.jpg" style={{ width: '100%', height: 'auto' }} alt="Instagram Post" />
        </Grid>
        <Grid container item xs={12} sm={6} md={6} spacing={1}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={4} key={index}>
              <img
                src={`https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/${index + 2}.jpg`}
                style={{ width: '100%', height: '100%' }}
                alt={`Instagram Post ${index + 2}`}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    <Grid container sx={{ backgroundColor: "#231535", minHeight: "45vh", justifyContent: "center", alignItems: "center" }}>
      <Grid container justifyContent="center" alignItems="center" direction="column">
        <Grid item>
          <Icon icon="fa:paper-plane-o" width="80" height="80" style={{ color: '#a484fc' }} />
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ color: "#ffff", marginTop: 3, fontSize: "2rem", textAlign: "center" }}>
            Sign up to be a Caratlane insider
          </Typography>
          <Typography variant="body1" sx={{ color: "#C4ADE1", border: "2px solid #6b317c", textAlign: "center", marginTop: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: "#6b317c", width: "100px" }}>Submit</Button>
          </Typography>
        </Grid>
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
                sx={{ color: '#ffff' }} // Change color here
              />
              <FormControlLabel
                value="male"
                control={<Radio style={{ color: '#a484fc' }} />} // Change color here
                label="Male"
                sx={{ color: '#ffff' }} // Change color here
              />
              <FormControlLabel
                value="other"
                control={<Radio style={{ color: '#a484fc' }} />} // Change color here
                label="Other"
                sx={{ color: '#ffff' }} // Change color here
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="p" sx={{ color: "#E481EA" }}> Know More</Typography>
          <Typography variant="p" sx={{ color: "#ffff", marginLeft: 1 }}> about CaratLane</Typography>
        </Grid>
      </Grid>
    </Grid>
<Grid container spacing={2} sx={{marginTop:2,padding:"28px"}}>
  <Grid item xs={12} sm={6} md={4}>
    <Typography sx={{marginBottom:2}}>Online Jewellery Store</Typography>
    <Typography variant="p">CaratLane.com began in 2008 with the simple motto of democratising jewellery. 
      And today, after 13 glorious years, it has come to be recognised as one of the top 20 e-commerce portals in India. 
      Steadily growing from strength to strength since inception, 
      CaratLane has also established 165 stores across the length and breadth of India.<br/>
      <Typography variant="p">Since July 2016, 
        we joined forces with India’s most desired and largest jewellery brand, Tanishq, through a strategic investment made by 
        Titan Company in CaratLane. 
        This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.
        </Typography>
        </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Typography sx={{marginBottom:2}}>Shopping at CaratLane</Typography>
    <Typography variant="p">Placing security first, CaratLane ensures that every transaction made on the site is safe and smooth for the customers. To attain this, 
    the company follows stern policies of transparency through the whole customer buying journey.<br/>
    For further convenience, all CaratLane products come backed with certification from international laboratories, and a blanket 15-day-return policy,
     no questions asked.<br/>
     CaratLane provides the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains, bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, CaratLane offers 22k (916)
      and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.
        
        </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Typography sx={{marginBottom:2}}>CaratLane’s Vision</Typography>
    <Typography variant="p">CaratLane works with the vision of offering tastefully designed jewellery at revolutionary prices. This is achieved by eliminating all inefficiencies which result in drastically reduced costs.
     With CaratLane, users stand to save as much as 30% when compared to prices in the market.<br/>
      <Typography variant="p">Our app is designed to bridge the vast gap between the virtual and the physical world. This has been attained with the help of the Virtual Try-on feature that permits the users to virtually
       put on 1000s of earrings to see just how they look when placed on the ears.
        </Typography>
        </Typography>
  </Grid>

</Grid>


        </>
    )
}
export default Textswiper;