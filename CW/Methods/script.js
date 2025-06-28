let Word = "AmAzInG";
document.getElementById("p1").innerHTML = Word
document.getElementById("p2").innerHTML = `${Word.toUpperCase(Word)}`
document.getElementById("p3").innerHTML = `${Word.toLowerCase(Word)}`
let Phr = new RegExp ("Hello!")
let Phr2 = Phr.test(Word)
document.getElementById("p4").innerHTML = Phr2
let fruits = ["Apple","Mango","Banana","Grapes","Watermelon"]
let text = ""
let i
for (i=0; i<fruits.length; i++){
    text += fruits[i]+ "<br/>"
}
document.getElementById("p5").innerHTML = text