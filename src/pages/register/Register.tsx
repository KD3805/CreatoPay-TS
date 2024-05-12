import React, { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  fullName: string;
}

const Register: React.FC = () => {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
    fullName: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data:", data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="main">
      <div className="left-register">
        <div className="left-content">
          <div className="content">
            <h1 className="content-title">Creatopay</h1>
            <p className="content-desc">
              Helping your brands connect with your Audience
            </p>
            <div>
              <button type="submit" className="read-more-btn">
                Read More
              </button>
            </div>
          </div>

          <div className="bg-circle">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="right-register">
        <div className="right-content">
          <div className="register-box-header">
            <div className="register-box-title">Hello Again!</div>
            <div className="register-box-subtitle">Welcome Back</div>
          </div>

          <form onSubmit={handleSubmit} className="register-box-content">
            <div className="register-input-box">
              <FaUserAlt className="register-box-icons" />
              <input
                type="text"
                placeholder="Full Name"
                className="register-box-input"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="register-input-box">
              <MdOutlineMail className="register-box-icons" />
              <input
                type="text"
                placeholder="Email Address"
                className="register-box-input"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="register-input-box">
              <FaLock className="register-box-icons" />
              <input
                type="password"
                placeholder="Password"
                className="register-box-input"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <p className="text-xs font-medium text-center opacity-70 my-2">
              Already have an account?&nbsp;
              <Link
                to={"/"}
                className="text-sm font-bold underline cursor-pointer"
              >
                Login
              </Link>
            </p>

            <div className="register-btn-div">
              <button type="submit" className="register-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
