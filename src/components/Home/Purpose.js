import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Purpose() {
    useEffect(()=>{
        Aos.init({ duration: 1500 })
      },[])    
  return (
    <section className='purpose'>
        <div>
            <p className='indentifed-title' data-aos='fade-up'>Mục đích của phân loại rác thải sinh hoạt tại nguồn</p>
            <div className='indentifed-divImg'>
                <img  src={require("../../assets/image/purpose.jpg")} alt="" className='indentifed-img' data-aos="flip-left"/>
            </div>
            <div className='indentifed-result'>
                <p className='indentifed-result__detail' data-aos='fade-left' >- Phân loại rác tại nguồn nhằm giảm loại, khối lượng rác thải xử lý.  Do đó góp phần giảm thiểu nguy cơ ô nhiễm môi trường;</p>
                <p className='indentifed-result__detail' data-aos='fade-left' >- Phân loại rác tại nguồn có thể đem lại một lượng lớn các sản phẩm tái chế, mang lại hiệu quả kinh tế cho chính người thải rác.  Bằng cách bán các nguyên, phế liệu có thể tái chế được, tận dụng các nguyên liệu hữu cơ sản xuất phân bón vi sinh.</p>
                <p className='indentifed-result__detail' data-aos='fade-left' >- Góp phần nâng cao ý thức của cộng đồng về bảo vệ môi trường. Cũng như sử dụng tài nguyên hợp lý nhất là ở trẻ nhỏ. Tiến đến xây dựng xã hội với môi trường xanh – sạch – đẹp.</p>
                <p className='indentifed-result__detail' data-aos='fade-left' >- Phân loại rác tại nguồn nhằm giảm tải cho công tác xử lý nhất là trong phương pháp đốt chất thải.  Đồng thời có thể lựa chọn phương pháp xử lý chất thải rắn phù hợp nhất.</p>
                <p className='indentifed-result__detail' data-aos='fade-left' >- Phân loại rác tại nguồn góp phần gảm thiểu tổng lượng rác thải ra môi trường. Đảm bảo tiết kiệm kinh phí thu gom, vận chuyển và xử lý.</p>
            </div>
        </div>
    </section>
  )
}
