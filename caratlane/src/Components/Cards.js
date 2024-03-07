import { Typography,Grid,Box } from "@mui/material";
import React from "react";

const Cards = ()=>
{
    const cardImage=[
        {url:"https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg"},
        {url:"https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg"},
        {url:"https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg"},
        {url:"https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg"},
        {url:"https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg"},
        {url:"https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/07/Desktop_3.jpg"},

    ]
    return(
        <>
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
         <Box sx={{ marginTop: "0", paddingLeft: 3, paddingRight: 3,borderRadius: "8px" }}>
            <img src={cardImage[index % cardImage.length].url} alt={`Card ${index}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Box>
        </Grid>
      ))}
    </Grid>
   
        </>
    )
}
export default Cards;