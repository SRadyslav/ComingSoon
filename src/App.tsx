import React from 'react'
import VideoBg from './assets/video.mp4'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown' //import clock
import '@leenguyen/react-flip-clock-countdown/dist/index.css' // clock css
import './index.css'



export const App = () => {
  return (
    <section className='page'>
      <div className='overlay'></div>
      <video src={VideoBg} autoPlay muted loop ></video>
      <div className='pageContent'>
        <h1>Launching Soon</h1>
        <h3>Leave your Email and we'll let you know once the site goes live.</h3>
        <FlipClockCountdown 
      to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
      className='flip-clock'
      labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
      duration={0.5}
      />
      <button className='btn'>Notify Me</button>
      </div>
    </section>
  )
}
