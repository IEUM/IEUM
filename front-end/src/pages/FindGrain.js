import React from 'react';
import "../css/FindGrain.css";

const FindGrain = ({history}) => {

  let barName = '낱알 인식';

  const images = findImageAll(require.context('../assets/grain', false, /\.(png|jpe?g|svg)$/));
  const names = ['circle', 'ellipse', 'triangle', 'rectangle', 'polygon', 'long', 'five', 'six', 'eight'];  
  const nameList = init();
  var actived_name = '';

  function findImageAll(r) {
    let images = {};
      r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  function init() {
    return (
      names.map((name) => 
        <div type='button' key={name} className={name + 'btn'} onClick={(e) => changeImage(name)}>
          <img src={images[name+'.png'].default} id={name}></img>
        </div>
        )
      );
  }

  function changeImage(selected_name) {

    if (actived_name == selected_name) {
      defaultImage();
    } else {
      defaultImage();
      var selected_node = document.getElementById(selected_name);
      selected_node.src = images['click' + selected_name + '.png'].default;
    }
    
    actived_name = selected_name;
  }

  function defaultImage() {
    names.forEach(function(name){
      var node = document.getElementById(name);
      node.src = images[name+'.png'].default;
    });
  }


  return (
    
    <div className = "wrapper">
      <div className = "bar2">
      <div className="bartext1">{barName}</div>
      </div>    

      <div className = "buttons">
      {nameList}
     </div>


      <button className = "search2" onClick = { () => {history.push("/FindGrainText")}}> 다음 단계 </button>
      </div>
       
        
  
  )
}

export default FindGrain;