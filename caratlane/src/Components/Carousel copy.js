// import { Typography } from "@mui/material";

// let token = localStorage.getItem('idToken');
//   const Name = localStorage.getItem('displayName');
//   {token ? (

//     <>






            
//             <Menu
//               sx={{ mt: '40px',marginLeft:"10px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//                  <MenuItem   onClick={handleCloseUserMenu}></MenuItem>
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             <Icon icon="mdi:user" width="25" height="25" style={{ color: '#4f3267' }} />
//             </IconButton>

//             <Typography sx={{ color: 'black', fontSize: '12px', marginRight: '15px' }}>{Name}</Typography>

//               <Typography>My Accounts</Typography>
//               <Typography>Our Story</Typography>
              
//               <Typography sx={{ cursor: 'pointer' }} onClick={handleCloseForm}>Log Out</Typography>

                   



                        


                    

               



                






// ) : (

//     <>

// <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             <Icon icon="mdi:user" width="25" height="25" style={{ color: '#4f3267' }} />
//             </IconButton>
          
//             <Menu
//               sx={{ mt: '40px',marginLeft:"10px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
           
//                 <MenuItem   onClick={handleCloseUserMenu}>
//                 <div>
//                   <Typography textAlign="center" variant="h1">Your Account<br/>
//                   <Typography textAlign="center" variant="h3"sx={{marginTop:3}}>Access account & manage your orders.</Typography>
//                   </Typography>
//                   <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 2 }}>
//     <Grid item>
//       <Link to ="/signup">
//       <Button  sx={{backgroundColor:"#cf60e9",color:"#ffff"}}>Sign UP</Button>
//       </Link>
//     </Grid>
//     <Grid item>
//     <Link to ="/login">
//       <Button sx={{ borderRadius: "4px", border: "2px solid #c6b1fc", color: "black" }}>Loggin</Button>
//       </Link>
//     </Grid>

// </>

// )}