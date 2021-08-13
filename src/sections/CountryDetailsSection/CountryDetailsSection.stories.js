import { CountryDetailsSection } from "."
import { MemoryRouter as Router } from "react-router"
import { Route } from "react-router-dom"

const RouterDecorator = (Story) => {
    return <Router initialEntries={["/countries/AFG"]} ><Story /></Router>
}

const WrapDecorator = (Story) => {
    const css = {
        boxSizing: "border-box",
        height: "100%",
        overflowY: "auto",
        padding: "2rem",

    }

    return <div style={css}><Story /></div>
}

export default {
    component: CountryDetailsSection,
    title: "Sections/CountryDetailsSection",
    decorators: [RouterDecorator, WrapDecorator]
}

const Template = args => <Route path="/countries/:code"><CountryDetailsSection {...args} /></Route>

export const Default = Template.bind({})