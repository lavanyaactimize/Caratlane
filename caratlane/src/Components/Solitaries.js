import { Typography, Grid, Divider } from "@mui/material";
import React from "react";

const Solitaries = () => {
    const images = [
        { url: 'https://banner.caratlane.com/live-images/09f33b890d1844debb86f3146b75c2d9.jpg', name: 'RINGS' },
        { url: 'https://banner.caratlane.com/live-images/6da9461dcc60446bbe74760804305c1a.jpg', name: 'PENDANTS' },
        { url: 'https://banner.caratlane.com/live-images/3d7f53c12a774a9c9e9461feaff23c6d.jpg', name: 'NECKLACE' },
        { url: 'https://banner.caratlane.com/live-images/8731e8a50ae84ab0b53b2c4b9e75ca84.png', name: 'MENS SOLITAIRE' },
       
        
    ]
    const imagess = [
        
        { url: 'https://banner.caratlane.com/live-images/6142b4f851664135af4d418df80eb220.jpg', name: 'EARRINGS' },
        { url: 'https://banner.caratlane.com/live-images/1effd55ea43844d7ba0294ba7fba92df.jpg', name: 'BRIDAL SET' },
        { url: 'https://banner.caratlane.com/live-images/a2809a04e6274900af2a280280266831.png', name: 'MANGALSUTRA' },
        
        
    ]
    const stones = [
        { url: 'https://banner.caratlane.com/live-images/363e20a4bede40a4b3a547ecdaf26109.png', name: 'ROUND' },
        { url: 'https://banner.caratlane.com/live-images/569ee912e74848fca4ca9438767c6615.png', name: 'PEAR' },
        { url: 'https://banner.caratlane.com/live-images/436a3fb63e7642b9a799ce86e484e452.png', name: 'HEART' },
        { url: 'https://banner.caratlane.com/live-images/3579d06f08754a95bea78c0139c8586f.png', name: 'PRINCESS' },
        { url: 'https://banner.caratlane.com/live-images/d6b3ce5f01fc461ab12be267d9ae144a.png', name: 'OVAL' },
        { url: 'https://banner.caratlane.com/live-images/4d2666d543044f58b8d951ae09d1029c.png', name: 'CUSHION' },
        { url: 'https://banner.caratlane.com/live-images/829e2bf737d24ca08c8d446b1457325a.png', name: 'EMERALD' },
        
    ]
    const shopByData = [
        { title: "under ₹50k" },
        { title: "₹50k to ₹1LACK" },
     { title: "Above ₹1LACK" },
        
      ];
      const jewData = [
        { title: "JEWELLERY GUIDE" },
        { title: "DESIGN YOUR OWN" },
     { title: "SHOW ALL DESIGNS" },
     { title: "ALL DIAMOND JEWELLERY" },
        
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
         <Divider sx={{ margin: 4, borderColor: '#8863fb', width: '50%' }} />
         {jewData.map((item, index) => (
          <Grid item key={index} style={{ marginBottom: '10px' }}>
            <Typography variant="p"sx={{fontWeight: "bold"}} >{item.title}</Typography>
          </Grid>
        ))}
                </Grid>
                <Grid item xs={4} sx={{marginTop:-2}} >
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Solitaires.jpg" 
                      style={{ maxWidth: '110%', height: 'auto'  }} />
    </Grid>

            </Grid>
        </>
    );
}

export default Solitaries;