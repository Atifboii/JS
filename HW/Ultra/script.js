let display = document.getElementById("display");

function addtodisplay(input){
    display.valueOf += input ;
}

function calculate(){
    try{display.valueOf = eval(display.valueOf)
    }
    catch(error){
  display.valueOf = "error"
    }
}
function clear(){
    display.valueOf = ""
}

