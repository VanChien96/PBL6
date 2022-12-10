import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function More() {
  useEffect(()=>{
    Aos.init({ duration: 1500 })
  },[])
  return (
    <section className='more'>
        <p className='more-title' data-aos='fade-up'>Rác được phân loại như thế nào ?</p>
        <div className='more-container'>
          <div className='more-content' data-aos='fade-up'>
              <div className='more-div'>
                <img src={require('../../assets/image/RacHuuCo.jpg')} alt="" className='more-img'/>
              </div>
              <p><span className='more-text'>Rác hữu cơ</span>: Rác hữu cơ là loại rác dễ phân hủy và có thể 
              tái chế để đưa vào sử dụng cho việc chăm bón và làm thức ăn 
              cho động vật. Nó có nguồn gốc từ phần bỏ đi của thực phẩm sau 
              khi lấy đi phần chế biến được thức ăn cho con người; phần thực 
              phẩm thừa hoặc hư hỏng không thể sử dụng cho con người; các loại hoa,
               lá cây, cỏ không được con người sử dụng sẽ trở thành rác thải trong 
               môi trường.</p>
          </div>
          <div className='more-content' data-aos='fade-up'>
              <div className='more-div'>
                <img src={require('../../assets/image/RacTaiChe.jpg')} alt="" className='more-img'/>
              </div>
              <p><span className='more-text'>Rác tái chế</span>: Rác tái chế là loại rác khó phân hủy nhưng có thể đưa vào 
              tái chế để sử dụng nhằm mục đích phục vụ cho con người.
               Ví dụ như các loại giấy thải, các loại hộp/ chai/ vỏ lon thực phẩm bỏ đi,...</p>
          </div>
          <div className='more-content' data-aos='fade-up'>
              <div className='more-div'>
                <img src={require('../../assets/image/RacVoCo.jpg')} alt="" className='more-img'/>
              </div>
              <p><span className='more-text'>Rác vô cơ</span>: Rác vô cơ là những loại rác không thể sử dụng được 
              nữa cũng không thể tái chế được mà chỉ có thể xử lý bằng cách mang 
              ra các khu chôn lấp rác thải. Nó bắt nguồn từ các loại vật liệu xây
               dựng không thẻ sử dụng hoặc đã qua sử dụng và được bỏ đi; các loại
                bao bì bọc bên ngoài hộp/ chai thực phẩm; các loại túi nilong được bỏ
                 đi sau khi con người dùng đựng thực phẩm và một số loại vật dụng/ thiết
                  bị trong đời sống hàng ngày của con người.</p>
          </div>
        </div>
    </section>
  )
}
