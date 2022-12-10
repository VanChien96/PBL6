import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from 'react-use'


export default function ScrollToTop() {
    const { y:pageYoffset } = useWindowScroll()
    const [visible, setVisiblity] = useState(false)

    useEffect(()=>{
        if(pageYoffset > 400){
            setVisiblity(true)
        }else{
            setVisiblity(false)
        }
    },[pageYoffset])

    if (!visible){
        return false
    }

    const handleScrollToTop = () => {
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }
  return (
    <div className='Scroll'>
        <FontAwesomeIcon className="Scroll-icon" icon={faCircleUp} onClick={handleScrollToTop}/>
    </div>
  )
}
