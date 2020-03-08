function init(){
  document.body.addEventListener("touchstart", goFullscreen);  
}


function goFullscreen(){
  
  document.documentElement.requestFullscreen();
  
}