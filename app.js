import React from "react";
import ReactDOM from "react-dom/client";

// React create element => ReactElement - Js Object => (when we render this into DOM, then it becomes) Html element

// JSX --> Js syntax to create react elements
// JSX is html like syntax, or xml like syntax, it's not html written inside the js
// JSX (transpiled before it reaches the JS Engine) -- Parcel- Babel
// JSx => Babel (converts) => React.CreateElement
const jsxHeading = <h1  className="head" >Hello React!</h1>
// JSX => React.createElement =>  ReactElement - Js Object => (when we render this into DOM, then it becomes) Html element


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)
