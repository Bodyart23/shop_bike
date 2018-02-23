import React, {Component} from 'react';
import moment from "moment";


class Form extends Component {
    state = {
        rowguid: null,
        id: null,
        sellStartDate: moment(),
        sellEndDate: moment(),
        discontinuedDate: moment(),
        name: '',
        productNumber: '',
        makeFlag: false,
        finishedGoodsFlag: false,
        color: '',
        safetyStockLevel: '',
        reorderPoint: '',
        standardCost: '',
        listPrice: '',
        size: '',
        sizeUnitMeasureCode: '',
        weightUnitMeasureCode: '',
        weight: '',
        daysToManufacture: '',
        productLine: '',
        style: '',
        productClass: '',
        productSubcategoryID: '',
        productModelID: '',
        validateArray: [{
            id: 'name',
            isValid: true,
            text: ''
        }, {
            id: 'productNumber',
            isValid: true,
            text: ''
        }, {
            id: 'color',
            isValid: true,
            text: ''
        }, {
            id: 'safetyStockLevel',
            isValid: true,
            text: ''
        }, {
            id: 'safetyLevel',
            isValid: true,
            text: ''
        }, {
            id: 'reorderPoint',
            isValid: true,
            text: ''
        }, {
            id: 'standardCost',
            isValid: true,
            text: ''
        }, {
            id: 'listPrice',
            isValid: true,
            text: ''
        }, {
            id: 'size',
            isValid: true,
            text: ''
        }, {
            id: 'sizeUnitMeasureCode',
            isValid: true,
            text: ''
        }, {
            id: 'weightUnitMeasureCode',
            isValid: true,
            text: ''
        }, {
            id: 'weight',
            isValid: true,
            text: ''
        }, {
            id: 'daysToManufacture',
            isValid: true,
            text: ''
        }, {
            id: 'productLine',
            isValid: true,
            text: ''
        }, {
            id: 'style',
            isValid: true,
            text: ''
        }, {
            id: 'productClass',
            isValid: true,
            text: ''
        }, {
            id: 'productSubcategoryID',
            isValid: true,
            text: ''
        }, {
            id: 'productModelID',
            isValid: true,
            text: ''
        }]
    };

    componentDidMount() {
        if (this.props.itemObj) {
            const {itemObj} = this.props;
            this.setState({
                rowguid: itemObj.rowguid,
                id: itemObj.id,
                sellStartDate: itemObj.SellStartDate,
                sellEndDate: itemObj.SellEndDate,
                discontinuedDate: itemObj.DiscontinuedDate,
                name: itemObj.Name,
                productNumber: itemObj.ProductNumber,
                makeFlag: itemObj.MakeFlag,
                finishedGoodsFlag: itemObj.FinishedGoodsFlag,
                color: itemObj.Color,
                safetyStockLevel: itemObj.SafetyStockLevel,
                reorderPoint: itemObj.ReorderPoint,
                standardCost: itemObj.StandardCost,
                listPrice: itemObj.ListPrice,
                size: itemObj.Size,
                sizeUnitMeasureCode: itemObj.SizeUnitMeasureCode,
                weightUnitMeasureCode: itemObj.WeightUnitMeasureCode,
                weight: itemObj.Weight,
                daysToManufacture: itemObj.DaysToManufacture,
                productLine: itemObj.ProductLine,
                style: itemObj.Style,
                productClass: itemObj.ProductClass,
                productSubcategoryID: itemObj.ProductSubcategoryID,
                productModelID: itemObj.ProductModelID,
            });
        }
        this.isMount = true;
    }

    componentWillMount() {
        this.isMount = false;
    }

