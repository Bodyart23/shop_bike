import React, {Component} from 'react';
import './styles.css';
import MainRouter from "../MainRouter";
import Link from "react-router-dom/es/Link";


class App extends Component {

    render() {
        return (
            <div className="background">
                <header className="header">
                    <div className="font">
                        <h1>BEST BIKES</h1>
                        {
                            !window.location.href.includes('create') &&
                            <Link to={('/create')}>
                                <button className="button-close-product">Add new</button>
                            </Link>
                        }

                    </div>
                </header>
                <div>
                    <MainRouter/>
                </div>
                <footer className="container">
                </footer>
            </div>
        );
    }
}

export default App;