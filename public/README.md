# Portfolio assets

Everything inside `public` is served directly from the site root. Do not include
`public` in the URL when referencing an asset.

## Folders

- `images/projects/` — case-study covers, mockups, and gallery images
- `images/profile/` — portraits and personal photos
- `images/backgrounds/` — large background artwork
- `textures/` — grain, noise, paper, and fluid overlays
- `icons/` — custom SVG or PNG icons
- `fonts/` — locally hosted `.woff2` font files
- `downloads/` — résumé, media kit, or other downloadable documents
- `theme/` — theme reference files, palettes, and design tokens

## Examples

```tsx
<img src="/images/profile/portrait.webp" alt="Portrait of Arjun" />
<img src="/images/projects/noma-cover.webp" alt="Noma Archive project" />
```

For CSS backgrounds:

```css
background-image: url("/textures/grain.png");
```

Prefer WebP or AVIF for photographs, SVG for vector artwork, and WOFF2 for
fonts. Keep project cover images at a consistent aspect ratio where possible.

