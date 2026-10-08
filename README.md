# Cocktail Experience

One-page team presentation site (Spanish / English), published with GitHub Pages from `main`.

Live: https://ileanacamelia.github.io/cocktail-experience/

Files: `index.html` (page), `style.css` (design), `script.js` (settings, translations, behaviour), `images/`.

## Change the hero image
Replace `images/hero.jpg` with a new image using the **same name**. That's it: the page background and the WhatsApp/social preview both use this file.
Tip: landscape, about 1920 px wide, under ~300 KB (WhatsApp shows the preview more reliably with small images).

## Add team photos
Upload square photos (ideally 600×600 px) into `images/` with exactly these names:

- `images/cristian.jpg`
- `images/camelia.jpg`
- `images/claudiu.jpg`

Until a photo exists, the circle shows gold initials.

## Add YouTube videos
Open `script.js` and fill in the `VIDEOS` block at the top with the video ID (the part after `watch?v=`, e.g. for `https://www.youtube.com/watch?v=AbC123xyz` the ID is `AbC123xyz`):

```js
const VIDEOS = {
  cristian: "AbC123xyz",
  camelia: "",
  claudiu: ""
};
```

Hover (desktop) plays the video muted inside the circle; click/tap plays it with sound; tap again or move the mouse away to return to the photo. Empty ID = photo only.

## Fill in contact details
In the same file, fill in `CONTACT`:

```js
const CONTACT = {
  whatsapp: "+34 600 000 000",
  email: "hola@example.com",
  instagram: "cocktailexperience",   // handle or full link
  website: "www.example.com"
};
```

Empty values are hidden. While all four are empty, the whole Contact section is hidden.

## Edit texts
All Spanish and English texts are in the `I18N` object in `script.js`.
