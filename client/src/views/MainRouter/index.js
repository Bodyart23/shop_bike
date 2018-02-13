import React, {Component} from 'react';
import { Route, Redirect} from 'react-router-dom';
import Product from "../Product";
import Main from "../Main";
import Switch from "react-router-dom/es/Switch";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path = '/main'
                        render = {
                            () => <Main/>}
                    />
                    <Route
                        path='/product'
                        render={ () => <Product/> }
                    />

                    <Redirect to='/main' />
                </Switch>
            </div>
        );
    }
}

export default MainRouter;