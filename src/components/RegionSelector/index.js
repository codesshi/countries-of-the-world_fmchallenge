import "./RegionSelector.css"
import { useTheme } from "../../hooks/useTheme"

export const RegionSelector = () => {
    const { theme } = useTheme()

    return (
        <div className="region-selector" data-theme={theme} >
            <select name="regions">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}