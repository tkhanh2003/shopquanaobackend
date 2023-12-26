import React from 'react';
import Bannerright from '../assets/images/left-banner-image.jpg'
import Right01 from '../assets/images/baner-right-image-01.jpg'
import Right02 from '../assets/images/baner-right-image-02.jpg'
import Right03 from '../assets/images/baner-right-image-03.jpg'
import Right04 from '../assets/images/baner-right-image-04.jpg'
import Slider from "react-slick";

const MainBanner: React.FC = () => {

    return (
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">

                                <div className="inner-content">
                                    <div className="main-border-button"></div>
                                </div>
                                <img src={Bannerright} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Nữ</h4>
                                                <span>Sản phẩm bán chạy</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <p>Sản phẩm mới và được nhiều lượt mua </p>
                                                    <div className="main-border-button">
                                                        <a href="#">Xem thêm</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={Right01} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Nam</h4>
                                                <span>Sản phẩm bán chạy</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <p>Sản phẩm mới và được nhiều lượt mua </p>
                                                    <div className="main-border-button">
                                                        <a href="#">Xem thêm</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={Right03} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Trẻ em</h4>
                                                <span>Sản phẩm bán chạy</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <p>Sản phẩm mới và được nhiều lượt mua </p>
                                                    <div className="main-border-button">
                                                        <a href="#">Xem thêm</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={Right03} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Phụ kiện</h4>
                                                <span>Sản phẩm bán chạy</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <p>Sản phẩm mới và được nhiều lượt mua </p>
                                                    <div className="main-border-button">
                                                        <a href="#">Xem thêm</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={Right04} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
