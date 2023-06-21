import React from "react";
import "./index.css";

const time = new Date().getHours();
let greetings = "";
const headingCss = {};

if (time < 12) {
  headingCss.color = "green";
  greetings = "Good Morning";
} else if (time >= 12 && time < 19) {
  headingCss.color = "orange";
  greetings = "Good Afternoon";
} else {
  headingCss.color = "red";
  greetings = "Good Evening";
}
function App() {



  return (<>
    <div className="box">
      <h1 className="heading">
        Hello Sir,{" "}
        <span className="colorGreet" style={headingCss}>
          {greetings}
        </span>
      </h1>
    </div>
  </>)



}

export default App;