import React from "react";
import Key from "./Key";
import "./Piano.css";
import mp3_file from "./notes/a1.mp3";
import useSound from "use-sound";

export default function Piano() {
  const notes = ["c1", "d1f", "d1", "e1f", "e1", "f1", "g1f", "g1", "a1f", "a1", "b1f", "b1", "c2"];
  const keys = notes.map((note, index) => <Key note={note} key={index} index={index} />)

  const [play] = useSound(mp3_file);

  return (
    <div className="Piano">
      {keys}
    </div>
  )
  
}