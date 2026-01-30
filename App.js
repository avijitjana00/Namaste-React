
/**
 * 
 * <div id = "parent"> 
 *   <div id = "child1">
 *     <h1> I am h1 tag </h1>
 *     <h2> I am h2 tag </h2>
 *  </div>
 * <div id = "child2">
 *     <h1> I am h1 tag </h1>
 *     <h2> I am h2 tag </h2>
 *  </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
*/

/**
 * Note: 
 * 1.React.createElement() method is used to create React elements and it takes three arguments:
 * 2.React.createElement() will return a react element object which is then rendered to the DOM using ReactDOM.
 * 3.ReactDOM is used to render React elements to the DOM.
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", {}, "I am h1 tab"),
            React.createElement("h2", {}, "I am h2 tab")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "I am h1 tab"),
            React.createElement("h2", {}, "I am h2 tab")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);