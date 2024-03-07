import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';



const CustomCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Box position="fixed" 
        top={100} width="100%" zIndex={-1}
        >
            <style>
                {`
                .carousel-control-prev,
                .carousel-control-next {
                    display: none !important;
                }
                .pagination-symbol {
                    background-color: rgba(0, 0, 0, 0.5);
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin: 0 5px;
                    cursor: pointer;
                }
                .pagination-symbol.active {
                    background-color: #fff;
                }
                .carousel-control-prev-icon, .carousel-control-next-icon {
                    border-radius: 50%;
                    width: 25px;
                    height: 30px;
                    background-color: rgba(0, 0, 0, 0.5);
                    margin: 0 5px;
                }
                .carousel-control-prev-icon:hover, .carousel-control-next-icon:hover {
                    background-color: #fff;
                }
                .carousel-indicators {
                    display: none !important;
                }
                .pagination-container {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                }
                `}
            </style>
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                    <img
                        src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/03_MAR/AppBanner/womensday/buzz/01/Desktop_1920x694.jpg"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/02-FEB/AppBanner/Blog/02/Desktop_1920x694.jpg"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="asserts\images\carousel.jpg"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="pagination-container">
                <span className={`carousel-control-prev-icon`} onClick={() => setIndex(index === 0 ? 2 : index - 1)}></span>
                <span className={`pagination-symbol ${index === 0 ? 'active' : ''}`} onClick={() => setIndex(0)}></span>
                <span className={`pagination-symbol ${index === 1 ? 'active' : ''}`} onClick={() => setIndex(1)}></span>
                <span className={`pagination-symbol ${index === 2 ? 'active' : ''}`} onClick={() => setIndex(2)}></span>
                <span className={`carousel-control-next-icon`} onClick={() => setIndex(index === 2 ? 0 : index + 1)}></span>
            </div>
            
        </Box>
    
    );
}

export default CustomCarousel;
