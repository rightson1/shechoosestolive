import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useGlobalProvider } from "../utils/themeContext";

const Donate = () => {
    const { colors } = useGlobalProvider();
    return <div className="py-[100px] relative flex-col flex items-center md:items-start md:pl-[200px]">
        <img src="/donate2.png" className="w-full h-full absolute z-[1] top-0 z-1 left-0 object-cover" alt="" />
        <div className="flex z-[2] md:max-w-[450px] flex-col gap-5 items-center md:items-start">
            <Typography className="text-center font-bold  text-white  md:text-start md:text-[3rem]" variant="h1" >
                With a minimum of
                KES 100 you can
                donate to our
                cause.
            </Typography>
            <Typography className="text-center  text-white  md:text-start" variant="h3" >
                We thank you in advance
                for your giving.
            </Typography>
            <Button className="text-white px-10 z-[3] my-5 w-[150px]" sx={{
                backgroundColor: colors.greenish[500] + " !important",
            }}>
                DONATE
            </Button>
        </div>
    </div>;
};

export default Donate;
