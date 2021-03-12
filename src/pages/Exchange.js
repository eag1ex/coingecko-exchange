import "@scss/pages/home.component.scss"
import withStoreReady from '../components/withStore.hoc'
import React from 'react'

function Exchange(props) {
    const { mobxstore } = props 


    return (
        <div id="home-wrap">
            <div className="row">
                <div className="col-sm-12 col-md-8 m-auto ">
                    <div className="d-flex justify-content-center align-items-center m-auto">
                       top
   
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-7 m-auto p-4">
                    all else
                </div>
            </div>
        </div>
    )
}

export default withStoreReady(Exchange)
