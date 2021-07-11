import './SearchBar.css'
import {useTheme} from '../../hooks/useTheme'

export const SearchBar = ({className = ""}) => {
    const {theme} = useTheme()
    const classes = className.split(" ")

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <div className={["searchbar", ...classes].join(" ")} data-theme={theme}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a country..."></input>
            </form>
        </div>
    )
}