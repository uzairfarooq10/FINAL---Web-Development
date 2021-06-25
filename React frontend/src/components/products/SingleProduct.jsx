import { Grid, Button } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';
import productService from '../../Services/ProductsService';
import userService from '../../Services/UserService';
const SingleProduct = (props) => {
    const {product, onDelete, history} = props
    console.log(props);
    return (
        <Grid item xs={4}>
            <h2>{product.teamA}
                {userService.isAdmin() &&
                <>
                <Button variant="contained" color="secondary" onClick={e=>{
                    console.log("Navigate to update");
                    history.push("/products/update/" + product._id);
                }}>Edit</Button>
                <Button variant="contained" color="warning" onClick={(e)=> {
                    productService
                    .deleteProduct(product._id)
                    .then((data) => {
                        console.log(data);
                        onDelete();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }}>Delete</Button>
                </> }
            </h2>
            <h2> vs {product.teamB}</h2>
            <h4> City :  {product.city}</h4>
            <h4> Date : {product.date}</h4>
            <hr/>
        </Grid>
    );
}
 
export default withRouter(SingleProduct);