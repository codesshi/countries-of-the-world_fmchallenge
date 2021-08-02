import "./BackButton.css"
import { useTheme } from "../../hooks/useTheme"

export const BackButton = ({className = "", backCallback}) => {
    const classes = className.split(" ")
    const {theme} = useTheme()

    return (
        <button className={["back-button", ...classes].join(" ")} onClick={backCallback} data-theme={theme}>Back</button>
    )
}