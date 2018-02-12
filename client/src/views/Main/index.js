import React, {Component} from 'react';
import {getAllBikes, getTopbike,getSearchCount} from "../../api";
import Loader from '../../components/Loader';
import './styles.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            obj: null
        }
    }

    componentDidMount() {
        getTopbike().then(data => {
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
    searchBtnHandler = (btnCount) => {
        this.setState({
            loading: true
        });
        const { count } = this.state;
        if (this.searchInput.value === '') {
            alert('Fill in the field');
            this.setState({
                loading: false
            });
            return;
        }
        getSearchCount(this.searchInput.value, btnCount ? btnCount : 0).then(data => {
            this.setState({
                searchResult: data,
                data: null,
                loading: false,
                count: btnCount ? count + 1 : 0
            });
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log('error', err);
        });
    };

    render() {
        const { data,searchResult,  loading } = this.state;
        const { goTo } = this.props;

        if (!this.isMount) {
            return <Loader show={true}/>;
        }


        return (
            <div className="container">
                <div>
                    <input
                        className="rounded"
                        type="text"
                        placeholder='Enter searching item...'
                        ref={(input) => this.searchInput = input}
                    />
                    <button
                        className="button-search"
                        onClick={ () => this.searchBtnHandler() }
                    >Search</button>
                </div>
                <div> {
                    data && !searchResult ?
                    data.map((el, index) => {
                        return (
                            <div className="content"
                                 key={index}
                                 onClick={() => goTo('/product', el.id)}>
                                <div>
                                    <img src={'data:image/gif;base64,' + el.productPhotos[0].largePhoto} alt={el.name}/>
                                </div>
                                <div>
                                    <a className="font-card"> <span>{el.name}</span></a>
                                    <div>
                                        <span ><b>Price: {el.listPrice}</b></span>
                                    </div>
                                </div>
                            </div>
                        );
                    }): (searchResult.length > 0 && !data ? searchResult.map((el, index) => {
                            return(
                                <div
                                    onClick={ () => goTo('/product', el.id) }
                                    className="content"
                                    key={ index }
                                >
                                    <img src={ 'data:image/gif;base64,' + el.productPhotos[0].largePhoto } alt={ el.name } />
                                    <div>
                                        <a> <span>{ el.name }</span></a>
                                        <div> <span >Price: {el.listPrice}</span>
                                        </div>
                                        </div>
                                    </div>
                            )
                        }) : <div>No data find...</div>)
                    }
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
