let shape = {
    name: "Square",
    sides: "4",
    angles: ["all 90 degrees", "all parallel", "all opposite"],
    type: ["Quadrilateral", "polygon"],
    origin: "Latin",
};
document.getElementById(
    "p1"
).innerHTML = `My favorite shape is a ${shape.name} it has ${shape.sides} sides and is of ${shape.origin} origin.`;
document.getElementById(
    "p2"
).innerHTML = `They have angle properties of ${shape.angles} to each other.`;

document.writeln(`Random method generates random decimal numbers in between(excluding)  0 and 1 = ${Math.random()}`);
document.writeln(`<br>`);
document.writeln(`<br>`);
document.writeln(`Floor method converts a decimal number to its closest lower integer = ${Math.floor(Math.random() * 10)}`);
