# birthday-invitation Specification

## Purpose
TBD - created by archiving change add-birthday-invitation-app. Update Purpose after archive.

## Requirements

### Requirement: Envelope landing screen
The app SHALL show an envelope graphic with a clearly labelled "Open" button as the first screen, before any other invitation content or video.

#### Scenario: Initial load
- **WHEN** a guest opens the app
- **THEN** a closed envelope with an "Open" button is shown and the video is not playing

#### Scenario: Opening the envelope
- **WHEN** the guest taps the envelope or "Open" button
- **THEN** the envelope opening animation plays and the invitation video starts playing

### Requirement: Invitation video
The app SHALL play an invitation video of approximately 25 seconds (23–27 s) after the envelope is opened, with playback controls and a replay option once it ends.

#### Scenario: Playback started by user gesture
- **WHEN** the guest opens the envelope
- **THEN** the video plays with sound enabled, initiated by that tap so browser autoplay policies are satisfied

#### Scenario: Video finished
- **WHEN** the video ends
- **THEN** the app reveals the event details and offers a "Replay" control

#### Scenario: Skipping the video
- **WHEN** the guest taps "Skip"
- **THEN** the video stops and the event details are shown

#### Scenario: Video fails to load
- **WHEN** the video cannot be loaded or played
- **THEN** the event details are shown without blocking the guest

### Requirement: Event details
The app SHALL display Evy's photo, a "1st Birthday" heading with Evy's name, the date 27 November 2026, the arrival time "6:30 PM onwards", and the venue "Hotel Highway King, Bilaspur, NH 48, Panchgaon, Gurugram".

#### Scenario: Details visible
- **WHEN** the details section is shown
- **THEN** Evy's photo, the name, date, arrival time and venue address are all visible

### Requirement: Venue photo and directions
The app SHALL display the Hotel Highway King photo alongside the address and provide a link that opens the venue in a maps application.

#### Scenario: Venue block
- **WHEN** the address is shown
- **THEN** the hotel photo with alt text is displayed next to it

#### Scenario: Directions
- **WHEN** the guest taps "Get Directions"
- **THEN** a maps link for the venue opens in a new tab

### Requirement: First-birthday theme
The app SHALL use a playful theme suited to a one-year-old boy: soft blue and warm yellow palette, jungle/safari motifs consistent with Evy's photo, rounded friendly typography, and a prominent "1".

#### Scenario: Consistent theme
- **WHEN** any screen is displayed
- **THEN** the same theme palette, typography and motifs are applied

### Requirement: Mobile-first responsiveness
The app SHALL be usable on phone screens (≥320 px wide) as the primary target and scale gracefully to tablet and desktop.

#### Scenario: Phone viewport
- **WHEN** viewed at 360×640
- **THEN** no horizontal scrolling occurs and all content and controls remain legible and tappable

### Requirement: Video closing message
The final scene of the video SHALL display the text "With Love, Evy and family".

#### Scenario: Closing slide
- **WHEN** the video reaches its last scene
- **THEN** "With Love," and "Evy and family" are shown
