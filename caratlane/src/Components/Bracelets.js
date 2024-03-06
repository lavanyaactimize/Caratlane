import { Typography, Grid, Divider } from "@mui/material";
import React from "react";

const Bracelets = () => {
    const images = [
        { url: 'https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg', name: 'CHAIN BRACELETS' },
        { url: 'https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg', name: 'FLEXIBLE BRACELETS' },
        { url: 'https://banner.caratlane.com/live-images/b1037b1ad67e4199a3f45f49f60241e2.jpg', name: 'LIGHTWEAR BANGLES' },
        { url: 'https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png', name: 'GOLD BANGLES' },
        { url: 'https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/02-FEB/Merch%20work/20/CL_menu_4.jpg', name: 'KIDS BRACELETS' },
        
    ]
    const imagess = [
        
        { url: 'https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg', name: 'OVAL BRACELETS' },
        { url: 'https://banner.caratlane.com/live-images/f9ad94f888c14b8fb194829426a12a49.png', name: 'MANGALSUTRA BRACELETS' },
        { url: 'https://banner.caratlane.com/live-images/7d7c48a01cc041828a4aaaf724c93342.jpg', name: 'DIAMOND BANGLES' },
        { url: 'https://banner.caratlane.com/live-images/1acd93734c6c4fe7b45415563c439d5d.jpg', name: '22KT BRACELETS' },
        { url: 'https://banner.caratlane.com/live-images/d794dd63a1ec46e8b28cfa85ab70550f.jpg', name: 'SILVER BRACELETS' },
        
    ]
    const stones = [
        { url: 'https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png', name: 'GOLD' },
        { url: 'https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png', name: 'DIAMOND' },
        { url: 'https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png', name: 'GEMSTONE' },
        { url: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/10_OCT/HPBanner/Menu/01/Pearl.png', name: 'PEARL' },
        { url: 'https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png', name: 'YELLOW GOLD' },
        { url: 'https://banner.caratlane.com/live-images/40fbb1dbeb9b45b39d004373fd4e4485.png', name: 'ROSE GOLD' },
        { url: 'https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png', name: 'WHITE GOLD' },
        
    ]
    const shopByData = [
        { title: "under ₹10k" },
        { title: "₹10k to ₹20k" },
        { title: "₹20k to ₹30k" },
        { title: "₹30k to ₹40k" },
        { title: "₹40k to ₹50k" },
        { title: "₹50k to ₹75k" },
        { title: "Above ₹75k" },
        { title: "FOR WOMEN" },
        { title: "FOR MEN" },
      ];
    return (
        <>
            <Grid container spacing={2} sx={{ width:'100%',backgroundColor:'#ffff',marginTop:-3}}> 
             <Grid item xs={4} sx={{ display:'flex'}}>
                <Grid item xs={6} >
                <Typography variant="p" sx={{ fontWeight: "bold" }}>SHOP BY STYLE</Typography>
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} /> 
                        {images.map((image, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={image.url} alt={image.name}
                                    style={{ marginRight: '10px' }}
                                />
                                <p style={{ fontSize: '11px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{image.name} </p>
                            </div>
                        ))}   
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3.8}}> 
                        {imagess.map((image, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={image.url} alt={image.name}
                                    style={{ marginRight: '10px' }}
                                />
                                <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{image.name} </p>
                            </div>
                        ))}
                        </Grid>
                </Grid>
                <Grid item xs={2} > 
                <Typography variant="p" sx={{ fontWeight: "bold" }}>SHOP BY METAL & STONE</Typography>
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                    {stones.map((image, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center',marginBottom: '10px' }}>
                                <img src={image.url} alt={image.name}
                                    style={{ marginRight: '10px' }}
                                />
                                <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{image.name} </p>
                            </div>
                        ))}
                     </Grid>
                <Grid item xs={2} >
                <Typography variant="p" sx={{ fontWeight: "bold" }}>SHOP BY </Typography>
        <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
        {shopByData.map((item, index) => (
          <Grid item key={index} style={{ marginBottom: '10px' }}>
            <Typography variant="p">{item.title}</Typography>
          </Grid>
        ))}
         <Divider sx={{ marginTop: 3, borderColor: '#8863fb', width: '50%' }} />
         <Typography variant="p" sx={{ fontWeight: "bold" }}> ALL BRACELETS  </Typography>
                </Grid>
                <Grid item xs={4} sx={{marginTop:-2}} >
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Bracelets.jpg" 
                      style={{ maxWidth: '100%', height: 'auto'  }} />
    </Grid>

            </Grid>
        </>
    );
}

export default Bracelets;