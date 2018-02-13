import React, {Component} from 'react';
import {getBike} from "../../api";
import Loader from '../../components/Loader';
import './styles.css';
import Link from "react-router-dom/es/Link";
class Product extends Component{
    state = {
        loading: true,
        itemObj: null
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

    render(){

        if (!this.isMount) {
            return <Loader show={ true }/>;
        }
        const {itemObj} = this.state;
        return(
            <div className="container-product" >
                <div>
                    <div>
                        <img src={ 'data:image/gif;base64,' + itemObj.productPhotos[0].largePhoto } alt={ itemObj.name }/>
                        <ul>
                            <li>Name: <span>{ itemObj.name }</span></li>
                            <li>Product Number: <span>{ itemObj.productNumber }</span></li>
                            <li>Price: <span>{ itemObj.listPrice }</span></li>
                            <li>Color: <span>{ itemObj.color }</span></li>
                            <li>StandardCost: <span>{ itemObj.standardCost }</span></li>
                            <li>Size: <span>{ itemObj.size }</span></li>
                            <li>Weight: <span>{ itemObj.weight }</span></li>
                            <li>ProductLine: <span>{ itemObj.productLine }</span></li>
                            <li>Class: <span>{ itemObj.productClass }</span></li>
                            <li>Style: <span>{ itemObj.style }</span></li>
                            <li>SellStartDate: <span>{ itemObj.sellStartDate }</span></li>
                            <li>SellEndDate: <span>{ itemObj.sellEndDate }</span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to={('/main')}><button className="button-close-product" >Close</button></Link>
                </div>
                </div>

        );

    }
}
export default Product;
