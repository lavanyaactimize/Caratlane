import React from "react";
import Navbar from "../Components/Navbar";
import Appbar from "../Components/Appbar";
import Image from "../Components/Images";
import CustomCarousel from "../Components/Carousel";
import Main from "../Components/Main";
import Cards from "../Components/Cards";



const Flashpage=()=>
{
    return(
        <>
        <Appbar/>
<Navbar/>
<CustomCarousel/>
<Image/>
<Main/>
<Cards/>

        </>
    )
}
export default Flashpage;