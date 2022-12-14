import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Register.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone, faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Toast from '../Toast/toast';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const [userError, setUserError] = useState()
    const [addressError, setAddressError] = useState()
    const [phoneError, setPhoneError] = useState()
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordError2, setPasswordError2] = useState("");
    const navigate = useNavigate();
    
    const [testEmail, setTestEmail] = useState()

    const opject = {"HoTen": user,
                    "Gmail": email,
                    "Password": password,
                    "confpass": password2,
                    "NumberPhone": phone,
                    "Address": address}

    const handleSubmit = () =>{
        handleTest(user, phone, address)
    }

    const handleRegister = async (opject) =>{
        await fetch(`https://be-garbage-classification.vercel.app/user/register`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(opject)
        })
        .then(res => res.json())
        .then(data => setTestEmail(data.msg))
    }
    
    useEffect(()=>{
        if (testEmail === "Registration successfuly"){
            navigate('/')
            toast.success(testEmail)
        }else{
            toast.success(testEmail)
        }
    },[testEmail])

    const handleTestPassword = (password,password2) =>{
        if (password){
            if (password2){
                handleRegister(opject)
            }else{
                setPasswordError('')
                setPasswordError2('Ch??a nh???p m???t kh???u !!!')
            }
            
        }else{
            setPasswordError('Ch??a nh???p m???t kh???u !!!')
            setPasswordError2("")
        }
    }

    const handleTestEmail = (email) =>{
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
        setEmailError('?????a ch??? email kh??ng h???p l???');
    }
    else{ 
        setEmailError('');
        handleTestPassword(password,password2)
    } 
    }

    const handleTest = (user, phone, address) => {
        if (user){
            if(phone){
                if(address){
                    handleTestEmail(email)
                }else{
                    setAddressError('Ch??a nh???p ?????a ch??? !!!')
                }
            }else{
                setPhoneError('Ch??a nh???p s??? ??i???n tho???i !!!')
            }
        }else{
            setUserError("Ch??a nh???p h??? t??n !!!")
        }
    }

    useEffect(()=>{
        Aos.init({ duration: 1500 })
      },[])  
    return (
        <section className='container'>
            <Nav className="p2">
                <NavLink className="nav-link_logo" to="/">
                <img src={require('../../assets/image/logo.jpg')} alt="" className='logo'/>
                </NavLink>
                <NavLink to="/" className="nav-link_home">
                  Trang ch???
                </NavLink>
                <NavLink to="/huongdanphanloai" className="nav-link_home">
                  H?????ng d???n ph??n lo???i r??c
                </NavLink>
              </Nav>
            <div className='register' data-aos='fade-up'>
            {/* <form onSubmit={handleSubmit}> */}
                <h1 className='register-title'>????ng k??</h1>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faUser} />
                        <input
                        type="text"
                        className="login-input"
                        name="username"
                        placeholder="H??? T??n"
                        autoComplete='off'
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{userError}</p>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faEnvelope} />
                        <input
                        type="text"
                        className="login-input"
                        name="email"
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
                        <FontAwesomeIcon className="login-icon" icon={faAddressBook} />
                        <input
                        type="text"
                        className="login-input"
                        name="username"
                        placeholder="?????a ch???"
                        autoComplete='off'
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{addressError}</p>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faPhone} />
                        <input
                        type="number"
                        className="login-input"
                        name="username"
                        placeholder="S??? ??i???n tho???i"
                        autoComplete='off'
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{phoneError}</p>
                    <br />
                </div>
                <div>
                    <div className='login-text'>
                        <FontAwesomeIcon className="login-icon" icon={faLock} />
                        <input
                        type="password"
                        className="login-input"
                        name="password"
                        placeholder="M???t kh???u"
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
                        name="password2"
                        placeholder="Nh???p l???i m???t kh???u"
                        autoComplete='off'
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                        />
                    </div>
                    <p className="login-error">{passwordError2}</p>
                    <br />
                </div>
                <button className="login-btn" type="submit" onClick={handleSubmit}>
                ????ng k??
                </button>
            {/* </form> */}
        </div>
        <Toast/>
        </section>
        
    );
};



export default Register;