import React from "react";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import { useGlobalProvider } from "../utils/themeContext";

const Slide = ({ items }) => {
    const { colors } = useGlobalProvider()
    return <Box
        sx={{
            "& .swiper-pagination-bullet": {
                backgroundColor: "white !important"
            }
        }}>
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
                delay: 3000,

                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}

            slidesPerView={1}
        >
            {
                items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>

                            <Box

                                className="h-[100vh] w-screen  md:pb-[100px] flex flex-col justify-center md:justify-end  gap-8 text-white relative   ">
                                <div className="flex flex-col p-10 md:gap-4 md:px-20 items-center md:items-end">
                                    <Typography variant="h1" className="uppercase md:text-center  text-center m font-bold font-jost text-[45px] md:text-[4rem]  " >{
                                        item?.title1
                                    }</Typography>
                                    <Typography color={colors.yellow[500]} variant="h1" className="uppercase text-center md:text-right font-bold font-jost text-[45px] md:text-[4rem]  " >{
                                        item?.title2
                                    }</Typography>
                                </div>
                                <Box
                                    component="img"

                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
                                    src={item.img}
                                />
                                <Box
                                    className="absolute top-0 left-0 w-full z-[-1] h-full object-cover bg-[rgba(0,0,0,0.5)]"

                                />

                            </Box>
                        </SwiperSlide>
                    )
                }

                )
            }
        </Swiper>
    </Box>;
};

export default Slide;
