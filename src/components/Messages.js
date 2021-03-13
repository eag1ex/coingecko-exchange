import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { NavLink } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2)
        },
        '& .d-flex': {
            backgroundColor: 'rgb(253, 236, 234)'
        }
    }
}))

const NavigateToLink = (props) => {

    return (<React.Fragment>
        {props.link ? <NavLink
            className="btn btn-sm btn-outline-primary"
            activeClassName="is-active"
            to={(`/app/${props.link}`)}
            exact>
            {props.link}
        </NavLink> : null}
    </React.Fragment>)
}

/**
 *  `<Message type='' value=''/>`  types: [error,info,success]
 * display message based on props
 * @param {*} props //type,value 
 */
export default function Messages(props) {
    const classes = useStyles()
    const type = props.type
    const message = props.value
    const link = props.link

    if (!message) return null

    return (
        <div className={classes.root + ' mx-1'} data-testid="message">
            {type === 'error' ? (<div className="d-flex flex-row justify-content-start align-items-center w-100"><Alert severity="error">{message}</Alert><NavigateToLink link={link || false}/></div>) : type === 'warning' ? (<Alert severity="warning">{message}</Alert>)
                : type === 'info' ? (<Alert severity="info">{message}</Alert>)
                    : type === 'success' ? (<Alert severity="success">{message}</Alert>) : null}  
        </div>
    )
}
