import React from "react"
import ReactPlayer from "react-player"
import "../App.css"

function App() {
  return (
  <div><div><h1>My Video2</h1></div>
	<div className='flex-container'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />
    </div></div>
  )
}

export default App