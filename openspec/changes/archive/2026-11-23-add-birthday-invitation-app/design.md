## Context

Greenfield Vite + React 19 app with only a placeholder `App.jsx`. Audience: family and friends opening a link on phones (likely via WhatsApp). Inputs: Evy's photo (portrait, jungle illustration background) and a night photo of Hotel Highway King.

## Goals / Non-Goals

**Goals:** simple, delightful, fast, mobile-first invitation; ~25 s video; all details on one page.
**Non-Goals:** RSVP backend, guest accounts, multiple events, i18n, analytics.

## Decisions

- **State machine in `App`**: `closed → opening → playing → details`. Skip/end/error all go to `details`.
- **Video is a pre-rendered MP4** (H.264/AAC, 720p portrait 9:16, ≤ ~8 MB) in `public/media/`, generated at dev time with ffmpeg from Evy's photo, venue photo, text cards (date, time, venue) and a royalty-free music bed. Alternative considered: in-browser animated "video" (CSS/canvas) — rejected because the user asked for a real video and it's harder to guarantee timing and sound.
- **Playback on tap**: `video.play()` called in the Open click handler to satisfy autoplay policies; `playsInline` for iOS.
- **Styling**: plain CSS with custom properties (no UI library). Theme: sky blue `#BFE3F5`, sage green, sunshine yellow `#FFD95A`, cream; rounded font (e.g. Fredoka via self-hosted/Google font); decorative SVG leaves, monkey/parrot-style motifs, balloons, big "1".
- **Maps link**: Google Maps search URL for "Hotel Highway King, Bilaspur, NH 48, Panchgaon, Gurugram".
- **Components**: `Envelope`, `VideoPlayer`, `Details`, `VenueCard`.

## Risks / Trade-offs

- Music licensing → use royalty-free/own track; flag in tasks.
- Large video on mobile data → compress, `preload="metadata"`, show poster.
- Photos are PNG and large → convert/resize to optimized WebP/JPEG.
- Exact coordinates of the venue unverified → use text search URL rather than lat/long.

## Open Questions

- Which music track (or silent video with captions)?
- Should the page include host names/contact number for RSVP?
- Preferred hosting (Netlify/Vercel/GitHub Pages)?
