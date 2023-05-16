import React from "react";
import { useRef, useEffect } from "react";
import { useGlobalProvider } from "../utils/themeContext";
const Scroll = ({ link, children }) => {
    const { section, setSection } = useGlobalProvider();
    const scroll = useRef();
    const sliderRef = useRef(null);

    useEffect(() => {
        if (section === link) {
            scroll.current?.scrollIntoView({ behavior: "smooth" });
            setSection("");
        }
    }, [section]);
    return <div ref={scroll}>{children}</div>;
};

export default Scroll;
