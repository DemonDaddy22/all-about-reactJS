import { getPathValue, isEmptyString } from "../../utils";
import { createMuiTheme } from "@material-ui/core";
import { THEME_COLOR, THEME_COLOR_DARK, TEXT_COLOR, TEXT_COLOR_DARK } from "../../resources/colors";

export const themes = Object.freeze({
    LIGHT: 'light',
    DARK: 'dark'
});

export const themed = (lightVal, darkVal) => getTheme() === themes.LIGHT ? lightVal : darkVal;

export const getTheme = () => {
    const theme = !isEmptyString(JSON.parse(localStorage.getItem('pricingTheme'))) ? JSON.parse(localStorage.getItem('pricingTheme')) : themes.LIGHT;
    return theme;
}

export const setTheme = theme => {
    localStorage.setItem('pricingTheme', JSON.stringify(theme));
    document.documentElement.setAttribute('theme-mode', theme);
}

export const getMuiTheme = () => createMuiTheme({
    palette: {
        type: getTheme(),
        primary: {
            main: THEME_COLOR,
            light: THEME_COLOR,
            dark: THEME_COLOR_DARK
        },
        text: {
            primary: themed(TEXT_COLOR, TEXT_COLOR_DARK),
        }
    }
})