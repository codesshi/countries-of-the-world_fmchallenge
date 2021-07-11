import "./CountryDetailsScreen.css"
import { BaseScreen } from "../BaseScreen"
import { BackButton } from "../../components/BackButton"
import { CountryDetails } from "../../components/CountryDetails"

export const CountryDetailsScreen = ({data}) => {
    return (
        <BaseScreen>
            <BackButton />
            <CountryDetails className="CountryDetails" data={data}/>
        </BaseScreen>
    )
}