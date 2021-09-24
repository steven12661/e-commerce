import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u7khoqev6hy2xgsllrnb/revolution-5-running-shoes-szF7CS.png' },
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image:'https://tiendasishop.com/media/catalog/product/m/y/mydc2e_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700' }

]
const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=> (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )

}

export default Products;