import React from 'react'
import './ThemeToggle.css'
import {useTheme} from '../../hooks/useTheme'

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()
    const label = theme === "light" ? "Dark Mode" : "Light Mode"

    return (
        <button className="toggle-theme-btn" data-theme={theme} onClick={toggleTheme}>{label}</button>
    )
}