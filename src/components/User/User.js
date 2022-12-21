import React , { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
import '../Home/HomePage.scss'
import './User.scss'
import '../Login/Login.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faAddressBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function User() {
    const [data1, setData1] = useState({})
    const navigate = useNavigate()
    let {user} = useParams()

  useEffect(()=>{
    fetch(`https://be-garbage-classification.vercel.app/user/detail/${user}`)
    .then(res => res.json())
    .then(data =>  setData1(data.result[0]))
  },[])

  useEffect(()=>{
    Aos.init({ duration: 1500 })
  },[])

  console.log(data1)
  return (
    <section className='userpage'>
      <Header/>
      <div className='nav1'>  
        <button onClick={() => navigate(`/${user}`)} className='nav-btn_logo'><img src={require('../../assets/image/logo.jpg')} alt="" className='logo'/></button>
        <button onClick={() => navigate(`/${user}`)} className='nav-btn_home'>Trang chủ</button>
        <button onClick={() => navigate(`/huongdanphanloai/${user}`)} className='nav-btn_xxx'>Hướng dẫn phân loại rác</button>
        <p className='user'>Welcome: {data1.HoTen}</p>
      </div>
      <div className='login userpage-form' data-aos='fade-up'>
            
                <h1 className='login-title userpage-title'>Thông tin cá nhân</h1>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faUser} />
                        <input
                        type="text"
                        className="login-input"
                        name="username"
                        readOnly
                        value={data1.HoTen}
                        />
                    </div>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faEnvelope} />
                        <input
                        type="text"
                        className="login-input"
                        name="emai;"
                        readOnly
                        value={data1.Gmail}
                        />
                    </div>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faAddressBook} />
                        <input
                        type="text"
                        className="login-input"
                        name="address"
                        readOnly
                        value={data1.Address}
                        />
                    </div>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faPhone} />
                        <input
                        type="number"
                        className="login-input"
                        name="phone"
                        readOnly
                        value={data1.NumberPhone}
                        />
                    </div>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faLock} />
                        <input
                        type="password"
                        className="login-input"
                        name="password"
                        readOnly
                        value={data1.Password}
                        />
                    </div>
                    <br />
                </div>
                <button className="login-btn userpage-btn" onClick={() => navigate(`/changeprofile/${user}`)} >
                    Chỉnh sửa thông tin cá nhân
                </button>
                <br />
                <button
                    className="login-btn userpage-btn_changepassword"
                    onClick={() => {
                        navigate(`/changepassword/${user}`);
                    }}
                >
                    Đổi mật khẩu
                </button>
           
        </div>
    </section>
  )
}
