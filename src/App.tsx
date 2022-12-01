import React from 'react'
import VideoBg from './assets/video.mp4'




export const App = () => {
  return (
    <section className='page'>
      <div className='overlay'></div>
      <video src={VideoBg} autoPlay muted loop ></video>
      <div className='pageContent'>
        <h1>Launching Soon</h1>
        <h3>Leave your Email and we'll let you know once the site goes live.</h3>
      </div>
    </section>
  )
}
