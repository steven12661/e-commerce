import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/e-commerce-logo.png';
import useStyles from './navbarStyles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commmerce.js" height="25px" className={classes.image} />
                        E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton  aria-label= "Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
