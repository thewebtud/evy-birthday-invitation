import { Animals } from './Jungle'

export default function Envelope({ opening, onOpen, onOpened }) {
  return (
    <section
      className={`envelope-screen${opening ? ' is-opening' : ''}`}
      onAnimationEnd={(e) => {
        if (e.animationName === 'screen-away') onOpened()
      }}
    >
      <Animals />
      <p className="envelope-hint">
        <span className="rainbow">A special invitation</span>
        <br />from Evy!
      </p>
      <button
        type="button"
        className="envelope"
        onClick={onOpen}
        disabled={opening}
        aria-label="Open the invitation"
      >
        <span className="envelope-back" />
        <span className="envelope-letter">
          <span className="letter-one">1</span>
        </span>
        <span className="envelope-front" />
        <span className="envelope-flap" />
        <span className="envelope-seal">🦁</span>
      </button>
      <button type="button" className="open-btn" onClick={onOpen} disabled={opening}>
        Open
      </button>
    </section>
  )
}
