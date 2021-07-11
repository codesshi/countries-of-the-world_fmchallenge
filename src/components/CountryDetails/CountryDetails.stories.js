import { CountryDetails } from "."
import data from "../../assets/data.json"

export default {
    component: CountryDetails,
    title: "CountryDetails"
}

const Template = args => <CountryDetails {...args} />

export const Default = Template.bind({})
Default.args = {data: data[0]}
Default.decorators = [Story => <div style={{padding: "2rem"}}><Story /></div>]