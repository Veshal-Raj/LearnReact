const heading = React.createElement(
    "h1",
    { id: 'Heading'}, // these object are for giving attribute, for example in this case, for the h1 tag, the id Heading is given 
    "Hello World from React!"
    )
        
const root = ReactDOM.createRoot(document.getElementById("root"));
   
root.render(heading);

