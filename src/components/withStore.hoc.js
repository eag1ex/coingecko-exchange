import React from "react"
import { observer } from "mobx-react-lite"
import CircularProgress from '@material-ui/core/CircularProgress'
import Message from './Messages'
import { log} from 'x-utils-es'
const withStoreReady = (Component,entity) => {
    log('entity?',entity)
    const Hoc = observer((props) => {
        const { mobxstore } = props
        if (mobxstore.state === 'error') return (<Message type='error' value='No data from server' />) 
        if (mobxstore.state === 'ready') return (<Component {...props}/>)
        else return (<div className="d-flex justify-content-center align-items-center m-5 p-2"><CircularProgress color="inherit" size={20} /></div>)
    })
    return Hoc
}

export default withStoreReady
