
import React from "react";
import "../App.css";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function App() {
  return (
     <div><div><h1>My Video</h1></div>
    <div className='flex-container'>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div></div>
  );
}
