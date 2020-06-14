import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionFetchProductsRequest, actionDeleteProductRequest} from './../../actions/index';

class ProductListPage extends Component {
    //sau khi render chạy xong thì componentDidMount sẽ đc chạy (licycle hook)
    componentDidMount(){
        console.log('componentDisMount');
        this.props.fetchAllProducts();
    }
 
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((p, index)=> {
            if(p.id === id)
                result = index;
        });
        return result;
    }

    render() {
        console.log('render');
        //var {products} = this.props;
        var {products} = this.props;
        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to='/product/add' className="btn btn-info mb-10">+</Link>
                </div>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </React.Fragment>
        );
    }

    showProducts(products){
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
               return (<ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>) 
            });
        }
        return result;
    }
}

//Lấy tất cả props từ store
const mapStateToProps = state => {
    return {
        products: state.products
    };
}

//Lưu lên store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actionFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actionDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
