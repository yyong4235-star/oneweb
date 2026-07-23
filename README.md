# DJ ELECTRONICS Static Website

A static multilingual company website for CÔNG TY TNHH THIẾT BỊ ĐIỆN TỬ DJ / DJ ELECTRONICS CO., LTD.

## Preview

Run a local static server from this folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Structure

- `index.html` contains the page shell and navigation.
- `styles.css` contains all responsive visual styling.
- `script.js` contains the Vietnamese, English, and Chinese content plus hash-based page routing.

The default language is Vietnamese. Use the `VI / EN / 中文` switcher in the header to change language.

## Deployment

This site has no build step. Upload `index.html`, `styles.css`, and `script.js` to any static host such as Vercel, Netlify, Cloudflare Pages, or a normal web server.
