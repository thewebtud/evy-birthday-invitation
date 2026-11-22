import { useRef, useState } from 'react'
import Envelope from './components/Envelope'
import VideoPlayer from './components/VideoPlayer'
import Details from './components/Details'
import VideoScenes from './components/VideoScenes'
import { Backdrop } from './components/Jungle'
import './App.css'

// closed -> opening -> playing -> details
function Invitation() {
  const [stage, setStage] = useState('closed')
  const videoRef = useRef(null)

  // play() must be called inside the tap handler so sound is allowed by browsers
  const open = () => {
    const video = videoRef.current
    video.currentTime = 0
    video.play().catch(() => setStage('details'))
    setStage('opening')
  }

  const replay = () => {
    const video = videoRef.current
    video.currentTime = 0
    video.play().catch(() => setStage('details'))
    setStage('playing')
  }

  return (
    <main className="app">
      <Backdrop />
      <VideoPlayer
        ref={videoRef}
        visible={stage === 'opening' || stage === 'playing'}
        onDone={() => setStage('details')}
      />
      {(stage === 'closed' || stage === 'opening') && (
        <Envelope
          opening={stage === 'opening'}
          onOpen={open}
          onOpened={() => setStage('playing')}
        />
      )}
      {stage === 'details' && <Details onReplay={replay} />}
    </main>
  )
}

// #render shows the frame-by-frame scenes used to produce the invitation video
function App() {
  return location.hash === '#render' ? <VideoScenes /> : <Invitation />
}

export default App
