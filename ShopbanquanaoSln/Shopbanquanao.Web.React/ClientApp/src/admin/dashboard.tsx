import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { firestore } from "../firebaseConfig";
import { Link } from "react-router-dom";
import axios from 'axios';
interface Product {
  id: string;
  image: string;
  price: number;
  categoryId: 1;
  name: string;
}

const AdminPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
    const fetchData = async () => {
        axios.get(`http://localhost:5047/GetAllProducts`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts(res.data);
            })
    };
    useEffect(() => {
   
    

    // Gọi hàm fetchData
    fetchData();
  }, []);
    const handleDeleteProduct = async (docId: any) => {
        axios.delete(`http://localhost:5047/ProductDelete/` + docId)
            .then(res => {
                console.log(res);
                console.log(res.data);
                fetchData();
            })
    try {
      await firestore.collection("Product").doc(docId).delete();
      setProducts(products.filter((product) => product.id !== docId));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };
  return (
    <div className="div-all-sanpham">
      <div className="row custom-box">
        <div className="col-2 header-span">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          <b>Quản lý sản phẩm</b>
        </div>
        <div className="col-4 text-right"></div>
        <div className="col-6 text-right">
          <ul>
            <li>
              <a href="#">
                <b>Nhân viên</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b>Điểm danh</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b>Tiền Lương</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b>Lịch công tác</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b>Sự kiện</b>
              </a>
            </li>
            <li>
              <a href="#">
                <p>
                  tài khoản
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-2">
          <b>Tìm kiếm nhân viên:</b>
        </div>
        <div className="col-10">
          <div className="date">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
            </span>{" "}
            Thứ tư, 26/5/2023 | 16:48:23
          </div>
        </div>
      </div>
      <div className="input-group mb-3 pt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập tên sản phẩm cần tìm"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
      </div>
      <div className="row">
        <div className="col">
          <b>Các chức năng chính:</b>
        </div>
      </div>
      <div className="row pt-2 justify-content-lg-end">
        <ul className="function">
          <div className=" ">
            <Link to="/add">
              {" "}
              {/* Use Link component for navigation */}
              <button className="btn btn-success btn-sm">Add Product</button>
            </Link>
          </div>
        </ul>
      </div>
      <div className="mt-2">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Tính năng</th>
            </tr>
          </thead>
          {products.map((product) => (
            <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <img
                    src={product.image}
                    alt="Hình ảnh sản phẩm"
                    style={{ width: "200px", height: "200px" }}
                  />
                </td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/edit/${product.id}`}>
                    <button className="btn btn-info btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
