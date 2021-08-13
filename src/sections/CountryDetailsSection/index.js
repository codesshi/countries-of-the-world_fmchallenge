import "./CountryDetailsSection.css"
import { BackButton } from "../../components/BackButton"
import { CountryDetails } from "../../components/CountryDetails"
import { useHistory, useParams } from "react-router"
import { useCountryDetails } from "../../hooks/rest-countries-hooks"

export const CountryDetailsSection = ({className = ""}) => {
    const { code } = useParams()
    const state = useCountryDetails(code)
    const history = useHistory()

    const handleBack = () => {
        history.push("/")
    }

    const classes = className.split(" ")

    return (
        <section className={["details-section", ...classes].join(" ")}>
            <BackButton className="flex-start" backCallback={handleBack} />
            <CountryDetails key={code} className="margin-top" data={state.data} />
        </section>
    )
}