    switcherForValid = inputName => {
         let _text = '';
         let _valid = '';
        const {
            name,
            productNumber,
            color,
            safetyStockLevel,
            reorderPoint,
            standardCost,
            listPrice,
            size,
            sizeUnitMeasureCode,
            weightUnitMeasureCode,
            weight,
            daysToManufacture,
            productLine,
            style,
            productClass,
            productSubcategoryID,
            productModelID,
        } = this.state;
        switch (inputName) {
            case 'name': {
                if (name.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'productNumber': {
                if (productNumber.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'color': {
                if (color.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'safetyStockLevel': {
                if (safetyStockLevel.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'reorderPoint': {
                if (reorderPoint.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'standardCost': {
                if (standardCost.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'listPrice': {
                if (listPrice.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'size': {
                if (size.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'sizeUnitMeasureCode': {
                if (sizeUnitMeasureCode.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'weightUnitMeasureCode': {
                if (weightUnitMeasureCode.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'weight': {
                if (weight.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'daysToManufacture': {
                if (daysToManufacture.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'productLine': {
                if (productLine.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'style': {
                if (style.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'productClass': {
                if (productClass.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'productSubcategoryID': {
                if (productSubcategoryID.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            case 'productModelID': {
                if (productModelID.length < 1) {
                    _text = 'This field can be empty';
                    _valid = false;
                } else {
                    _text = '';
                    _valid = true;
                }
                break;
            }
            default: break;
        }
        return {
            _valid: _valid,
            _text: _text
        }
    };
    validate = (inputName) => {
        const {
            validateArray,
        } = this.state;
        if (inputName === 'submit') {
            let flag = true;
            validateArray.forEach(el => {
                const validObject = this.switcherForValid(el.id);
                validateArray.find(function (obj) {
                    return obj.id === el.id;
                }).text = validObject._text;
                validateArray.find(function (obj) {
                    return obj.id === el.id;
                }).valid = validObject._valid;
                if (validObject._valid === false) {
                    flag = false
                }
            });
            if (flag) {
                this.submit();
            } else {
                alert('check fields')
            }
            this.setState({
                validateArray
            });
        } else {
            const validObject = this.switcherForValid(inputName);
            validateArray.find(function (obj) {
                return obj.id === inputName;
            })
            validateArray.find(function (obj) {
                return obj.id === inputName;
            }).valid = validObject._valid;
            this.setState({
                validateArray
            });
        }
    };
    submit = () => {
        const {
            rowguid,
            id,
            name,
            productNumber,
            makeFlag,
            finishedGoodsFlag,
            color,
            safetyStockLevel,
            reorderPoint,
            standardCost,
            listPrice,
            size,
            sizeUnitMeasureCode,
            weightUnitMeasureCode,
            weight,
            daysToManufacture,
            productLine,
            style,
            productClass,
            productSubcategoryID,
            productModelID,
            sellStartDate,
            sellEndDate,
            discontinuedDate,
        } = this.state;
        const objectForSending = {
            rowguid: rowguid,
            id: id,
            SellStartDate: sellStartDate,
            SellEndDate: sellEndDate,
            DiscontinuedDate: discontinuedDate,
            Name: name,
            ProductNumber: productNumber,
            MakeFlag: makeFlag,
            FinishedGoodsFlag: finishedGoodsFlag,
            Color: color,
            SafetyStockLevel: safetyStockLevel,
            ReorderPoint: reorderPoint,
            StandardCost: standardCost,
            ListPrice: listPrice,
            Size: size,
            SizeUnitMeasureCode: sizeUnitMeasureCode,
            WeightUnitMeasureCode: weightUnitMeasureCode,
            Weight: weight,
            DaysToManufacture: daysToManufacture,
            ProductLine: productLine,
            Style: style,
            ProductClass: productClass,
            ProductSubcategoryID: productSubcategoryID,
            ProductModelID: productModelID,
        };

        this.props.submit(objectForSending);
    };

    render() {
        // if (!this.isMount || !this.state.isDataLoading) {
        //     return <Loader show={true}/>
        // }
        const {
            validateArray,
            name,
            productNumber,
            makeFlag,
            finishedGoodsFlag,
            color,
            safetyStockLevel,
            reorderPoint,
            standardCost,
            listPrice,
            size,
            sizeUnitMeasureCode,
            weightUnitMeasureCode,
            weight,
            daysToManufacture,
            productLine,
            style,
            productClass,
            productSubcategoryID,
            productModelID,
            sellStartDate,
            sellEndDate,
            discontinuedDate,
        } = this.state;
        return (
            <form className='main-form'>
                <div>
                    <div className="row">
                        <label htmlFor="name">Name:</label>
                        <input
                            value={name}
                            onBlur={() => this.validate('name')}
                            onChange={e => this.setState({name: e.target.value})}
                            id='name'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'name';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="productNumber">ProductNumber:</label>
                        <input
                            value={productNumber}
                            onBlur={() => this.validate('productNumber')}
                            onChange={e => this.setState({productNumber: e.target.value})}
                            id='productNumber'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'productNumber';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="makeFlag">makeFlag:</label>
                        <input
                            value={makeFlag}
                            onBlur={() => this.validate('makeFlag')}
                            onChange={e => this.setState({makeFlag: e.target.value})}
                            id='makeFlag'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'makeFlag';
                })
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="finishedGoodsFlag">finishedGoodsFlag:</label>
                        <input
                            value={finishedGoodsFlag}
                            onBlur={() => this.validate('finishedGoodsFlag')}
                            onChange={e => this.setState({finishedGoodsFlag: e.target.value})}
                            id='finishedGoodsFlag'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'finishedGoodsFlag';
                })
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="color">color:</label>
                        <input
                            value={color}
                            onBlur={() => this.validate('color')}
                            onChange={e => this.setState({color: e.target.value})}
                            id='color'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'color';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="safetyStockLevel">safetyStockLevel:</label>
                        <input
                            value={safetyStockLevel}
                            onBlur={() => this.validate('safetyStockLevel')}
                            onChange={e => this.setState({safetyStockLevel: e.target.value})}
                            id='name'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'safetyStockLevel';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="reorderPoint">reorderPoint:</label>
                        <input
                            value={reorderPoint}
                            onBlur={() => this.validate('reorderPoint')}
                            onChange={e => this.setState({reorderPoint: e.target.value})}
                            id='reorderPoint'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'reorderPoint';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="standardCost">standardCost:</label>
                        <input
                            value={standardCost}
                            onBlur={() => this.validate('standardCost')}
                            onChange={e => this.setState({standardCost: e.target.value})}
                            id='standardCost'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'standardCost';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="listPrice">listPrice:</label>
                        <input
                            value={listPrice}
                            onBlur={() => this.validate('listPrice')}
                            onChange={e => this.setState({listPrice: e.target.value})}
                            id='listPrice'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'listPrice';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="size">size:</label>
                        <input
                            value={size}
                            onBlur={() => this.validate('size')}
                            onChange={e => this.setState({size: e.target.value})}
                            id='size'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'size';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="sizeUnitMeasureCode">sizeUnitMeasureCode:</label>
                        <input
                            value={sizeUnitMeasureCode}
                            onBlur={() => this.validate('sizeUnitMeasureCode')}
                            onChange={e => this.setState({sizeUnitMeasureCode: e.target.value})}
                            id='sizeUnitMeasureCode'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'sizeUnitMeasureCode';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="weightUnitMeasureCode">weightUnitMeasureCode:</label>
                        <input
                            value={weightUnitMeasureCode}
                            onBlur={() => this.validate('weightUnitMeasureCode')}
                            onChange={e => this.setState({weightUnitMeasureCode: e.target.value})}
                            id='weightUnitMeasureCode'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'weightUnitMeasureCode';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="weight">weight:</label>
                        <input
                            value={weight}
                            onBlur={() => this.validate('weight')}
                            onChange={e => this.setState({weight: e.target.value})}
                            id='weight'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'weight';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="productLine">productLine:</label>
                        <input
                            value={productLine}
                            onBlur={() => this.validate('productLine')}
                            onChange={e => this.setState({productLine: e.target.value})}
                            id='productLine'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'productLine';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="style">style:</label>
                        <input
                            value={style}
                            onBlur={() => this.validate('style')}
                            onChange={e => this.setState({style: e.target.value})}
                            id='style'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'style';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="productClass">productClass:</label>
                        <input
                            value={productClass}
                            onBlur={() => this.validate('productClass')}
                            onChange={e => this.setState({productClass: e.target.value})}
                            id='productClass'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'productClass';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="productSubcategoryID">productSubcategoryID:</label>
                        <input
                            value={productSubcategoryID}
                            onBlur={() => this.validate('productSubcategoryID')}
                            onChange={e => this.setState({productSubcategoryID: e.target.value})}
                            id='productSubcategoryID'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'productSubcategoryID';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="productModelID">productModelID:</label>
                        <input
                            value={productModelID}
                            onBlur={() => this.validate('productModelID')}
                            onChange={e => this.setState({productModelID: e.target.value})}
                            id='productModelID'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'productModelID';
                }).text
            }
          </span>
                    </div>
                    <div className="row">
                        <label htmlFor="daysToManufacture">daysToManufacture:</label>
                        <input
                            value={daysToManufacture}
                            onBlur={() => this.validate('daysToManufacture')}
                            onChange={e => this.setState({daysToManufacture: e.target.value})}
                            id='daysToManufacture'
                            type="text"
                        />
                        <span className='lb-error'>
            {
                validateArray.find(function (obj) {
                    return obj.id === 'daysToManufacture';
                }).text
            }
          </span>
                    </div>
                    <div className="row third-left">
                        <label htmlFor="sellStartDate">sellStartDate</label>
                        <input
                            onChange={ e => this.setState({ sellStartDate: e.target.value }) }
                            value={ moment(sellStartDate).format('YYYY-MM-DD') }
                            id='sellStartDate'
                            type="date"
                        />
                    </div>
                    <div className="row third-left">
                        <label htmlFor="sellEndDate">sellEndDate</label>
                        <input
                            onChange={ e => this.setState({ sellEndDate: e.target.value }) }
                            value={ moment(sellEndDate).format('YYYY-MM-DD') }
                            id='sellEndDate'
                            type="date"
                        />
                    </div>
                    <div className="row third-left">
                        <label htmlFor="discontinuedDate">discontinuedDate</label>
                        <input
                            onChange={ e => this.setState({ discontinuedDate: e.target.value }) }
                            value={ moment(discontinuedDate).format('YYYY-MM-DD') }
                            id='discontinuedDate'
                            type="date"
                        />
                    </div>
                </div>
                <button
                    style={ { display: 'block', margin: '0 auto' } }
                    type='button'
                    onClick={ () => this.validate('submit') }
                >Submit
                </button>
            </form>
        )
    }
}

export default Form;