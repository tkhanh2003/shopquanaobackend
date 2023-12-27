import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../firebaseConfig";
import axios from "axios";


const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    categoryId: "",
  });

  useEffect(() => {
          axios.get(`http://localhost:5047/ProductById/` + id)
              .then(res => {
                  console.log(res);
                  console.log(res.data);
                  setFormData({
                      name: (res.data.name || "") as string,
                      price: (res.data.price || "") as string,
                      image: (res.data.image || "") as string,
                      categoryId: (res.data.categoryId || "") as string,
                  });
              })


      });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        axios.post(`http://localhost:5047/UpdateProduct`, formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Product added successfully!");
                navigate("/dashboard");
            })
  };

  return (
    <div>
      <h2>Chỉnh Sửa Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="name"
            name="name"
                      className="form-control"
                      value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Giá:</label>
          <input
            type="text"
            id="price"
            name="price"
                      className="form-control"
                      value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Link Ảnh:</label>
          <input
            type="text"
            id="image"
            name="image"
                      className="form-control"
                      value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">Phân loại:</label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
                      className="form-control"
                      value={formData.categoryId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Lưu Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
