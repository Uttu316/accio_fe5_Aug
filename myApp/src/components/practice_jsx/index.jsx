import reactIcon from "../../assets/react.svg";

import "./practicejsx.css";

function PractivceJSX() {
  const fname = "Utkarsh";
  const lName = "Gupta";

  const year = 2025;
  const user = { name: "ABC" };

  const showUserName = () => user.name;

  const isInstructor = true;
  const isAi = false;

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
        {
          //fragment
          <>
            <li>Why React</li>
            <li>Setup React App</li>
            <li>NPM</li>
          </>
        }

        <li>Vite</li>
        <li>Folder Structure</li>
        <li>Rendering of App</li>
      </ul>
      {(isInstructor || isAi) && <h3>Taken By: {fname + " " + lName}</h3>}
      <h1>{<p>Hello</p>}</h1>
      {[<p>Hello</p>, <span>UI</span>, <b>Hey</b>]}
      <h4>{showUserName()}</h4>

      <h4>Conducted by: AccioJob</h4>
      <footer>Made by Love in {year}</footer>
    </div>
  );
}

export default PractivceJSX;
