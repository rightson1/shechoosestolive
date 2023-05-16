import React, { useRef } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, } from 'swiper';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Scroll from "./Scroll";

const Programs = () => {
    const { colors } = useGlobalProvider();
    const swiperRef = useRef(null);

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return <div className="flex flex-col py-10">
        <Scroll link={"programs"}>
            <Typography className="text-center font-bold  text-2xl md:text-4xl py-5" id="programs" color={colors.greenish[500]}>
                Programs &
                Services
            </Typography>
        </Scroll>
        <div className="flex justify-center py-5">
            <div className="w-[95vw] md:max-w-[900px]">
                <Swiper
                    ref={swiperRef}

                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    autoplay={{
                        delay: 10000,

                        disableOnInteraction: false
                    }}
                    slidesPerView={1}
                >
                    {
                        items.map((item, index) => {
                            const { title, paragraph } = item
                            return (
                                <SwiperSlide key={index}>
                                    <Grid container spacing={{
                                        xs: 5,
                                        md: 1
                                    }} sx={{
                                        flexDirection: {
                                            xs: "column-reverse",
                                            md: "row"
                                        }
                                    }}>
                                        <Grid item xs={12} md={6} className="flex flex-col justify-center items-center md:items-end gap-5  ">
                                            <Typography variant="h5" color={colors.brown[500]} className="font-[500] uppercase text-center md:text-end" >
                                                {'0.' + index + 1}
                                            </Typography>
                                            <Typography variant="h3" color={colors.brown[500]} className="font-[600] uppercase text-center md:text-end" >
                                                {title}
                                            </Typography>
                                            <Typography variant="h5" className="text-center max-w-[600px] text-[17px] md:text-xl  ">
                                                {
                                                    paragraph
                                                }                                            </Typography>
                                            <Button className="text-white px-10  font-bold" sx={{
                                                border: `3px solid ${colors.greenish[500]}`,
                                                color: colors.greenish[500] + " !important",
                                            }}>
                                                JOIN US
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="h-[350px] md:h-full">
                                            <img src="/baraza.png" alt="" className="" />
                                        </Grid>


                                    </Grid>
                                </SwiperSlide>
                            )
                        }

                        )
                    }
                </Swiper>
                <div className="flex justify-center pt-10 gap-5">
                    <Box onClick={handlePrevSlide} border={`2px solid ${colors.brown[500]}`} className="rounded-full w-[30px] h-[30px] flex items-center justify-center">
                        <KeyboardBackspaceIcon className=" cursor-pointer" sx={{
                            color: colors.brown[500] + " !important"
                        }} />
                    </Box>
                    <Box onClick={handleNextSlide} border={`2px solid ${colors.brown[500]}`} className="rounded-full w-[30px] h-[30px] flex items-center justify-center">
                        <ArrowRightAltIcon className=" cursor-pointer" sx={{
                            color: colors.brown[500] + " !important"
                        }} />
                    </Box>
                </div>
            </div>
        </div>
    </div>;
};

export default Programs;
const items = [
    {
        title: "Medical Camps",
        paragraph: "We have a   camp once a year to reach women, their partners, and children, offering medical care and advice."
    },
    {
        title: "Talks/ Barazas",
        paragraph: "We shall give talks especially to women on matters reproductive wellness and health in general. We will liaise with different community heads for greater success in this endeavor."
    }, {
        title: "Online Interactions",
        paragraph: "We are active on social media and use the platform to interact with women. Our content is well thought out and sensitive to African women’s needs."
    }

]
