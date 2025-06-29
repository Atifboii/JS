let UserDataJSON =[
    {
        "id" : 1,
        "name" : "Atif",
        "favfood" : "Pizza"
    },    
    {
        "id" : 2,
        "name" : "Abid",
        "favfood" : "Burger"
    },    
    {
        "id" : 3,
        "name" : "Akib",
        "favfood" : "Tacos"
    }
]
function fetchUsersFromServers(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const didErrorOccur = false;
            if(didErrorOccur){
                reject("Kitchen Accident: The Chef  ate the food! D:");
            }
            else{
                const users = JSON.parse(UserDataJSON);
                resolve(users);
            }
        },2000)
    })
}
async function haveDinner(){
    try{
        const users = await fetchUsersFromServers();
        document.writeln(`Buzzer goes off!  You got your food!`)
        document.writeln(`<br>`)
        document.writeln(`Let's find Akib...`)
        document.writeln(`br`)
        const wanted_user = users.find(user => user.name === "Akib");
        document.writeln(`Found him! his fav food is ${wanted_user.hobby}`)
        document.writeln(`<br>`)
    }catch (error) {
        // This part runs if the promise is rejected.
        document.writeln("Oh no! Something went wrong. 😞");
        document.writeln(`<br>`);
        document.writeln(error);
        document.writeln(`<br>`);
    }
    document.writeln("\nDinner is over. Time to gohome!");
}
    
haveDinner()