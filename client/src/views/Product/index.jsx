import React, {Component} from 'react';
import {getBike, removeBike, updateBike} from "../../api";
import Loader from '../../components/Loader';
import './styles.css';
import Dialog from "../../components/Dialog";
import Form from "../../components/Form";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

class Product extends Component {
    state = {
        loading: true,
        itemObj: null,
        tabIndex: 0,
        dialogVisibility: false,
        removeModalVisibility: false
    };
    submit = (obj) => {
        updateBike(obj).then(data => {
            if (data) {
                getBike(data).then(data => {
                    this.setState({
                        dialogVisibility: false,
                        itemObj: data
                    });
                }).catch(err => {
                    console.log('error', err);
                });
            } else if (data.status === 500) {
                this.setState({
                    dialogVisibility: false,
                });
                alert('Some thing went wrong..')
            }
        }).catch(err => {
            console.log('error', err);
            alert('Some thing went wrong..')
        });
    };
    doRemove = id => {
        const ID = parseInt(id, 10);
        removeBike(ID).then(data => {
            this.props.goTo('/main', null);
        }).catch((err) => {
            console.log('error', err);
            alert('Some thing went wrong..')
        })
    };

    componentDidMount() {
        const href = window.location.href;
        const id = href.split('?id=')[1];
        if (id) {
            getBike(id).then(data => {
                this.setState({
                    itemObj: data
                });
            }).catch(err => {
                console.log('error', err);
            });
            this.isMount = true;
        }
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {

        if (!this.isMount) {
            return <Loader show={true}/>;
        }
        const {dialogVisibility, itemObj} = this.state;
        return (
            <div className="container">
                        {/*<img src={'data:image/gif;base64,' + itemObj.productPhotos[0].largePhoto} alt={itemObj.name}/>*/}
                        <ul>
                            <li>Name: <span>{itemObj.name}</span></li>
                            <li>Product Number: <span>{itemObj.productNumber}</span></li>
                            <li>Price: <span>{itemObj.listPrice}</span></li>
                            <li>Color: <span>{itemObj.color}</span></li>
                            <li>StandardCost: <span>{itemObj.standardCost}</span></li>
                            <li>Size: <span>{itemObj.size}</span></li>
                            <li>Weight: <span>{itemObj.weight}</span></li>
                            <li>ProductLine: <span>{itemObj.productLine}</span></li>
                            <li>Class: <span>{itemObj.productClass}</span></li>
                            <li>Style: <span>{itemObj.style}</span></li>
                            <li>SellStartDate: <span>{itemObj.sellStartDate}</span></li>
                            <li>SellEndDate: <span>{itemObj.sellEndDate}</span></li>
                        </ul>
                <div
                    style={{margin: '10px 0 0 0'}}
                    className="btn-group">
                    <Button
                        style={{marginRight: '15px'}}
                        onClick={() => this.setState({dialogVisibility: true})}
                        blue
                    >
                        Update</Button>
                    <Button
                        onClick={() => this.setState({removeModalVisibility: true})}
                        red
                    >Remove</Button>
                </div>
                <Dialog
                    className='form-dialog'
                    title='Edit product'
                    width={565}
                    close={() => this.setState({dialogVisibility: false})}
                    show={dialogVisibility}
                >
                    <Form
                        itemObj={itemObj}
                        submit={obj => this.submit(obj)}
                    />
                </Dialog>
                <Dialog
                    close={() => this.setState({removeModalVisibility: false})}
                    show={this.state.removeModalVisibility}
                    title='Remove product'
                    width={565}
                >
                    <p style={{fontSize: '18px', marginBottom: '15px'}}>Are you sure?</p>
                    <div
                        style={{paddingBottom: '30px'}}
                        className="btn-group"
                    >
                        <Button
                            style={{marginRight: '20px'}}
                            red
                            onClick={() => this.doRemove(itemObj.id)}>
                            Yes
                        </Button>
                        <Button
                            green
                            onClick={() => this.setState({removeModalVisibility: false})}
                        >No
                        </Button>
                    </div>
                </Dialog>
            </div>


        );

    }
}

export default Product;
