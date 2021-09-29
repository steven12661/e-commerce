import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />

                <CardActions disableSpacing className={classes.cardActions}>
                    <Tooltip title="Add to Cart">
                        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product
