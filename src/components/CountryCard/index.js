import "./CountryCard.css"

const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num)
}

export const CountryCard = ({data: {name, population, region, capital, flag}}) => {
    return (
        <div className="country-card">
            <img src={flag} alt={"flag of " + name} />
            <div className="card-data">
                <h2>{name}</h2>
                <dl>
                    <dt>Population</dt><dd>{formatNumber(population)}</dd>
                    <dt>Region</dt><dd>{region}</dd>
                    <dt>Capital</dt><dd>{capital}</dd>
                </dl>
            </div>
        </div>
    )
}