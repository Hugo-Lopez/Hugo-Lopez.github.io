# hugo-lopez.github.io

Personal website of Hugo Lopez: one hand-written page with no build step.

The website is everything inside `docs/`. GitHub Pages publishes that folder only, so files outside it (this README, `.gitignore`) are not part of the site.

## Files

- `docs/index.html`: all the content
- `docs/assets/site.css`: styling
- `docs/assets/site.js`: loads analytics, on the live site only; the page itself needs no script
- `docs/files/`: CV and papers
- `docs/images/hugo-lopez.jpg`: portrait
- `docs/404.html`: sends any address that does not exist to the home page
- `docs/.nojekyll`: tells GitHub Pages to serve the files as they are

## Preview

```
python3 -m http.server 4000 --directory docs
```

Then open http://localhost:4000.

## Common edits

- **Update the CV:** replace `docs/files/Hugo_Lopez_CV.pdf`, keeping the file name.
- **Add a paper:** copy an `<article class="paper">` block in `docs/index.html` and change its title, coauthors and links. Nothing else needs to match up. In text, write `&amp;` for `&` and `&lt;` for `<`.

## Publishing

Commit and push to `master`. GitHub Pages republishes `docs/` within a minute or two.

The earlier template-based site is kept at the `pre-redesign` tag.
