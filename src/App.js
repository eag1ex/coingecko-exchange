import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { theme } from "@scss/material.theme"
import { ThemeProvider } from '@material-ui/core/styles'
import MobXStore from './store/MobxStore'
import Navbar from "./components/Navbar"
import Exchange from "./pages/Exchange"
import Message from './components/Messages'
import { loggerSetting, log } from 'x-utils-es'

if (process.env.NODE_ENV === 'production') {
    loggerSetting('log', 'off')
    loggerSetting('debug', 'off')
}

if (process.env.NODE_ENV === 'development') {
    log('IN_DEVELOPMENT_MODE')
}
 
const mobxstore = new MobXStore()
function App() {

    return (
        <BrowserRouter>

            <ThemeProvider theme={theme}>
                <Navbar />
                <div className="container-fluid mt-3">

                    <Switch>

                    <Route exact path="/app/exchange/">
                            <Exchange mobxstore={mobxstore} />
                        </Route>
      
                    </Switch>

                    {/* <Switch>
                        <Route path="/app/exchange/:name">
                            <Home mobxstore={mobxstore} />
                        </Route>
                    </Switch> */}
          
                    <Switch>
                        <Route exact path="/error" render={(props) => {          
                            return (<Message type='error' value='Ups something went wrong' />)
                        }}/>
                     
                    </Switch>

                </div>

            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
