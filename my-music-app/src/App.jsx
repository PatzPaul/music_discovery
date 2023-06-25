import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Groove from './Groove'

function App() {
  return (
    <>

      <div className='container'>
        <div className='player'>
          <audio id='audio-player'></audio>
          <h2 id='music-name' className='music-name'></h2>
          <p id='music-author' className='music-author'></p>

          <div className='player-progress'>
            <div className='progress-values'>
              <span id='player-current-time'>----:----</span>
              <span id='player-duration'>----:-----</span>
            </div>
            <progress id='palyer-progress'></progress>
          </div>
          <div className='player-buttons'>
            <button id='btn-prev' className='btn btn-prev'>
              <i className='bi bi-rewind-fill'></i>
            </button>
            <button id='btn-play' className='btn btn-play'>
              <i id='btn-play-icon' className='bi bi-play-fill'></i>
            </button>
            <button id='btn-next' className='btn btn-next'>
              <i className='bi bi-fast-forward-fill'></i>
            </button>
          </div>
        </div>
      </div>

    </>


  )
}

export default App
