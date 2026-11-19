# Abhishikth Ayyagari — Portfolio

A responsive, single-page portfolio inspired by the section structure of the supplied reference website. All résumé facts were transcribed from the supplied image. This is an independent implementation, not an exact copy of the original website's source code or assets.

## View locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Deploy to Vercel
Create a new Vercel project and upload this folder, or push these files into a GitHub repository and import it in Vercel. Framework preset: **Other**. No build command is needed.

## Customization
- Edit `index.html` to update text, links, and stats.
- The supplied profile photo is included as `profile-photo.jpg` and displayed in the hero section. Replace that file to change the portrait.
- Add GitHub/demo links to projects if available; none were invented.
- The contact form deliberately opens the visitor's email application; no backend or external data collection is included.

This site relies on Google Fonts for typography; it gracefully falls back to system fonts offline.

Updated portrait: `profile-photo.png` is cropped from the circular LinkedIn screenshot, with a transparent background. LinkedIn links use the corrected URL provided by the user: https://www.linkedin.com/in/abhishikth-pushkar-ayyagari-b27310271/

## Resume PDF

The Resume link in the Contact section opens `resume.pdf` in a new tab. Keep this file next to `index.html` when deploying to Vercel.
