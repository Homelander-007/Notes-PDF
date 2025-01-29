// window.onload = function() {
//    var name = prompt("Write your name below :");
//    if (name === null) {
//       alert("You did not enter your name.");
//   } else if (name.trim() === "") {
//       alert("Welcome, Sir!");
//   } else {
//       alert("Hello, " + name + "!");
//   }
// }
var name = prompt("Name :");
limit = 10;
if (name != null or name.length < limit) {
    $("h1").text("Welcome " + name + " to Notes-PDF");
} else {
    $("h1").text("Welcome to Notes-PDF");
}
