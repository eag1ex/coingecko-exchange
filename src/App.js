import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { theme } from "@scss/material.theme"
import { ThemeProvider } from '@material-ui/core/styles'
import { MobxStore } from './store'
import Navbar from "./components/Navbar"
import Exchange from "./pages/Exchange"
import ProductDetail from "./pages/ProductDetail"
import Message from './components/Messages'
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
   
    const [routeName, setRouteName] = React.useState('')
    const onRouteChange = (routeName,second) => {
        setRouteName(routeName,second)
    }
 
    return (
        <BrowserRouter>

            <ThemeProvider theme={theme}>
                <Navbar routeName={routeName}/>
                <div className="container-fluid mt-3">

                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <Redirect to="/app/exchanges/"/>
                        )}/>
      
                    </Switch>

                    <Switch>
                        <Route exact path="/app/:name">
                            <Exchange mobxstore={mobxstore} onRouteChange={(name) => onRouteChange(name)} />
                        </Route>  
                    </Switch>



                    <Switch>
                        <Route path="/app/exchanges/:product">
                            <Home mobxstore={mobxstore} onRouteChange={(product) => onRouteChange('exchanges',product)} />
                        </Route>
                    </Switch> 
          
                    <Switch>
                        <Route exact path="/error" render={(props) => {          
                            return (<Message type='error' value='Ups something went wrong' />)
                        }}/>                
                    </Switch>
                    
                    <Switch>
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
