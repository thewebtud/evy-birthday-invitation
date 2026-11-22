## 1. Assets

- [x] 1.1 Copy and optimize Evy's photo and the hotel photo into `public/images/`
- [x] 1.2 Choose royalty-free music; render ~25 s 9:16 `invitation.mp4` and poster into `public/media/` with ffmpeg (Evy photo, venue photo, date/time/venue text cards)
- [x] 1.3 Verify video duration is 23–27 s and file size is mobile-friendly

## 2. Theme and layout

- [x] 2.1 Define theme tokens (colors, font, spacing) in `src/index.css`; remove Vite boilerplate styles
- [x] 2.2 Create decorative SVG motifs (leaves, animals, balloons, big "1")

## 3. Components

- [x] 3.1 Implement `Envelope` with "Open" button and opening animation
- [x] 3.2 Implement `VideoPlayer` (play on tap, controls, Skip, Replay, error fallback)
- [x] 3.3 Implement `Details` with Evy's photo, heading, date and arrival time
- [x] 3.4 Implement `VenueCard` with hotel photo, address and "Get Directions" link
- [x] 3.5 Wire the `closed → opening → playing → details` state machine in `src/App.jsx`

## 4. Verification

- [x] 4.1 Check at 360×640 and desktop widths; no horizontal scroll
- [ ] 4.2 Verify playback on iOS Safari and Android Chrome (only Chromium tested)
- [x] 4.3 Run `npm run lint` and `npm run build`
- [x] 4.4 Update README with run/build/deploy instructions
