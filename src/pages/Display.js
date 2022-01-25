import React, { useState, useEffect } from "react";
import styles from "../styles/pages/displayScreen.module.scss";
import { localStorageKeys } from "../utils/constant";
import { siteBgColourSets } from "../utils/siteTheme";
import {
  getLocalThemeData,
  setLocalThemeData,
  updateSiteTheme,
} from "../utils/updateTheme";

export default function Display() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const currentNewTheme = getLocalThemeData(localStorageKeys.selectedTheme);
    // Site theme
    if (currentNewTheme === null) {
      const data = { theme: 0 };
      setIsChecked(true);
      setLocalThemeData(data, true);
      updateSiteTheme();
    } else {
      if (currentNewTheme.theme === 0) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    }
  }, []);

  const setNewThemeToLocal = (option) => {
    const currentTheme = getLocalThemeData(localStorageKeys.selectedTheme);
    const data = { ...currentTheme, theme: option.id };
    setLocalThemeData(data);
    updateSiteTheme();
  };

  const toggleTheme = (e) => {
    setIsChecked(!isChecked);
    if (siteBgColourSets.length > 0) {
      let bg = siteBgColourSets[0];
      bg.isSelect = true;
      if (!isChecked) {
        bg = siteBgColourSets[1];
        bg.isSelect = true;
      }
      setNewThemeToLocal(bg);
    }
  };

  return (
    <div className={styles.displayWrapper}>
      <h1>Theme Switcher</h1>
      <label id="switch" className={styles.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleTheme}
          id="slider"
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
