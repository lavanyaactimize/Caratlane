
import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Icon } from "@iconify/react";
import { CardActionArea } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';


const Cardswiper = () => {

    const cardData = [{ img: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06683-1RP900_12_listhover.jpg' }, 
    { img: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06683-1RP900_12_listhover.jpg' },
    { img: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06683-1RP900_11_listfront.jpg' },
    ]
    const cardData1 =[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07355-1RP600_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07355-1RP600_12_listhover.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07355-1RP600_13_pdtouch.png"},
    ]
    const cardData2=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03351-YGP600_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03351-YGP600_12_listhover.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR03351-YGP600_3_lar.jpg"},
        
    ]
    const cardData3=[
        
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR01385-WGP900_7_lar.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/J/R/JR01385-WGP900_4_lar.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR01385-WGP900_5_lar.jpg"},
    ]
    const cardData4=[
        {img:"	https://cdn.caratlane.com/media/catalog/product/J/R/JR07208-1RP9SE_6_lar.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR07208-1RP9SE_7_lar.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR07208-1RP9SE_4_lar.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR07208-1RP9SE_5_lar.jpg"},
    ]
    const cardData5=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR01140-1P0000_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR01140-1P0000_12_listhover.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/U/R/UR01140-1P0000_4_lar.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/U/R/UR01140-1P0000_5_lar.jpg"},
    ]
    const cardData6=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02837-WGP900_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02837-WGP900_12_listhover.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/S/R/SR02837-WGP900_4_lar.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/S/R/SR02837-WGP900_5_lar.jpg"},
    ]
    const cardData7=
    [
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03641-WRP900_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03641-WRP900_12_listhover.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/J/R/JR03641-WRP900_4_lar.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/J/R/JR03641-WRP900_5_lar.jpg"},
    ]
    const cardData8=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR05345-YGP600_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR05345-YGP600_12_listhover.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR05345-YGP600_3_lar.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR05345-YGP600_4_lar.jpg"},
    ]
    const cardData9=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03349-WGP600_11_listfront.jpg"},
    {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03349-WGP600_12_listhover.jpg"},    
    {img:"	https://cdn.caratlane.com/media/catalog/product/J/R/JR03349-WGP600_3_lar.jpg"},   
    {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR03349-WGP600_4_lar.jpg"},    ]
    const cardData10=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR01388-WGP900_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR01388-WGP900_12_listhover.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR01388-WGP900_4_lar.jpg"},
    ]
    const cardData11=[
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR04182-YGP6RS_11_listfront.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR04182-YGP6RS_12_listhover.jpg"},
        {img:"	https://cdn.caratlane.com/media/catalog/product/J/R/JR04182-YGP6RS_3_lar.jpg"},
        {img:"https://cdn.caratlane.com/media/catalog/product/J/R/JR04182-YGP6RS_4_lar.jpg"},
    ]
    const Buttons=[
        {button:'10-15k'},
        {button:'15-20k'},
        {button:'20-30k'},
        {button:'30-40k'},
        
    ]
    const Button=[
        {button:'40-50k'},
        {button:'50-75k'},
        {button:'75-100k'},
        {button:'1L-1.5L'},
        
    ]
    const Buttonn=[
        {button:'1L-1.5L'},
        {button:'2L-2.5L'},
        {button:'Above 2.5L'},
        
    ]
    const data = [
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR04031-WYP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02125-YGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR02654-PTP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR00419-YGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03355-WGP600_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: '	https://cdn.caratlane.com/media/catalog/product/J/R/JR05068-WGP900_10_lar.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03642-WRP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR03299-RGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06506-1RP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR05695-PTP600_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR01406-WGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02312-YGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR01990-YGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03647-YGP600_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06150-WGP9S0_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR05350-RGP600_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR00152-WGP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        { id: 1, image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06634-1RP900_11_listfront.jpg', price: '₹53,318', originalPrice: '₹56,566', productName: 'Donya Germstone Ring' },
        // Add more data objects if needed
      ];
    return (
        <Grid container spacing={2} marginTop="10px">
            
 <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹18,045 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹20,049</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Margerit Splendid Diamond Band
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData1.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹13,454 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹14948</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Aanshi Floral Diamond Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3}>
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData2.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹57,095 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹58,892</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Elen Cluster Diamond Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3}>
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData3.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹57,095 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹58,892</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Elen Cluster Diamond Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData4.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData5.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData6.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData7.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData8.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData9.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData10.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData11.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData7.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6} md={3} >
                <Card>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {cardData9.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={item.img}
                                            alt="Slider Image"
                                        />
                                        <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: " #DE57E5", position: 'absolute', bottom: 0, right: 10 }} />

                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                         </Swiper>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            ₹53,318 <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>₹56,566</span>
                        </Typography>
                        <Typography variant="h2" color="#DE57E5">
                            Check delivery date<br /><Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem",marginTop:1 }}>
                                Donya Germstone Ring
                            </Typography>
                        </Typography>
                    </CardContent>
                    <style>
                        {`
              .swiper-pagination-bullet {
                background-color: black;
              }
            `}
                    </style>
                </Card>
            </Grid>
            <Grid item xs={12}sm={6}md={0.5} sx={{ display:{xs:'none', md:'block'}}} >

            </Grid>
            <Grid item xs={12}md={5} sx={{backgroundColor:'#EAE3FF',marginTop:4,borderRadius:"30px", display:{xs:'none', md:'block'}}}>
                <Typography variant="h2" sx={{fontSize:"1.2rem",marginTop:2}}>Filter by Price</Typography>
                <Grid sx={{marginLeft:3}} display="flex" alignItems="center" >
      {Buttons.map((button, index) => (
        <Grid item key={index}
        sx={{ marginTop: 6 ,marginRight:2}} 
        >
          <button
            style={{
            padding:"16px",
            
              border: 'none',
              borderRadius: '9px',
              backgroundColor: '#ffff',
              color: '#4f3267',
              cursor: 'pointer',
             
              fontSize:"1rem"
            }}
           
          >
            {button.button}
          </button>
        </Grid>
      ))}
      </Grid>
      <Grid sx={{marginLeft:3}} display="flex" alignItems="center" >
      {Button.map((button, index) => (
        <Grid item key={index}
        sx={{ marginTop: 2 ,marginRight:2}} 
        >
          <button
            style={{
            padding:"16px",
            
              border: 'none',
              borderRadius: '9px',
              backgroundColor: '#ffff',
              color: '#4f3267',
              cursor: 'pointer',
             
              fontSize:"1rem"
            }}
           
          >
            {button.button}
          </button>
        </Grid>
      ))}
      </Grid>
      <Grid sx={{marginLeft:3}} display="flex" alignItems="center" >
      {Buttonn.map((button, index) => (
        <Grid item key={index}
        sx={{ marginTop: 2 ,marginRight:2}} 
        >
          <button
            style={{
            padding:"16px",
            
              border: 'none',
              borderRadius: '9px',
              backgroundColor: '#ffff',
              color: '#4f3267',
              cursor: 'pointer',
             
              fontSize:"1rem"
            }}
           
          >
            {button.button}
          </button>
        </Grid>
      ))}
      </Grid>
            </Grid>
            
            {data.map(item => (
        <Grid key={item.id} xs={12}sm={6} md={3}>
          <Card sx={{ maxWidth: 345 ,marginTop:3,marginLeft:2}}>
            <CardActionArea>
            <div style={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="Slider Image"
                />
                <Icon icon="bitcoin-icons:copy-outline" width="35" height="35" style={{ color: "#DE57E5", position: 'absolute', bottom: 0, right: 10 }} />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h2"sx={{marginTop:5}} component="div">
                  {item.price} <span style={{ fontWeight: 'normal', textDecoration: 'line-through', marginLeft: 2 }}>{item.originalPrice}</span>
                </Typography>
                <Typography variant="h2" color="#DE57E5">
                  Check delivery date<br />
                  <Typography varaint="p" sx={{ color: "#9D9FA4", fontSize: "0.8rem", marginTop: 2 }}>
                    {item.productName}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      <Grid xs={12} md ={6}style={{ overflow: 'hidden' }}>
        <img src="asserts\images\card.png" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      </Grid>
            
       
    );
};

export default Cardswiper;
