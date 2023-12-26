import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Footer';
import { firestore } from '../firebaseConfig';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addProduct } from '../reducer/cart';
import { useDispatch } from 'react-redux';


interface Product {
  Anh: string;
  Gia: number;
  Mo_ta: string;
  Phan_loai: string;
  Ten_san_pham: string;
  id_sanpham: string;
}

function Single_product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  function addToCart(): void {
    dispatch(addProduct({quantity: value, product:product}));
    navigate(-1);
  }
  
  useEffect(() => {    
    const productsRef = firestore.collection('Product');
    productsRef.doc(searchParams.get('id')!).get().then((docRef) => { 
      if(docRef.exists) {
        const data = docRef.data();
        setProduct(data);
      }
    }).catch((error) => {
      console.error("Error getting document:", error);
     });
  },[searchParams]);
  const handleChange = (event:any) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src={logo} alt="Logo" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Trang chủ</a></li>
                  <li className="scroll-to-section"><a href="#men">Nam</a></li>
                  <li className="scroll-to-section"><a href="#women">Nữ</a></li>
                  <li className="scroll-to-section"><a href="#kids">Trẻ em</a></li>
                  <li className="scroll-to-section"><a href="#accessories">Phụ kiện</a></li>
                  <li className="scroll-to-section"><a href="#shoppingcart">Giỏ hàng</a></li>
                  <li className="submenu">
                    <a href="javascript:;">Thông tin cửa hàng</a>
                    <ul>
                      <li><a href="about.html">về chúng tôi</a></li>
                      <li><a href="products.html">Địa chỉ cửa hàng</a></li>
                      <li><a href="single-product.html">Chính sách và bảo mật</a></li>
                      <li><a href="contact.html">Thông tin liên hệ</a></li>
                    </ul>
                  </li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main role="main" style={{ marginTop: '150px' }}>
        <div className="container mt-4">
          <div id="thongbao" className="alert alert-danger d-none face" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="card mt-10" style={{ marginBottom: '100px' }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Thông tin chi tiết về Sản phẩm</h3>
                  <div className="preview-pic tab-content">
                    {product && <img src={product.Anh} alt="" style={{ width: '400px', height: '400px', marginBottom: '50px', marginLeft: '50px' }} />}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    {product && (
                      <div>
                        <h1 style={{ marginTop: '50px', marginBottom: '10px' }}>{product.Ten_san_pham}</h1>
                        <p style={{ marginBottom: '10px' }}><span style={{ fontSize: '25px', fontWeight: 'bold' }}>Giá : </span>
                        <span style={{ fontSize: '25px' }}>{product.Gia}$</span></p>
                        <p style={{ marginBottom: '10px' }}><span style={{ fontSize: '25px', fontWeight: 'bold' }}>Mô tả : </span>
                        <span style={{ fontSize: '20px' }}>{product.Mo_ta}</span></p>
                      </div>
                    )}
                  </div>
                  <div className="details">
                  <div className="btn-group" style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '25px', fontWeight: 'bold', marginRight: '10px' }}>Kích cỡ:</span>
                    <button type="button" className="btn btn-light">S</button>
                    <button type="button" className="btn btn-light">M</button>
                    <button type="button" className="btn btn-light">L</button>
                    <button type="button" className="btn btn-light">XL</button>
                  </div>
                  <div className="form-row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="soluong" className="mr-2">Số lượng đặt mua:</label>
                   </div>
                   <div className="col">
                   <input type="number" className="form-control" value={value} onChange={handleChange}/>
                  </div>
                  </div>
                    <div className="action">
                      <a className="add-to-cart btn btn-danger" role='button' onClick={()=>addToCart()}>Thêm vào giỏ hàng</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


<Footer />
    </div>
  );
}

export default Single_product;
