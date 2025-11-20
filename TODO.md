# Performance Optimization Implementation Steps

## 1. Move Data to Local JSON

- [ ] Populate `public/data.json` with sample portfolio data based on types
- [ ] Update `src/api/getData.ts` to import from local JSON

## 2. Simplify Animations in Hero Component

- [ ] Reduce animated stars from 100 to 20 in `src/components/Hero.tsx`
- [ ] Remove infinite repeat on text animations
- [ ] Optimize motion transitions

## 3. Preload Fonts

- [ ] Add font-display: swap to Google Fonts import in `src/index.css`
- [ ] Add preload links for critical fonts

## 4. Enable Build Optimizations

- [ ] Install vite-plugin-compression
- [ ] Add compression plugin to `vite.config.ts`
- [ ] Enable minification

## 5. Reduce Animations in Other Components

- [ ] Simplify transitions in `src/components/Skills.tsx`
- [ ] Simplify transitions in `src/components/OtherSkills.tsx`
- [ ] Ensure viewport: { once: true }

## 6. Optimize Images (Followup)

- [ ] Compress images in `public/images/`
- [ ] Ensure lazy loading in ProjectItem

## 7. Test and Measure (Followup)

- [ ] Build the app with `npm run build`
- [ ] Run Lighthouse audit
- [ ] Verify improvements
