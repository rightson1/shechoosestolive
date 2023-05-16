



export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {

        }
        : {
            white: {
                100: "#fcfcfc",
                200: "#fafafa",
                300: "#f7f7f7",
                400: "#f5f5f5",
                500: "#f2f2f2",
                600: "#c2c2c2",
                700: "#919191",
                800: "#616161",
                900: "#303030"
            },
            yellow: {
                100: "#fff1cc",
                200: "#ffe499",
                300: "#ffd666",
                400: "#ffc933",
                500: "#ffbb00",
                600: "#cc9600",
                700: "#997000",
                800: "#664b00",
                900: "#332500"
            },
            black: {
                100: "#ffffffcc",
                200: "#ffffff99",
                300: "#ffffff66",
                400: "#ffffff33",
                500: "#00000000",
                600: "#00000033",
                700: "#00000066",
                800: "#00000099",
                900: "#000000cc"
            },

            brown: {
                100: "#e6d0d1",
                200: "#cda1a3",
                300: "#b57374",
                400: "#9c4446",
                500: "#831518",
                600: "#691113",
                700: "#4f0d0e",
                800: "#34080a",
                900: "#1a0405"
            },
            teal: {
                100: "#ccecef",
                200: "#99dadf",
                300: "#66c7cf",
                400: "#33b5bf",
                500: "#00a2af",
                600: "#00828c",
                700: "#006169",
                800: "#004146",
                900: "#002023"
            },
            greenish: {
                100: "#d0eeda",
                200: "#a0ddb5",
                300: "#71cc8f",
                400: "#41bb6a",
                500: "#12aa45",
                600: "#0e8837",
                700: "#0b6629",
                800: "#07441c",
                900: "#04220e"
            },

        }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.black[900],
                    },
                }
                : {
                    // palette values for light mode
                    // primary: {
                    //     main: colors.primary[100],
                    // },
                    // secondary: {
                    //     main: colors.greenAccent[500],
                    // },
                    // neutral: {
                    //     dark: colors.grey[700],
                    //     main: colors.grey[500],
                    //     light: colors.grey[100],
                    // },


                }),
        },


        typography: {
            // fontFamily: ["Roboto", "sans-serif"].join(","),
            body: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 18,
            },
            lg: {
                // fontSize: {
                //     xs: 20,
                //     sm: 30,
                //     md: 40,
                // }
                // ,
                fontSize: 40,


            },
            h1: {
                // fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40,
            },

            h2: {
                // fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                // fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                // fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                // fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Nunito", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

