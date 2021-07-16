import "./CountryList.css"
import { CountryCard } from "../CountryCard"

export const CountryList = ({data, className = ""}) => {
    const classes = className.split(" ")

    return (
        <ul className={["country-list", ...classes].join(" ")}>
            { data.map(countryData => <li key={countryData.name}><CountryCard data={countryData} /></li>) }
        </ul>
    )
}