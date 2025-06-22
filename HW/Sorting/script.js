my_num = [12,23,-23,-24,24,78,-57,34,-78,45,5,-7,4]

function multi(num){
    return num*10
}
let map_array = my_num.map(multi)
document.getElementById("p3").innerHTML = map_array
function ascen(){
    document.getElementById("p2").innerHTML = map_array.sort((a,b)=>a-b);
}
function descen(){
    document.getElementById("p2").innerHTML = map_array.reverse((a,b)=>a-b);
}