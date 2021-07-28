import "./CountryCard.css"
import { useState, useEffect } from "react"

const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num)
}

const CardData = ({ name, population, region, capital }) => {
    return (
        <div className="card-data">
            <h2>{name}</h2>
            <dl>
                <dt>Population</dt>
                <dd>{formatNumber(population)}</dd>
                <dt>Region</dt>
                <dd>{region}</dd>
                <dt>Capital</dt>
                <dd>{capital}</dd>
            </dl>
        </div>
    )
}

const CardDataShimmer = () => {
    return (
        <div className="card-data-shimmer card-data">
            <div className="title shimmer" />
            <div className="lines shimmer" />
            <div className="lines shimmer" />
            <div className="lines shimmer" />
        </div>
    )
}

export const CountryCard = ({data, isReadyCallback, show}) => {
    const { name, population, region, capital, flag } = data
    const [isLoading, setIsLoading] = useState(true)
    const [isDelayOn, setIsDelayOn] = useState(true)
    const isReady = !isLoading && !isDelayOn
  
    useEffect(() => {
        const timeoutID = setTimeout(() => setIsDelayOn(false), 1000)

        return () => clearTimeout(timeoutID)
    })

    useEffect(() => {
        if(isReady) isReadyCallback()
    })
  
    const handleLoad = () => {
        setIsLoading(false)
    }
  
    return (
        <div className={"country-card"}>
            {flag !== undefined && (
            <img
                src={flag}
                alt={"flag of " + name}
                data-hide={!show}
                onLoad={handleLoad}
            />
            )}
            {!show && <div className="img-shimmer shimmer"></div>}
            {show && <CardData {...{ name, population, region, capital }} />}
            {!show && <CardDataShimmer />}
        </div>
    )
  }