import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CountryDetails.css'

const Details = ({data}) => {
    return (
        <div className="details-container">
            <h2>{data.name}</h2>
            <dl className="details">
                <dt>Native Name</dt><dd>{data.nativeName}</dd>
                <dt>Population</dt><dd>{data.population}</dd>
                <dt>Region</dt><dd>{data.region}</dd>
                <dt>Sub Region</dt><dd>{data.subregion}</dd>
                <dt>Capital</dt><dd>{data.capital}</dd>
            </dl>
            <dl className="details">
                <dt>Top Level Domain</dt><dd>{data.topLevelDomain}</dd>
                <dt>Currencies</dt><dd>{data.currencies.map(currency => currency.name).join(", ")}</dd>
                <dt>Languages</dt><dd>{data.languages.map(language => language.name).join(", ")}</dd>
            </dl>
            {data.borders.length > 0 && <BordersList borders={data.borders} />}
        </div>
    )
}

const DetailsWithShimmer = () => {
    return (
        <div className="details-shimmer">
            <div className="title shimmer" />
            <div className="lines shimmer"></div>
            <div className="lines shimmer"></div>
            <div className="lines shimmer"></div>
            <div className="lines shimmer"></div>
        </div>
    )
}

const BordersList = ({ borders }) => {
    return (
        <dl className="details borders">
            <dt>Border Countries</dt>
            <dd>{borders.map(country => <Link key={country.alpha3Code} to={`/countries/${country.alpha3Code}`}>{country.name}</Link>)}</dd>
        </dl>
    )
}

export const CountryDetails = ({ className = "", data }) => {
    const classes = className.split(" ")
    const [isLoaded, setIsLoaded] = useState(false)
    const [isDelayElapsed, setIsDelayElapsed] = useState(false)
    const isReady = isLoaded && isDelayElapsed

    useEffect(() => {
        const timeoutID = setTimeout(() => setIsDelayElapsed(true), 600)

        return () => clearTimeout(timeoutID)
    }, [])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    return (
        <div className={["country-details", ...classes].join(" ")} >
            {data !== undefined && <img src={data.flag} alt={`flag of ${data.name}`} data-hide={!isReady} onLoad={handleLoad} />}
            {!isReady && <div className="shimmer img-shimmer" />}
            {isReady && <Details data={data} />}
            {!isReady && <DetailsWithShimmer />}
        </div>
    )
}