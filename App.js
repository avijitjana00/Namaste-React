import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//const heading = React.createElement("h1", {id: "heading"}, "Its a react element by react");

const Title = () => <h1 className="head">This is JSX Title</h1>

const jsxExpression = "This is JSX Expression";
//functional component
const FunctionalComponent = () => (
    <div>
        <Title/>
        {jsxExpression}
        <h1>This is functional component</h1>
    </div>
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);