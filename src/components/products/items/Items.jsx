import React from 'react';
import {CardActions, Typography, IconButton, Grid, ButtonBase} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

const Items = ({products, onAddToCart}) => {
    const classes= useStyles();
    return (
        <div className={classes.root} >
            <div className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={products.media.source} alt="product"/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <Typography variant='h6' gutterBottom>
                                    {products.name}
                                </Typography>
                                <Typography variant='body2'>
                                    {products.price.formatted_with_symbol}
                                </Typography>
                            </Grid>
                            
                        </Grid>
                        <CardActions disableSpacing className={classes.cardActions}>
                                <IconButton aria-label='Add to bag' onClick={()=>onAddToCart(products.id, 1)}>
                                    <AddShoppingCart/>
                                </IconButton>
                            </CardActions>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Items
