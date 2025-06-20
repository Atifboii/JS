let x = 1;
let text = " "
while(x<=100) {
      text += `${x} <br>`
      x+=1
}
document.getElementById("loop").innerHTML = text