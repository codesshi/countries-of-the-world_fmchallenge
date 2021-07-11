import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ defaultTheme = "light", children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    const value = {theme, toggleTheme}
    const customStyle = {
        height: "100%",
        background: "var(--secondary-color)"
    }

    return (
        <ThemeContext.Provider value={value}>
            <div className={theme === "dark" ? "dark-theme" : "none"} style={customStyle}>{children}</div>
        </ThemeContext.Provider>)
}

const useTheme = () => {
    const context = useContext(ThemeContext)

    return context
}

export {ThemeProvider, useTheme}