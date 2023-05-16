import { Button, Grid } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Typography } from "@mui/material";
const Donate = () => {
    const { colors } = useGlobalProvider();
    return <div className="pt-[100px] md:pt-[150px] relative">
        <img src="/donate-page.png" className="absolute top-0 left-0 w-full z-[-1] h-full " alt="" />
        <div className="flex py-[80px] justify-center">
            <div className="flex z-[2]  flex-col gap-5 items-center   max-w-[800px] p-5">
                <Typography className="text-center font-bold  md:eading-10 text-2xl  md:text-[3rem] " color={colors.brown[500]}>
                    With a minimum of
                    KES 100
                    you can
                    donate to our
                    cause.
                </Typography>
                <Typography className="text-center  text-black  md:text-start" variant="h3" >
                    We thank you in advance
                    for your giving.
                </Typography>
                <div className="flex rounded-full bg-white p-10  flex-col gap-5">
                    <img src="/mpesa.svg" className="w-[100px]" alt="" />
                    <img src="/paypal.svg" className="w-[100px]" alt="" />

                </div>

            </div>
        </div>
    </div>;
};

export default Donate;
