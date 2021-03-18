import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { theme } from "./theme"
import { ThemeProvider } from '@material-ui/core/styles'
import { MobxStore } from './store'
import Navbar from "./components/Navbar"
import Exchange from "./pages/Exchange"
import ProductDetail from "./pages/ProductDetail"
import { loggerSetting, log } from 'x-utils-es'

if (process.env.NODE_ENV === 'production') {
    loggerSetting('log', 'off')
    loggerSetting('debug', 'off')
}

if (process.env.NODE_ENV === 'development') {
    log('IN_DEVELOPMENT_MODE')
}

const mobxstore = new MobxStore()
function App() {

    const [routeName, setRouteName] = React.useState({})
    const onRouteChange = (first, second) => {
        setRouteName({ first, second })
    }
 
    return (
        <BrowserRouter>

            <ThemeProvider theme={theme}>
                <Navbar routeName={routeName}/>
                <div className="container-fluid mt-3">

                    <Switch>

                        <Route exact path="/">
                            <Redirect to="/app/exchanges/1"/>
                        </Route>

                        <Route exact path="/app">
                            <Redirect to="/app/exchanges/1"/>
                        </Route>
                        <Route exact path="/app/exchanges">
                            <Redirect to="/app/exchanges/1"/>
                        </Route>
                        
                        <Route exact path="/exchanges/:name">
                            <Redirect to="/app/exchanges/1"/>
                        </Route>

                        <Route exact path="/app/:name/:page">
                            <Exchange mobxstore={mobxstore} onRouteChange={(first) => onRouteChange(first)} />
                        </Route>  
 
                        <Route exact path="/app/:name/:page/:productID">
                            <ProductDetail mobxstore={mobxstore} onRouteChange={(first, second) => onRouteChange(first, second)} />
                        </Route>              
                     
                    </Switch>    

                </div>

            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
