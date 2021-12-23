import React, { useState, useRef, useEffect } from 'react';
import '../css/FindPackage.css';
import axios from 'axios';

const FindPackage = ({history})=> {
    
    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const [preview,setPreview] = useState(null);
    const fileRef= useRef();

    useEffect(() => {
        if(file !== '') 
          setPreview(<img className='img_preview' src={previewURL} width ="110px" height = "110px" ></img>);
        return () => {
        }
      }, [previewURL])

    const handleFileOnChange = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();
    
        reader.onloadend = (e) => {
          setFile(file);
          setPreviewURL(reader.result);
        }
        if(file)
          reader.readAsDataURL(file);
      }
      const handleFileButtonClick = (e) => {
        e.preventDefault();
        fileRef.current.click(); 
      }

    let barName = '겉면 인식'
    return (

    <div className = "recog1">
      <div className = "bar">
      <div className="logorec">{barName}</div>
      

      <h4 className = "text">
          <span className = "highlight"/>
      <p1 className = "img1">최소 1장의 의약품 겉면 이미지를 첨부해주세요. </p1>
     
      <p1 className = "caution"> 권고 사항 : 글씨가 선명한 사진을 이용하세요. </p1>

      <label className = "imgadd" for = "file"></label>
      <div className = "hidebtn">
      <input type ="file" accept = "image/*" name = "file" id = "file" style = {{display : "none"}} onChange = {handleFileOnChange} />
      </div>
      <div className = "upload"> {preview} <div/>
      </div>
      
      </h4>
      
      <button className = "search" onClick = { () => history.push("/MatchMedicine")}>검색하기</button>
      
      </div>    
      </div>


    )

}

export default FindPackage;