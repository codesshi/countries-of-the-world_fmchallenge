import { RegionSelector } from ".";

export default {
    component: RegionSelector,
    title: 'RegionSelector',
}

const Template = args => <RegionSelector {...args}/>;

export const Default = Template.bind({})
Default.args = {
    onRegionSelected: (region) => console.log(`Region selected: ${region}`) 
}