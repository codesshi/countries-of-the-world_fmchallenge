import './CountryDetails.css'

export const CountryDetails = ({className = "", data = {}}) => {
    const classes = className.split(" ")

    return (
        <div className={["country-details", ...classes].join(" ")} >
            <img src={data.flag} alt={"flag of " + data.name}></img>
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
                <dl className="details borders">
                    <dt>Border Countries</dt><dd>{data.borders.map(country => <span key={country}>{country}</span>)}</dd>
                </dl>
            </div>
        </div>
    )
} 