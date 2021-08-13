import { CountryDetails } from "."
import { MemoryRouter as Router } from "react-router"
import data from "../../assets/data.json"

const RouterDecorator = (Story) => {
    return <Router><Story /></Router>
}

const PaddingDecorator = (Story) => {
    return <div style={{padding: "2rem"}}><Story /></div>
}

export default {
    component: CountryDetails,
    title: "CountryDetails",
    decorators: [RouterDecorator, PaddingDecorator]
}

const Template = args => <CountryDetails {...args} />

export const Default = Template.bind({})
Default.args = {
    data: {
        ...data[0],
        borders: [{name: "One", alpha3Code: "ONE"}, {name: "Two", alpha3Code: "TWO"}, {name: "Three", alpha3Code: "THR"}]
    }
}

export const NoBorders = Template.bind({})
NoBorders.args = {
    data: {
        ...data[0],
        borders: []
    }
}

export const Loading = Template.bind({})