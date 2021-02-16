import React from "react";
import Key from "./Key";
import "./Piano.css";

export default function Piano() {
  const notes = ["c1", "d1f", "d1", "e1f", "e1", "f1", "g1f", "g1", "a1f", "a1", "b1f", "b1", "c2"];
  const keys = notes.map((note, index) => <Key note={note} key={index} />)

  return (
    <div className="Piano">
      <div className="piano-div">
        {keys}
      </div>
    </div>
  )
  
}