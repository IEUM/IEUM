import { useState, useEffect } from 'react';
import "../css/Cautioninfo.css";

const Cautioninfo = ({history}) => {
    const [mediInfo, setMediInfo] = useState();
    const [mediName, setMediName] = useState("");
    const [atpnQesitm,setAtpnQesitm] = useState("");

    useEffect(() => {
      var apiResult3 = window.localStorage.getItem("API_RESULT_2");
      if(apiResult3) {
        var json = toJsonFromInfo(apiResult3);
        setMediInfo(json.item);
        init(json.item);
      }
    },[]);

    function init(info) {
      setMediName(removeTagInText(info.itemName._text));

      setAtpnQesitm(removeTagInText(info.atpnQesitm._text));
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
          

          <div className = "newbar"></div>
          <div className="bartext10">{barName}</div>
       
        <div className = "basicInfo"> 주의 사항 </div>
        
        <div id = "name">{mediName}</div>

        <span className = "highlight1"></span>

        <div className = "category">
          <p1 id = "use">주의사항</p1>
        </div>
        <span className="textbox4"></span>


        <div className = "contents">
        <div className ="caution_text" >{atpnQesitm}</div>

       </div>
      
    

  
      </div>

     
        

    )

    }
export default Cautioninfo;
