import "@scss/pages/home.component.scss"
import React,{comp} from 'react'
import withStoreReady from '../components/withStore.hoc'
import { useParams } from "react-router-dom"
import Product from './Product'
import { NavLink, withRouter } from "react-router-dom"

function Exchange(props) {
    const { mobxstore, onRouteChange } = props 
    const { name } = useParams()

    const [didLoad, setDidLoad] = React.useState(false)

    React.useEffect(() => {
        if (!didLoad) {
            onRouteChange(name)    
            setDidLoad(true)
        }
    }, [didLoad, onRouteChange,name])

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
                            return (<Product key={inx} item={item} mobxstore={mobxstore}/>)
                        }) : 'no exchanges available yet!'}
                    </React.Fragment>
                   
                </div>
            </div>
        </div>
    )
}

export default withRouter(withStoreReady(Exchange,'exchange'))
