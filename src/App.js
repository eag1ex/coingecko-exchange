import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { theme } from "@scss/material.theme"
import { ThemeProvider } from '@material-ui/core/styles'
import { MobxStore } from './store'
import Navbar from "./components/Navbar"
import Exchange from "./pages/Exchange"
import ProductDetail from "./pages/ProductDetail"
import Message from './components/Messages'
import { loggerSetting, log,delay } from 'x-utils-es'

if (process.env.NODE_ENV === 'production') {
    loggerSetting('log', 'off')
    loggerSetting('debug', 'off')
}

if (process.env.NODE_ENV === 'development') {
    log('IN_DEVELOPMENT_MODE')
}


const mobxstore = new MobxStore()
function App({history}) {

    const [routeName, setRouteName] = React.useState({})
    const onRouteChange = (routeName, second) => {
        setRouteName({first:routeName,second})
    }
 
    return (
        <BrowserRouter>

            <ThemeProvider theme={theme}>
                <Navbar routeName={routeName}/>
                <div className="container-fluid mt-3">

                    <Switch>
                    
                        <Route exact exact path="/" render={(props) => {
                            return (<Redirect to="/app/exchanges/"/> )                          
                        }}/> 
                        <Route exact path="/exchanges" render={(props) => {
                            return (<Redirect to="/app/exchanges/"/> )                          
                        }}/> 

                         <Route exact path="/app" render={(props) => {
                            return (<Redirect to="/app/exchanges/"/> )                          
                        }}/> 
      
                        <Route exact path="/app/:name">
                            <Exchange mobxstore={mobxstore} onRouteChange={(name) => onRouteChange(name)} />
                        </Route>  
 
                        <Route exact path="/app/:name/:productID">
                            <ProductDetail mobxstore={mobxstore} onRouteChange={(name,product) => onRouteChange('exchanges',product)} />
                        </Route>
  
          
                        <Route exact path="/error" render={(props) => {          
                            return (<Message type='error' value='Ups something went wrong' />)
                        }}/>                
                           
                        <Route  exact path="/product/error" render={(props) => {          
                            return (<Message type='error' value='Product not found' />)
                        }}/>                
                    </Switch>    

                </div>

            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
