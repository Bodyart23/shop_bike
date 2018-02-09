import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Product from './../Product';
import Main from '../Main';
import './styles.css';


class App extends Component {
    goTo = (path, id) => {
        const {history} = this.props;
        const {pathname} = history.location;

        if (!id) {
            history.push(path)
        }
        else if (pathname !== path) {
            history.push(path + '?id=' + id)
        }
    };

    render() {
        return (
            <div className="background">
                <header className="header" >
                    <div >
                     <div className="font">
                        <h1>BEST BIKES</h1>
                     </div>
                    </div>
                </header>
                <div>
                    <div>
                        <Switch>
                            <Route
                                path = '/main'
                                render = {
                                    () => <Main goTo = {(path, id) => this.goTo(path, id)} />}
                            />
                            <Route
                                path='/product'
                                render={ () => <Product goTo = { (path) => this.goTo(path, null) } /> }
                            />

                            <Redirect to='/main' />
                        </Switch>
                    </div>
                </div>
                <footer className="container">
                    <div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;