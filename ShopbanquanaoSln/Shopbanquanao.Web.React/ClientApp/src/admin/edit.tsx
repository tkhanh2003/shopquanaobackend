import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../firebaseConfig";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Ten_san_pham: "",
    Gia: "",
    Anh: "",
    Mo_ta: "",
    Phan_loai: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = await firestore.collection("Product").doc(id).get();
        const productData = productRef.data();

        if (productData) {
          setFormData({
            Ten_san_pham: productData.Ten_san_pham || "",
            Gia: productData.Gia || "",
            Anh: productData.Anh || "",
            Mo_ta: productData.Mo_ta || "",
            Phan_loai: productData.Phan_loai || "",
          });
        } else {
          console.error("Không tìm thấy sản phẩm với id đã cho.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm: ", error);
      }
    };

    fetchProduct();
  }, [id]);

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
      await firestore.collection("Product").doc(id).update(formData);
      alert("Sản phẩm đã được cập nhật thành công!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm: ", error);
    }
  };

  return (
    <div>
      <h2>Chỉnh Sửa Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
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
          Lưu Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
