import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
const Footer = () => {
    const { colors } = useGlobalProvider();
    const Social = ({ link, icon }) => {
        return <Link href={link}>
            <Button variant="contained" color="primary" className="bg-[#ECECEC]" sx={{
                "&:hover": {
                    backgroundColor: colors.white[100],
                }
            }}>
                {icon}
            </Button>
        </Link>
    }

    return <Box className="pt-10 " >
        <div className="py-[100px] flex justify-center items-center">
            <div className="flex flex-col max-w-[500px] px-5">
                <Typography className="text-center font-bold text-xl " variant="h5" >
                    Subscribe to our Newsletter and stay in the
                    loop of our latest News and Updates
                </Typography>
                <input type="text" className="border-2 border-[#E5E5E5] rounded-md px-5 py-2 my-5" placeholder="Enter your email address" />
                <Button className="text-white px-10 " sx={{
                    border: "2px solid" + colors.greenish[500] + " !important",
                    color: colors.greenish[500] + " !important",
                }}>
                    SUBSCRIBE
                </Button>
            </div>
        </div>
        <Grid container className="p-5 md:px-[70px]" spacing={5} bgcolor={colors.white[500]}>
            <Grid item xs={12} md={2} className="flex flex-col gap-2">
                <Typography className="text-center font-bold md:text-start" variant="h3" color={colors.greenish[500]}>
                    Quick Links
                </Typography>
                <Link href="/about">
                    <Typography className="text-center md:text-start" variant="h5">
                        Join us
                    </Typography>
                </Link>
                <Link href="/about">
                    <Typography className="text-center md:text-start" variant="h5">
                        Donate
                    </Typography>
                </Link>
                <Link href="/about">
                    <Typography className="text-center md:text-start" variant="h5">
                        Get in touch
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={12} md={4} className="flex flex-col gap-5">
                <Typography className="text-center font-bold md:text-start" variant="h3" color={colors.greenish[500]}>
                    Engage us
                </Typography>
                <div className="flex gap-5 justify-center md:justify-start ">
                    <Social link="https://www.facebook.com/shechosestolive" icon={<FacebookIcon sx={{
                        color: colors.brown[500]
                    }} />} />
                    <Social link="https://www.instagram.com/shechosestolive/" icon={<InstagramIcon sx={{
                        color: colors.brown[500]
                    }} />} />
                    <Social link="https://twitter.com/shechosestolive" icon={<TwitterIcon sx={{
                        color: colors.brown[500]
                    }} />} />
                    <Social link="https://www.linkedin.com/company/she-chose-to-live/" icon={<LinkedInIcon sx={{
                        color: colors.brown[500]
                    }} />} />
                </div>
            </Grid>
            <Grid item xs={12} md={3} className="flex flex-col gap-5">
                <Typography className="text-center font-bold md:text-start" variant="h3" color={colors.greenish[500]}>
                    Connect with us
                </Typography>
                <div className="flex gap-5 justify-center  flex-col">
                    <div className="flex justify-center items-center gap-3 md:justify-start">
                        <PhoneIcon sx={{
                            color: colors.brown[500]
                        }} />

                        <Typography className="text-center md:text-start" variant="h5">
                            +234 813 000 0000
                        </Typography>
                    </div>
                    <div className="flex justify-center items-center gap-3 md:justify-start">
                        <EmailIcon sx={{
                            color: colors.brown[500]
                        }} />

                        <Typography className="text-center md:text-start" variant="h5">
                            drjanewakahe@shechosestolive.org
                        </Typography>

                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={3} className="flex flex-col gap-5">
                <Typography className="text-center font-bold md:text-start" variant="h3" color={colors.greenish[500]}>
                    Visit us
                </Typography>
                <div className="flex gap-5 justify-center ">
                    <Typography variant='h5' className='font-semibold'>
                        Doctor &apos; Plaza Nairobi Hospital,
                        RM 211 49-00202, Nairobi
                    </Typography>
                </div>
            </Grid>
        </Grid>
        <Box className="flex justify-center items-center py-2" bgcolor={colors.greenish[500]}>
            <Typography className="font-jost text-[14px] md:text-[19px]   text-white text-center">
                © Copyright 2023. All Rights Reserved By She Choses To Live Initiative.
            </Typography>
        </Box>
    </Box>
};

export default Footer;
