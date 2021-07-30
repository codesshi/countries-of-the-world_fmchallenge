import "./CountryList.css"
import { CountryCard } from "../CountryCard"
import { useState, useRef } from "react"
import { Link } from "react-router-dom";

const arr = Array.from(Array(20), (_, i) => ({ alpha3Code: `empty-${i}` }));

const fillVoid = (list, minLengthWhileLoading) => {
    if (list.length < minLengthWhileLoading) return [...list, ...arr.slice(list.length, minLengthWhileLoading)];

    return list;
};

export const CountryList = ({data, minLengthWhileLoading=10, className = ""}) => {
    const classes = className.split(" ")
    const elementsFullyLoaded = useRef(0)
    const [isFullyLoaded, setIsFullyLoaded] = useState(false)
    let list = data;

    if (!isFullyLoaded) list = fillVoid(data, minLengthWhileLoading);

    const handleIsReady = () => {
        elementsFullyLoaded.current += 1

        if (elementsFullyLoaded.current === data.length)
            setIsFullyLoaded(true)
    }

    const toListItem = (countryData) => {
        return (
            <li key={countryData.alpha3Code} data-key={countryData.alpha3Code}>
                <Link to={`/countries/${countryData.alpha3Code}`}>
                    <CountryCard data={countryData} isReadyCallback={handleIsReady} show={isFullyLoaded} />
                </Link>
            </li>
        )
    }

    return (
        <ul className={["country-list", ...classes].join(" ")}>
            { list.map(toListItem) }
        </ul>
    )
}