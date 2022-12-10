import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './HuongDan.scss'
import { useParams,useNavigate,NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function HuongDanPhanLoai() {
    let {user} = useParams()
    const navigate = useNavigate();
    const [op, setOp] = useState({})

    useEffect(()=>{
      fetch(`http://localhost:8000/user/detail/${user}`)
      .then(res => res.json())
      .then(data => setOp(data.result[0]))
    },[])
  return (
    <Container>
    <div className='Sign'>
          {
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
                <button onClick={() => navigate(`/${user}`)} className='nav-btn_logo'>LOGO_PAGE</button>
                <button onClick={() => navigate(`/${user}`)} className='nav-btn_home'>Trang chủ</button>
                <button  className='nav-btn_xxx'>Hướng dẫn phân loại rác</button>
                <p className='user'>Welcome: {op.HoTen}</p>
              </div>
            )
          }
        </div>
    <div className='guide'>
      <img src={require("../../assets/image/info-1-1.jpg")} alt="" className='guide-img'/>
    </div>
    <div className="ratio ratio-16x9">
      <iframe src='https://www.youtube.com/embed/F41pf8gdLjs' title='YouTube video' allowFullScreen></iframe>
    </div>
    </Container>
  )
}
