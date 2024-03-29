import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink, withRouter } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}))

let Links = (props) => {
    const { first, second } = props
    let { name, route } = first || {}
    console.log('route', route)
    return (<React.Fragment>
        {route && !second ? (<NavLink
            className="btn btn-sm btn-secondary text-white py-0 px-0 strong"
            activeClassName="is-active"
            to={(`/app/` + route)}
            exact>
            {name.toUpperCase()}</NavLink>)
            : route && second ? (<><NavLink
                className="btn btn-sm btn-secondary text-white py-0 px-0 base-link d-none-sm d-block-md"
                to={(`/app/` + route)}
                exact>
                {name.toUpperCase()}</NavLink><span className="base-link-split">&nbsp;/&nbsp;</span><NavLink
                className="btn btn-sm btn-secondary text-white py-0 px-0 dest-link strong"
                activeClassName="is-active"
                to={second}
                exact>
                {second.toUpperCase()}</NavLink></>) : null}
    </React.Fragment>)
}

function Nav({ routeName }) {

    const classes = useStyles()

    return (
        <div className={classes.root + ' navbar'}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Links {...routeName}/>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Nav)
