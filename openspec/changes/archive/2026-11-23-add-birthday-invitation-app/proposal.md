# Proposal

## Why

Evy turns 1 on 27 November 2026. We want a shareable, mobile-friendly digital invitation that feels like opening a real envelope, plays a short invitation video, and gives guests the venue, timing and a photo of Evy in one place.

## What Changes

- Replace the placeholder `App.jsx` with a single-page invitation app (React + Vite, already scaffolded).
- Add an envelope landing screen with an "Open" button; tapping it opens the envelope and plays the invitation video.
- Add a ~25 second invitation video (pre-rendered MP4) featuring Evy's photo, the event details and a 1st-birthday theme.
- Add a details section: Evy's photo, "Evy turns 1", date (27 Nov 2026), arrival time (6:30 PM onwards), venue name and full address, with the Hotel Highway King photo and a map link.
- Apply a playful 1st-birthday theme for a baby boy (soft blues/yellows, jungle/safari motifs matching Evy's photo, large friendly type, a big "1").
- Bundle the two supplied images (Evy, hotel) as static assets.

## Capabilities

### New Capabilities

- `birthday-invitation`: Envelope-open experience, invitation video playback, event details (date, time, venue, address) with Evy's and the venue's photos, and the 1st-birthday visual theme.

### Modified Capabilities

(none)

## Impact

- Code: `src/App.jsx`, `src/App.css`, `src/index.css`, new components under `src/components/`.
- Assets: `public/images/evy.png`, `public/images/hotel.png`, `public/media/invitation.mp4` (+ poster).
- Dependencies: none required at runtime; ffmpeg (dev-time only) to render the video.
- Hosting: static build (`vite build`), shareable via any static host.
