let fast_food = {
    name: "pizza",
    shape: "Triangular",
    method: "Oven cooked",
    can_dipin_sauce: true,
    meats: ["Chicken", "beef", "sausage", "pepperoni"]
};

if (fast_food.can_dipin_sauce === true) { 
    fast_food.can_dipin_sauce = "can";    
} else {
    fast_food.can_dipin_sauce = "cannot"; 
}

document.getElementById("p1").innerHTML = `My favorite fast food is ${fast_food.name} and it is ${fast_food.method} in order to be made. It is ${fast_food.shape} in shape and ${fast_food.can_dipin_sauce} be dipped in sauce. It can be made by the following meats: ${fast_food.meats}`


let rand_occurred = false;
let num = null
function rand() {
    let text = "";
    num =  Math.random()*100
    text += num
    document.getElementById("p2").innerHTML = text;
    rand_occurred = true;  
if (rand_occurred === true) {
    document.getElementById("p3").innerHTML = '<button onclick="floor()">Round to the lowest integer!</button>';
}
}
function floor(){
    document.getElementById("p2").innerHTML =  `${Math.floor(num)}`
    document.getElementById("p3").innerHTML = ""
}
function sumOfArguments() {
    let sum = 0; 
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; 
    }
    return sum;
}

document.getElementById("p4").innerHTML = sumOfArguments(2, 3, 5, 7, 11, 13, 17, 19);

