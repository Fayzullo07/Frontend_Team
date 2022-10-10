import React, { useState } from 'react'
import "../page/Scroll.css"

const Scroll = () => {
    
    
      const [Ochish, setOchish] = useState(1);
    
      const yopil=(index)=> {
        setOchish(index);
      }
  return (
    <div className='Scroll'>
       <div className="navbar">
       <div className={Ochish ===1 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(1)}>1</div>
      <div className={Ochish ===2 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(2)}>2</div>
      <div className={Ochish ===3 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(3)}>3</div>
      <div className={Ochish ===4 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(4)}>4</div>
      <div className={Ochish ===5 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(5)}>5</div>
      <div className={Ochish ===6 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(6)}>6</div>
      <div className={Ochish ===7 ? "tabs active-tabs":"tabs"} onClick={()=>yopil(7)}>7</div>
   
    </div>
   <div className="discription" >
    <div className={Ochish ===1 ? "disc active-disc":"disc"}  id='a1'>1</div>
    <div className={Ochish ===2 ? "disc active-disc":"disc"} id='a2'>2</div>
    <div className={Ochish ===3 ? "disc active-disc":"disc"} id='a3'>3</div>
    <div className={Ochish ===4 ? "disc active-disc":"disc"} id='a4'>4</div>
    <div className={Ochish ===5 ? "disc active-disc":"disc"} id='a5'>5</div>
    <div className={Ochish ===6 ? "disc active-disc":"disc"} id='a6'>6</div>
    <div className={Ochish ===7 ? "disc active-disc":"disc"} id='a7'>7</div>
   </div>

    </div>
  )
}

export default Scroll
