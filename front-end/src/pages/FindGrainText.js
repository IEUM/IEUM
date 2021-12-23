import '../css/FindGrainText.css';
import {useState, useEffect} from 'react';

const FindGrainText = ({history})=> {

    let barName = '낱알인식'

    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState([]);
    const [resultArray, setResultArray] = useState([]);


    const previewList = makeImagePreview();
  
    useEffect(() => {
        if(file !== '') {
          makeImagePreview();
        }
     
    });

    const handleFileOnChange = (event) => {
        event.preventDefault();
        let target = event.target.files[0];
        let imageUrl = URL.createObjectURL(target);      
        
        if(target != null) {
          setPreviewURL(previewURL => [...previewURL, imageUrl]);
          setFile(target);
        }

        getBase64FromFile(target).then(function(data){
          getDataFromBase64(data.split('base64,')[1]);
        });

        /* reset input */
        event.target.value = null;
    }

    function makeImagePreview() {
      return (
        previewURL.map((item) =>
          <img className='img_preview' key={item} src={item} width ="110px" height = "110px" ></img>
        )
      );
    }

    function getBase64FromFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }

    async function getDataFromBase64(base64) {
      /* request body */
      const post ={
          requests : [
            {
              image : {
                content :base64,
              },
              features : [
                { type: 'LABEL_DETECTION'},
                { type: 'TEXT_DETECTION'},
                { type: 'DOCUMENT_TEXT_DETECTION'},
                { type: 'WEB_DETECTION'},
              ],
            },
          ],
      }
      /* call api */
      console.log("API 호출");
      await fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyArlto501p_MY_YlIWRX33-sZX_83fJ2JU",{
          method :"POST",
          body: JSON.stringify(post)
      })
      .then((res)=>res.json())
      .then((function(data) {
        console.log("API 호출 결과값 : ");
        var result = data.responses[0].fullTextAnnotation.text.replaceAll(/\n/g, '');
        console.log(result);
        window.localStorage.setItem("API_RESULT", result);
        setResultArray(resultArray => [...resultArray, result]);
      }));
    }

  return (
    <div className = "wrapper">
      <div className = "bar2">
        <div className="bartext">
          낱알 인식
        </div>
        </div> 
        <h4 className = "text">

          <span className = "highlight"></span>
          <p1 className = "img1">최소 2장의 의약품 이미지를 첨부해주세요. </p1>
      

          <div className = "caution"> 
            <p> 권고 사항 : 알약 사진 1장, 뒤집어서 1장</p> 
          </div>

          <label className = "imgadd" for = "file"></label>
          <div className = "hidebtn">
            <input type ="file" accept = "image/*" name = "file" id = "file" style = {{display : "none"}} onChange = {handleFileOnChange} />
          </div>

          <div className = "upload"> 
          {previewList}
          </div>
        </h4>
        
        <button 
          className = "search2" 
          onClick = { ()=> 
            history.push({
              pathname : "/MatchMedicine",
              resultArray : resultArray            
            })
          }
        >  
        검색하기</button>

           
      </div>
  )
}

export default FindGrainText;