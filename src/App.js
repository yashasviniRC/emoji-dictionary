import React, { useState } from "react";
import "./styles.css";


const emojiDictionary={
"😀": "Grinning Face"
"😃":"Grinning Face with Big Eyes"
"😄": "Grinning Face with Smiling Eyes"
"😁" :"Beaming Face with Smiling Eyes"
"😆": "Grinning Squinting Face"
"😅" :"Grinning Face with Sweat"
"🤣":"Rolling on the Floor Laughing"
"😂" :"Face with Tears of Joy"
"🙂":"Slightly Smiling Face"
"🙃" :"Upside-Down Face"
"🫠":"Melting Face"
"😉" :"Winking Face"
}
export default function App() {
  var [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    // console.log(event.target) ;
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
  return (
    <div className="App">
      <h1>inside out!</h1>
      <input onChange={inputChangeHandler} />
      <div>welcome {userInput}</div>
    </div>
  );
}
