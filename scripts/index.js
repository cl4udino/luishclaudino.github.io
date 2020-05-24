var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var slides = document.getElementsByName("slide");
var checkedPos = 0;

var leftBtn = document.getElementById("left");

var rightBtn = document.getElementById("right");

// console.log(slides[1].checked)
// slides[1].checked = true;
// console.log(slides[0].checked)


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

leftBtn.onclick = function (){
  console.log(slides[0].checked,slides[1].checked)
  if (checkedPos == 0){
    checkedPos = slides.length;
  }
  checkedPos -= 1;
  slides[checkedPos].checked = true;
}

rightBtn.onclick = function (){
  console.log(slides[0].checked,slides[1].checked)
  checkedPos += 1;
  if (checkedPos == slides.length){
    checkedPos = 0;
  }
  slides[checkedPos].checked = true;
}