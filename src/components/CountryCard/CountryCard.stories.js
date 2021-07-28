import { CountryCard } from "."
import { useState } from "react"
import flag from '../../assets/flag.jpg'

export default {
    component: CountryCard,
    title: 'CountryCard',
}

const args = {
    name: "Germany",
    population: 81770900,
    region: "Europe",
    capital: "Berlin",
    flag: flag
}

const Template = (args) => {
    const [isFullyLoaded, setIsFullyLoaded] = useState(false)
    const style = {
        width: "16rem"
    }

    return (
        <div style={style}><CountryCard data={args} isReadyCallback={() => setIsFullyLoaded(true)} show={isFullyLoaded} /></div>
    )
}

export const Default = Template.bind({})
Default.args = args