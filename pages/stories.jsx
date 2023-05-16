import React, { useRef } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, } from 'swiper';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Stories = () => {
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
    return <Box bgcolor={colors.white[500]} className="pt-[120px] md:pt-[200px]">
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
                                    <Grid container spacing={5} className="md:h-[450px]">
                                        <Grid item xs={12} md={6} className="">
                                            <img src="/image-1.png" alt="" className="h-full w-full object-cover" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className=" flex flex-col gap-2 h-full">
                                            <img src="/image-2.png" alt="" className="object-cover  md:h-[225px]" />
                                            <img src="/image-3.png" alt="" className="object-cove md:h-[225px]" />
                                        </Grid>
                                    </Grid>

                                </SwiperSlide>
                            )
                        }

                        )
                    }
                </Swiper>
                <div className="flex justify-between pt-10 gap-5">
                    <Button onClick={handlePrevSlide} className=" text-white flex items-center justify-center"
                        sx={{
                            backgroundColor: colors.brown[500] + " !important",
                        }}
                    >
                        PREV
                    </Button>

                    <Button onClick={handleNextSlide} className=" flex items-center justify-center"
                        sx={{
                            border: "2px solid" + colors.brown[500] + " !important",
                            color: colors.brown[500] + " !important",
                        }}
                    >
                        NEXT
                    </Button>

                </div>
            </div>
        </div>
    </Box>;
};
const items = [
    {
        title: "Medical Camps",
        paragraph: "We have a medical camp once a year to reach women, their partners, and children, offering medical care and advice."
    },
    {
        title: "Talks/ Barazas",
        paragraph: "We shall give talks especially to women on matters reproductive wellness and health in general. We will liaise with different community heads for greater success in this endeavor."
    }, {
        title: "Online Interactions",
        paragraph: "We are active on social media and use the platform to interact with women. Our content is well thought out and sensitive to African women’s needs."
    }

]

export default Stories;
