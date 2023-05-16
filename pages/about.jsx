import { Button, Grid } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Typography } from "@mui/material";
import Team from "../components/Team";

const About = () => {
    const { colors } = useGlobalProvider();
    return <div className="">
        <Grid component={"section"} className="pt-[100px] md:pt-[150px] relative" container>
            <img src="/about-1.png" className="absolute top-0 left-0 w-full z-[-1] h-full opacity-20 md:opacity-100 " alt="" />
            <Grid item xs={12} md={6} className="">

            </Grid>
            <Grid item xs={12} md={6} className="p-5 flex flex-col gap-5 z-[3]">
                <Typography className=" font-bold text-center md:text-start " variant="h2" color={colors.greenish[500]}>
                    About Us
                </Typography>
                <div className="flex flex-col md:max-w-[450px] gap-10">
                    <Typography className=" text-center md:text-start  text-[18px] font-quicksand ">
                        At SCTLI we want to see every woman prioritize her health.
                        Thus, we are about developing platforms where women can
                        freely discuss what is happening with their bodies and get
                        the right advice concerning these issues. We also hope to
                        partner with men in this endeavor knowing that they play a
                        crucial role in ensuring womens well-being.
                    </Typography>
                    <Typography className="text-center md:text-start text-[18px] font-quicksand">
                        Typically, women place their own health at the bottom of
                        their list of priorities focusing mainly on their families.
                        As a result, they present themselves for treatment late making
                        it harder for full treatment to be achieved and in some cases
                        impossible. The message we want to drive is that when she takes
                        care of herself, her family benefits because she can present
                        the best of herself to love and care for them.
                    </Typography>
                </div>
            </Grid>
        </Grid>
        <Team />
        <Grid component={"section"} className="mt-20 relative" container>
            <img src="/about-2.png" className="absolute top-0 left-0 w-full z-[-1] h-full opacity-20 md:opacity-100 " alt="" />
            <Grid item xs={12} md={6} className="p-5 flex flex-col gap-5 z-[3] items-center md:items-end">
                <div className="flex flex-col md:w-[300px] gap-10 py-5">
                    <Typography className=" font-bold  text-center md:text-start" variant="h2" color={colors.brown[500]}>
                        Join Us
                    </Typography>
                    <Typography className="  text-[18px] font-quicksand text-center md:text-start">
                        The mission of She Chooses to Live Initiative (SCTLI) can only
                        be achieved through communal effort. You can join us as a
                        volunteer, advisor, expert contributor, among others. There
                        is room for you, and we would love to hear from you. Please
                        get in touch with us through the contacts below
                    </Typography>
                    <div className="flex flex-col  gap-2 items-center md:items-start">
                        <Button className="text-white px-10 z-[3]  w-[250px] " sx={{
                            backgroundColor: colors.greenish[500] + " !important",
                        }}>
                            Partner with us as
                        </Button>
                        <Button className="text-white px-10 z-[3]  w-[250px]" sx={{
                            border: "2px solid " + colors.greenish[500] + " !important",
                            color: colors.greenish[500] + " !important",
                        }}>
                            Partner with us as
                        </Button>

                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className="pt-[100px]">

            </Grid>
        </Grid>

    </div>;
};

export default About;
