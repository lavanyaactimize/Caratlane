import React, { useState,useEffect } from 'react';
import {
  Grid,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Link,
  TextField,
  
  Divider
} from "@mui/material";
import Appbar from "../Components/Appbar";
import Appbarr from "../Components/Appbarr";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Icon } from "@iconify/react";
import { auth,googleAuthProvider,facebookAuthProvider } from '../firebase';
 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup,  createUserWithEmailAndPassword } from 'firebase/auth';
const Signup = () => {
//   const [formData, setFormData] = useState({
  
//     gender: '',
//   });
//   const[mobileNumber,setmobileNumber] =useState("");
//   const[firstName,setfirstName] =useState("");
//   const[ lastName,setlastName] =useState("");
//   const[emailId,setEmailId] =useState("");
//   const[password,setPassword] =useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();
  
//   const changeHandlemobileNumber=(e)=>{
//     const getmobileNumber=e.target.value;
//     setmobileNumber(getmobileNumber);
//   }
//   const changeHandlefirstNamer=(e)=>{
//     const getfirstName=e.target.value;
//     setfirstName(getfirstName);
//   }
//   const changeHandlelastName=(e)=>{
//     const getlastName=e.target.value;
//     setlastName(getlastName);
//   }

//   const changeHandleEmailId=(e)=>{
//     const getEmailId=e.target.value;
//     console.log('this is email---->', getEmailId)
//     setEmailId(getEmailId);
    
//   }
//   const changeHandlePassword=(e)=>{
//     const getPassword=e.target.value;
//     setPassword(getPassword);
//   }
//   const handleChangeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };
//   const [formErrors, setFormErrors] = useState({
  
//     gender: '',
//   });
 
  
 
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if ( mobileNumber ==="" || emailId === "" || password === "" || password !== confirmPassword) {
//       alert('Please fill all the details and make sure passwords match.');
//       return;
//     }
//     else{
//       createUserWithEmailAndPassword(auth, emailId, password)
//       .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
//     }
 
//   }
 
//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 
//   return (
//     <>
//       <Appbar/>
//         <Appbarr/>
//         <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="95px" padding="85px">
//    <Grid item>
//     <Stack direction="column" alignItems="center">
//       <Stack direction="column" alignItems="center">
//         <IconButton aria-label="fingerprint" color="secondary">
//            <Fingerprint sx={{ fontSize: '2.8rem' }} />
//         </IconButton>
//          <Typography>Signup with CaratLane</Typography>
//        </Stack>
//        <Typography variant="p" sx={{fontSize:"0.7rem",marginTop:2}}>Unlock Best prices and become an insider for our exclusive launches & offers.<br/>
//        Complete your profile and get ₹250 worth of xCLusive Points.</Typography>
//      </Stack>
//      <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop = "20px" >
//         <Grid item>
//            <Icon icon="flat-color-icons:google" width="50" height="50" style={{marginRight: 15}}/>
//            <Icon icon="logos:facebook" width="47" height="47" />
//            <Divider sx={{marginTop:7}}> Or continue with</Divider>
//          </Grid>
//      </Grid>
//    </Grid>
//  </Grid>
//       <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="20px">
//         <Grid item xs={12} sm={6}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="given-name"
//                 name="mobileNumber"
//                 required
//                 fullWidth
//                 id="mobileNumber"
//                 placeholder="Mobile Number "
//                 value={mobileNumber}
//                 onChange={changeHandlemobileNumber}
//                 // error={!!formErrors.mobileNumber}
//                 // helperText={formErrors.mobileNumber}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: "20px", // Set the border radius for the input element
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//                 autoComplete="email"
//                 name="emailId"
//                 required
//                 fullWidth
//                 id="emailId"
//                 type="email"
//                 placeholder="Email"
//                 value={emailId}
//                 onChange={changeHandleEmailId}
//                 // error={!!formErrors.emailId}
//                 // helperText={formErrors.emailId}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: "20px", // Set the border radius for the input element
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="given-name"
//                 name="firstName"
//                 required
//                 fullWidth
//                 id="firstName"
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={changeHandlefirstNamer}
                
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: "20px", // Set the border radius for the input element
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="lastName"
//                 placeholder="Last Name"
//                 name="lastName"
//                 value={lastName}
//                 onChange={changeHandlelastName}
               
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: "20px", // Set the border radius for the input element
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="given-name"
//                 name="password"
//                 type="password"
//                 required
//                 fullWidth
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={changeHandlePassword}
//                 // error={password}
//                 // helperText={formErrors.password}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: "20px", // Set the border radius for the input element
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="confirmPassword"
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleChangeConfirmPassword}
//                 // error={!!formErrors.confirmPassword}
//                 // helperText={formErrors.confirmPassword}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: "20px", // Set the border radius for the input element
//                   },
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
 
//       <Grid container alignItems="center" justifyContent="center" marginTop= "58px">
//         <Grid item xs={12} md={6} sx={{
//           backgroundColor: "#E5F4E0",
//           borderRadius: "20px",
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '12px',
//           '& .MuiOutlinedInput-root': {
//             borderRadius: "20px",
//         },
//       }}>
//         <Typography sx={{ color: "#4F3267", fontSize: "1rem" }} variant="h1">
//           <Checkbox {...label} defaultChecked color="default" />
//           Opt for Whatsapp support<br/>
//           <Typography variant="p" sx={{marginLeft: 6, fontSize: "0.7rem"}}>We will be sharing Delivery & precious order related communication. Also provide you with an interactive WhatsApp support</Typography>
//         </Typography>
//         <Icon icon="logos:whatsapp-icon" width="30" height="30" />
//       </Grid>
//     </Grid>
 
//   <Grid container justifyContent="center" alignItems="center" direction="column">
//     <Grid item sx={{ marginTop: 1 }}>
//       <FormControl>
//         <RadioGroup
//           row
//           aria-labelledby="demo-row-radio-buttons-group-label"
//           name="gender"
//           value={formData.gender}
//           onChange={handleInputChange}
//           error={!!formErrors.gender}
//         >
//           <FormControlLabel
//             value="female"
//             control={<Radio style={{ color: '#a484fc' }} />} // Change color here
//             label="Female"
//             sx={{ color: 'black' }} // Change color here
//           />
//           <FormControlLabel
//             value="male"
//             control={<Radio style={{ color: '#a484fc' }} />} // Change color here
//             label="Male"
//             sx={{ color: 'black' }} // Change color here
//           />
//           <FormControlLabel
//             value="other"
//             control={<Radio style={{ color: '#a484fc' }} />} // Change color here
//             label="I don't want to specify"
//             sx={{ color: 'black' }} // Change color here
//           />
//         </RadioGroup>
//         {formErrors.gender && (
//           <Typography variant="body2" sx={{ color: 'red' }}>{formErrors.gender}</Typography>
//         )}
//       </FormControl>
//     </Grid>
//     <Grid item>
//       <Button
//         onClick={handleSubmit}
//         sx={{width: "350px", borderRadius: '10px', backgroundColor: '#cf60e9', marginTop: '10px', color:"#ffff"}}
//       >
//         SIGN ME UP
//       </Button>
//     </Grid>
//     <Grid item sx={{marginTop: 1}}>
//       <Typography variant="body1">
//         Already have an account?
//         <Link sx={{ color: '#ff69b4', textDecoration: 'none' }}>Log In</Link>
//       </Typography>
//     </Grid>
//   </Grid>
// </>
// );
// };
// export default Signup;
const [formData, setFormData] = useState({
  mobileNumber1: '',
  emailId: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  gender: '',
});

const [formErrors, setFormErrors] = useState({
  mobileNumber1: '',
  emailId: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  gender: '',
});

const validateForm = () => {
  let valid = true;
  const errors = {};

  // Mobile Number 1 validation
  if (!formData.mobileNumber1.trim()) {
    errors.mobileNumber1 = 'Mobile Number is required';
    valid = false;
  } else if (!/^\d{10}$/.test(formData.mobileNumber1)) {
    errors.mobileNumber1 = 'Mobile Number is invalid';
    valid = false;
  }

  // Mobile Number 2 validation
  if (!formData.emailId.trim()) {
    errors.emailId = 'Email is required';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
    errors.emailId = 'Email is invalid';
    valid = false;
  }

  // First Name validation
  if (!formData.firstName.trim()) {
    errors.firstName = 'First Name is required';
    valid = false;
  }

  // Last Name validation
  if (!formData.lastName.trim()) {
    errors.lastName = 'Last Name is required';
    valid = false;
  }

  // Password validation
  if (!formData.password.trim()) {
    errors.password = 'Password is required';
    valid = false;
  }

  // Confirm Password validation
  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = 'Confirm Password is required';
    valid = false;
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
    valid = false;
  }

  // Gender validation
  if (!formData.gender) {
    errors.gender = 'Gender is required';
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

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
createUserWithEmailAndPassword(auth, formData.emailId, formData.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    console.log('Form submitted successfully');
  } else {
    console.log('Form has errors. Please fix them.');
  }
};
const navigate = useNavigate();
const [value, setValue] = useState("");
const handlegoogleClick = () => {
  signInWithPopup(auth, googleAuthProvider)
    .then((data) => {
      console.log("User signin succesfully", data.user.email)
      localStorage.setItem('idToken', data.user.accessToken);
setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      navigate("/");
    })
};
useEffect(() => {
  setValue(localStorage.getItem("email"))
}, []);
const facebookClick = () => {
  signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
    console.log('result user', result.user)
      const user = result.user;
      localStorage.setItem('idToken', result.user.accessToken);
      navigate("/");
    })
    .catch((error) => {
    });
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

