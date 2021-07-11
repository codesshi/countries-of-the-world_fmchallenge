import { HomeScreen } from "."
import data from "../../assets/data.json"

export default {
    component: HomeScreen,
    title: 'Screens/HomeScreen',
}

const Template = args => <HomeScreen {...args}/>

export const Default = Template.bind({})
Default.args = {data: data}