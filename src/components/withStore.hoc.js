import React from "react"
import { observer } from "mobx-react-lite"
import LinearProgress from '@material-ui/core/LinearProgress';
import Message from './Messages'

const withStoreReady = (Component,entity) => {
    const Hoc = observer((props) => {

        const { mobxstore } = props
        if (mobxstore.state === 'error') return (<Message type='error' value='No data from server' />) 
        if (mobxstore.state === 'ready') return (<Component {...props}/>)
        else return (<div className=" mt-5"><LinearProgress /></div>)
    })
    return Hoc
}

export default withStoreReady
