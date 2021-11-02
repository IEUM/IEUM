import React from 'react';
import '../css/page0.css';


const page0 = ({history}) => {

  let barName = '의약품 찾기'
  return (
    <div className = "recog1">
      <div className = "bar">
      <div className="logorec">{barName}</div>
      

      <h4 className = "text">
        <p1 className = "find">의약품 검색방식을 선택해주세요.</p1>

       
        <button onClick ={ () => {history.push("/page1")}} className = "btn1">낱알인식으로 찾기</button>
        
        <button onClick = { () => {history.push("/page2")}}className = "btn2">겉면인식으로 찾기</button>
    
      </h4>
      </div>    
      </div>


  
  
  )
}

export default page0;