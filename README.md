# Duke Montane Financial Inc.

The official website for [Duke Montane Financial Inc.](https://dukemontane.com), a family-owned financial services practice serving clients across Alberta and British Columbia.

The site provides information about insurance planning, retirement planning, investment strategies, and how to get in touch with the team. It is built as a static site for reliability, clarity, and ease of maintenance.

## Live site

- **Production:** https://dukemontane.com
- **Hosting:** GitHub Pages (deployed from the `gh-pages` branch)

## Technology

This repository contains a [Jekyll](https://jekyllrb.com/) site managed with the `github-pages` gem. Key pieces include:

- Markdown content pages with YAML front matter
- Layouts and reusable includes for shared structure
- Custom styles in `assets/css/main.scss` (compiled to `main.css` at build time)
- Bootstrap-based theme assets in `assets/css/theme.css`

## Project structure

```
├── _config.yml          Site settings and build configuration
├── _data/menus.yml      Main navigation links
├── _includes/           Reusable HTML fragments (nav, footer, sections)
├── _layouts/            Page templates (base, home, page)
├── assets/              Images, CSS, and JavaScript
├── *.md                 Site pages (About Us, Strategies, Contact, etc.)
└── CNAME                Custom domain for GitHub Pages
```

## Local development

To preview changes before they go live, you will need Ruby and Bundler installed.

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000 in your browser. Jekyll will rebuild the site when files are saved.

For automatic browser refresh during development:

```bash
bundle exec jekyll serve --livereload
```

> **Note:** `main.css` is generated during the build from `main.scss` and is not committed to the repository.

## Updating content

Most day-to-day edits can be made without touching layout code.

| What to change | Where |
|----------------|-------|
| Navigation links | `_data/menus.yml` |
| Homepage hero and story sections | `index.md` |
| Page content | The corresponding `.md` file (e.g. `about-us.md`) |
| Site title, URL, and metadata | `_config.yml` |
| Header and footer | `_includes/nav.html`, `_includes/footer.html` |

Pages use front matter at the top of each Markdown file to select a layout and define sections. The homepage uses the `home` layout; other pages typically use the `page` layout.

## Deployment

Changes pushed to the `gh-pages` branch are built and published by GitHub Pages. After pushing, allow a minute or two for the live site to update.

The custom domain is configured via `CNAME` and should remain pointed at GitHub Pages DNS settings.

## A note on respect and care

This site represents a long-standing practice built on trust, listening, and thoughtful financial guidance. When making updates, please keep language clear, accurate, and considerate of the clients and communities Duke Montane serves.

## License

This project is maintained for Duke Montane Financial Inc. Please treat the repository and its contents with care.
