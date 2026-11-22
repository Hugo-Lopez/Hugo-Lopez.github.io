# hugo-lopez.github.io

Personal website of Hugo Lopez: one hand-written page with no build step.

## Files

- `index.html`: all the content
- `assets/site.css`: styling
- `assets/site.js`: opens and closes abstracts, and loads analytics on the live site only
- `files/`: CV and papers
- `images/hugo-lopez.jpg`: portrait
- `404.html`: the "page not found" page
- `research/`, `teaching/`, `about/`: forward the old site's addresses to the home page
- `.nojekyll`: tells GitHub Pages to serve the files as they are

## Preview

```
python3 -m http.server 4000
```

Then open http://localhost:4000.

## Common edits

- **Update the CV:** replace `files/Hugo_Lopez_CV.pdf`, keeping the file name.
- **Add a paper:** copy an `<article class="paper">` block in `index.html`, give it a new `id`, and make the Abstract button's `aria-controls` match the `id` of its abstract.

## Publishing

Commit and push to `master`. GitHub Pages republishes within a minute or two.

The earlier template-based site is kept at the `pre-redesign` tag.
