import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { delay } from 'x-utils-es/umd'
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
    //  console.log('routeName', routeName)

    // assign fake user 
    // const defaultUser = 'Johndoe'
    // delay(3000).then(() => {
    //     setUser(defaultUser)
    // })
    // const loginUser = () => {
    //     localStorage.setItem("token", "some-login-token");
    //     history.push("/profile/Vijit");
    //   };
    
    //   const logoutUser = () => {
    //     localStorage.removeItem("token");
    //     history.push("/");
    //   };
  
    const classes = useStyles()

    return (
        <div className={classes.root + ' navbar'}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {(routeName || '').toUpperCase() || null}
                    </Typography>

                    {/* {routeName ? (<Chip
                        avatar={<TagFacesIcon />}
                        className="nav-avatar"
                        label={routeName}
                        clickable
                        variant="outlined"
                    />) : null} */}

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Nav)
