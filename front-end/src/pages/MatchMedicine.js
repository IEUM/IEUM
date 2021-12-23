import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import medicine from '../data.json';
import { Link } from 'react-router-dom';
import converter  from 'xml-js';

import '../css/MatchMedicine.css';

const MatchMedicine = ({history}) => {
    const [resultArray, setResultArray] = useState([]);
    const location = useLocation();
    const [mediName, setMediName] = useState("약정보없음");
    const [mediPic, setMedipic] = useState([]);

    let barName = "약 정보";
    let mediInfo;
    let mediphoto ="";


    useEffect(() => {
        var gName = window.localStorage.getItem("API_RESULT");

        // 약 정보 스토리지에 저장되어 있으면 JSON 파일 탐색 
        if(gName) {
            for(var i =0; i < medicine.length; i++){
                if(medicine[i].pFront == gName){
                    mediInfo = medicine[i];
                    
                    break;
                }

            }
            mediphoto = mediInfo.fileName;
            console.log(mediphoto)
            setMediName(mediInfo.pName);
            getImage(mediphoto);
            getApiDataFromProductNumber(mediInfo.pNum)
            

            window.localStorage.setItem("info", JSON.stringify(mediInfo));
            
            } else {

        } 
    },[mediName]);

    function getImage(imgname){
        setMedipic(<img src={require('../assets/mediphoto/'+imgname).default} width="390px" height="212px"></img>);
    
    }



    async function getApiDataFromProductNumber(pNumber) {
        
        var proxy = "http://api.scraperapi.com?api_key=e332adc0a158204254d45bdf410bfff5&url=";                                  /* Proxy Server */
        var url = 'http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList';                                   /* API EndPoint */
        var serviceKey = "Tq%2FWrV66iXcaVKJEwcoFzeA6q7KVHNQwK6UyDbD37557YIyqBHyWXEOF0uFVcHrJHHMF6Sb8XDJ20cd2N6DVGg%3D%3D";      /* ServiceKey (Encode) */

        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;       
        var queryParams = queryParams + '&' + "itemSeq" + '=' + pNumber;
        
        console.log(proxy + url + queryParams);
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', proxy + url + queryParams);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                var jsonData = converter.xml2json(this.responseText, {compact : true, spaces: 4});
                var item = JSON.parse(jsonData).response.body.items;
                
                // API 결과 값 스토리지에 저장
                window.localStorage.setItem("API_RESULT_2", JSON.stringify(item));
                console.log(JSON.parse(jsonData).response.body.items);
            } else {
                //...
            }
        };

        xhr.send();
    }

    return (
        
        <div className = "recog1">
        
            <div className = "bar"></div>
            <div className="logorec">{barName}</div>
            <div className="mediname">{mediName}</div>
            <div className = "showimg">{mediPic}</div>

            <button class = "astext" onClick = { () => history.push("/FindGrainText")}>이 약이 아닙니다. </button>


            <div id="myImg" width="300px" height="300px"></div>
            <Link to="./BasicMediInfo">
                <input type="button" className= "basicinfo" id="basicinfo" width="330px" height="90px"/>
            </Link>
            <Link to="./BasicMediInfo">
                <input type="button" className= "caution" id="caution" width="330px" height="90px"/>
            </Link>
            <Link to="./BasicMediInfo">
                <input type="button" className= "eatinfo" id="eatinfo" width="330px" height="90px"/>
            </Link>
            <Link to="./BasicMediInfo">
                <input type="button" className= "shapeinfo" id="shapeinfo" width="330px" height="90px"/>
            </Link>
            
            {/*
          <input type="button"  className= "basicinfo" onClick = { () => history.push({
                pathname : "/BasicMediInfo",
                resultArray : mediName
            })}
            id="basicinfo" 
            width="330px" 
            height ="90px"
          />
          <input type="button" className= "caution" id="caution" width="330px" height ="90px"/>
          <input type="button" className= "eatinfo" onClick = { () => history.push("/BasicMediInfo")}
          id="eatinfo" width="330px" height ="90px"/>
          <input type="button" className= "shapeinfo" onClick = { () => history.push("/BasicMediInfo")}
          id="shapeinfo" width="330px" height ="90px"/>
             */}
          </div>
    )    
}

export default MatchMedicine;