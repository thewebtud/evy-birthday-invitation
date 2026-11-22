# Evy's 1st Birthday Invitation

Mobile-first invitation: tap **Open** on the envelope to play a 25 s video, then see the details, Evy's photo and the venue.

- `npm run dev` – local dev server
- `npm run build` – static build into `dist/` (deploy to any static host)
- `node scripts/make-video.mjs` – re-renders `public/media/invitation.mp4` by capturing the `#render` scenes (needs Google Chrome installed)

Event: Friday 27 Nov 2026, arrival 6:30 PM onwards, Hotel Highway King, Bilaspur, NH 48, Panchgaon, Gurugram.

## Credits

Music: "Happy Kids Music" by BeardMusicStock, licensed [CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/) (https://archive.org/details/jamendo-464211). Non-commercial use only.

## Deployment (Vercel)

Pushing to `main` deploys to production via `.github/workflows/deploy.yml`. One-time setup:

1. Run `npx vercel link` locally; it creates `.vercel/project.json` containing `orgId` and `projectId`.
2. Create a token at https://vercel.com/account/tokens.
3. In GitHub → Settings → Secrets and variables → Actions, add `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`.

Alternatively, import the repo in Vercel (Git integration) which auto-deploys on push without this workflow; if you do, delete the workflow to avoid double deploys.
