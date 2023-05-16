import React, { useState, useEffect } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Box, Button, Modal, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import Form from "./Form";
import { Link as Scroll } from "react-scroll/modules";
import { useRouter } from "next/router";

const Navbar = ({ homepage }) => {
    const { colors, setSection } = useGlobalProvider();
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [opened, setOpened] = useState(false)
    const router = useRouter();
    const { pathname } = router;
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const scrollThreshold = 100;

            if (scrollTop > scrollThreshold) {
                setNavbarColor('rgba(0,0,0,0.3)');
            } else {
                setNavbarColor('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [open, setOpen] = React.useState(false)
    const Item = ({ name, link, same }) => {
        return <Link href={link}>
            <Button className="w-full px-0" onClick={() => {
                setOpen(false)
                !!same && setSection(same)
            }}>
                <Typography variant="h5" color={colors.brown[500]} className="font-[600] uppercase font-sans" sx={{
                    color: `${!same && pathname === link ? colors.yellow[500] : colors.brown[500]} !important`
                }} >
                    {name}
                </Typography>
            </Button>
        </Link>

    }
    const Links = () => {
        return <>
            <Item name="Home" link="/" />
            <Item name="About Us" link="/about" />
            <Item name="PROGRAMS & SERVICES" link="/" same="programs" />
            <Item name="THE TEAM" link="/about" same="team" />
            <Button className="w-full px-0" onClick={() => setOpened(!opened)}>
                <Typography variant="h5" color={colors.brown[500]} className="font-[600] uppercase font-sans" >
                    JOIN US
                </Typography>
            </Button>
            <Item name="DONATE" link="/donate" />
            <Item name="SUCCESSS STRORIES" link="/stories" />
            <Item name="NEWS / BLOGS" link="/blogs" />


        </>
    }
    return <Box className="fixed flex justify-center items-center w-screen z-30 h-[80px] sm:h-[150px]"
        bgcolor={{
            xs: navbarColor,
            md: navbarColor,
        }}
    >
        <div className="flex px-5 justify-between w-screen   gap-1 items-center z-[20]">
            <img src="logo.png" alt="" className=" h-[50px] md:w-[100px] md:h-[100px] " />
            <div className="hidden md:flex  bg-[rgba(255,255,255,.8)] px-5 h-[65px]  flex-1  justify-between ">
                <Links />
            </div>
            <Link href="/contact">
                <Button className="text-white  h-[65px] w-[150px] px-5 rounded-none hidden md:flex" onClick={() => setOpen(false)} sx={{
                    backgroundColor: colors.greenish[500] + " !important",
                    display: {
                        xs: "none",
                        md: "flex",
                    }
                }}>
                    CONTACT US
                </Button>
            </Link>
            <Button onClick={() => setOpen(!open)} className="flex  md:hidden flex-col gap-[6px] px-0 py-[10px] opacity-70" sx={{
                border: homepage ? "1px solid white" : "1px solid black",
            }}>
                {
                    ["", "", ""].map((item, index) => (<Box component={"span"} className=" w-[35px] h-[3px] rounded "
                        sx={{
                            backgroundColor: homepage ? colors.white[500] : "black" + " !important",
                        }}
                        key={index}></Box>))
                }

            </Button>


            {
                open && <motion.div className="fixed md:hidden pn:top-[70px] top-[120px] left-0 px-5  w-screen  flex justify-center items-center overflow-hidden bg-[rgba(0,0,0,.6 )]" initial="closed"
                    animate="open"
                    exit="closed"
                    variants={containerVariants}>
                    <motion.div
                        className="flex bg-[rgba(255,255,255,.9)] h-full rounded-[20px] gap-5 p-5 w-full flex-col items-center overflow-x-hidden pn:overflow-y-auto  scrollbar-none"
                        variants={contentVariants} // Add this style to enable vertical scrolling
                    >
                        <div className="pn:overflow-y-auto  pn:max-h-[calc(100vh-120px)] flex flex-col pn:gap-3 gap-5 items-center">
                            <Links />
                            <Link href="contact">
                                <Button
                                    onClick={() => setOpen(false)}
                                    className="text-white p-2 w-[150px] rounded-none"
                                    sx={{
                                        backgroundColor: colors.greenish[500] + ' !important',
                                    }}
                                >
                                    CONTACT US
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

            }
        </div>
        <Form open={opened} setOpen={setOpened} />
    </Box>
};

export default Navbar;
const containerVariants = {
    open: { height: 'auto', transition: { duration: 0.5 } },
    closed: { height: '0vh', transition: { duration: 0.5 } }
};

const contentVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
};
