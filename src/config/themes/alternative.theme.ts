import { ThemeOptions, createTheme } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#15236d",
        },
        secondary: {
            main: "#e8700d",
        },
        background: {
            default: "#f2f2f2",
        },
    },
};

export const alternativeTheme = createTheme(themeOptions);
