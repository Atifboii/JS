let my_friends = ["Abid",15,"Akib",14,"Atif",13];
document.getElementById("p1").innerHTML = my_friends;
document.getElementById("p2").innerHTML = `My name is ${my_friends[4]} and I am ${my_friends[5]}  years old.  I have 2 friends named ${my_friends[0]} who is ${my_friends[1]} and ${my_friends[2]} who is ${my_friends[3]}.`;
document.writeln(`${my_friends.join(`=>`)}`);
document.writeln("<br>");
my_friends.pop();
document.writeln(`${my_friends}`);
document.writeln("<br>");
my_friends.push(20);
document.writeln(`${my_friends}`);
document.writeln("<br>");
delete my_friends[4]
document.writeln(`${my_friends}`);



