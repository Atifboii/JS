let Word = "AmAzInG";
document.getElementById("p1").innerHTML = Word
document.getElementById("p2").innerHTML = `${Word.toUpperCase(Word)}`
document.getElementById("p3").innerHTML = `${Word.toLowerCase(Word)}`
let Phr = new RegExp ("Hello!")
let Phr2 = Phr.test(Word)
document.getElementById("p4").innerHTML = Phr2