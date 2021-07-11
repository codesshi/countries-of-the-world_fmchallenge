import "./BackButton.css"
import { useTheme } from "../../hooks/useTheme"

export const BackButton = ({className = ""}) => {
    const classes = className.split(" ")
    const {theme} = useTheme()

    return (
        <button className={["back-button", ...classes].join(" ")} data-theme={theme}>Back</button>
    )
}