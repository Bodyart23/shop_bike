import React, { Component } from 'react';
import './styles.css';
import MainRouter from "../MainRouter";


class App extends Component {

        render() {
        return (
            <div className="background">
                <header className="header" >
                     <div className="font">
                        <h1>BEST BIKES</h1>
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