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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import ContactForm from '../components/Contact';
const Contact = () => {
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
    return <div className="pt-[100px] md:pt-[150px] relative">
        <img src="/donate-page.png" className="absolute top-0 left-0 w-full z-[-1] h-full  object-cover " alt="" />
        <div className="flex justify-center py-5">
            <Box className="w-[95vw] md:max-w-[900px]  md:p-5  flex flex-col gap-10 py-10" sx={{
                background: colors.white[500],
            }}>
                <Typography className="text-center font-bold " variant="h1" color={colors.greenish[500]}>
                    Contact Us
                </Typography>

                <Grid container className="p-5 overflow-hidden" rowSpacing={{ xs: 5, md: 0 }} colSpacing={{ xs: 0, md: 5 }}>
                    <Grid item xs={12} md={4} className="flex flex-col gap-5 shadow-lg p-5 items-center">
                        <LocationOnIcon sx={{
                            color: colors.brown[500]
                        }} />
                        <div className="flex gap-5 justify-center ">
                            <Typography variant='h5' className=''>
                                Doctor &apos; Plaza Nairobi Hospital,
                                RM 211 49-00202, Nairobi
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="flex flex-col gap-5  shadow-lg p-5 xs:h-[150px]">
                        <div className="flex gap-5 justify-center  flex-col">
                            <div className="flex justify-center items-center gap-3 md:justify-start">
                                <PhoneIcon sx={{
                                    color: colors.brown[500]
                                }} />

                                <Typography className="text-center md:text-start" variant="h5">
                                    +234 813 000 0000
                                </Typography>
                            </div>
                            <div className="flex justify-center items-center gap-3 md:justify-start ">
                                <EmailIcon sx={{
                                    color: colors.brown[500]
                                }} />

                                <Typography className="text-center md:text-start" variant="h5">
                                    drjanewakahe <br />
                                    @shechosestolive.org
                                </Typography>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="flex flex-col gap-5 shadow-lg p-5 xs:h-[150px] items-center justify-center ">

                        <div className="flex gap-5 justify-center md:justify-start items-center  ">
                            <div className="flex gap-4 ">
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
                    </Grid>

                </Grid>
                <ContactForm />
            </Box>
        </div>
    </div>;
};

export default Contact;
