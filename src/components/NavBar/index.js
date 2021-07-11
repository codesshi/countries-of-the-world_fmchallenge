import { ThemeToggle } from '../ThemeToggle'
import './NavBar.css'

export const NavBar = ({className = ""}) => {
    const classes = className.split(" ")

    return (
        <div className={["navbar", ...classes].join(" ")}>
            <h1>Where in the world?</h1>
            <ThemeToggle />
        </div>
    )
}
