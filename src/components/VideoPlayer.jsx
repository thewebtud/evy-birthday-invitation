import { forwardRef } from 'react'

const VideoPlayer = forwardRef(function VideoPlayer({ visible, onDone }, ref) {
  return (
    <div className={`video-wrap${visible ? ' is-visible' : ''}`}>
      <video
        ref={ref}
        src="/media/invitation.mp4"
        poster="/media/poster.jpg"
        playsInline
        controls
        preload="auto"
        onEnded={onDone}
        onError={onDone}
      />
      <button type="button" className="skip-btn" onClick={onDone}>
        Skip
      </button>
    </div>
  )
})

export default VideoPlayer
