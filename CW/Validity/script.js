document.getElementById("form").addEventListener("submit", 
    function(event){
        const pass = document.getElementById("pass").value.trim();
        if(pass.length < 8){
            document.getElementById("alert").innerHTML = "Password must be less than 8 characters."
            event.preventDefault();
        }
        
    }
)

function func(){
    let input = document.getElementById("input")
    if(!input.checkValidity()){
        document.getElementById("result").innerHTML = input.validationMessage
    }
    else{
        document.getElementById("result").textContent = "Input is OK."
    }
}