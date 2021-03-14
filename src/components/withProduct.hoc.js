
import React from 'react'
import { useParams } from "react-router-dom"
import LinearProgress from '@material-ui/core/LinearProgress'
import Message from './Messages'
const onReadyHoc = (Component) => {

    const Hoc = (props) => {
        const { productID } = useParams()
        const { mobxstore } = props
        const [prod, setProd] = React.useState(null)

        React.useEffect(() => {
            if (prod === null) {
                mobxstore.fetch_exchangeProduct(productID).then(n => {
                    setProd(productID)                
                })
            }
        }, [prod, productID, mobxstore])

        if (mobxstore.state === 'ready') {
            return (<Component {...props} />)
        }

        if (mobxstore.state === 'pending') {
            return (<div className="mt-5 row"><div className="col-8 m-auto"><LinearProgress /></div></div>)
        }

        if (mobxstore.state === 'error') {
            return (<Message type="error" value="Invalid product page" link="exchanges"/>)
        }
    }

    return Hoc
}

export default onReadyHoc
