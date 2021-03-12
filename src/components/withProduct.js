
import React from 'react'
import { useParams } from "react-router-dom"
import LinearProgress from '@material-ui/core/LinearProgress';
import Message from '../components/Messages'
import { log } from 'x-utils-es'
const onReadyHoc = (Component) => {

    const Hoc = (props) => {
        const { productID } = useParams()
        const { mobxstore, history } = props
        const [prod, setProd] = React.useState(null)

        React.useEffect(() => {
            if (prod === null) {
                mobxstore.fetch_exchangeProduct(productID).then(n => {
                    setProd(productID)
                    log('calling fetch_exchangeProduct')
                })
            }
        }, [prod, productID, mobxstore.fetch_exchangeProduct])


        if (mobxstore.state === 'ready') {
            return (<Component {...props} />)
        }

        if (mobxstore.state === 'pending') {
            return ( <div className=" mt-5"><LinearProgress /></div>)
        }

        if (mobxstore.state === 'error') {
            return (<Message type="error" value="Ups could not load this page" />)
        }
    }

    return Hoc
}

export default onReadyHoc