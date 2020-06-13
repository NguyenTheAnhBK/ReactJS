import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        var products = [];
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form action="" method="POST" role="form">
                    <legend>Sản phẩm</legend>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" />
                            Còn hàng
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
