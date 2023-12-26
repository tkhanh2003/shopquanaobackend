import React, { useState } from "react";
import "../assets/css/AddProductPage.css";
import { firestore } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_sanpham: "",
    Ten_san_pham: "",
    Gia: "",
    Anh: "",
    Mo_ta: "",
    Phan_loai: "",
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

    try {
      await firestore.collection("Product").add(formData);
      alert("Product added successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <div>
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id_sanpham">Id sản phẩm:</label>
          <input
            type="text"
            id="id_sanpham"
            name="id_sanpham"
            className="form-control"
            value={formData.id_sanpham}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tenSanPham">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="tenSanPham"
            name="Ten_san_pham"
            className="form-control"
            value={formData.Ten_san_pham}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gia">Giá:</label>
          <input
            type="text"
            id="gia"
            name="Gia"
            className="form-control"
            value={formData.Gia}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="anh">Link Ảnh:</label>
          <input
            type="text"
            id="anh"
            name="Anh"
            className="form-control"
            value={formData.Anh}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mota">Mô tả:</label>
          <input
            type="text"
            id="mota"
            name="Mo_ta"
            className="form-control"
            value={formData.Mo_ta}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pl">Phân loại:</label>
          <input
            type="text"
            id="pl"
            name="Phan_loai"
            className="form-control"
            value={formData.Phan_loai}
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
