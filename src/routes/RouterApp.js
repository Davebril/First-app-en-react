import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Cart from '../Cart/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';
import CheckOut from '../components/CheckOut';



const RouterApp = () => {
    
    return (
        
        <Router>
            
            <div>
                <NavBar/>
                
                <Switch>
                    
                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/category/:id">
                   
                        <ItemListContainer/>
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/checkout">
                        <CheckOut/>
                    </Route> 
                    <Route path="/">
                        <ItemListContainer/>
                    </Route>
                    

                </Switch>

                    <Redirect to='/'/>
            </div>
            
        </Router>
        
    );
};

export default RouterApp;

