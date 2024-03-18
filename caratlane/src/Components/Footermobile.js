import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion'

import AccordionDetails from '@mui/material/AccordionDetails'

import AccordionSummary from '@mui/material/AccordionSummary'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { styled } from "@mui/material";


import { Typography, Box, Container, Grid,Button,Divider } from '@mui/material'
import { Icon } from '@iconify/react'



const Footermobile = () => {
    const IconBox = styled(Box)(({ theme }) => ({
        display: "flex",
        marginTop: 7,
        alignItems: "center",
        gap: "1rem",
        [theme.breakpoints.down("sm")]: {
          justifyContent: "center",
        },
      }));
    const AccordionData = [
        { title: 'Know your jewellery', items: ["Dimond Guide", "Jewellery Guide", "Gemstone Guide", "Gold Rate", "Egold", "Ear piercing"] },
        { title: 'Caratlane Advantage', items: ["15-DAY RETURNS", "FREE SHIPPING", "FINANCING OPTIONS", "OLD GOLD EXCHANGE"] },
        { title: ' CustomerService', items: ["RETURN POLICY", "ORDER STATUS"] },
        { title: 'About Us', items: ["OUR STORY", "PRESS", "BLOG", "CAREERS"] }
    ];

    const [expanded, setExpanded] = useState('panel1')

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <>

            <Grid
                container
                sx={{ backgroundColor: "#f4ecf4", minHeight: "75vh", marginTop: 4, justifyContent: "center" ,display:{ xs:"block",md:"none"}}}
            >
                <Box
                    sx={{ paddingBottom: '5%', paddingTop: '2%' }}
                >

                    <Grid container>
                        <Grid item xs={12} >
                            {AccordionData.map((category, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === `panel${index}`}
                                    onChange={handleChange(`panel${index}`)}
                                    sx={{
                                        '&:before': {
                                            display: 'none',
                                        },
                                        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.1)',
                                        '&.MuiPaper-root': {
                                            borderRadius: '5px',
                                            marginTop: 2,
                                            backgroundColor:"#f4ecf4"
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}bh-content`}
                                        id={`panel${index}bh-header`}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: expanded === `panel${index}` ? 'black' : 'black',
                                            }}
                                        >
                                            {category.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <Typography variant="subtitle2" sx={{ marginLeft: '3%', color: 'grey' }}>
                                            {category.items.map((item, idx) => (
                                                <span key={idx}>{item}<br /></span>
                                            ))}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Grid>
                    </Grid>

                </Box>
                <Grid xs={12} sx={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                <Button sx={{ borderRadius: "8px", border: "2px solid #c6b1fc", color: "#231535", paddingY: "8px",marginTop:5 }}>
            FIND A STORE</Button>
                </Grid>
                <Grid xs={12} 
                sx={{alignItems:"center"}}
                >
                
       <IconBox >
      <Icon icon="ri:facebook-box-line" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="simple-icons:instagram" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="jam:pinterest-square" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="jam:twitter-square" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="ri:linkedin-box-line" width="30" height="30"  style={{color:" #cf60e9"}} />
      </IconBox>
      </Grid>
      <Grid xs={12}sx={{flexDirection: "column",alignItems:"center",display:"flex"}}>
      <Typography sx={{fontSize:"0.6rem",marginTop:2,marginBottom:2}}>Download Caratlane App</Typography>
      
      <img src="asserts\images\google.png" style={{width: "55%", borderRadius: "8px", border: "2px solid #c6b1fc",cursor:"pointer"}}/>
      </Grid>
      
            </Grid>
            <Grid sx={{marginTop:4,marginLeft:2, display:{xs:"block", md:"none"}}}>
            <Typography sx={{fontSize:"1rem"}}>Popular Searches</Typography>
            <Grid xs={12}>
      <Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Gold Rate in Major Cities </Typography>
        <Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>Gold Rate Today In Chennai|
Gold Rate Today In Hyderabad |
Gold Rate Today In Bengalore |
Gold Rate Today In Mumbai |
Gold Rate Today In Delhi |
Gold Rate Today In Kerala |
Gold Rate Today In Pune |
Gold Rate Today In Vijayawada |
Gold Rate Today In Kolkata |
Gold Rate Today In Ahmedabad</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>For Women </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Rings For Women|
Earrings For Women|
Bracelet For Women|
Bangles For Women|
Pendants For Women|
Necklaces For Women
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>For Men </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Rings For Men|
Earrings For Men|
Bracelet For Men|
Men's Kada
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Mangalsutras </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold Mangalsutra|
Diamond Mangalsutra|
Modern Mangalsutra|
South Indian Mangalsutra|
Fancy Mangalsutra|
Black Beads Mangalsutra|
Gold Mangalsutra Under 20000|
Traditional Mangalsutra|
Light Weight Mangalsutra|
Daily Use Mangalsutra|
Infinity Mangalsutra
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Pendants </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold Pendants|
Diamond Pendants|
Solitaire Pendants|
Evil Eye Pendants|
Chain Pendants|
Om Pendants|
Butterfly Pendants|
Heart Pendants
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Nose Rings </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Nose Rings|
Gold Nose Pins|
Diamond Nose Pins|
Nose Studs|
Pressing Nose Rings|
Stone Nose Rings
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Bangles </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold Bangles|
Diamond Bangles|
Kids Bangles|
Daily Wear Bangles|
Bridal Bangles|
Stone Bangles|
Baby Bangles|
Traditional Bangles
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Bracelets </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold Bracelets|
Diamond Bracelets|
Kids Bracelets|
Pearl Bracelets|
Evil Eye Bracelets|
Tennis Bracelets|
Chain Bracelets|
Name Bracelets|
Stone Bracelets|
Cuff Bracelets
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Necklace </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold Necklace|
Diamond Necklace|
Kids Necklace|
Gemstone Necklace|
Ruby Necklace|
Choker Necklace|
Pearl Necklace|
Evil Eye Necklace|
Necklaces For Women|
Long Necklace|
Name Necklace|
Stone Necklace|
Butterfly Necklace|
Bridal Necklace|
Fancy Necklace|
Emerald Necklace|
22kt Gold Chains
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Earrings </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold Earrings|
Diamond Earrings|
Solitaire Earrings|
Platinum Earrings|
Kids Earrings|
Jhumka Earrings|
Hoop Earrings|
Stud Earrings|
Pearl Earrings|
Sui Dhaga Earrings|
Chandbali Earrings|
Earcuff Earrings|
Fancy Earrings|
Stone Earrings|
Daily Wear Earrings|
Round Earrings
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.9rem",marginTop:2}}>Jewellery </Typography>
<Typography variant="p"sx={{marginTop:1,color:"#4F3267"}}>
Gold|
Diamond|
Solitaire|
Gemstone|
22kt Jewellery|
Platinum|
Charms|
Watch Charms|
Chains|
Silver Jewellery|
Rose Gold Jewellery|
White Gold Jewellery
</Typography>
<Divider sx={{my:2}}/>
<Typography sx={{color:"#8863FB",fontSize:"0.7rem",marginTop:2}}>COPYRIGHTS CARATLANE @ 2023 </Typography>
<Typography variant="p"sx={{my:2,color:"#4F3267"}}>
SITE MAP|
PRIVACY POLICY |TERMS & CONDITIONS |CORPORATE| XCLUSIVE |FREQUENTLY ASKED QUESTION
</Typography>
      </Grid>
            </Grid>
        </>
    )
}

export default Footermobile