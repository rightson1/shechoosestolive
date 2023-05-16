
import {
    createContext,
    useState,
    useMemo,
    useReducer,
    useContext,
} from "react";
import { reducer, actionTypes } from "./reducer";
import { tokens, themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as Theme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const router = useRouter()

    const initialState = useMemo(() => {
        return {
            theme: 'light'
        }
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState);
    const [opened, setOpened] = useState(false);
    const [section, setSection] = useState(null);
    const mode = useMemo(() => {
        return state.theme
    }, [state])
    const colors = tokens(mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <ThemeContext.Provider
            value={{
                ...state,
                colors,
                section,
                setSection,
                opened,
                setOpened,



            }}
        >
            <Theme theme={theme}>
                <CssBaseline />
                {children}

                <Toaster />
            </Theme>
        </ThemeContext.Provider>
    );
};
export const useGlobalProvider = () => useContext(ThemeContext);
