import { Animals, Bunting } from './Jungle'

const ADDRESS = 'Hotel Highway King, Bilaspur, NH 48, Panchgaon, Gurugram'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

export default function Details({ onReplay }) {
  return (
    <article className="details">
      <Bunting />
      <Animals />
      <header className="hero">
        <p className="kicker">You are invited to</p>
        <h1>
          <span className="c1">Evy’s</span> <span className="big-one">1st</span>{' '}
          <span className="c3">Birthday</span>
        </h1>
        <img className="evy-photo" src="/images/evy.jpg" alt="Evy smiling, holding a guava" />
      </header>

      <section className="card when">
        <h2>When</h2>
        <p className="strong">Friday, 27 November 2026</p>
        <p>Arrival: 6:30 PM onwards</p>
      </section>

      <section className="card where">
        <h2>Where</h2>
        <img className="hotel-photo" src="/images/hotel.jpg" alt="Hotel Highway King at night" />
        <address>
          <strong>Hotel Highway King</strong>
          <br />
          Bilaspur, NH 48, Panchgaon, Gurugram
        </address>
        <a className="btn" href={MAPS_URL} target="_blank" rel="noreferrer">
          Get Directions
        </a>
      </section>

      <p className="footer-note">Come celebrate with us. We can’t wait to see you! 🎉</p>
      <a
        className="insta"
        href="https://www.instagram.com/growing_with_evy"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
        @growing_with_evy
      </a>
      <button type="button" className="btn ghost" onClick={onReplay}>
        ▶ Replay video
      </button>
    </article>
  )
}
