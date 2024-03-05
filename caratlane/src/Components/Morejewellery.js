import { Typography, Grid, Divider } from "@mui/material";
import React from "react";

const Morejewellery = () => {
    const images = [
        {  name: 'CASUAL' },
        {  name: 'DIAMOND' },
        {  name: 'GOLD' },
        {  name: 'PERSONALISED' },
        {  name: 'ALPHABETS' },
       
        
    ]
    const Necklace = [
        {  name: 'MANGALSUTRAS' },
        {  name: 'DIAMOND NECKLACES' },
        {  name: 'PEARLS NECKLACES' },
        {  name: 'DIAMOND MANGALSUTRAS' },
        {  name: 'EVERYDAY WEAR' },
       
        
    ]
    const imagess = [
        
        {  name: 'CHAINS' },
        {  name: 'NOSE PINS' },
        {  name: 'NOSE RINGS' },
        {name:'GOLD MANGALSUTRAS'},
        {name:'PLATINUM BANDS'},
        {name:'DIAMOND NOSE PINS'},
        {name:'GOLD NECKLACES'},
        {name:'ALL NECKLACES'},
        {name:'ALL PENDANTS'}
        
    ]
    const shopBy = [
        {  name: 'FOR MEN' },
        {  name: 'FOR WOMEN' },
        {  name: 'FOR KIDS' },
        {  name: 'ALL COLLECTIONS' },
        {  name: 'GLOBAL SHIPPING' },
        {  name: '22KT JEWELLERY' },
        { name: 'WATCH CHARM' },
        
    ]
    const extra = [
        {  name: 'CHARMS' },
        {  name: 'MENS KADA' },
        {  name: 'MENS BANDS' },
       ]
    
      
    return (
        <>
        <Grid container spacing={2} sx={{}}> 
             <Grid item xs={3} sx={{ display:'flex'}}>
                <Grid item xs={6} >
                <Typography variant="p" sx={{ fontWeight: "bold" }}>PENDANTS</Typography>
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} /> 
                        {images.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontSize: '11px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{item.name} </p>
                            </div>
                        ))}
                       <Typography variant="p" sx={{ fontWeight: "bold" }}>NECKLACE</Typography>  
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                    
                    {Necklace.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontSize: '11px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{item.name} </p>
                            </div>
                        ))}  
                        </Grid>
                        <Grid item xs={6} sx={{marginTop:3.8}}> 
                       
                        </Grid>
                </Grid>
                
                <Grid item xs={3} >
                <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                        {imagess.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                
                                <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{item.name} </p>
                            </div>
                        ))}
                        <Typography variant="p" sx={{ fontWeight: "bold" }}>SHAYA</Typography>  
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                    <Typography variant="p">SILVER JEWELLERY</Typography>
                </Grid>
                 <Grid item xs={3} > 
                <Typography variant="p" sx={{ fontWeight: "bold" }}>SHOP ALL JEWEllERY</Typography>
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                    {shopBy.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center',marginBottom: '5px' }}>
                            <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{item.name} </p>
                            </div>
                        ))}
                         <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                         {extra.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center',marginBottom: '5px' }}>
                            <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>{item.name} </p>
                            </div>
                        ))}
                     </Grid>
                
                <Grid item xs={3} sx={{marginTop:-2}} >
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Mangalsutras.jpg"
                      style={{ maxWidth: '290%', height: 'auto'  }} />
    </Grid>

            </Grid>
        </>
    );
}

export default Morejewellery;