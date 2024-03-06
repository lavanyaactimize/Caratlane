import React from "react";
import Navbar from "../Components/Navbar";
import Appbar from "../Components/Appbar";
import Image from "../Components/Images";
import CustomCarousel from "../Components/Carousel";



const Flashpage=()=>
{
    return(
        <>
        <Appbar/>
<Navbar/>
<CustomCarousel/>
{/* <Image/> */}
        </>
    )
}
export default Flashpage;