import React, { useState } from "react";
import "../assets/css/AddProductPage.css";
import { firestore } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddProductPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      Id: "",
      Name: "",
      Price: "",
      Image: "",
    CategoryId: "",
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

        axios.post(`http://localhost:5047/AddProducts`, formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Product added successfully!");
                navigate("/dashboard");
            })
  };

  return (
    <div>
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Id">Id sản phẩm:</label>
          <input
            type="text"
            id="Id"
            name="Id"
            className="form-control"
            value={formData.Id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="Name"
            name="Name"
                      className="form-control"
                      value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Price">Giá:</label>
          <input
            type="text"
            id="Price"
            name="Price"
                      className="form-control"
                      value={formData.Price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Image">Link Ảnh:</label>
          <input
            type="text"
            id="Image"
            name="Image"
                      className="form-control"
                      value={formData.Image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="CategoryId">Phân loại:</label>
          <input
            type="text"
            id="CategoryId"
            name="CategoryId"
                      className="form-control"
                      value={formData.CategoryId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
