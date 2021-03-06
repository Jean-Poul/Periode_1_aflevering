import _ from "lodash";
import "./style.css";
// import Icon from "./icon.png"; 
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported (line 1) by this script and not as the line says above
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  /*  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon); */

  return element;
}

// document.body.appendChild(component());
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

// For hot module replacement
if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    // printMe();
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
