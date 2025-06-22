let my_num = [12,23,-23,-24,24,78,-57,34,-78,45,5,-7,4];
document.getElementById("p1").innerHTML = my_num;

function ascen(){
    document.getElementById("p2").innerHTML = my_num.sort((a,b)=>a-b);
}
function descen(){
    document.getElementById("p2").innerHTML = my_num.reverse((a,b)=>a-b);
}

let multi = function(num){
    return num*10
}
let mapped_array = my_num.map(multi);
document.getElementById("p3").innerText = mapped_array