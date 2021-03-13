import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import RedditIcon from '@material-ui/icons/Reddit'
import TelegramIcon from '@material-ui/icons/Telegram'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    ListItem: {
        width: 'inherit',
        maxWidth: '40px'
    }
}))

export default function SocialMedia(props) {
    const classes = useStyles()
    const { socialList } = props
    
    function Alink(props) {
        return <ListItem className={classes.ListItem + ' px-0'} button component="a" {...props} target=" _blank" />
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders" className="d-flex flex-row">
                {socialList.map((item, inx) => {
                    return (<Alink key={inx} href={item.url}>
                        <ListItemIcon>
                            {item.type === 'facebook' ? (<FacebookIcon color="primary"/>)
                                : item.type === 'twitter' ? (<TwitterIcon color="primary"/>)
                                    : item.type === 'twitter' ? (<RedditIcon color="primary"/>)
                                        : item.type === 'telegram' ? (<TelegramIcon color="primary"/>) : null    
                            }

                        </ListItemIcon>
                    </Alink>)
                })} 
            </List>
            <Divider />
        </div>
    )
}
