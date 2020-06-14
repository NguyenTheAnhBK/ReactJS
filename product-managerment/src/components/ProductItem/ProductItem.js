import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (productId) => {
        if(confirm('You want delete this product ?')){ //eslint-disable-line
            //console.log(productId);
            this.props.onDelete(productId);
        }
    }

    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'còn hàng' : 'hết hàng';
        var statusClass = product.status ? 'success' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Sửa</Link>
                    <button className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
