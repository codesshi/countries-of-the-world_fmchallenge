import "./MoreButton.css"
import { useTheme } from "../../hooks/useTheme"

export const MoreButton = ({action, className = ""}) => {
    const classes = className.split(" ")
    const {theme} = useTheme()

    return (
        <button className={["more-button", ...classes].join(" ")} onClick={action} data-theme={theme}>MORE</button>
    )
}