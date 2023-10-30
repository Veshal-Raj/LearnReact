/**
 * 
 *  <div id='parent'> 
 *      <div id="child">
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
*       <div id="child2">
*           <h1>I'm a h1 tag</h1>
*           <h2>I'm a h2 tag</h2>
*          </div>
 *  </div>
 * 

 */


//          This is the core of react. the below code is just an example for that, 
//          react can be written without JSX

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement("div",{id: "child"},[
            React.createElement("h1", {} ,"I'm a h1 tag"),
            React.createElement("h2", {} ,"I'm a h2 tag"),
        ]),
        React.createElement("div",{id: "child2"},[
            React.createElement("h1", {} ,"I'm a h1 tag"),
            React.createElement("h2", {} ,"I'm a h2 tag"),
        ])
    ]
)




    console.log(parent) // object

const root = ReactDOM.createRoot(document.getElementById("root"));
   
root.render(parent);

