import React,{ useState,useEffect } from "react";
import Appbar from "../Components/Appbar";
import Appbarr from "../Components/Appbarr";
import { Grid,Typography , TextField,Link ,Button} from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { auth,googleAuthProvider,facebookAuthProvider } from '../firebase';
import { signInWithPopup,  signInWithEmailAndPassword } from 'firebase/auth';

const Login =()=>{
    const [formData, setFormData] = useState({
        emailId: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({
       
        emailId: '',
        password: '',
        
      });
      const validateForm = () => {
        let valid = true;
        const errors = {};
        if (!formData.emailId.trim()) {
            errors.emailId = 'Email is required';
            valid = false;
          } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
            errors.emailId = 'Email is invalid';
            valid = false;
          }
          if (!formData.password.trim()) {
            errors.password = 'Password is required';
            valid = false;
          }
        
          setFormErrors(errors);
          return valid;
        };
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };
          const navigate = useNavigate();
          const handleSubmit = async (event) => {
          event.preventDefault();
            if (validateForm()) {
              signInWithEmailAndPassword(auth, formData.emailId, formData.password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  user.getIdToken().then((idToken) => {
                    if (idToken) {
                      localStorage.setItem('idToken', idToken);
                    }
                  });
                  toast.success('Login successfully');
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
                })
                .catch((error) => {
                  console.log(error);
                  if (error.code === "auth/user-not-found") {
                    toast.error('Invalid user');
                  } else {
                    toast.error('invaliduser.');
                  }
                });
            } else {
              toast.error('Form validation failed');
            }
          };
          const [value, setValue] = useState("");
  const handlegoogleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((data) => {
      localStorage.setItem('idToken', data.user.accessToken);
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email)
        navigate("/");
      })
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"))
  }, []);
    return(
        <>
        <Appbar/>
        <Appbarr/>
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="95px" padding="65px">
   <Grid item>
     <Stack direction="column" alignItems="center">
       <Stack direction="column" alignItems="center">
         <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint sx={{ fontSize: '2.8rem' }} />
         </IconButton>
          <Typography variant="h1"sx={{color:"#4f3267"}}>Login to CaratLane</Typography>
       </Stack>
       <Typography variant="p" sx={{fontSize:"0.7rem",marginTop:2}}>Unlock Best prices and become an insider for our exclusive launches & offers.<br/>
       Complete your profile and get ₹250 worth of xCLusive Points.</Typography>
      </Stack>
     
    </Grid>
  </Grid>
  <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="6px">
  <Grid item xs={12} md={6}>
        <Grid container spacing={2}justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
                 autoComplete="email"
                 name="emailId"
                 required
                 fullWidth
                 id="emailId"
                 type="email"
                 placeholder="Email"
                 value={formData.emailId}
                 onChange={handleInputChange}
                 error={!!formErrors.emailId}
                 helperText={formErrors.emailId}
                 sx={{
                   '& .MuiOutlinedInput-root': {
                     borderRadius: "20px", // Set the border radius for the input element
                   },
                 }}
               
            />
          <TextField
              autoComplete="given-name"
              name="password"
              type="password"
              required
              fullWidth
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: "20px", 
                  marginTop:2// Set the border radius for the input element
                },
              }}
            />
         </Grid>
         
      </Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent="center" alignItems="center" direction="column" >
 
  <Grid item sx={{marginTop:3}}>
    <Button
      onClick={handleSubmit}
      sx={{width: "350px",height:"50px", borderRadius: '10px', backgroundColor: '#cf60e9', marginTop: '10px', color:"#ffff"}}
    >
      CONTINUE TO LOGIN
    </Button>
  </Grid>
  <Grid item sx={{marginTop:2}}>
            <Icon icon="flat-color-icons:google" width="50" height="50" style={{marginRight: 15}}
             onClick = {handlegoogleClick}
             />
            <Icon icon="logos:facebook" width="47" height="47" 
            // onClick = {facebookClick}
            />
            
         </Grid>
  <Grid item sx={{marginTop: 1}}>
    <Typography variant="p">
      New to CaratLane?
      <Link sx={{ color: '#ff69b4', textDecoration: 'none' }}> Create an account</Link>
    </Typography>
  </Grid>
</Grid>
<ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    )
}
export default Login