# Leishi Icon Addition

This directory contains the Leishi (雷石) company logo integration for lobe-icons.

## Current Status

✅ **Completed:**
- Created icon directory structure (`src/Leishi/`)
- Added placeholder SVG components (Mono, Color, Avatar)
- Configured icon exports in `src/icons.ts`
- Added entry to `src/toc.json`
- Created documentation file (`index.md`)
- Saved original PNG logos in this directory

## TODO: SVG Conversion Required

⚠️ **The current implementation uses placeholder SVG paths.** The actual logo SVG paths need to be generated from the provided PNG files:

- `leishi-logo.png` - Logo without text (7234 x 1367 px)
- `leishi-logo-text.png` - Logo with text (7234 x 1367 px)

### How to Complete the SVG Conversion

1. **Using the vectorizer script:**
   ```bash
   # Set up environment variables in .env
   VECTORIZE_URL=<your-api-url>
   VECTORIZE_SECRET_ACCESS_KEY=<your-key>
   
   # Place PNG in temp/logo.png and run
   npm run vectorizer
   ```

2. **Manual conversion:**
   - Use tools like Adobe Illustrator, Inkscape, or online converters
   - Extract the SVG path data
   - Update the `<path>` elements in:
     - `components/Mono.tsx` (monochrome version)
     - `components/Color.tsx` (colored version)

3. **Update the viewBox and paths:**
   - Ensure the viewBox is set to `"0 0 24 24"` for consistency
   - Replace the placeholder `<rect>` and `<text>` elements with actual logo paths

## Files Structure

```
src/Leishi/
├── components/
│   ├── Avatar.tsx      # Avatar wrapper component
│   ├── Color.tsx       # Colored icon (needs real SVG path)
│   └── Mono.tsx        # Monochrome icon (needs real SVG path)
├── index.md            # Documentation
├── index.ts            # Main export
├── style.ts            # Color and style constants
├── leishi-logo.png     # Original logo without text
└── leishi-logo-text.png # Original logo with text
```

## Brand Colors

Primary color: `#0066FF` (blue)

This can be adjusted once the actual brand guidelines are confirmed.
