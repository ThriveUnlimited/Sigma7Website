# Sigma7 Group Website

Static website for Sigma7 Group. No build step, no server — just HTML, CSS, and an image.

## Structure

```
index.html         Home (hero)
approach.html      Principles
products.html      Structure + partner platforms
about.html         Story + stats
css/styles.css     Shared stylesheet
assets/            Logo and other images
```

## Local preview

Open `index.html` directly in a browser, or serve the directory:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Upload the contents of this directory to any static host (Netlify, Cloudflare Pages, S3, GitHub Pages, etc.). No build command, no environment variables.

## Editing

Each page inlines its own `<nav>` and `<footer>`. When updating shared chrome, change all four HTML files. Shared styling lives in `css/styles.css`.

Contact is a `mailto:` to `hello@sigma7group.com`.
