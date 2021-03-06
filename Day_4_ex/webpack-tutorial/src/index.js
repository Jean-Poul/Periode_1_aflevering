// Dependencies for webpack, webpack-cli, and the webpack-dev-server: npm i webpack webpack-cli webpack-dev-server --save-dev
// Dependencies for working with html in wepback: npm i html-webpack-plugin --save-dev
// Dependencies for dev server: npm i webpack-dev-server --save-dev
// Dependencies: npm i css-loader style-loader sass-loader sass --save-dev
// CSS import part first part
import "./style.css";
// SASS import second part
import "./style.scss";
// Basic output for styling
console.log("Hello webpack!");



// Babel test with for compiling modern JavaScript down to ES5
// Dependencies: npm i @babel/core babel-loader @babel/preset-env --save-dev
const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();


// Dependencies to use React components with webpack, alongside with babel loader:
// npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));
 

// There is a limit that the webpack community considers the maximum size for the initial bundle of an application: 200KB.
// To optimize I use optimization.splitChunks
// Dependencies for the big time and date library: npm i moment
import moment from "moment";


// Static import example
// ES modules are static, meaning we cannot change imports at runtime.
/* import { getUsers } from "./common/usersAPI";
getUsers().then(json => console.log(json));

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUsers().then(json => console.log(json));
}); */


// Dynamic import example

const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});