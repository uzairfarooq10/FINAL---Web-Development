import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import ContactUs from "./components/products/ContactUs";
import NewProduct from "./components/products/NewProduct";
import Products from "./components/products/Products";
import UpdateProduct from "./components/products/UpdateProduct";
import TopMenu from "./components/TopMenu";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <div>
    
      <TopMenu/>
      <ToastContainer />
      <Switch>
        <Route path="/login" exact component={Login}/>  
        <Route path="/register" exact component={Register}/>  

        <Route path="/contact-us" exact component={ContactUs}/>  
        <Route path="/products/new" exact component={NewProduct}/>
        <Route path="/products/update/:id" exact component={UpdateProduct}/>
        
        <Route path="/products" exact component={Products}/>
        <Route path="/not-found" exact component={NotFound} />
        <Route path="/" exact component={LandingPage}/>
        <Redirect to="/not-found" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
