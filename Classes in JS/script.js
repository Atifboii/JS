class Bird{
    constructor (naam,source,colour){
     this.name = naam;
     this.origin = source;
     this.color = colour;
    }
    show(size){
        return `the ${this.name} is a ${size} bird that is of ${this.color} and is originating from ${this.origin} .`
    }
 }
let doel = new Bird("doel","Bangladesh","black-white");
document.writeln(`${doel.show("small")}`);
document.writeln(`<br>`)
let kokil = new Bird("Kokil","Asia","black");
document.writeln(`${kokil.show("small")}`);