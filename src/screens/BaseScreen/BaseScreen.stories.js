import { BaseScreen } from "."

export default {
    component: BaseScreen,
    title: 'Screens/BaseScreen',
}

const Template = args => <BaseScreen {...args}/>

export const Default = Template.bind({})