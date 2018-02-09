import React, {Component} from 'react';
import {getAllBikes, getBikes} from "../../api";
import Loader from '../../components/Loader';
import './styles.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        }
    }

    componentDidMount() {
        getBikes().then(data => {
            this.setState({
                data: data,
                loading: false
            });
            this.isMount = true;
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log(err);
        });
        this.isMount = true;
    }

    componentDidMountALL() {
        getAllBikes().then(data => {
            this.setState({
                data: data,
                loading: false
            });
            this.isMount = true;
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log(err);
        });
        this.isMount = true;
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {
        const {data, loading} = this.state;
        const {goTo} = this.props;

        if (!this.isMount) {
            return <Loader show={true}/>;
        }


        return (
            <div className="container">
                <div> {
                    data.map((el, index) => {
                        return (
                            <div className="content"
                                 key={index}
                                 onClick={() => goTo('/product', el.id)}>
                                <div className="image">
                                    <img src={'data:image/gif;base64,' + el.productPhotos[0].largePhoto} alt={el.name}/>
                                </div>
                                <div className="content">
                                    <a className="header"> <span>{el.name}</span></a>
                                    <div className="meta">
                                        <span className="date">Price: {el.listPrice}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {
                    loading && <Loader show={true}/>
                }
                <button className="button" onClick={() => this.componentDidMountALL()}>GetAll</button>
            </div>

        )


    }
}

export default Main;
