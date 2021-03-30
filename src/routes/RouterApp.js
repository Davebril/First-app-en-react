import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';

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

