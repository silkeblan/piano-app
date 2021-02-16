import React from "react";
import "./Key.css"

export default function Key(props) {
  let keyClassName = "Key";
  if (props.note.length > 2) {
    keyClassName += " flat";
  }

  function handleMouseDown(event) {
    let key = event.target;
    key.classList.add("pressed");
  }

  function handleMouseUp(event) {
    let key = event.target;
    key.classList.remove("pressed");
  }

  return (
    <div className={keyClassName} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseOut={handleMouseUp}></div>
  )
}