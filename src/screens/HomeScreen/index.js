import "./HomeScreen.css"
import { useState } from "react"
import { BaseScreen } from "../BaseScreen"
import { SearchBar } from "../../components/SearchBar"
import { RegionSelector } from "../../components/RegionSelector"
import { CountryList } from "../../components/CountryList"
import { MoreButton } from "../../components/MoreButton"
import { useSearch, NO_MATCH, SEARCHING } from "../../hooks/useSearch"

export const HomeScreen = ({data = []}) => {
    const [pagination, setPagination] = useState(20)
    const [showListType, setShowListType] = useState("ALL")
    const [searchState, search] = useSearch()

    if (showListType === "SEARCH")
        data = searchState.results

    const handleSearch = (searchString) => {
        setShowListType("SEARCH")

        search(searchString)
    }

    const handleReset = () => {
        setShowListType("ALL")
    }

    return (
        <BaseScreen className="home">
            <div className="toolbar">
                <SearchBar className="SearchBar" search={handleSearch} reset={handleReset} />
                <RegionSelector />
            </div>
            <CountryList key={showListType === "SEARCH" ? searchState.string : "all"} className="CountryList" data={data.slice(0, pagination)}/>
            {(data.length > pagination) && <MoreButton className="MoreButton" action={() => setPagination(pagination + 20)} />}
        </BaseScreen>
    )
}