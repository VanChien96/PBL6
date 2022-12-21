import React, { useEffect, useState } from 'react'
import './HomePage.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

export default function Identified() {
  const [img, setImg] = useState()
  const [url, setUrl] = useState('')
  const [accuracy, setAccuracy] = useState('')
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [loading, setLoading] = useState(false)

  const huuCo = ['biological']
  const taiChe = ['cardboard','paper','metal']
  const voCo = ['battery','clothes','glass','plastic','shoe']

  const [classG, setClaasG] = useState('')
  const [detail, setDetail] = useState('')

  useEffect(()=>{
    if (huuCo.includes(accuracy.class_name)){
      setClaasG('Rác hữu cơ')
      setDetail('Rác hữu cơ là loại rác dễ phân hủy và có thể tái chế để đưa vào sử dụng cho việc chăm bón và làm thức ăn cho động vật. Nó có nguồn gốc từ phần bỏ đi của thực phẩm sau khi lấy đi phần chế biến được thức ăn cho con người; phần thực phẩm thừa hoặc hư hỏng không thể sử dụng cho con người; các loại hoa, lá cây, cỏ không được con người sử dụng sẽ trở thành rác thải trong môi trường.a thực phẩm sau khi lấy đi phần sử dụng. Để chế biến thức ăn cho con người, hoặc thực phẩm thừa, hư hỏng không thế sử dụng, các loại lá cây, hoa, cỏ.')
    }else if (taiChe.includes(accuracy.class_name)){
      setClaasG('Rác tái chế')
      setDetail('Rác tái chế là loại rác khó phân hủy nhưng có thể đưa vào tái chế để sử dụng nhằm mục đích phục vụ cho con người. Ví dụ như các loại giấy thải, các loại hộp/ chai/ vỏ lon thực phẩm bỏ đi,...')
    }else if (voCo.includes(accuracy.class_name)){
      setClaasG('Rác vô cơ ')
      setDetail('Rác vô cơ là những loại rác không thể sử dụng được nữa cũng không thể tái chế được mà chỉ có thể xử lý bằng cách mang ra các khu chôn lấp rác thải. Nó bắt nguồn từ các loại vật liệu xây dựng không thẻ sử dụng hoặc đã qua sử dụng và được bỏ đi; các loại bao bì bọc bên ngoài hộp/ chai thực phẩm; các loại túi nilong được bỏ đi sau khi con người dùng đựng thực phẩm và một số loại vật dụng/ thiết bị trong đời sống hàng ngày của con người.')
    }
  },[accuracy])

  useEffect(()=>{
    Aos.init({ duration: 1500 })
  },[])

  const handleSubmit = () =>{
    const formData = new FormData();

		formData.append('file', selectedFile);

		fetch(
			'https://be-garbage-classification.vercel.app/recognite/receive_photo',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				setUrl(result.secure_url);
			})
      
      setLoading(true)
  }
 

  useEffect(()=>{

    fetch(`https://6bbb-2402-800-629c-d825-44fc-343d-3ce2-31ec.ap.ngrok.io//api/v1/predict/?url=${url}`).
    then(res => res.json())
    .then(data => setAccuracy(data))
  
    
  },[url])

	const changeHandler = (e) => {
		setSelectedFile(e.target.files[0])
    const file = e.target.files[0]
    
    file.prev = URL.createObjectURL(file)
    
    setImg(file)

		setIsFilePicked(true)
	};

console.log(selectedFile)
  return (
    <section className='indentifed'>
      <p className='indentifed-title' data-aos='fade-up'>Cùng chúng tớ thử nhận diện một số loại rác nhé</p>
      <input type="file" 
        onChange={changeHandler}
        id="input-file"
        className='indentifed-input'
      />
      <div className='indentifed-divImg'>
        <p></p>
        { img && (
          <img src={img.prev} className='indentifed-img'/>
        )}
      </div>
      {
        isFilePicked ? (
          <div>
            <button onClick={handleSubmit} className='indentifed-label handleC'>Nhận diện</button>
            <label htmlFor="input-file" className='indentifed-label inputF'>Bấm vào đây để chọn hình ảnh</label>
          </div>
        ) : (
          <label htmlFor="input-file" className='indentifed-label'>Bấm vào đây để chọn hình ảnh</label>
        )
      }
      <div className='indentifed-result'>
      {
        isFilePicked ? (
          <div>
          {
            loading ? (
              <div> 
              {
                url ? (
                  <div>
                    <p className='indentifed-result__text fai'>Result: {accuracy.class_name}</p>
                    <p>Accuracy: {accuracy.confidence_score} %</p>
                    <br />
                    <p>Class: <p className='indentifed-result_class'>{classG}</p></p>
                    <p className='indentifed-result_detail'>{detail}</p>
                  </div>
                ) : (
                  <div>
                    <p className='indentifed-result__text fai'>Result:</p>
                    <ReactBootStrap.Spinner animation="border" />
                  </div>
                )
              } 
              </div>
            ) : (
              <div>
                <p className='indentifed-result__text'>Hướng dẫn thực hiện nhận diện:</p>
                <p className='indentifed-result__detail'>
                B1: bấm <p className='indentifed-result__detail1'>chọn hình ảnh</p>, chọn hình ảnh một loại rác mà bạn muốn nhận diện <br/><br/>
                B2: bấm <p className='indentifed-result__detail1'>nhận diện</p> và xem kết quả 
                </p>
              </div>
            )
          }
          </div>
        ) : (
          <div>
          <p className='indentifed-result__text'>Hướng dẫn thực hiện nhận diện:</p>
          <p className='indentifed-result__detail'>
            B1: bấm <p className='indentifed-result__detail1'>chọn hình ảnh</p>, chọn hình ảnh một loại rác mà bạn muốn nhận diện
            </p>
          </div>
        )
      }
        
      </div>
    </section>
  )
}
