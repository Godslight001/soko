import React from 'react';
import {Grid} from '@material-ui/core'

import Items from './items/Items';
import useStyles from './style'

const Product = ({Products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center">
                {Products.map((products) =>(
                    <Grid item key={products.id} xs={12}>
                        <Items products={products} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Product