return (
  <>
 < Appbar/>
        <Appbarr/>
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="95px" padding="85px">
   <Grid item>
     <Stack direction="column" alignItems="center">
       <Stack direction="column" alignItems="center">
         <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint sx={{ fontSize: '2.8rem' }} />
         </IconButton>
          <Typography>Signup with CaratLane</Typography>
       </Stack>
       <Typography variant="p" sx={{fontSize:"0.7rem",marginTop:2}}>Unlock Best prices and become an insider for our exclusive launches & offers.<br/>
       Complete your profile and get ₹250 worth of xCLusive Points.</Typography>
      </Stack>
     <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop = "20px" >
         <Grid item>
            <Icon icon="flat-color-icons:google" width="50" height="50" style={{marginRight: 15}} onClick = {handlegoogleClick}/>
            <Icon icon="logos:facebook" width="47" height="47" onClick = {facebookClick}/>
            <Divider sx={{marginTop:7}}> Or continue with</Divider>
         </Grid>
     </Grid>
    </Grid>
  </Grid>
    <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop="20px">
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="mobileNumber1"
              required
              fullWidth
              id="mobileNumber1"
              placeholder="Mobile Number 1"
              onChange={handleInputChange}
              error={!!formErrors.mobileNumber1}
              helperText={formErrors.mobileNumber1}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: "20px", // Set the border radius for the input element
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: "20px", // Set the border radius for the input element
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              onChange={handleInputChange}
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: "20px", // Set the border radius for the input element
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
                  borderRadius: "20px", // Set the border radius for the input element
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleInputChange}
              error={!!formErrors.confirmPassword}
              helperText={formErrors.confirmPassword}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: "20px", // Set the border radius for the input element
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid container alignItems="center" justifyContent="center" marginTop= "58px">
      <Grid item xs={12} md={6} sx={{
        backgroundColor: "#E5F4E0",
        borderRadius: "20px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px',
        '& .MuiOutlinedInput-root': {
          borderRadius: "20px",
      },
    }}>
      <Typography sx={{ color: "#4F3267", fontSize: "1rem" }} variant="h1">
        <Checkbox {...label} defaultChecked color="default" />
        Opt for Whatsapp support<br/>
        <Typography variant="p" sx={{marginLeft: 6, fontSize: "0.7rem"}}>We will be sharing Delivery & precious order related communication. Also provide you with an interactive WhatsApp support</Typography>
      </Typography>
      <Icon icon="logos:whatsapp-icon" width="30" height="30" />
    </Grid>
  </Grid>

