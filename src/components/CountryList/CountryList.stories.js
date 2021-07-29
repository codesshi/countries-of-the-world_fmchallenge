import { CountryList } from "."
import { MemoryRouter as Router } from "react-router"
import data from "../../assets/data.json"

const RouterDecorator = (Story) => {
    return (
        <Router>
            <Story />
        </Router>
    )
}

export default {
    component: CountryList,
    title: "CountryList",
    decorators: [RouterDecorator]
}

const Template = args => <CountryList {...args}/>

export const Default = Template.bind({})
Default.args = {data: data.slice(0, 5)}