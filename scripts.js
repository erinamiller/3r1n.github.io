var angle = 0;
function spin() {
  //code to spin
  console.log("in spin()");
  img = document.getElementById('spin');
  img.style.transform = "rotate(" + angle + "deg)";
  angle++;
  //css: transform: rotate(0.01turn);
  //recursive call
  setTimeout(spin, 50);
}
spin();
