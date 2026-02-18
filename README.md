# Personal Website

Static personal website for GitHub Pages.

## Run locally

Open `index.html` in your browser, or use a static server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. In GitHub: **Settings -> Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your default branch (often `main`) and `/ (root)`.
5. Save.

Your site will publish at:
- `https://<your-username>.github.io/<repo-name>/`
- If this repo is named `<your-username>.github.io`, it publishes at `https://<your-username>.github.io/`.

## Customize quickly

- Update your name and intro in `index.html`.
- Replace project cards in `index.html`.
- Update contact links in `index.html`.
- Tweak theme variables in `styles.css`.
