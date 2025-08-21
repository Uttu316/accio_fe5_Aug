import { useState } from "react";
import reactIcon from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main_container">
      <h1>Welcome To React Course</h1>
      <div className="img_container">
        <img className="vite_img" src={"vite.svg"} height={100} />
        <img className="react_img" src={reactIcon} height={100} />
      </div>

      <table>
        <tr>
          <th>Day</th>
          <th>Lesson</th>
        </tr>
        <tr>
          <td>Mon</td>
          <td>Intro</td>
        </tr>
        <tr>
          <td>Thurs</td>
          <td>Component and Props</td>
        </tr>
      </table>
      <h2>Topics</h2>
      <ul>
        <li>Introduction of React</li>
        <li>What is React</li>
        <li>Why React</li>
        <li>Setup React App</li>
        <li>NPM</li>
        <li>Vite</li>
        <li>Folder Structure</li>
        <li>Rendering of App</li>
      </ul>
      <h3>Taken By: Utkarsh Gupta</h3>
      <h4>Conducted by: AccioJob</h4>
    </div>
  );
}

export default App;
