import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionAddProductRequest, actionGetProductRequest, actionUpdateProductRequest} from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            console.log(id);
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
        console.log(nextProps);
        var {itemEditing} = nextProps;
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        console.log(this.state);
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id: id,
            name: txtName, 
            price: txtPrice,
            status: chkbStatus
        };

        if(id)
            this.props.onUpdateProduct(product);
        else
           this.props.onAddProduct(product);
        history.goBack();
    }

    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <legend>Sản phẩm</legend>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" value={txtName} name='txtName' onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="text" className="form-control" value={txtPrice} name='txtPrice' onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value={chkbStatus} checked={chkbStatus} name='chkbStatus' onChange={this.onChange}/>
                            Còn hàng
                        </label>
                    </div>
                    
                    <Link to='/product-list' className='btn btn-warning' style={{marginRight: 10}}>Return</Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDipatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actionAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actionGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actionUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(ProductActionPage);
