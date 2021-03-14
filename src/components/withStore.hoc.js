import React from "react"
import { observer } from "mobx-react-lite"
import LinearProgress from '@material-ui/core/LinearProgress'
import Message from './Messages'
import { useParams } from "react-router-dom"
const withStoreReady = (Component, entity) => {
    const Hoc = observer((props) => {
        const { mobxstore } = props
        const { page } = useParams()

        if (isNaN(Number(page))) {
            return (<Message type='error' value='Invalid exchange page' link='exchanges'/>) 
        }

        const [pg, setPage] = React.useState(null)
        React.useEffect(() => {
            if (pg === null || pg !== page) {               
                mobxstore.fetch_exchanges({ page, per_page: mobxstore.pagedPerPage }).then(n => {
                    setPage(page)
                })
            }
        }, [page, pg, mobxstore])

        if (mobxstore.state === 'error') return (<Message type='error' value='No data from server' />) 
        if (mobxstore.state === 'ready') return (<Component {...props}/>)
        else return (<div className="mt-5 row"><div className="col-8 m-auto"><LinearProgress /></div></div>)
    })
    return Hoc
}

export default withStoreReady
