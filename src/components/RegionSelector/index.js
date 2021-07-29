import "./RegionSelector.css"
import { useTheme } from "../../hooks/useTheme"

export const RegionSelector = ({onRegionSelected}) => {
    const { theme } = useTheme()

    const handleChange = (evt) => {
        const region = evt.target.value

        onRegionSelected(region)
    }

    return (
        <div className="region-selector" onChange={handleChange} data-theme={theme}>
            <select name="regions">
                <option value="UNSELECTED">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}