// import React from "react";
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import Paper from '@mui/material/Paper';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer'; // Renamed locally declared component
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { Grid } from "@mui/material";

// const Drawer = () => {
//     const [value, setValue] = React.useState(0);
//     const [drawerOpen, setDrawerOpen] = React.useState(false);

//     const handleNavigationChange = (event, newValue) => {
//         setValue(newValue);
//         if (newValue === 2) { // Change to 2 as it corresponds to the "Archive" icon
//             setDrawerOpen(true);
//         }
//     };

//     const handleDrawerClose = () => {
//         setDrawerOpen(false);
//     };

//     return(
//         <>
//         <Grid >
//             <CssBaseline />
//             <Grid    sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , backgroundColor:'red' }} elevation={3}>
//                 <BottomNavigation
//                     showLabels
//                     value={value}
//                     onChange={handleNavigationChange}
//                 >
//                     <BottomNavigationAction  label="Recents" icon={<RestoreIcon />} />
//                     <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//                     <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
//                 </BottomNavigation>
//             </Grid>
//             <MuiDrawer
//                 anchor="bottom"
//                 open={drawerOpen}
//                 onClose={handleDrawerClose}
//             >
//                 <Box
//                     sx={{ width: 250 }}
//                     role="presentation"
//                     onClick={handleDrawerClose}
//                     onKeyDown={handleDrawerClose}
//                 >
//                     <List>
//                         <ListItemButton>
//                             <ListItemText primary="Archive Content" />
//                         </ListItemButton>
//                     </List>
//                 </Box>
//             </MuiDrawer>
//             </Grid>
//         </>
//     )
// }

// export default Drawer;




import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Grid, Typography } from '@mui/material';

const Drawercomponet = () => {
  const [state, setState] = React.useState({
    left: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      {anchor === 'bottom' && (
        
          <Grid container spacing={2} justifyContent="center" alignItems="center">
           <Grid item xs={12} sm={6}  sx={{marginTop:'20px', justifyContent:'center',backgroundColor:"#f4ecf4",borderRadius:"10px"}} >
            <Typography variant="h2" sx={{ borderRadius:'1px solid red' ,textAlign:'center' }} >Sort Design By</Typography>
          </Grid>
            <Grid item xs={12} sm={6}>
             
              <Box sx={{ bgcolor: 'background.paper', p: 2, textAlign: 'center' }}></Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              
              <Box sx={{ bgcolor: 'background.paper', p: 2, textAlign: 'center' }}></Box>
            </Grid>
          </Grid>
        
      )}
    </Box>
  );

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" backgroundColor="#503464" marginTop="20px" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <Grid >
        <Button onClick={toggleDrawer('left', true)} sx={{color:"#ffff",marginRight:"10px"}}>Categories</Button>
        <Button onClick={toggleDrawer('bottom', true)} sx={{color:"#ffff"}}>Sort  </Button>
        <Button onClick={toggleDrawer('bottom', true)} sx={{color:"#ffff",marginLeft:"15px"}}>Filter  </Button>
        </Grid>
        <Drawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
        <Drawer
          anchor="bottom"
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false)}
        >
          {list('bottom')}
        </Drawer>
      </Grid>
    </>
  );
}

export default Drawercomponet;
<Drawer anchor="left" PaperProps={{
    sx: {
        width: '70%'
    }
}} open={isDrawerOpen} onClose={handleClose}>
    <Tabs value={tabValue} onChange={handleTabChange}
        sx={{

            '& .MuiTabs-indicator': {
                backgroundColor: '#E80071'
            },
            '& .MuiTab-root': {
                color: 'black',
                fontWeight: 550,
            },
            '& .Mui-selected': {
                color: '#E80071 !important',
                fontWeight: 550,
            },
        }}
    >
        <Tab sx={{ width: '50%' }} label="Categories" />
        <Tab sx={{ width: '50%' }} label="Brands" />
    </Tabs>
    {tabValue === 1 && (
        <>
            
            <Grid sx={{ marginTop: '10px', display: 'flex', padding: '10px 15px', border: '1px solid red', backgroundColor: '#E80071', color: '#FFFFFF', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/makeup')}>Make Up</Typography>
                {/* <Icon icon="ic:sharp-plus" width="20" height="20" style={{ marginLeft: 'auto' }} /> */}

            </Grid>
           
            <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#E80071', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/face/faceprimer')}>Face Primer</Typography>

            </Grid>
            <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#E80071', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/face/concealer')}>Concealer</Typography>

            </Grid>
            <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#E80071', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/face/foundation')}>Foundation</Typography>

            </Grid>
            {catData.map((item) => (
                <>
                    <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#000000', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                        <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>{item.n}</Typography>

                    </Grid>
                </>
            ))}

            <Grid sx={{  display: 'flex', padding: '10px 15px', border: '1px solid red', backgroundColor: '#E80071', color: '#FFFFFF', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>Skin</Typography>
                {/* <Icon icon="ic:sharp-plus" width="20" height="20" style={{ marginLeft: 'auto' }} /> */}

            </Grid>

            {skinData.map((item) => (
                <>
                    <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#000000', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                        <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>{item.n}</Typography>

                    </Grid>
                </>
            ))}

        </>
    )}
    {tabValue === 1 && (

        <>
        {brandData.map((item) => (
            <>
             <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#000000', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
            <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>{item.n}</Typography>

        </Grid>
            </>
        ))}
        </>
       

    )}

</Drawer>