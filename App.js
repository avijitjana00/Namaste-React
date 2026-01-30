import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", { key: "child1-h1" }, "I am h1 tab"),
            React.createElement("h2", { key: "child1-h2" }, "I am h2 tab")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", { key: "child2-h1" }, "I am h1 tab"),
            React.createElement("h2", { key: "child2-h2" }, "I am h2 tab")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);