import "./App.css";
import React, { useState } from "react";
import Person from "./components/Person";

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState("");
  const ClickPev = () => {
    if (count - 1 < 0) alert("LỖI : ID KHÔNG HỢP LỆ");
    let url = `https://picsum.photos/id/${count - 1}/960/640`;
    console.log(url);
    setCount(count - 1);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
  };
  const ClickNext = () => {
    let url = `https://picsum.photos/id/${count + 1}/960/640`;
    console.log(url);
    setCount(count + 1);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
  };
  const NumberPost = () => {
    let id = parseInt(document.getElementById("nhi").value);
    console.log(id);
    let url = `https://picsum.photos/id/${id}/960/640`;
    setCount(id);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
  };
  return (
    <div id="content">
      <div id="nav">
        <div>From Front-End Team With &hearts;</div>
        <p>Photo id : {count} </p>
        <Person changed={NumberPost} />
      </div>
      <img id="img" alt="this is a image from lorem picsum" src={image}></img>

      <div id="footer">
        <button id="next_button" type="button" onClick={ClickPev}>
          Previous
        </button>
        <button id="Pre_button" type="button" onClick={ClickNext}>
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
