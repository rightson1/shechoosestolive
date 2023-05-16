import Box from "@mui/material/Box";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Slide from "../components/Slide";
import { Button, Grid, Typography } from "@mui/material";
import Programs from "../components/Programs";
import Donate from "../components/Donate";

const Index = ({ posts }) => {
  const { colors } = useGlobalProvider();

  return (
    <Box className="bg-white ">
      <Slide items={items} />
      <div className="flex bg relative h-auto py-10  flex-col">
        <div className="flex px-1   w-screen justify-center">
          <Grid className=" w-full max-w-[900px] " container>
            <Grid item xs={12} md={6} className="w-full flex flex-col gap-10 p-5 md:p-10 h-[300px] rounded-tl-[70px] items-center md:items-start md:gap-5 " bgcolor={colors.yellow[500]}>

              <img src="/join.svg" alt="" className="w-[50px]" />
              <Typography className="text-start  text-xl md:text-2xl ">
                Support us by volunteering
                to help women live their
                full potential
              </Typography>
              <Button className="text-white px-10 " sx={{
                backgroundColor: colors.brown[500] + " !important",
              }}>
                JOIN US
              </Button>
            </Grid>
            <Grid item xs={12} md={6} className="h-[350px] md:h-[300px] relative">
              <img src="/donate.png" className="absolute top-0 h-full w-full object-cover z-[1]" alt="" />
              <div className="flex h-full w-full ">
                <div className="flex-1 flex  items-end h-full w-full px-5">

                  <Button className="text-white px-10 z-[3] my-5" sx={{
                    backgroundColor: colors.greenish[500] + " !important",
                  }}>
                    DONATE
                  </Button>
                </div>
                <Box bgcolor={colors.teal[500]} className="flex-1 w-full h-full z-[4] opacity-80 p-5 md:p-10">
                  <img src="/donateIcon.svg" alt="" className="w-[70px]" />
                  <Typography className="text-start  text-[18px]  text-white  leading-9 md:leading-5">
                    Help support our <br className="hidden md:flex" />
                    mission by <br className="hidden md:flex" />
                    donating <br className="hidden md:flex" />
                    <br className="hidden md:flex" />
                    Your support will go <br className="hidden md:flex" />
                    a long way in <br className="hidden md:flex" />


                  </Typography>
                </Box>

              </div>
            </Grid>
          </Grid>

        </div>
        <div className="flex flex-col justify-center py-10 items-center w-full gap-5">
          <Typography className="text-center font-bold " variant="h1" color={colors.greenish[500]}>
            Get to know us
          </Typography>
          <Typography variant="h5" className="text-center max-w-[900px] text-[17px] md:text-xl  ">
            She Chooses to Live Initiative (SCTLI) is a non-profit organization whose primary focus is to empower communities through advocacy and implementation of health programs for healthy holistic lives.
          </Typography>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <Typography className="text-center font-bold text-xl md:text-3xl" variant="h5" color={colors.brown[500]}>
                Our Mission
              </Typography>
              <Typography variant="h5" className="text-center max-w-[600px] text-[17px] md:text-xl ">
                Every woman prioritizing her health and being wholly supported to live her full potential.
              </Typography>
            </div>
            <div className="flex-1">
              <Typography className="text-center font-bold text-xl md:text-3xl " variant="h5" color={colors.brown[500]}>
                Our Vision
              </Typography>
              <Typography variant="h5" className="text-center max-w-[600px] text-[17px] md:text-xl  ">
                Breaking down barriers that hinder women from living healthy holistic lives
              </Typography>
            </div>

          </div>
          <div className="flex w-full justify-center  gap-10">
            <Button className="text-white px-10 " sx={{
              backgroundColor: colors.brown[500] + " !important",
            }}>
              JOIN US
            </Button>
            <Button className="text-white px-10 " sx={{
              border: `2px solid ${colors.greenish[500]}`,
              color: colors.greenish[500] + " !important",
            }}>
              JOIN US
            </Button>
          </div>
        </div>
      </div>
      <Programs />
      <Donate />
      <div className="py-[50px] flex justify-center items-center">
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

    </Box>
  )

};
const items = [
  {
    title1: "She Choses to Live Because",
    title2: "SHE Knows",
    img: "image-1.png"
  }, {
    title1: "She is",
    title2: "Autistic",
    img: "image-2.png"

  },
  {
    title1: "She Builds",
    title2: "Lasting Relationships",
    img: "image-3.png"
  }

]
export default Index;