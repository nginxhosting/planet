function toggle(eldiv) {
  var ele = document.getElementById(eldiv);
  if(ele.style.display == "block") {
    ele.style.display = "none";
  } else {
    ele.style.display = "block";
  }
}
