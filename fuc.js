var elementLoad=  document.querySelector('.load');
var trangthai= "duoi";
var vitri = elementLoad.ofsetTop -1000;


if(window.pageXOffset > vitri){
  if(trangthai == "duoi"){
    trangthai = "tren";
    elementLoad.classList.add("dilen");
  }
}