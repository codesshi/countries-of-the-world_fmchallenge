import "./App.css"
import { NavBar } from "../NavBar"
import { Switch, Route } from "react-router-dom"
import { ThemeProvider } from '../../hooks/useTheme'
import { HomeSection } from "../../sections/HomeSection"
import { CountryDetailsSection } from "../../sections/CountryDetailsSection"

export default function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <NavBar className="padding-x no-shrink" />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <HomeSection />
                        </Route>
                        <Route exact path="/countries/:code">
                            <CountryDetailsSection />
                        </Route>
                    </Switch>
                </div>
            </div>
        </ThemeProvider>
    );
}