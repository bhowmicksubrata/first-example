// Import stylesheets
import "./style.css";

// Write Javascript code!
$("h1").click(function() {
  console.log("Function called");
  alert("The paragraph was clicked.");
  let exp = document.getElementById("my-heading");
  exp.innerHTML = "hello";

  console.log("Function completed");
});

$("button").click(function() {
  alert("The paragraph was clicked.");
  console.log("The paragraph was clicked.");
});
