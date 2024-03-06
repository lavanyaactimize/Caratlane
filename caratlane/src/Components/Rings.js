import { Typography, Grid, Divider } from "@mui/material";
import React from "react";

const Rings = () => {
    const images = [
        { url: 'https://banner.caratlane.com/live-images/3e52030aaf3c4b59b34f7825aaefd475.jpg', name: 'ENGAGEMENT' },
        { url: 'https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg', name: 'DAILY WEAR' },
        { url: 'https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png', name: 'COUPLE RINGS' },
        { url: 'https://banner.caratlane.com/live-images/94329809fcdf408eb7487e69abd78d21.jpg', name: 'COCKTAIL' },
        { url: 'https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg', name: 'INFINITY' },
        
    ]
    const imagess = [
        { url: 'https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg', name: 'SOLITAIRE' },
        { url: 'https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg', name: 'PLATINUM' },
        { url: 'https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png', name: 'BANDS' },
        { url: 'https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg', name: 'PROMISE RINGS' },
        { url: 'https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg', name: 'ADJUSTABLE RINGS' },
        
    ]
    const stones = [
        { url: 'https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png', name: 'GOLD' },
        { url: 'https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png', name: 'DIAMOND' },
        { url: 'https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png', name: 'GEMSTONE' },
        { url: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/10_OCT/HPBanner/Menu/01/Nav.png', name: 'NAVARATNA' },
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
        { title: "FOR MEN" },
      ];
    return (
        <>
            <Grid container spacing={2} 
             sx={{ width:'100%',backgroundColor:'#ffff',marginTop:-3}}> 
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
                <Grid item xs={2} >
                <Typography variant="p" sx={{ fontWeight: "bold" }}>SHOP BY </Typography>
        <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
        {shopByData.map((item, index) => (
          <Grid item key={index} style={{ marginBottom: '10px' }}>
            <Typography variant="p">{item.title}</Typography>
          </Grid>
        ))}
         <Divider sx={{ marginTop: 3, borderColor: '#8863fb', width: '50%' }} />
         <Typography variant="p" sx={{ fontWeight: "bold" }}>SHOW ALL DESIGNS  </Typography>
                </Grid>
                <Grid item xs={4} sx={{marginTop:-2}} >
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Rings.jpg" 
                      style={{ maxWidth: '100%', height: 'auto'  }} />
    </Grid>

            </Grid>
        </>
    );
}

export default Rings;