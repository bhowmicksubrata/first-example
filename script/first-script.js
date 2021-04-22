$("#jbutton").click(function() {
  alert("The paragraph was clicked.");
});

$("h1").click(function() {
  console.log("Function called");
  alert("The paragraph was clicked.");
  let exp = document.getElementById("my-heading");
  exp.innerHTML = "hello";

  console.log("Function completed");
});

function sayhello() {
  console.log("button clicked.");
}
