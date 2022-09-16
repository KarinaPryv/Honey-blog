import { createSlice } from "@reduxjs/toolkit";
import themes from "../../common/_consts/themes";
import languageCode from "../../common/_consts/languageCodes";

const getInitialState = (localStorageKey, defaultStateValue) => {
    const localStorageValue = localStorage.getItem(localStorageKey);
    if (!localStorageValue) {
        return defaultStateValue;
    } else {
        return localStorageValue;
    }
}

export const userSettingsSlice = createSlice({
    name: "userSettings",
    initialState: {
        theme: getInitialState('theme', themes.LIGHT),
        language: getInitialState('language', languageCode.ENGLISH)
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const { setTheme, setLanguage } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;

export const selectTheme = state => state.userSettings.theme;
export const selectLanguage = state => state.userSettings.language;