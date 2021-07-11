import "./BaseScreen.css"
import { NavBar } from "../../components/NavBar"

export const BaseScreen = ({className = "", children}) => {
    const classes = className.split(" ")

    return (
        <div className="base-container">
            <NavBar className="NavBar lateral-space"/>
            <section className={["content", ...classes].join(" ")} >
                {children}
            </section>
        </div>
    )
}