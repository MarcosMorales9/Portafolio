import React from 'react'
import "../App.css"
import video from "../assets/videoloco.mp4"

export default function AboutMe() {
  return (
    <>
    <video className="video" src={video} autoPlay loop muted />
    <div>About Me</div>
    <div>About Me</div>
    </>
    )
}
