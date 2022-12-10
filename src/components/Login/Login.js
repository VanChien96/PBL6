import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Toast from '../Toast/toast';
import { toast } from 'react-toastify';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () =>{
        if ( email && password){
            handlePost()
        }else if ( !email){
            setEmailError('chua nhap email')
            setPasswordError('')
        }else if ( !password){
            setPasswordError('chua nhap password')
            setEmailError('')
        }
    }

    const handleTestMsg = (msg) =>{
        if(msg === 'Wrong information!'){
            setPasswordError('Nhập sai email hoặc mật khẩu')
        }else{
             navigate(`/${msg}`);
             toast.success("Chào mừng bạn quay trở lại !!!")
        }
        console.log(msg)
    }

    const testPost = {"Gmail": email,
                        "Password": password}
    const handlePost = () =>{

        fetch(`http://localhost:8000/user/login`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(testPost)
        })
        .then(res => res.json())
        .then(data => handleTestMsg(data.msg))

    }


    useEffect(()=>{
        Aos.init({ duration: 1500 })
      },[])  
    return (
        <section className='container1'>
            <Nav className="p2">
                <NavLink className="nav-link_logo" to="/">
                <img src={require('../../assets/image/logo.jpg')} alt="" className='logo'/>
                </NavLink>
                <NavLink to="/" className="nav-link_home">
                  Trang chủ
                </NavLink>
                <NavLink to="/huongdanphanloai" className="nav-link_home">
                  Hướng dẫn phân loại rác
                </NavLink>
              </Nav>
            
            <div className='login' data-aos='fade-up'>
            
                <h1 className='login-title'>Đăng nhập</h1>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faEnvelope} />
                        <input
                        type="text"
                        className="login-input"
                        name="username"
                        placeholder="Email"
                        autoComplete='off'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{emailError}</p>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faLock} />
                        <input
                        type="password"
                        className="login-input"
                        name="password"
                        placeholder="Password"
                        autoComplete='off'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{passwordError}</p>
                    <br />
                </div>
                <button className="login-btn" onClick={handleSubmit} >
                    Đăng nhập
                </button>
                <br />
                <p className='login-btn_text'>Bạn chưa có tài khoản ?</p>
                <button
                    className="login-btn_register"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Bấm vào đây
                </button>
           
        </div>
        <Toast/>
        </section>
    );
};

export default Login;