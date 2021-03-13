import "@scss/pages/home.component.scss"
import React from 'react'
import withStoreReady from '../components/withStore.hoc'
import { useParams } from "react-router-dom"
import Product from '../components/Product'
import { withRouter } from "react-router-dom"
import Pagination from '../components/Pagination'
import { log, onerror, copy } from 'x-utils-es'
function Exchange(props) {
    const { mobxstore, onRouteChange, history } = props 
    const { name, page } = useParams()

    const [didLoad, setDidLoad] = React.useState(false)
   
    React.useEffect(() => {
        if (!didLoad) {
            let rName = name + '/' + page
            // console.log('name/page:', rName)
            onRouteChange({ name, page, route: rName })    
            setDidLoad(true)
        }
    }, [didLoad, onRouteChange, page, name])

    return (
        <div id="home-wrap">
            <div className="row">
                <div className="col-sm-12 col-md-8 m-auto ">
                    <div className="d-flex justify-content-center align-items-center m-auto">
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-7 m-auto p-4">
                    <React.Fragment>
                        {(mobxstore.exchanges || []).length ? mobxstore.exchanges.map((item, inx) => {
                            return (<Product key={inx} item={item} mobxstore={mobxstore} page={page}/>)
                        }) : 'no exchanges available yet!'}
                    </React.Fragment>
                   
                </div>
            </div>
            <Pagination history={history} perPage={mobxstore.pagedPerPage} routeOnChange={(page) => {
                log('route on change', page)
            }}/>
        </div>
    )
}

export default withRouter(withStoreReady(Exchange, 'exchange'))
