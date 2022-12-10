import React, { useState } from 'react'
import './HomePage.scss'

export default function SlideShow() {

    const [img, setImg] = useState(3)

    const SlideShow = () =>{
        if ( img < 2 ){
            setImg( prev => prev + 1)
        }else{
            setImg(1)
        }
    }

    setTimeout(()=>{
        SlideShow()
    },5000)

  return (
    <section >
        <div className='homepage'>
            <img src={require(`../../assets/image/imageHeader_${img}.jpg`)} alt="" className='homepage-img'/>
            <div className='homepage-text'>
                <p className='homepage-text_pry'>Phân loại rác tại nguồn</p>
                <p className='homepage-text_sec'>Trang web giúp bạn nhận diện từng loại rác</p>
            </div>
        </div>     
    </section>
  )
}
