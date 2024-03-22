import React from "react";
import Appbar from "../Components/Appbar";
import Appbarr from "../Components/Appbarr";
import { Button, Grid, Typography,Divider} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


const Products =()=>
{
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
              fontSize:"1.5rem"
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
       <Grid item md={3}   >
       <Grid container direction="row" sx={{position:"fixed"}}>
        <Typography sx={{ marginLeft: 4 }}>FILTERS</Typography>
        <Typography sx={{ marginLeft: 13 }}>CLEAR ALL</Typography>
      </Grid>
      <Divider sx={{margin:4}}/>
      <Typography variant="h1"sx={{marginLeft:4}}>Price</Typography>
      <Grid item sx={{marginLeft:4}}>
      {filter.map((item, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center" }}>
                                <Checkbox {...label} />
                                <Typography variant="p"fontSize="1rem" color="#4F3267">{item.count}</Typography>
                            </div>
                        ))}
      </Grid>
       </Grid>
       <Grid item md={9} sx={{border:"4px solid green"}} ></Grid>
    </Grid>
        </>
    )
}
export default Products