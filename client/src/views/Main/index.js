import React, {Component} from 'react';
import {getAllBikes, getTopbikes, getSearchCount} from "../../api";
import Loader from '../../components/Loader';
import './styles.css';
import Card from "../../components/Card";

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
        getTopbikes().then(data => {
            this.setState({
                data: data,
                loading: false
            });
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log(err);
        });
    }

    loadAllBikes() {
        getAllBikes().then(data => {
            this.setState({
                data: data,
                loading: false
            });
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log(err);
        });
    }


    searchBtnHandler = (countSerch) => {
        this.setState({
            loading: true
        });
        const {count} = this.state;
        if (this.searchInput.value === '') {
            alert('Fill in the field');
            this.setState({
                loading: false
            });
            return;
        }
        getSearchCount(this.searchInput.value, countSerch ? countSerch : 0).then(data => {
            this.setState({
                searchResult: data,
                data: null,
                loading: false,
                count: countSerch ? count + 1 : 0
            });
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log('error', err);
        });
    };

    render() {
        const {data, searchResult, loading} = this.state;


        if (loading) {
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
                        onClick={() => this.searchBtnHandler()}
                    >Search
                    </button>
                </div>
                <div> {
                    data && !searchResult ?
                        data.map((el, index) => {
                            return (
                                <div className="content"
                                     key={index}>
                                    <Card el={el}/>
                                </div>
                            );
                        }) : (searchResult.length > 0 && !data ? searchResult.map((el, index) => {
                            return (
                                <div className="content"
                                     key={index}>
                                    <Card el={el}/>
                                </div>
                            )
                        }) : <div>No data find...</div>)
                }
                </div>
                {
                    loading && <Loader show={true}/>
                }
                <button className="button" onClick={() => this.loadAllBikes()}>GetAll</button>
            </div>

        )


    }
}

export default Main;
