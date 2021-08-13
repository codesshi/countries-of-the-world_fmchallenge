import "./App.css"
import { NavBar } from "../NavBar"
import { Switch, Route } from "react-router-dom"
import { ThemeProvider } from '../../hooks/useTheme'

export default function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <NavBar className="padding-x no-shrink" />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                        </Route>
                        <Route exact path="/countries/:code">
                        </Route>
                    </Switch>
                </div>
            </div>
        </ThemeProvider>
    );
}