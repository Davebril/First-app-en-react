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



const RouterApp = () => {
    
    return (
        
        <Router>
            
            <div>
                <NavBar/>
                
                <Switch>
                    
                    <Route path="/category/:id">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/cart">
                        <Cart />
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

