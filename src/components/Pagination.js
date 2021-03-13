import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2)
        }
    }
}))

export default function PaginationBottom(props) {
    const classes = useStyles()
    const { perPage, history, pageState } = props
    const [page, setPage] = React.useState(1)
    const handleChange = (env, value) => {    
        setPage(value)   
        console.log('push?', value)
        history.push({ pathname: `/app/exchanges/${value}` }) 
    }

    return ( 
        <div data-testid="pagination" className={classes.root + ' row'}>
            <div className="col-12 mt-1 mb-5">
                <Pagination className="d-flex justify-content-center" page={(pageState || page)} count={perPage} variant="outlined" shape="rounded" onChange={ handleChange}/>
            </div>       
        </div>
    )
}
