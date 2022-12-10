import React, { useEffect, useState } from 'react';
import SlideShow from './SlideShow';
import Identified from './Identified';
import Purpose from './Purpose';
import More from './More';
import Footer from './Footer';
import './HomePage.scss'
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

const HomePage = (props) => {
    let {user} = useParams()
    const navigate = useNavigate();

    const [op, setOp] = useState({})

    const handleUserProfile = () => {
      navigate(`/user/${op.Id_User}`)
    }

    useEffect(()=>{
      fetch(`http://localhost:8000/user/detail/${user}`)
      .then(res => res.json())
      .then(data => setOp(data.result[0]))
    },[])

    return (
        <section className='pry'>
        <div className='Sign'>
          {
            //tach dc
              !user ? (
              <Nav>
                <NavLink className="nav-link_logo" to="/">
                  <img src={require('../../assets/image/logo.jpg')} alt="" className='logo'/>
                </NavLink>
                <NavLink to="/" className="nav-link_home">
                  Trang chủ
                </NavLink>
                <NavLink to="/huongdanphanloai" className="nav-link_home">
                  Hướng dẫn phân loại rác
                </NavLink>

                <NavLink to="/login" className="SignIn">
                  Đăng nhập
                </NavLink>
                <NavLink to="/register" className="SignUp">
                  Đăng ký
                </NavLink>
              </Nav>
            ) : (
              <div className='nav'>  
                <button onClick={() => navigate(`/${user}`)} className='nav-btn_logo'><img src={require('../../assets/image/logo.jpg')} alt="" className='logo'/></button>
                <button onClick={() => navigate(`/${user}`)} className='nav-btn_home'>Trang chủ</button>
                <button onClick={() => navigate(`/huongdanphanloai/${user}`)} className='nav-btn_xxx'>Hướng dẫn phân loại rác</button>
                <p className='user' onClick={handleUserProfile}>Welcome: {op.HoTen}</p>
              </div>
            )
          }
        </div> 
            <SlideShow/>
            <Identified/>
            <Purpose/>
            <More/>
            <Footer/>
            <ScrollToTop/>
        </section>
    );
};

export default HomePage;