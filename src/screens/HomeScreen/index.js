import "./HomeScreen.css"
import { useState } from "react"
import { BaseScreen } from "../BaseScreen"
import { SearchBar } from "../../components/SearchBar"
import { RegionSelector } from "../../components/RegionSelector"
import { CountryList } from "../../components/CountryList"
import { MoreButton } from "../../components/MoreButton"

export const HomeScreen = ({data = []}) => {
    const [pagination, setPagination] = useState(20)

    return (
        <BaseScreen className="home">
            <div className="toolbar">
                <SearchBar className="SearchBar"/>
                <RegionSelector />
            </div>
            <CountryList className="CountryList" data={data.slice(0, pagination)}/>
            {(data.length > pagination) && <MoreButton className="MoreButton" action={() => setPagination(pagination + 20)} />}
        </BaseScreen>
    )
}