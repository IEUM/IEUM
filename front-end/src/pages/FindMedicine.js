import React from 'react';
import '../css/FindMedicine.css';


const FindMedicine = ({history}) => {


  return (
    <div className = "wrapper">
      <div className = "bar2">
      <div className="bartext1">약품 찾기</div>
      </div>
      

      
        <p1 className = "find">의약품 검색방식을 선택해주세요.</p1>

        <button onClick ={ () => {history.push("/FindGrain")}} className = "btn1">낱알인식으로 찾기</button>
        
        <button onClick = { () => {history.push("/FindPackage")}}className = "btn2">겉면인식으로 찾기</button>


      
      </div>
      

  
  
  )
}

export default FindMedicine;