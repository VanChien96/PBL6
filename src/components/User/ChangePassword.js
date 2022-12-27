import React , { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
import '../Home/HomePage.scss'
import './User.scss'
import '../Login/Login.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { toast } from 'react-toastify'

export default function ChangePassword() {
  const [data1, setData1] = useState({})
  const [password,setPassword] = useState()
  const [password2,setPassword2] = useState()
  const [passwordError,setPasswordError] = useState('')
  const [passwordError2,setPasswordError2] = useState('')
  const navigate = useNavigate()
  let {user} = useParams()
 

  const [test, setTest] = useState()

  useEffect(()=>{
    fetch(`https://be-garbage-classification.vercel.app/user/detail/${user}`)
    .then(res => res.json())
    .then(data =>  setData1(data.result[0]))
  },[])

  const handleUserProfile = () => {
    navigate(`/${user}`);
  }

  const op = {
    "OldPassword": data1.Password,
    "NewPassword": password,
    "ConfPassword": password2
  }

  const handleSubmit = ( ) =>{
    if (password){
      if (password2){
        fetch((`https://be-garbage-classification.vercel.app/user/update_pass/${user}`),{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(op)
      })
      .then(res => res.json())
      .then(data => setTest(data.msg))
      }else{
        setPasswordError2("Chưa nhập lại mật khẩu !!!")
        setPasswordError('')
      }
    }else{
      setPasswordError("Chưa nhập mật khẩu !!!")
      setPasswordError2('')
    }
  }

  useEffect(()=>{
    if(test){
      if ( test === "Update successfuly"){
        toast.success("Cập nhật mật khẩu thành công !!!")
        handleUserProfile()
      }else if( test === "OldPassword and NewPassWord re the same"){
        setPasswordError("Mật khẩu trùng với mật khẩu cũ !!!")
      }
      else{
        setPasswordError2("Mật khẩu nhập lại không đúng !!!")
      }
    }
  },[test])

  useEffect(()=>{
    Aos.init({ duration: 1500 })
  },[])
  return (
    <section className='userpage'>
      <Header/>
      <div className='nav1'>  
        <button onClick={() => navigate(`/${user}`)} className='nav-btn_logo'><img src={require('../../assets/image/logo.jpg')} alt="" className='logo'/></button>
        <button onClick={() => navigate(`/${user}`)} className='nav-btn_home'>Trang chủ</button>
        <button onClick={() => navigate(`/huongdanphanloai/${user}`)} className='nav-btn_xxx'>Hướng dẫn phân loại rác</button>
        <p className='user' onClick={handleUserProfile}>Welcome: {data1.HoTen}</p>
      </div>
      <div className='login userpage-form' data-aos='fade-up'>

      <h1 className='login-title changepass' >Đổi mật khẩu</h1>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faLock} />
                        <input
                        type="password"
                        className="login-input"
                        autoComplete='off'
                        readOnly
                        value={data1.Password}
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
                        placeholder="Mật khẩu mới"
                        autoComplete='off'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{passwordError}</p>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faLock} />
                        <input
                        type="password"
                        className="login-input"
                        name="password"
                        placeholder="Nhập lại mật khẩu mới"
                        autoComplete='off'
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{passwordError2}</p>
                    <br />
                </div>
                <button className="login-btn" onClick={handleSubmit} >
                    Xác nhận
                </button>
                <button
                    className="login-btn userpage-btn_changepassword xxx"
                    onClick={() => {
                      navigate(`/user/${user}`)
                    }}
                >
                    Hủy
                </button>
      </div>
    </section>
  )
}
