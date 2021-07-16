import { MoreButton } from "./"

export default {
    component: MoreButton,
    title: "MoreButton"
}

const Template = args => <MoreButton {...args} />

export const Default = Template.bind({})
Default.args = {action: () => console.log("click")}