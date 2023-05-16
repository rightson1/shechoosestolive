import React, { useRef } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, } from 'swiper';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Team = () => {
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
    return <div className="mt-20 py-10 px-5 md:px-20">
        <Typography className=" font-bold text-center" variant="h3" color={colors.greenish[500]}>
            The Team
        </Typography>
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
                                    <Grid container className="p-2 md:p-5 rounded-md" spacing={{ xs: 5, md: 1 }} sx={{
                                        background: colors.white[500],
                                    }}>
                                        <Grid item xs={12} md={6} className=" flex justify-center ">
                                            <div className="flex max-w-[400px] flex-col">
                                                <img src="/profile-1.png" alt="" className="h-[450px] object-cover" />
                                                <Box bgcolor={colors.brown[500]} className="p-2 flex justify-center flex-col gap-3 items-center">
                                                    <Typography className="text-white font-[600]">
                                                        Anne Mburu de Wagt (PhD)
                                                    </Typography>
                                                    <Typography className="text-white">
                                                        Board Chair
                                                    </Typography>


                                                </Box>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="flex flex-col justify-center items-center md:items-end gap-5   ">
                                            <Typography className="text-start  text-[16px] font-quicksand ">
                                                Anne comes with 12 plus years of
                                                experience primarily in international
                                                nutrition; serving in various capacities,
                                                including but not limited to researcher,
                                                trainer, advisor, educator, consultant,
                                                leadership development, and advocacy.
                                                Annes experience encompasses academic
                                                research, tertiary level education
                                                , advocacy to senior government policy
                                                makers and implementing Social
                                                Behavior Change and Communication
                                                at community level. Annes work has
                                                touched upon various areas, from the
                                                interaction and importance of nutrition in
                                                infectious disease such HIV/AIDS, to raising
                                                awareness about the centrality of nutrition
                                                to economic development and developing
                                                curricula to support nutrition in water,
                                                sanitation, and health initiatives. More
                                                recently, Anne has qualified as a Certified Coach; thereby
                                                expanding her scope to integrating coaching approaches with
                                                her nutrition research, training, and consultancy background
                                                to support individuals and organizations towards positive, solution
                                                focused outcomes in terms of health, wellness as well as transitions.
                                                Anne has a passion for translating science, to make it practical and relatable,
                                                thus enabling individuals, families and ultimately communities to make informed
                                                decisions for their overall benefit. Annes
                                                background well equips her to SCTLIs role in,
                                                empowering communities through advocacy and implementation
                                                of health programs for healthy holistic living. Anne has
                                                demonstrated versatility, creativity, and humility in her
                                                approach to working with the board team, taking on her role as
                                                Chair, as a coach/facilitator, to in furtherance of the boards
                                                quest for deeper insights towards creative practical, optimal and
                                                sustainable solutions for SCTLI stakeholders.
                                            </Typography>
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

export default Team;
