import { Fab, Grid } from '@material-ui/core';
import React from 'react';
import SingleProduct from './SingleProduct';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import productService from '../../Services/ProductsService';
import userService from '../../Services/UserService';
const useStyles = makeStyles((theme) => ({
    addBtn: {
        position:"absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),

    },  
  }));

  
const Products = (props) => {
    const [product, setProducts] = React.useState([]);

    const getData = () => {
        productService.getProduct()
        .then((data) => {
            setProducts(data);
        }).catch((error) => {
            console.log(error);
        })
    };
    // getData();
    const handleNewProductBtn = () => {
        console.log(props);
        props.history.push("/products/new");
    };
    const classes = useStyles();
    React.useEffect(getData, []);
    return (
        <div>
            <h1>Matches Details</h1>
            {userService.isLoggedIn() && (<Fab onClick={handleNewProductBtn} color="primary" aria-label="add" className={classes.addBtn}>
                <AddIcon />
            </Fab>)}
            
            {product.length === 0? <p>There are no Products</p>:
            <Grid container spacing={4}>
                {
                    product.map((product, index) => {
                        return <SingleProduct key={index} product={product} onDelete={getData} />
                    })
                }
            </Grid> }


        </div>
     );
}
 
export default Products;