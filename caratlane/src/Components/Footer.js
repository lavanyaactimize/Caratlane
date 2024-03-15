import React from "react";
import { Grid, Typography,Link,Button, Divider } from "@mui/material";
import { styled } from "@mui/material";
import { Box, } from "@mui/system";
import { Icon } from "@iconify/react";
// import Select, { selectClasses } from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import { createSvgIcon } from '@mui/material/utils';

const Footer = () => {
  const jewelleryItems = [
    "Dimond Guide",
    "Jewellery Guide",
    "Gemstone Guide",
    "Gold Rate",
    "Egold",
    "Ear percing"
  ];
const carAdvantage=[
    "15-DAY RETURNS",
    "FREE SHIPPING",
    "FINANCING OPTIONS",
    "OLD GOLD EXCHANGE",
]
const service=[
    "RETURN POLICY",
    "ORDER STATUS"
]
const aboutUs=[
   " OUR STORY",
"PRESS",
"BLOG",
"CAREERS"
]
const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: 7,
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));
//   const PlusIcon = createSvgIcon(
//     // credit: plus icon from https://heroicons.com/
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//     </svg>,
//     'Plus',
//   );
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#f4ecf4", height: "65vh", marginTop: 4, justifyContent: "center" }}
      >
        <Grid item md={2} sx={{ marginTop: 2 }}>
          <Typography sx={{ fontSize: "0.9rem" }}>Know Your Jewellery</Typography>
          {jewelleryItems.map((item, index) => (
            <Grid item key={index} md={12}>
              <Typography variant="body1" sx={{ color: "#87769d", fontSize: "0.8rem", cursor: "pointer", }}>{item}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item md={2} sx={{ marginTop: 2 }}>
          <Typography>CaratLane Advantage</Typography>
          {carAdvantage.map((item, index) => (
            <Grid item key={index} md={12}>
              <Typography variant="body1" sx={{ color: "#87769d", fontSize: "0.8rem", cursor: "pointer", }}>{item}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item md={2} sx={{ marginTop: 2 }}>
          <Typography>Customer Service</Typography>
          {service.map((item, index) => (
            <Grid item key={index} md={12}>
              <Typography variant="body1" sx={{ color: "#87769d", fontSize: "0.8rem", cursor: "pointer", }}>{item}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item md={2} sx={{ marginTop: 2 }}>
          <Typography>About Us</Typography>
          {aboutUs.map((item, index) => (
            <Grid item key={index} md={12}>
              <Typography variant="body1" sx={{ color: "#87769d", fontSize: "0.8rem", cursor: "pointer", }}>{item}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item md={2} sx={{ marginTop: 2 }}>
          <Typography>Contact Us</Typography>
          <IconBox >
          <Icon icon="material-symbols-light:call" width="20" height="20"  style={{color: '#231535'}} />
          <Icon icon="mdi:message-group" width="20" height="20"  style={{color: "#231535"}} />
          <Icon icon="ri:whatsapp-line" width="20" height="20"  style={{color: "#231535"}} />
          </IconBox>
          <Typography sx={{marginTop:2,fontSize:"0.8rem"}}>24×7Enquiry Support All Days</Typography>
          <Typography sx={{fontSize:"0.8rem",marginTop:1}}> General:
          <Link
            href="#"
            sx={{
              color: '#DE57E5',
              fontSize: '0.8rem',
              textDecoration: 'underline',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '4px' // Adjust spacing between the Typography and the Link
            }}
          >
            ContactUs@Caratlane.com
          </Link>
          </Typography>
          <Typography sx={{fontSize:"0.8rem",marginTop:1}}> Corporate:
          <Link
            href="#"
            sx={{
              color: '#DE57E5',
              fontSize: '0.8rem',
              textDecoration: 'underline',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '4px' // Adjust spacing between the Typography and the Link
            }}
          >
            B2B@Caratlane.com
          </Link>
          </Typography>
          <Typography sx={{fontSize:"0.8rem",marginTop:1}}> HR:
          <Link
            href="#"
            sx={{
              color: '#DE57E5',
              fontSize: '0.8rem',
              textDecoration: 'underline',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '4px' // Adjust spacing between the Typography and the Link
            }}
          >
            Carrers@Caratlane.com
          </Link>
          </Typography>
          <Typography sx={{fontSize:"0.8rem",marginTop:1}}> Grievance:
          <Link
            href="#"
            sx={{
              color: '#DE57E5',
              fontSize: '0.8rem',
              textDecoration: 'underline',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '4px' // Adjust spacing between the Typography and the Link
            }}
          >
            Clickhere
          </Link>
          </Typography>
          <Button sx={{ borderRadius: "8px", border: "2px solid #c6b1fc", color: "#231535", paddingY: "8px",marginTop:5 }}>
            FIND A STORE</Button>
        </Grid>
     
      <Grid container spacing={2}sx={{marginLeft:14,marginTop:-10}}>
        <Grid md={6} sx={{justifyContent:"center"}}>
       <IconBox >
      <Icon icon="ri:facebook-box-line" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="simple-icons:instagram" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="jam:pinterest-square" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="jam:twitter-square" width="30" height="30"  style={{color: "#cf60e9"}} />
      <Icon icon="ri:linkedin-box-line" width="30" height="30"  style={{color:" #cf60e9"}} />
      </IconBox>
      <Typography sx={{fontSize:"0.6rem",marginTop:2,marginBottom:2}}>Download Caratlane App</Typography>
      
        <img src="asserts\images\google.png" style={{width: "45%", borderRadius: "8px", border: "2px solid #c6b1fc",cursor:"pointer"}}/>
      
      
      </Grid>
      <Grid md={6}sx={{marginTop:8}}>
        <Grid sx={{marginLeft:9}}>
        <IconBox>
        <Icon icon="cib:visa" width="50" height="50" />
        <Icon icon="brandico:mastercard" width="50" height="50" />
        <Icon icon="cib:cc-paypal" width="50" height="50" />
        <Icon icon="fontisto:american-express" width="50" height="50" />
        <Icon icon="foundation:social-amazon" width="50" height="50" />
        </IconBox>
        </Grid>
      </Grid>
      </Grid>
      
      </Grid>
      {/* <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#f4ecf4", height: "65vh", marginTop: 4, justifyContent: "center" }}>
            <Grid xs={12}>
            <Select
      placeholder="Select a pet…"
      indicator={<PlusIcon/>}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
            </Grid>
        </Grid> */}

      <Grid container direction="column" sx={{paddingX:18,marginTop:4}}>
        <Typography sx={{fontSize:"1rem"}}>Popular Searches</Typography>
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
    </>
  );
};

export default Footer;
