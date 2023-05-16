import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Contact = () => {
    const { colors } = useGlobalProvider();
    return <div className="flex justify-center flex-col items-center gap-5">
        <Typography color={colors.white[800]} className="font-bold text-2xl opacity-80">
            Send  Us A Message
        </Typography>
        <Grid container className="p-5" spacing={5} component="form" >
            <Grid item xs={12} md={4} className="flex flex-col items-start gap-2">
                <Box component="input" sx={{
                    background: colors.white[600] + ' !important',
                }}
                    type="text" name="name" placeholder="Full Names"
                    className="w-full p-4 bg-gray-100 font-quest  outline-none placeholder-[rgba(0,0,0,1)] placeholder:text-[18px] placeholder:font-quicksand" />

            </Grid>
            <Grid item xs={12} md={4} className="flex flex-col items-start gap-2">
                <Box component="input" sx={{
                    background: colors.white[600] + ' !important',
                }}
                    type="email" name="name" placeholder="Email Adress"
                    className="w-full p-4 bg-gray-100 font-quest  outline-none placeholder-[rgba(0,0,0,1)] placeholder:text-[18px] placeholder:font-quicksand" />

            </Grid>
            <Grid item xs={12} md={4} className="flex flex-col items-start gap-2">
                <Box component="input" sx={{
                    background: colors.white[600] + ' !important',
                }}
                    type="text" name="name" placeholder="Case Title"
                    className="w-full p-4 bg-gray-100 font-quest  outline-none placeholder-[rgba(0,0,0,1)] placeholder:text-[18px] placeholder:font-quicksand" />

            </Grid>

            <Grid item xs={12} md={12} className="flex flex-col items-start gap-2 " >
                <Box sx={{
                    background: colors.white[600] + ' !important',
                }} component="textarea" type="message" name="text"
                    placeholder="Message"
                    className="w-full p-4 bg-gray-100 font-quest  outline-none h-[150px] border-gray-500 border-[1px]   placeholder-[rgba(0,0,0,1)] placeholder:text-[18px] placeholder:font-quicksand" />
            </Grid>
        </Grid>
        <Button
            className="text-white p-2 w-[150px] rounded-none self-start mx-5"
            sx={{
                backgroundColor: colors.greenish[500] + ' !important',
            }}
        >
            SUBMIT
        </Button>
    </div>;
};

export default Contact;
