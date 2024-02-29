import { createTheme } from "@mui/material";
 
 
const theme = createTheme({
    palette:{
        background:{
            default:'#fffff'
        }
    },
})
 
theme.typography.p = {
    fontFamily: 'sans-serif',
    fontSize:'12px',
    color:'#000000',
    fontWeight:200,
}
 
theme.typography.h1= {
    fontFamily:'"Arial", sans-serif',
    fontSize:'25px',
}
theme.typography.h3= {
    fontFamily:'"Arial", sans-serif',
    fontSize:'0.9rem',
    fontWeight:'100',
    color:"#4f3267"
}
 
export default theme;