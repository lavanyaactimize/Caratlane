import React from "react";
import Navbar from "../Components/Navbar";
import Appbar from "../Components/Appbar";
import Image from "../Components/Images";
import CustomCarousel from "../Components/Carousel";
import Main from "../Components/Main";
import Cards from "../Components/Cards";
import Swiperr from "../Components/Swiper";
import Navbarr from "../Components/Navbarr";
import Appbarr from "../Components/Appbarr";
import Textswiper from "../Components/Textswiper";



const Flashpage=()=>
{
    return(
        <>
        <Appbar/>
        <Appbarr/>
{/* <Navbar/> */}
{/* <Navbarr/> */}
<CustomCarousel/>
<Image/>
<Main/>
<Cards/>
<Swiperr/>
<Textswiper/>

        </>
    )
}
export default Flashpage;