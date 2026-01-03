# Simple Shop — Demo e-commerce frontend

This repository contains a minimal static e-commerce storefront (product listing, cart, checkout form) built with plain HTML, CSS and JavaScript. It's intended as a starting point.

Files added:

- [index.html](index.html) — main page
- [styles.css](styles.css) — styles
- [app.js](app.js) — frontend logic (products, cart, checkout)

Run locally:

1. Open `index.html` directly in a browser, or serve via a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# or using http-server (npm)
npx http-server -c-1
```

2. Visit `http://localhost:8000` and try adding products to the cart.

Notes:
- This is a static demo; no payment processing is included.
- Cart is stored in `localStorage` for persistence.