<Grid container justifyContent="center" alignItems="center" direction="column">
  <Grid item sx={{ marginTop: 1 }}>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        error={!!formErrors.gender}
      >
        <FormControlLabel
          value="female"
          control={<Radio style={{ color: '#a484fc' }} />} // Change color here
          label="Female"
          sx={{ color: 'black' }} // Change color here
        />
        <FormControlLabel
          value="male"
          control={<Radio style={{ color: '#a484fc' }} />} // Change color here
          label="Male"
          sx={{ color: 'black' }} // Change color here
        />
        <FormControlLabel
          value="other"
          control={<Radio style={{ color: '#a484fc' }} />} // Change color here
          label="I don't want to specify"
          sx={{ color: 'black' }} // Change color here
        />
      </RadioGroup>
      {formErrors.gender && (
        <Typography variant="body2" sx={{ color: 'red' }}>{formErrors.gender}</Typography>
      )}
    </FormControl>
  </Grid>
  <Grid item>
    <Button
      onClick={handleSubmit}
      sx={{width: "350px", borderRadius: '10px', backgroundColor: '#cf60e9', marginTop: '10px', color:"#ffff"}}
    >
      SIGN ME UP
    </Button>
  </Grid>
  <Grid item sx={{marginTop: 1}}>
    <Typography variant="body1">
      Already have an account?
      <Link sx={{ color: '#ff69b4', textDecoration: 'none' }}>Log In</Link>
    </Typography>
  </Grid>
</Grid>
</>
);
}
export default Signup;