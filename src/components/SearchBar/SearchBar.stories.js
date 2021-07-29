import { SearchBar } from "."

export default {
    component: SearchBar,
    title: 'SearchBar',
}

const Template = args => <SearchBar {...args} />;

export const Default = Template.bind({})
Default.args = {
    search: (str) => console.log("search: " + str),
    reset: () => console.log("reset")
}