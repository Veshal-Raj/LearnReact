const heading = React.createElement(
    "h1",
    { id: 'Heading'}, 
    "Hello World from React!"
    )

    console.log(heading) // This will give you an object, this is a react element. React element is nothing, it is just js.
    // And it have props also, props are childern + attribute, for example : the "Hello world from REact" and id: "Heading"
        
const root = ReactDOM.createRoot(document.getElementById("root"));
   
root.render(heading);
// What this render is doing that, it pass the heading, which is an object and create the html tag that the browser understand.

