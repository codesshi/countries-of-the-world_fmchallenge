import { CountryDetailsScreen } from ".";
import data from "../../assets/data.json"

export default {
    component: CountryDetailsScreen,
    title: "Screens/CountryDetailsScreen"
}

const Template = args => <CountryDetailsScreen {...args} />

export const Default = Template.bind({})
Default.args = {data: data[0]}