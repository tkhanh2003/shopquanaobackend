import React from 'react';
import Logo from "../assets/images/logo.png"
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
const handleCart = () => {
    navigate("/Cart");
  };
    return (

        <header className="header-area header-sticky">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <Link to="/" className="logo">
                                <img src={Logo} alt="Logo" />
                            </Link>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li className="scroll-to-section"><Link to="/" className="active">Trang chủ</Link></li>
                                <li className="scroll-to-section"><a href="#men">Nam</a></li>
                                <li className="scroll-to-section"><a href="#women">Nữ</a></li>
                                <li className="scroll-to-section"><a href="#kids">Trẻ em</a></li>
                                <li className="scroll-to-section"><a href="#accessories">Phụ kiện</a></li>
                                <li className="scroll-to-section"><a href="#shoppingcart" onClick={handleCart}>Giỏ hàng</a></li>

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
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
