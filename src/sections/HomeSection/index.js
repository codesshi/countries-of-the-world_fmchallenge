import "./HomeSection.css"
import { useState } from "react"
import { SearchBar } from "../../components/SearchBar"
import { RegionSelector } from "../../components/RegionSelector"
import { CountryList } from "../../components/CountryList"
import { MoreButton } from "../../components/MoreButton"
import { useCountryList, useSearch } from "../../hooks/rest-countries-hooks"

const NoMatch = () => {
    return <div className="no-match">No Results</div>
}

const CountryListAll = ({region, pagination, onLoadMore}) => {
    const { list, isLoading, err } = useCountryList()

    if (isLoading) return <CountryList className="CountryList" data={[]} />;
    if (err) return <NoMatch />

    const newList = filterByRegion(list, region)

    if (newList.length === 0) return <NoMatch />

    return (
        <div>
            <CountryList key="all" className="CountryList" data={newList.slice(0, pagination)} />
            {(newList.length > pagination) && <MoreButton className="MoreButton" action={onLoadMore} />}
        </div>
    )
};

const CountryListSearch = ({ input, region, pagination, onLoadMore}) => {
    const { list, isSearching, err } = useSearch(input);

    if (isSearching) return <CountryList className="CountryList" data={[]} />;
    if (err) return <NoMatch />

    const newList = filterByRegion(list, region)

    if (newList.length === 0) return <NoMatch />

    return (
        <div>
            <CountryList key={input} className="CountryList" data={newList.slice(0, pagination)} />
            {(newList.length > pagination) && <MoreButton className="MoreButton" action={onLoadMore} />}
        </div>
    )
};

const filterByRegion = (list, region) => {
    if (region === "UNSELECTED")
        return list

    return list.filter((country) => country.region === region)
}

export const HomeSection = ({className=""}) => {
    const [pagination, setPagination] = useState(20)
    const [activeList, setActiveList] = useState("ALL")
    const [selectedRegion, setSelectedRegion] = useState("UNSELECTED")
    const [inputString, setInputString] = useState("")

    const handleSearch = (searchString) => {
        setActiveList("SEARCH")
        setInputString(searchString)
        setPagination(20)
    }

    const handleReset = () => {
        setActiveList("ALL")
        setPagination(20)
    }

    const handleFilter = (region) => {
        setSelectedRegion(region)
        setPagination(20)
    }

    const classes = className.split(" ")

    return (
        <section className={["home", ...classes].join(" ")} >
            <div className="toolbar">
                <SearchBar className="SearchBar" search={handleSearch} reset={handleReset} />
                <RegionSelector onRegionSelected={handleFilter} />
            </div>
            {activeList === "ALL" && <CountryListAll region={selectedRegion} pagination={pagination} onLoadMore={() => setPagination(pagination + 20)} />}
            {activeList === "SEARCH" && <CountryListSearch input={inputString} region={selectedRegion} pagination={pagination} onLoadMore={() => setPagination(pagination + 20)} />}
        </section>
    )
}