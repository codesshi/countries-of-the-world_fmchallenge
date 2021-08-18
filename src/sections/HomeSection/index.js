import "./HomeSection.css"
import { useState } from "react"
import { SearchBar } from "../../components/SearchBar"
import { RegionSelector } from "../../components/RegionSelector"
import { CountryList } from "../../components/CountryList"
import { useCountryList, useSearch } from "../../hooks/rest-countries-hooks"
import {useEndOfPageEffect} from "../../hooks/end-of-page"

const filter = region => item => item.region === region
const filters = {
    Africa: filter("Africa"),
    Americas: filter("Americas"),
    Asia: filter("Asia"),
    Europe: filter("Europe"),
    Oceania: filter("Oceania")
}

const NoMatch = () => {
    return <div className="no-match">No Results</div>
}

const CountryListAll = ({region}) => {
    const { list, err } = useCountryList(filters[region])
    const [numberOfItems, setNumberOfItems] = useState(20)

    useEndOfPageEffect(() => {
        setNumberOfItems(numberOfItems + 20)
    }, numberOfItems < list.length)

    if (err) return <NoMatch />

    return (
        <div>
            <CountryList key="all" className="CountryList" data={list.slice(0, numberOfItems)} />
        </div>
    )
};

const CountryListSearch = ({ query, region }) => {
    const { list, isSearching, err } = useSearch(query, filters[region]);
    const [numberOfItems, setNumberOfItems] = useState(20)

    useEndOfPageEffect(() => {
        setNumberOfItems(numberOfItems + 20)
    }, numberOfItems < list.length)

    if ((!isSearching && list.length === 0) || err) return <NoMatch />

    return (
        <div>
            <CountryList key={query} className="CountryList" data={list.slice(0, numberOfItems)} />
        </div>
    )
};

export const HomeSection = ({className=""}) => {
    const [activeList, setActiveList] = useState("ALL")
    const [selectedRegion, setSelectedRegion] = useState("UNSELECTED")
    const [inputString, setInputString] = useState("")

    const handleSearch = (searchString) => {
        setActiveList("SEARCH")
        setInputString(searchString)
    }

    const handleReset = () => {
        setActiveList("ALL")
    }

    const handleFilter = (region) => {
        setSelectedRegion(region)
    }

    const classes = className.split(" ")

    return (
        <section className={["home", ...classes].join(" ")} >
            <div className="toolbar">
                <SearchBar className="SearchBar" search={handleSearch} reset={handleReset} />
                <RegionSelector onRegionSelected={handleFilter} />
            </div>
            {activeList === "ALL" && <CountryListAll key={`all-${selectedRegion}`} region={selectedRegion} />}
            {activeList === "SEARCH" && <CountryListSearch query={inputString} region={selectedRegion} />}
        </section>
    )
}