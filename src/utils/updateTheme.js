import { localStorageKeys } from "./constant";
import { themeMode } from "./siteTheme";

export const getLocalThemeData = (key) => {
  const localData = localStorage.getItem(key) || null;
  if (localData) {
    const data = JSON.parse(localData);
    return data;
  }
  return null;
};

export const setLocalThemeData = (data) => {
  localStorage.setItem(localStorageKeys.selectedTheme, JSON.stringify(data));
};

export const getSiteCurrentThemeColours = () => {
  const currentTheme = getLocalThemeData(localStorageKeys?.selectedTheme);
  if (currentTheme) {
    if (currentTheme.theme === 0) {
      return themeMode.lightMode;
    } else {
      return themeMode.darkMode;
    }
  } else {
    return themeMode.lightMode;
  }
};

export const getCurrentThemeInputBgColor = () => {
  const currentTheme = getLocalThemeData(localStorageKeys?.selectedTheme);
  if (currentTheme) {
    if (currentTheme.theme === 0) {
      return themeMode.lightMode;
    } else {
      return themeMode.darkMode;
    }
  } else {
    return "#e4daf8";
  }
};

// Theme variable
export const updateSiteTheme = () => {
  const currentTheme = getSiteCurrentThemeColours();
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty(
    "--backgroundColor",
    currentTheme.backgroundColor
  );
};
