import React from "react";
import "../assets/css/admin.css";
import { Link } from "react-router-dom";

const AdminLogin: React.FC = () => {
  return (
    <div className="div-all">
      <form action="">
        <div className="header">Đăng Nhập Admin</div>
        <div className="form-body">
          <div className="input-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="icon"
            >
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3"
                fill="#ffffff"
              />
            </svg>
            <input type="text" value="" placeholder="Tên người dùng" />
          </div>
          <div className="input-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              style={{ fill: "white" }}
              className="icon"
            >
              <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
            </svg>
            <input type="password" value="" placeholder="Mật khẩu" />
          </div>
        </div>
        <div className="form-bottom">
          <div className="forgot">
            <input type="checkbox" className="check-box" />
            <span style={{ paddingTop: "10px" }}>Nhớ tôi</span>
          </div>
          <div className="forgot-right">
            <span>Quên mật khẩu?</span>
          </div>
        </div>
        <div className="button">
           <Link to={`/dashboard`}><button>Đăng nhập</button></Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
