import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const { colors } = useGlobalProvider();

    const [open, setOpen] = React.useState(false)
    const Item = ({ name }) => {
        return <Button className="w-full px-0">
            <Typography variant="h5" color={colors.brown[500]} className="font-[600] uppercase font-sans" >
                {name}
            </Typography>
        </Button>

    }
    const Links = () => {
        return <>
            <Link href="/home">
                <Item name="Home" />
            </Link>
            <Link href="/home">
                <Item name="PROGRAMS & SERVICES" />
            </Link>
            <Link href="/home">
                <Item name="THE TEAM" />
            </Link>
            <Link href="/home">
                <Item name="DONATE" />
            </Link>
            <Link href="/home">
                <Item name="SUCCESSS STRORIES" />
            </Link>
            <Link href="/home">
                <Item name="NEWS / BLOGS" />
            </Link>
        </>
    }
    return <div className="fixed top-[30px]   flex px-5 justify-between w-screen   gap-1 items-center z-[20]">
        <img src="logo.png" alt="" className=" h-[50px] md:w-[100px] md:h-[100px] " />
        <div className="hidden md:flex  bg-[rgba(255,255,255,.8)] px-5 h-[80px]  flex-1  justify-between ">
            <Links />
        </div>
        <Button className="text-white  h-[80px] w-[150px] px-5 rounded-none hidden md:flex" sx={{
            backgroundColor: colors.greenish[500] + " !important",
        }}>
            CONTACT US
        </Button>
        <Button onClick={() => setOpen(!open)} className="flex  md:hidden flex-col gap-[6px] px-0 py-[10px] opacity-70" sx={{
            border: "1px solid white",
        }}>
            {
                ["", "", ""].map((item, index) => (<span className=" w-[35px] h-[3px] rounded bg-white "></span>))
            }

        </Button>

        {
            open && <motion.div className="fixed md:hidden top-[120px] left-0 px-5  w-screen  flex justify-center items-center overflow-hidden bg-[rgba(0,0,0,.6 )]" initial="closed"
                animate="open"
                exit="closed"
                variants={containerVariants}>
                <motion.div className="flex bg-[rgba(255,255,255,.8)] h-full rounded-[20px] gap-5 p-5 w-full flex-col items-center"
                    variants={contentVariants}
                >
                    <Links />
                    <Button className="text-white  h-[60px] px-5 rounded-none w-[300px]" sx={{
                        backgroundColor: colors.greenish[500] + " !important",
                    }}>
                        CONTACT US
                    </Button>
                </motion.div>
            </motion.div>

        }
    </div>;
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
