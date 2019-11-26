
function blurImage(id){
  let elem=document.getElementById(id);
  elem.style.filter="blur(6px)"
  let text= document.getElementById(id+"_h");
  text.style.width="100%"
  text.innerHTML = id;
  
}

function unBlurImage(id){
  let text= document.getElementById(id+"_h");
  text.innerHTML = "";
  text.style.width="0%";
  let elem =document.getElementById(id);
  elem.style.filter="blur(0px)"
}


function toggle(id){
  document.getElementById(id+"_блок").css.display="block";
 
}
