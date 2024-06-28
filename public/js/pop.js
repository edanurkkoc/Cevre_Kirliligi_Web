// Popup Al
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');

// Kipi açan düğmeyi al
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Kipi kapatan <span> öğesini edinin
// var span=document.querySelectorAll('.close')
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// Kullanıcı düğmeyi tıklattığında
btn1.onclick = function(event) {
    modal1.style.display = "block";
   
}
btn2.onclick = function(event) {
    modal2.style.display = "block";
   
}
btn3.onclick = function(event) {
    modal3.style.display = "block";
   
}
btn4.onclick = function(event) {
    modal4.style.display = "block";
   
}

// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span1.onclick = function() {
  
    modal1.style.display = "none";
}
span2.onclick = function() {
  
    modal2.style.display = "none";
}
span3.onclick = function() {
  
    modal3.style.display = "none";
}
span4.onclick = function() {
  
    modal4.style.display = "none";
}
// span3.onclick = function(event) {
  
//     modal3.style.display = "none";
// }
// span4.onclick = function(event) {
  
//     modal4.style.display = "none";
// }
// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
       
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
       
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
       
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
       
    }
}