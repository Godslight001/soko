import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        <MenuItem>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
            </Badge>
            </IconButton>
            <p>Cart</p>
        </MenuItem>
        </Menu>
    );
    return (
        <div>
            <AppBar position='fixed' elevation='1' className={classes.appbar} color='inherit'>
                <Toolbar>
                    <div>
                        <Typography className={classes.title}>
                            <img src={logo} height='50px' alt='soko default' className={classes.image}/>
                            <Grid>
                                <Typography variant='h6' className={classes.title} color='inherit'>
                                    Target
                                </Typography>
                                <Typography variant='body2' className={classes.title} color='inherit'>
                                    Cham Towers, Plot 12 Nkruma Rd, Kampala UG
                                </Typography>
                            </Grid>
                        </Typography>
                    </div> 
                    <div className={classes.grow}></div>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label='show items in bag' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <LocalMallOutlinedIcon/>
                            </Badge>
                            <Typography variant='body2' className={classes.title} color='inherit'>
                                Bag
                            </Typography>
                        </IconButton>
                        <IconButton aria-label='show items in bag' color='inherit'>
                            <Badge color='secondary'>
                                <ListAltIcon/>
                            </Badge>
                            <Typography variant='body2' className={classes.title} color='inherit'>
                                Orders
                            </Typography>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;
