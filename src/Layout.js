import { Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import HomePage from "./components/Home/HomePage";
import { ToastContainer } from "react-toastify";
import Admin from "./components/Admin/Admin";
import HuongDanPhanLoai from "./components/HuongDanPhanLoai/HuongDanPhanLoai";
import User from "./components/User/User";
import ChangePassword from "./components/User/ChangePassword";
import Changeprofile from "./components/User/Changeprofile";


export const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/:user" element={<HomePage />} />
          
          <Route path="/huongdanphanloai" element={<HuongDanPhanLoai />}/>
          <Route path="/huongdanphanloai/:user" element={<HuongDanPhanLoai />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
        </Route>

        <Route path="/user/:user" element={<User />}></Route>
        <Route path="/changepassword/:user" element={<ChangePassword />}></Route>
        <Route path="/changeprofile/:user" element={<Changeprofile />}></Route>
        
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
