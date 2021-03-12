// eslint-disable-next-line no-unused-vars
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { observer } from "mobx-react-lite"
import Link from '@material-ui/core/Link'
import clsx from 'clsx'
import Badge from '@material-ui/core/Badge'
import { ProductModel } from './Models'
import { log, onerror,copy } from 'x-utils-es'
import { NavLink, withRouter } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1)
    },
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    shape: {
        backgroundColor: theme.palette.primary.secondary,
        width: 12,
        height: 12,
        marginRight: '5px'
    },
    shapeCircle: {
        borderRadius: '50%'
    }
}))
  
const Product = observer(({ mobxstore, item,history }) => {
    const baseUrl = '/app/exchanges'
    const prod = new ProductModel('Product',item,baseUrl )
    log('history??', history)
    const classes = useStyles()
  
    const Circle = (prop) => (<div className={clsx(classes.shape, classes.shapeCircle)}><p className="text-secondary pt-1 small strong ">{prop.rank}&nbsp;&nbsp;</p></div>)

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item >
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={prod.item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container className="pt-4">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className="my-0">
                                    <strong>{prod.item.name}</strong>
                                </Typography>
                                <Typography variant="body2" gutterBottom className="my-0">
                                    {prod.item.country}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    <Link 
                                        target=" _blank"
                                        className="px-0 btn btn-sm btn-muted text-muted"
                                        href={prod.item.url} onClick={(e) => {
                                        }}>
                                        URL: {prod.item.url}
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item className="my-0">
                            
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                <NavLink
                                    className="btn btn-sm btn-secondary text-white"
                                    activeClassName="is-active"
                                    to={prod.detailUrl}
                                    exact>
                                    Detail
                                </NavLink>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Badge color="primary" overlap="circle" badgeContent=" " variant="dot">
                                <Circle rank={prod.item.trust_score_rank}/>
                            </Badge>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
})
                    
export default Product
