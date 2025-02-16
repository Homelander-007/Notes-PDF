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
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780920787666149"
     crossorigin="anonymous"></script>
var name = prompt("Name :");
if (name != null) {
    $("h1").text("Welcome " + name + " to Notes Yard");
} else {
    $("h1").text("Welcome to Notes-PDF");
}
