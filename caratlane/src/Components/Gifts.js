import { Typography, Grid, Divider } from "@mui/material";
import React from "react";

const Gifts = () => {
    const image = [
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Wedding-gifts_DropDown2X.jpg" },
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Mark-Your-Anniversary_DropDown2X.jpg" },
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Gifts-Under-20K_DropDown2X.jpg" },
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Mark-Your-Anniversary_DropDown2X.jpg" },

    ]
    const gifts = [
        {  name: 'Birthday Gifts' },
        {  name: 'Anniversary Gifts' },
        {  name: 'Valentaines Gifts' },
        {  name: 'Personalize Gifts' },
       ]
       const shopBy = [
        {  name: 'For Kids' },
        {  name: 'For Sister' },
        {  name: 'For Mom' },
        {  name: 'For Wife' },
        {  name: 'International Gifting' },
       ]
    return (
        <>
            <Grid container spacing={2}sx={{backgroundColor:'#ffff',marginTop:-3}} >
               <Grid sx={{width:'85%',display: "flex", }}>
                {image.map((item, index) => (
                        <Grid key={index}>
                            <img style={{ maxWidth: '100%', height: 'auto' }} src={item.url} />
                        </Grid>
                    ))}
                </Grid>
                <Grid sx={{width:'15%',boarder:'3px solid red',marginTop:2}}>
                <Typography variant="p" sx={{ fontWeight: "bold",marginLeft:"15px" }}>GIFTS</Typography>
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                    {gifts.map((item, index) => (
                            <div key={index} style={{textAlign:'center',marginBottom: '1px' }}>
                            <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'none'}>{item.name} </p>
                            </div>
                        ))}
                        <Typography variant="p" sx={{ fontWeight: "bold",marginLeft:"15px",marginTop:'20px' }}>SHOP BY</Typography>
                    <Divider sx={{ marginTop: 1, borderColor: '#8863fb', width: '50%' }} />
                    {shopBy.map((item, index) => (
                            <div key={index} style={{textAlign:'center',marginBottom: '1px' }}>
                            <p style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                                    onMouseOut={(e) => e.target.style.fontWeight = 'none'}>{item.name} </p>
                            </div>
                        ))}
                        <Divider sx={{ marginTop: 8, borderColor: '#8863fb', width: '50%' }} />
                         <Typography variant="p" sx={{ fontWeight: "bold",marginLeft:"15px" }}>GIFT CARDS</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Gifts;
