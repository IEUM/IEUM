import { useState, useEffect } from 'react';
import '../css/BasicMediInfo.css'

const BasicMediInfo = ({history}) => {
    const [mediInfo, setMediInfo] = useState();
    const [mediName, setMediName] = useState("");
    const [mediEfcyQesitm, setMediEfcyQeistm] = useState("");
    const [mediDepositMethodQesitm, setMediDepositMethodQesitm] = useState("");
    const [mediUseMethodQesitm, setMediUseMethodQesitm] = useState("");
    const [mediAtpnQesitm, setMediAtpnQesitm] = useState("");

    useEffect(() => {
      var apiResult2 = window.localStorage.getItem("API_RESULT_2");
      if(apiResult2) {
        var json = toJsonFromInfo(apiResult2);
        setMediInfo(json.item);
        init(json.item);
      }
    },[]);

    function init(info) {
      setMediName(removeTagInText(info.itemName._text));
      setMediEfcyQeistm(removeTagInText(info.efcyQesitm._text));
      setMediDepositMethodQesitm(removeTagInText(info.depositMethodQesitm._text));
      setMediUseMethodQesitm(removeTagInText(info.useMethodQesitm._text));
      setMediAtpnQesitm(removeTagInText(info.atpnQesitm._text));
    }

    function toJsonFromInfo(params) {
      return JSON.parse(params);
    }

    function removeTagInText(txt) {
      return txt.replace(/(<([^>]+)>)/ig,"");
    }
  
    let barName = "약 정보";
    
    return (

        <div className = "wrapper">
          

          <div className = "bar2"></div>
          <div className="bartext10">{barName}</div>
       
        <div className = "basicInfo"> 기본 정보 </div>
        
        <div id = "name">{mediName}</div>
      
        <span className = "highlight1"></span>
        <span className = "highlight2"></span>
        <span className = "hgihlight3"></span>

        <div className = "category">
          <p1 id = "use">용도</p1>
          <p1 id = "save">관리법</p1>
          <p1 id = "eat">복용법</p1>
        </div>
        <div className = "textbox">
          <span id = "textbox1"></span>
          <span id = "textbox2"></span>
          <span id = "textbox3"></span>

        </div>


        <div className = "contents">
        <div className ="effect_text" >{mediEfcyQesitm}</div>

        <div className = "save_text" >{mediDepositMethodQesitm}</div>

        <div className = "eat_text">{mediUseMethodQesitm}</div>
       </div>
      
    

 
      </div>

     
        

    )

    }
export default BasicMediInfo;
