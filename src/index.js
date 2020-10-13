import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "2rem",
  border: "2px solid red",
  margin: "0",
  textAlign: "center"
};

customStyle.border = "5px solid blue";

ReactDOM.render(
  <>
    <h1 style={customStyle}>Hello World!</h1>
    <h3
      style={{
        textAlign: "center",
        fontFamily: "verdana",
        backgroundColor: "blue",
        color: "#FFF",
        padding: "10px"
      }}
    >
      Hello
    </h3>
  </>,
  document.getElementById("root")
);
