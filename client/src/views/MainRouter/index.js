import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Product from "../Product";
import Main from "../Main";
import Switch from "react-router-dom/es/Switch";
import Create from "../Create";

class MainRouter extends Component {
    goTo = (path, id) => {
        const { history } = this.props;
        const { pathname } = history.location;
        if(!id){
            history.push(path);
        }
        else if (pathname !== path) {
            history.push(path+'?id='+id);
        }
    };
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path='/main'
                        render={
                            () => <Main/>}
                    />
                    <Route
                        path='/product'
                        render={() => <Product/>}
                    />
                    <Route path='/create'
                    render ={() => <Create/>}/>
                    <Redirect to='/main'/>
                </Switch>
            </div>
        );
    }
}

export default MainRouter;