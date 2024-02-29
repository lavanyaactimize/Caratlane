import { AppBar, Typography , Grid,Box,Input} from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";


const Navbar = () => {
    return(
        <>
        <AppBar sx={{marginTop:'27px', backgroundColor:'white'}}>
            <Grid container sx={{margin:4}} alignItems="center">
                <Grid sx={{marginRight:'1px'}}>
            <img src="asserts\images\cartlane (2).png" width={30} height={34}/>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Rings</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Earings</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Bracelets & Bangles</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Solitaires</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Mangalsutras</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Necklaces</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>More jewllery</Typography>
            </Grid>
            <Grid sx={{marginLeft:'24px'}}>
            <Typography variant="h3"sx={{'&:hover':{color:"#8863fb"}}}>Gifting</Typography>
            </Grid>
            
            <Box sx={{ flexGrow: 1, width:{} ,marginLeft:'70px' }}>
                            <Input
                                placeholder="Search "
                                // startAdornment={
                                    
                                //         <SearchIcon />
                                
                                // }
                                sx={{
                                    // width:{xs:'65vmin',},
                                    border: '1px solid rgb(229, 110, 235)',
                                    borderRadius: '12px',
                                    background: '#F4F4F4',
                                    padding: "5px 15px 5px 26px",
                                    '&:hover': { border: '1px rgb(229, 110, 235)', },
                                    '&:focus': { outline: 'none', boxShadow: '0 2px 2px 0 #e9e9e9' },
                                    '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none', 
                                    },
                                    
                                }}
                            />

                        </Box>
                        
                        </Grid>
        </AppBar>
        </>
    );
}

export default Navbar;