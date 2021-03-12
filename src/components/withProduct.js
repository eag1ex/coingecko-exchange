
import React from 'react'
import { useParams } from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress'
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
            return (<div className="d-flex justify-content-center align-items-center m-5 p-2"><CircularProgress color="inherit" size={20} /></div>)
        }

        if (mobxstore.state === 'error') {
            return (<Message type="error" value="Ups could not load this page" />)
        }
    }

    return Hoc
}

export default onReadyHoc