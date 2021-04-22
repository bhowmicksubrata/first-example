$("#jbutton").click(function() {
  alert("'Click Me!' button is clicked.");
  console.log("'Click Me!' button is clicked.");
});

$("h1").click(function() {
  console.log("H1 click called by jQuery.");
  alert("H1 called by jQuery.");

  let exp = document.getElementById("my-heading");
  exp.innerHTML = "Hello Stranger";

  console.log("H1 click called completed");
});

function sayhello() {
  console.log("'Say Hello' button clicked.");
}
