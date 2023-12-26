import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeProduct } from "../reducer/cart";
import Footer from "../sanpham/Footer";
import Header from "../sanpham/Header";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [successMessage, setSuccessMessage] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function removeItemInCart(item: any): void {
    dispatch(removeProduct(item));
  }

  function handlePayment(): void {
    dispatch(clearAll({}));
    navigate("/");
  }

  return (
    <div className="container mt-5">
      <Header />
      {successMessage && (
        <div className="alert alert-success" role="alert">
          Thanh toán thành công!
        </div>
      )}
      <h1 className="text-center">Giỏ hàng</h1>
      <div className="row">
        <div className="col col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th>STT</th>
                <th>Hình ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody id="datarow">
              {cart.map(({quantity, product}: any, index: Number) => (
                <tr key={String(index)}>
                  <td className="text-center">{String(index)}</td>
                  <td className="text-center">
                    <img
                      width="50"
                      height="50"
                      src={product.Anh}
                      className="hinhdaidien"
                    />
                  </td>
                  <td className="text-center">{product.Ten_san_pham}</td>
                  <td className="text-center">{quantity}Items</td>
                  <td className="text-center">{product.Gia}%</td>
                  <td className="text-center">{product.Gia* quantity}$</td>
                  <td className="text-center">
                    <a
                      id={`delete_${index}`}
                      data-sp-ma={2}
                      onClick={() => removeItemInCart(product)}
                      className="btn btn-danger btn-delete-sanpham"
                    >
                      <i className="fa fa-trash" aria-hidden="true" /> Xóa
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <a href="/" className="btn btn-warning btn-md mr-3">
              <i className="fa fa-arrow-left" aria-hidden="true" />
              &nbsp;Quay về trang chủ
            </a>
            <a
              href="#"
              onClick={handlePayment}
              className="btn btn-primary btn-md"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              &nbsp;Thanh toán
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
