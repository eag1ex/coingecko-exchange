import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { theme } from "@scss/material.theme"
import { ThemeProvider } from '@material-ui/core/styles'
import { MobxStore } from './store'
import Navbar from "./components/Navbar"
import Exchange from "./pages/Exchange"
import ProductDetail from "./pages/ProductDetail"
import Message from './components/Messages'
import { loggerSetting, log, delay } from 'x-utils-es'

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
                    
                        <Route exact path="/" render={(props) => {
                            return (<Redirect to="/app/exchanges/1"/>)                          
                        }}/> 

                        <Route exact path="/exchanges" render={(props) => {
                            return (<Redirect to="/app/exchanges/1"/>)                          
                        }}/> 

                        <Route exact path="/app/exchanges/">
                            <Redirect to="/app/exchanges/1"/>
                        </Route>

                        <Route exact path="/app/exchanges/:page/:productID">
                            <Redirect to="/app/exchanges/1"/>
                        </Route>

                        <Route exact path="/app" render={(props) => {
                            return (<Redirect to="/app/exchanges/1"/>)                          
                        }}/> 

                        <Route exact path="/app/:name/:page">
                            <Exchange mobxstore={mobxstore} onRouteChange={(first) => onRouteChange(first)} />
                        </Route>  
 
                        <Route exact path="/app/:name/:page/:productID">
                            <ProductDetail mobxstore={mobxstore} onRouteChange={(first, second) => onRouteChange(first, second)} />
                        </Route>
          
                        <Route exact path="/error" render={(props) => {          
                            return (<Message type='error' value='Ups something went wrong' />)
                        }}/>                
                           
                        <Route exact path="/product/error" render={(props) => {          
                            return (<Message type='error' value='Product not found' />)
                        }}/>                
                    </Switch>    

                </div>

            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
