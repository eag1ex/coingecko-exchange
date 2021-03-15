import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { observer } from "mobx-react-lite"
import Link from '@material-ui/core/Link'
import { useParams } from "react-router-dom"
import withProduct from '../components/withProduct.hoc'
import { ProductModel } from '../components/product.models'
import SocialMedia from '../components/SocialMedia'
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
        //  margin: 'auto',
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

const ProductDetail = observer(({ mobxstore, onRouteChange }) => {

    const { productID, page, name } = useParams()
    const baseUrl = `/app/exchanges/${page}`
    const prod = new ProductModel('productDetail', mobxstore.productDetail, baseUrl)
    const [didLoad, setDidLoad] = React.useState(false)

    React.useEffect(() => {
        if (!didLoad) {
            let first = { name, page, route: name + '/' + page }
            onRouteChange(first, productID)
            setDidLoad(true)
        }
    }, [didLoad, onRouteChange, name, page, productID])

    const classes = useStyles()

    return (
        <div className={classes.root + ' mt-5 product-detail my-4'} data-testid="product-detail">
            <Paper className={classes.paper + ' product-paper'}>
                <Grid container spacing={2} >
                    <Grid item className='product-grid'> 
                        <ButtonBase className={classes.image + ' m-auto button-base'}>
                            <img className={classes.img + ' m-auto'} alt="complex" src={prod.item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container className="pt-4">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className="my-0 larger">
                                    <strong>{prod.item.name}</strong>
                                </Typography>
                                <Typography variant="body2" gutterBottom className="my-1">

                                    <React.Fragment> 
                                        {prod.item.description ? (<><span className="text-muted cf strong">Description:</span><span className=" mt-0">{prod.item.description}</span></>) : null}
                                    </React.Fragment>
           
                                </Typography>

                                <Typography variant="body2" gutterBottom className="my-1">
                                    <span className="text-muted strong">Country: </span>{prod.item.country}
                                </Typography>

                                <Typography variant="body2" gutterBottom className="my-1">
                                    <span className="text-muted strong">Trust Rank: </span>{prod.item.trust_score_rank}
                                </Typography>

                                <Typography variant="body2" gutterBottom className="my-1">
                                    <span className="text-muted strong">Established:</span> {prod.item.year_established}
                                </Typography>
                                
                                { prod.item.url ? (<Typography variant="body2" color="textSecondary" >
                              
                                    <span className="text-muted align-left strong">URL: </span>                               
                                    <Link
                                        target=" _blank"
                                        className="px-0 btn btn-sm text-primary align-left smaller"
                                        href={prod.item.url}>
                                        {prod.item.url}
                                    </Link>
                                </Typography>) : null}

                                {prod.socialList.length ? (<div ariant="body2" className="socialmedia-list">
                                    <SocialMedia socialList={prod.socialList}/>
                                </div>) : null}

                            </Grid>

                            <Grid item className="my-0">
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <NavLink
                                        className="btn btn-sm btn-secondary text-white"
                                        activeClassName="is-active"
                                        to={prod.baseUrl}
                                        exact>
                                        Back to Exchanges
                                    </NavLink>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
})

export default withRouter(withProduct(ProductDetail))
