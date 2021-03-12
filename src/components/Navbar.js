import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { delay,log } from 'x-utils-es/umd'
import Chip from '@material-ui/core/Chip'
import TagFacesIcon from '@material-ui/icons/TagFaces'
import { NavLink, withRouter } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

function Nav({ history, routeName }) {

    const [userName, setUser] = React.useState('')

    let Links = (props) => {
        const { first, second } = props
 
        return (<React.Fragment>
            {first && !second ? (<NavLink
                className="btn btn-sm btn-secondary text-white py-0 px-0"
                activeClassName="is-active"
                to={first}
                exact>
                {first.toUpperCase()}</NavLink>) : 
                first && second ? (<><NavLink
                            className="btn btn-sm btn-secondary text-white py-0 px-0"
                            to="/app/exchanges"
                            exact>
                            {first.toUpperCase()}</NavLink>&nbsp;/&nbsp;<NavLink
                                className="btn btn-sm btn-secondary text-white py-0 px-0"
                                activeClassName="is-active"
                                to={second}
                                exact>
                    {second.toUpperCase()}</NavLink></>):null}
        </React.Fragment>)
    }


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
