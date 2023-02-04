import React from "react";
import ReactDOM from "react-dom";

// if we have a variable
let age = "12";
let name = "John"; // evenutalmente lo introduce el usuario o nos viene de BBDD

// we can use it in our html like this
let output = (
	<span>
		{name} is {age} years old
	</span>
);

// use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
