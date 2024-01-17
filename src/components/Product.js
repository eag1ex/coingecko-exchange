import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { observer } from "mobx-react-lite"
import Link from '@material-ui/core/Link'
import { ProductModel } from './product.models'
import { NavLink } from "react-router-dom"
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
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
    listGoup: {
        '& li': {
            border: 'none'
        }
    }
}))
  
const Product = observer(({ mobxstore, item, history, page }) => {
    const baseUrl = `/app/exchanges/${page}`
    const prod = new ProductModel('Product', item, baseUrl)
    const classes = useStyles()

    return (
        <div className={classes.root + ' product-item my-4'}>
            <Paper className={classes.paper + ' product-paper'}>
                <Grid container spacing={2}>
                    <Grid item className='product-grid'>
                        <ButtonBase className={classes.image + ' m-auto button-base'}>
                            <img className={classes.img} alt="complex" src={prod.item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container className="pt-4">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className="my-0 larger">
                                    <strong>{prod.item.name}</strong>
                                </Typography>
                                <Typography variant="body2" gutterBottom className="my-0">
                                    <span className="text-muted strong">Country: </span>{prod.item.country}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    <span className="text-muted align-left strong">URL: </span>  
                                    <Link 
                                        target=" _blank"
                                        className="px-0 btn btn-sm text-primary align-left smaller"
                                        href={prod.item.url}>
                                        {prod.item.url}
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item className="my-0">
                            
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <NavLink
                                        className="btn btn-sm btn-secondary text-white detail-link"
                                        activeClassName="is-active"
                                        to={prod.detailUrl}
                                        exact>
                                    Detail
                                    </NavLink>
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item className={classes.listGoup}>
                            <ul className="list-group list-group-horizontal p-0">
                                <li className="list-group-item py-0 pl-0 pr-1 mt-1">{prod.item.trust_score_rank}</li>
                                <li className="list-group-item p-0 "><TrendingUpIcon fontSize="small" color="primary" /></li>
                            </ul>                                    
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
})
                    
export default Product
