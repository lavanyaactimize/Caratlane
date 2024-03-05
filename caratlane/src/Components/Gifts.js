import { Typography, Grid, Divider } from "@mui/material";
import React from "react";

const Gifts = () => {
    const image = [
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Wedding-gifts_DropDown2X.jpg" },
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Mark-Your-Anniversary_DropDown2X.jpg" },
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Gifts-Under-20K_DropDown2X.jpg" },
        { url: "https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Mark-Your-Anniversary_DropDown2X.jpg" },

    ]
    return (
        <>
            <Grid container spacing={2} sx={{  border:'2px solid red'}}>
                {/* <Grid item xs={7} sx={{ display: "flex", marginTop: 0 }}>
                    {image.map((item, index) => (
                        <Grid key={index}>
                            <img style={{ maxWidth: '100%', height: 'auto' }} src={item.url} />
                        </Grid>
                    ))}
                </Grid> */}


                {/* <img
                        src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Wedding-gifts_DropDown2X.jpg"
                        style={{ maxWidth: '100%', height: '75%', margin: '0' }}
                    />
                    <img
                        src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Mark-Your-Anniversary_DropDown2X.jpg"
                        style={{ maxWidth: '100%', height: '75%', margin: '0' }}
                    />
                    <img
                        src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Gifts-Under-20K_DropDown2X.jpg"
                        style={{ maxWidth: '100%', height: '75%', margin: '0' }}
                    />
                    <img
                        src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/Gift/01/Mark-Your-Anniversary_DropDown2X.jpg"
                        style={{ maxWidth: '100%', height: '75%', margin: '0' }}
                    /> */}

                {/* <Grid item xs={5} sx={{border:'1px solid green'}}>
                    <Typography>helooo</Typography>
                </Grid> */}
                <Grid sx={{width:'70%', border:'2px solid yellow'}}>

                </Grid>
            </Grid>
        </>
    )
}

export default Gifts;
