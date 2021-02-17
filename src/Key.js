import React, { useState } from "react";
import useSound from "use-sound";
import "./Key.css"
import mp3_file from "./notes/sprite.mp3"

export default function Key(props) {
  const [play, { stop }] = useSound(mp3_file, {
    sprite: {
      c1: [0, 1000],
      d1f: [2000, 1000],
      d1: [4000, 1000],
      e1f: [6000, 1000],
      e1: [8000, 1000],
      f1: [10100, 1000],
      g1f: [12000, 1000],
      g1: [14000, 1000],
      a1f: [16000, 1000],
      a1: [18000, 1000],
      b1f: [20000, 1000],
      b1: [22000, 1000],
      c2: [24000, 1000],
    }
  });


  let keyClassName = "Key";
  if (props.note.length > 2) {
    keyClassName += " flat";
  }
  
  function handleMouseDown(event) {
    let key = event.target;
    key.classList.add("pressed");
    play({id: props.note});
  }

  function handleMouseUp(event) {
    let key = event.target;
    key.classList.remove("pressed");
    stop();
  }
  
  return (
    <div className={keyClassName} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseOut={handleMouseUp}>
    </div>
  )
}