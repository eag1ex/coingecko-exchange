import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SlackPng from '../../theme/images/slack_icon.png'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto'
    },
    image: {
        maxWidth: 20,
        height: 'auto'
    }
}))
 
export default function SlackIcon() {
    const classes = useStyles()

    return (
        <div className={classes.root + ' m-0'}>
            <img className={classes.image} src={SlackPng} alt='Slack' />
        </div>
    )
}
