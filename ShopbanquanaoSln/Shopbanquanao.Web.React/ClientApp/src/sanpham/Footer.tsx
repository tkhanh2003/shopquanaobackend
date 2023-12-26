import React from 'react';
import Whitelogo from "../assets/images/white-logo.png"
const Footer = () => {
    return (
        
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="first-item">
                            <div className="logo">
                                <img src={Whitelogo} alt="hexashop ecommerce templatemo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4>Shopping &amp; Categories</h4>
                    </div>
                    <div className="col-lg-3">
                        <h4>Useful Links</h4>
                    </div>
                    <div className="col-lg-3">
                        <h4>Help &amp; Information</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
