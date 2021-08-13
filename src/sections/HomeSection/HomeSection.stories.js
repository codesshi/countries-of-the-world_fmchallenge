import { HomeSection } from "."
import { MemoryRouter as Router } from "react-router"

const RouterDecorator = (Story) => {
    return <Router><Story /></Router>
}

const ScrollWrapper = (Story) => {
    const css = {
        height: "100%",
        overflowY: "auto"
    }

    return <div style={css}><Story /></div>
}

export default {
    component: HomeSection,
    title: 'Sections/HomeSection',
    decorators: [RouterDecorator, ScrollWrapper]
}

const Template = args => <HomeSection {...args}/>

export const Default = Template.bind({})