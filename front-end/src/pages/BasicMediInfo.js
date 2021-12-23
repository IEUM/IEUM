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

        <div className = "recog1">
          

          <div className = "bar">
          <div className="logorec">{barName}</div>
       
        <div className = "basicInfo"> 기본 정보 </div>
        
        <div id = "name">{mediName}</div>
        <div id = "lights">

        <span className = "highlight"></span>

        </div>

        <div id = "contents">
        <div className ="effect_text" id = "t">{mediEfcyQesitm}</div>

        <div className = "save_text" id = "t">{mediDepositMethodQesitm}</div>

        <div className = "eat_text">{mediUseMethodQesitm}</div>
       
        </div>
      
    

      </div>
      </div>

     
        

    )

    }
export default BasicMediInfo;
