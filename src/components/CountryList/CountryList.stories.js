import { CountryList } from "."
import data from "../../assets/data.json"

export default {
    component: CountryList,
    title: "CountryList"
}

const Template = args => <CountryList {...args}/>

export const Default = Template.bind({})
Default.args = {data: data}