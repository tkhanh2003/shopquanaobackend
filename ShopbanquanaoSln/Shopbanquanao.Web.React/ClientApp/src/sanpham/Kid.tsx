import React, { useState, useEffect } from "react";
import "firebase/database";
import Slider from "react-slick";
import { firestore } from "../firebaseConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducer/cart";
import { Link } from "react-router-dom";

interface Product {
  DocId: string;
  Anh: string;
  Gia: number;
  Mo_ta: string;
  Phan_loai: 3;
  Ten_san_pham: string;
  id_sanpham: string;
}

const Kid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showMessage, setShowMessage] = useState(false); // Thêm trạng thái showMessage
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: products.length > 3 ? 3 : products.length,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const productsRef = firestore.collection("Product");

    productsRef
      .where("Phan_loai", "==", "3")
      .get()
      .then((querySnapshot) => {
        const productList: Product[] = [];
        querySnapshot.forEach((doc) => {
          productList.push({ ...doc.data(), DocId: doc.id } as Product);
        });
        setProducts(productList);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, []);

  function addToCart(product: Product): void {
    dispatch(addProduct({ quantity: 1, product: product }));
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }

  return (
    <section className="section mt-5" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h2 className="text-center">Trang phục gia đình</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {products.map((product, index) => (
                <div className="item mb-4" key={index}>
                  <div className="thumb">
                    <div className="hover-content d-flex justify-content-center">
                      <ul>
                        <li>
                          <Link to={`../Single_product?id=${product.DocId}`}>
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <a type="button" onClick={() => addToCart(product)}>
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src={product.Anh}
                      alt=""
                      style={{
                        width: "340px",
                        height: "360px",
                        margin: "0 35px",
                      }}
                    />
                  </div>
                  <div className="down-content text-center mx-3">
                    <h4>{product.Ten_san_pham}</h4>
                    <span>{product.Gia}$</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="alert alert-success text-center mt-4" role="alert">
          Đã thêm vào giỏ hàng!
        </div>
      )}
    </section>
  );
};

export default Kid;
