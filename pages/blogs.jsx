import React, { useRef } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';
const Stories = () => {
    const { colors } = useGlobalProvider();
    const swiperRef = useRef(null);
    return <Box bgcolor={colors.white[500]} className="pt-[120px] md:pt-[200px]">
        <div className="flex justify-center py-5">
            <div className="w-[95vw] md:max-w-[900px]">
                <Grid container rowSpacing={10} columnSpacing={5}>
                    <Grid item xs={12} md={8} className="">
                        <div className="flex w-full flex-col md:flex-row gap-4 ">
                            <img src="/profile-1.png" alt="" className="max-h-[350px] object-cover  md:w-[200px] md:h-[250px]" />
                            <div className="flex flex-col flex-2 gap-5">
                                <div className="flex  gap-2 justify-between">
                                    <Typography className="text-[15px]">On <Typography className="text-[15px]" color={colors.greenish[500]} component="span">2022-10-20</Typography></Typography>
                                    <Typography className="text-[15px]">By <Typography className="text-[15px]" color={colors.greenish[500]} component="span">Martin Nganga</Typography></Typography>
                                </div>
                                <Typography variant="h3" color={colors.greenish[500]} className="font-[600]">Blog Test</Typography>
                                <Typography className=" text-[18px] font-quicksand ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente suscipit sequi pariatur nostrum obcaecati nulla omnis corrupti neque nam?
                                </Typography>
                                <Button className="self-start font-[600] p-0" sx={{
                                    color: colors.greenish[500],
                                }}>
                                    Read More <ArrowRightAltIcon />
                                </Button>
                                <div className="flex gap-4">
                                    <FacebookIcon sx={{
                                        color: colors.brown[500]
                                    }} />
                                    <InstagramIcon sx={{
                                        color: colors.brown[500]
                                    }} />
                                    <TwitterIcon sx={{
                                        color: colors.brown[500]
                                    }} />
                                    <LinkedInIcon sx={{
                                        color: colors.brown[500]
                                    }} />
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className=" flex flex-col gap-5">

                        <div className="flex f gap-5  flex-col-reverse md:flex-col">
                            <Box className="flex justify-between" sx={{ border: `1px solid rgba(0,0,0,.7)` }} >
                                <input type="text" placeholder="Search" className="p-1 outline-none bg-transparent" />
                                <Button className="w-[50px] justify-center items-center bg-[rgba(0,0,0,.2)] rounded-none text-white">
                                    <SearchIcon />
                                </Button>
                            </Box>
                            <div className="flex flex-col gap-3">
                                <Typography variant="h5" color={colors.brown[500]} className="font-[600]"> Latest Posts
                                </Typography>
                                <Box bgcolor={colors.brown[500]} className="h-[1px] w-[150px]">  </Box>
                            </div>
                        </div>
                        <img src="/blog-1.png" className="h-[100px]" alt="" />
                        <Typography variant="h3" className="font-[600] text-black">NGO Initiatives For Women</Typography>
                        <Typography variant="h6" className="">August 30, 2022</Typography>

                    </Grid>
                </Grid>
                <div className="flex justify-center  py-5">
                    <Button className="self-start font-[600] p-0 " sx={{
                        color: colors.greenish[500],
                    }}>
                        Load More Blogs <KeyboardArrowDownIcon />
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
