import { CountryCard } from "."
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

const Template = args => <div style={{width: "16rem"}}><CountryCard data={args}/></div>

export const Default = Template.bind({})
Default.args = args