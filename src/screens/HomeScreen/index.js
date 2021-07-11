import "./HomeScreen.css"
import { BaseScreen } from "../BaseScreen"
import { SearchBar } from "../../components/SearchBar"
import { RegionSelector } from "../../components/RegionSelector"
import { CountryList } from "../../components/CountryList"

export const HomeScreen = ({data = []}) => {
    return (
        <BaseScreen className="home">
            <div className="toolbar">
                <SearchBar className="SearchBar"/>
                <RegionSelector />
            </div>
            <CountryList className="CountryList" data={data}/>
        </BaseScreen>
    )
}