import React, { useState }  from "react";
import Appbar from "../Components/Appbar";
import Appbarr from "../Components/Appbarr";
import { Button, Grid, Typography,Divider} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { styled, alpha } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Cardswiper from "../Components/Cardsswiper";

const StyledButton = styled(Button)(({ theme }) => ({
  color:"#8863fb",
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color:"#4f3267"
  },
}));
const Products =()=>
{
  const [openData, setOpenData] = useState(false);
  

  const handleClick = () => {
    setOpenData(!openData);
  };
 
  
    const Buttons=[
        {button:'All'},
        {button:'Try at Home'},
        {button:'Designs in Store'},
        {button:'Faster Delivery'},
        {button:'New in'},
    ]
    const filter=[
        { count:"₹5001 - ₹10000" },
        { count:"₹10001 - ₹15000" },
        { count:"₹15001 - ₹20000" },
        { count:"₹20001 - ₹30000" },
        { count:"₹30001 - ₹40000" },
        { count:"₹40001 - ₹50000" },
        { count:"₹50001 - ₹60000" },
    ]
    const Weight=[
      { weight:"0 - 2 g"},
      { weight:"2 - 5 g"},
      { weight:"5 - 10 g"},
      { weight:"10 - 20 g"},
    ]
    const Material=[
      { url: 'https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png', name: 'Platinum' },
        
      { url: 'https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png', name: 'Gold' },
        { url: 'https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png', name: 'Diamonds' },
        { url: 'https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png', name: 'Gemstones' },
       
    ]
    const Metal=[
      { metal:"18 KT Yellow"},
      { metal:"18 KT White"},
      { metal:"18 KT Rose"},
      { metal:"18 KT Two Tone"},
    
    ]
    const Metall=[
      { metal:"18 KT Three Tone"},
      { metal:"14 KT Yellow"},
      { metal:"14 KT White"},
      { metal:"14 KT Rose"},
      { metal:"14 KT Two Tone"},
      { metal:"Platinum 950 Platinum"},
    
    ]
    const Ring=[
      {ring:"5"},
      {ring:"6"},
      {ring:"7"},
      {ring:"8"},
      
    ]
    const Rings=[
      {ring:"9"},
      {ring:"10"},
      {ring:"11"},
      {ring:"12"},
      
    ]
    const Ringstyle=[
      {ring:"Casual Rings"},
      {ring:"Bands"},
      {ring:"Midi Rings"},
      {ring:"eternity bands"},
      
    ]
    const Ringstyles=[
      {ring:"UniSex Ring"},
      {ring:"Ring Finger"},
      {ring:"4g gold ring"},
      {ring:"8g gold ring"},
      
    ]
    const gifts=[
      {gift:"birthday gifts"},
      {gift:"Anniversary Gifts"},
      {gift:"Gifts for Family"},
      {gift:"Festive Gifts"},
      
    ]
    const discount=[
      {discount:"Flat 15% off on Diamond Prices"},
      {discount:"Flat 10% off on Diamond Prices"},
      {discount:"Flat 5% off on Diamond Prices"},
      {discount:"Flat 100% off on Making Charges"},
     
    ]
    const CuratedBy=[
      {Curated:"All"},
      {Curated:"Gifts for Raksha Bandhan"},
      {Curated:"Most Wishlisted"},
      {Curated:"Best Sellers"},
     
     
    ]
    const CuratedByy=[
      {Curated:"Plain Platinum Bands"},
      {Curated:"global offers"},
      {Curated:"hallmark gold"},
      {Curated:"International shipping Rings"},
      {Curated:"18 karat gold"},
      {Curated:"gold rings engagement designs"},
     
     
    ]
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <>
        <Appbar/>
        <Appbarr/>
        <Grid container sx={{ backgroundColor: "#F6F3F9", minHeight: "15vh",  marginTop:"90px" }}>
<Grid item container alignItems="center"sx={{marginTop:2,marginLeft:9}}>
    <Typography variant="h3"sx={{fontSize:"1rem",fontWeight:"bold"}}>18 KT White Rings
    <br/><Typography variant="p"sx={{fontSize:"0.5rem"}}> HOME JEWELLERY</Typography></Typography>
    <Typography variant="h3"sx={{marginLeft:1,marginTop:-2}}>475 Designs
   </Typography>
    
</Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid sx={{marginLeft:9}} display="flex">
      {Buttons.map((button, index) => (
        <Grid item key={index}
        sx={{ marginTop: 6 ,marginRight:2}} 
        >
          <button
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '9px',
              backgroundColor: '#EAE3FF',
              color: '#4f3267',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              fontSize:"1.3rem"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#8863FB';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#EAE3FF';
            }}
          >
            {button.button}
          </button>
        </Grid>
      ))}
      </Grid>
    </Grid>
    <Grid container spacing={2} marginTop="50px">
  <Grid item sx={{marginLeft:6}}>
    <div  style={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" sx={{marginLeft:4}}>FILTERS</Typography>
      <Typography variant="body2"sx={{marginLeft:6}}>CLEAR ALL</Typography>
    </div>
    <Divider sx={{ margin: 2 }} />
    <Typography variant="h2" sx={{ marginLeft: 4,margin:3 }}>Price</Typography>
    <Grid item sx={{ marginLeft: 4 }}>
      {filter.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.count}</Typography>
        </div>
      ))}
    </Grid>
    <Grid style={{ position: 'relative', display: 'inline-block' }}>
    {openData && (
              <div style={{ marginLeft:"28px" }}>
                {/* Additional data content */}
                
                {filter.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="p" fontSize="1rem" color="#4F3267">{item.count}</Typography>
        </div>
      ))}
              </div>
            )}
            <StyledButton
              id="demo-customized-button"
              aria-controls={openData ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openData ? 'true' : undefined}
              disableElevation
              endIcon={openData ?  <KeyboardArrowDownIcon />:<KeyboardArrowUpIcon /> }
              onClick={handleClick}
              sx={{ marginLeft: "28px" }}
            >
              {openData ? 'showless' : '7 more'}
            </StyledButton>
          
          </Grid>
          <Divider/>
          <Grid sx={{marginLeft:2}}>
          <Typography variant="h2" sx={{margin:2}}>Product Type</Typography>
          <Checkbox {...label}  /> Rings
          <Divider/>
          </Grid>
          <Grid  marginTop="10px" marginLeft="18px">
          <Typography variant="h2" sx={{margin:2}}>Weight Range</Typography>
          {Weight.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.weight}</Typography>
        </div>
      ))}
      <Divider/>
          </Grid>
          <Grid  marginTop="10px" marginLeft="18px">
          <Typography variant="h2"sx={{margin:2}}>Material</Typography>
          {Material.map((item, index) => (
  <div key={index} style={{  display: "flex", alignItems: "center" }}>
    <Checkbox {...label} />
    <img src={item.url} alt={item.name} style={{ marginRight: "10px" }} />
    <Typography variant="body1">{item.name}</Typography>
  </div>
))}
 {openData && (
        <div style={{ marginLeft: "2px" }}>
         
          <Checkbox {...label} />
          <img src='https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png'/> Soloitaries
        </div>
      )}
      <StyledButton
        id="demo-customized-button"
        aria-controls={openData ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openData ? 'true' : undefined}
        disableElevation
        endIcon={openData ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        onClick={handleClick}
        sx={{ marginLeft: "8px" }}
      >
        {openData ? 'showless' : '1 more'}
      </StyledButton>
      <Divider/>
          </Grid>
          <Grid  marginTop="10px" marginLeft="18px">
          <Typography variant="h2"sx={{margin:2}}>Metal</Typography>
          {Metal.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.metal}</Typography>
        </div>
))}
 {openData && (
        <div style={{ marginLeft:"4px" }}>
        {/* Additional data content */}
        
        {Metall.map((item, index) => (
<div key={index} style={{ display: "flex", alignItems: "center" }}>
  <Checkbox {...label} />
  <Typography variant="p" fontSize="1rem" color="#4F3267">{item.metal}</Typography>
</div>
))}
      </div>
    )}
      <StyledButton
        id="demo-customized-button"
        aria-controls={openData ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openData ? 'true' : undefined}
        disableElevation
        endIcon={openData ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        onClick={handleClick}
        sx={{ marginLeft: "8px" }}
      >
        {openData ? 'showless' : '6 more'}
      </StyledButton>
      <Divider/>
          </Grid>
          <Grid  marginTop="10px" marginLeft="18px">
          <Typography variant="h2"sx={{margin:2}}>Ring Sizes</Typography>
          {Ring.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.ring}</Typography>
        </div>
))}
 {openData && (
        <div style={{ marginLeft:"4px" }}>
        {/* Additional data content */}
        
        {Rings.map((item, index) => (
<div key={index} style={{ display: "flex", alignItems: "center" }}>
  <Checkbox {...label} />
  <Typography variant="p" fontSize="1rem" color="#4F3267">{item.ring}</Typography>
</div>
))}
      </div>
    )}
      <StyledButton
        id="demo-customized-button"
        aria-controls={openData ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openData ? 'true' : undefined}
        disableElevation
        endIcon={openData ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        onClick={handleClick}
        sx={{ marginLeft: "8px" }}
      >
        {openData ? 'showless' : '6 more'}
      </StyledButton>
      <Divider/>
          </Grid>
         <Grid sx={{ marginLeft: 2}}>
<Typography variant="h2"sx={{margin:2}}>Shop for</Typography>
<Checkbox {...label} /> Women
<Divider/>
         </Grid>
         <Grid sx={{ marginLeft: 2 }}>
         <Typography variant="h2" sx={{margin:2}}>Occasion</Typography>
  <div>
    <Checkbox {...label} />Everyday
  </div>
  <div>
    <Checkbox {...label} />Engagement
  </div>
  <div>
    <Checkbox {...label} />Evening
  </div>
  <Divider/>
         </Grid>
         <Grid  marginTop="10px" marginLeft="18px">
          <Typography variant="h2"sx={{margin:2}}>Ring Style</Typography>
          {Ringstyle.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.ring}</Typography>
        </div>
))}
 {openData && (
        <div style={{ marginLeft:"4px" }}>
        {/* Additional data content */}
        
        {Ringstyles.map((item, index) => (
<div key={index} style={{ display: "flex", alignItems: "center" }}>
  <Checkbox {...label} />
  <Typography variant="p" fontSize="1rem" color="#4F3267">{item.ring}</Typography>
</div>
))}
      </div>
    )}
      <StyledButton
        id="demo-customized-button"
        aria-controls={openData ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openData ? 'true' : undefined}
        disableElevation
        endIcon={openData ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        onClick={handleClick}
        sx={{ marginLeft: "8px" }}
      >
        {openData ? 'showless' : '6 more'}
      </StyledButton>
      <Divider/>
          </Grid>
          <Grid sx={{ marginLeft: 2 }}>
          <Typography variant="h2"sx={{margin:2}}>Gifts</Typography>
          {gifts.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.gift}</Typography>
        </div>
      ))}
          </Grid>
          <Divider/>
          <Grid sx={{ marginLeft: 2 }}>
          <Typography variant="h2"sx={{margin:2}}>Discounts</Typography>
          {discount.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">{item.discount}</Typography>
        </div>
      ))}
       <Divider/>
          </Grid>
          <Grid sx={{marginLeft:2}}>
            <Typography variant="h2"sx={{margin:2}}>Gemstone colour</Typography>
            <Checkbox {...label} /> Red
            <Divider/>
          </Grid>
          <Grid sx={{marginLeft:2}}>
            <Typography variant="h2"sx={{margin:2}}>Collections</Typography>
            <Checkbox {...label} 
            sx={{ borderRadius: '10px', '& .MuiSvgIcon-root': { borderRadius: '10px' } }} /> Love Letters
            <Divider/>
          </Grid>
          <Grid sx={{marginLeft:2}}>
          <Typography variant="h2"sx={{margin:2}}>Try@Home</Typography>
          <Checkbox {...label} /> 1
          <Divider/>
          </Grid>
          <Grid  marginTop="10px" marginLeft="18px">
          <Typography variant="h2"sx={{margin:2}}>Curated by</Typography>
          {CuratedBy.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography variant="body1" fontSize="1rem" color="#4F3267">
            {item.Curated}</Typography>
        </div>
))}
 {openData && (
        <div style={{ marginLeft:"4px" }}>
        {/* Additional data content */}
        
        {CuratedByy.map((item, index) => (
<div key={index} style={{ display: "flex", alignItems: "center" }}>
  <Checkbox {...label} />
  <Typography variant="p" fontSize="1rem" color="#4F3267">{item.Curated}</Typography>
</div>
))}
      </div>
    )}
      <StyledButton
        id="demo-customized-button"
        aria-controls={openData ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openData ? 'true' : undefined}
        disableElevation
        endIcon={openData ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        onClick={handleClick}
        sx={{ marginLeft: "8px" }}
      >
        {openData ? 'showless' : '6 more'}
      </StyledButton>
      <Divider/>
          </Grid>
          <Grid sx={{marginLeft:2}}>
            <Typography variant="h2"sx={{margin:2}}>Fast Delivery</Typography>
            <Checkbox {...label} /> Fast Delivery
          </Grid>
        </Grid>
        <Grid item md={9} >
          <Grid  container  justifyContent="space-between" alignItems="center">
          <Button variant="outlined" endIcon={<CloseIcon />}
           sx={{
            marginLeft:"14px",
            marginTop:2,
            borderRadius: '20px', 
            borderColor: 'black', 
            marginLeft: '10px', 
            color: 'black',
            textTransform: 'none',
            fontSize:"1rem" 
          }}>
        Engagement
      </Button>
   

          </Grid>
          <Cardswiper/>
        </Grid>
      </Grid>
        </>
    )
}
export default Products