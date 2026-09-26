# Jain Desi & Pure — Next.js Storefront

A responsive storefront for stone-ground attas, single-origin spices, and wood-pressed oils.

## Stack
- Next.js 16 App Router
- React 19
- Vanilla CSS
- Static product and category routes
- Client-side cart, search, coupons, and checkout demo

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production build
```bash
npm run build
npm start
```

## Main routes
- `/`
- `/shop/attas`
- `/shop/spices`
- `/shop/oils`
- `/product/[id]`
- `/our-process`
- `/farmers`
- `/purity`

The checkout remains a front-end demonstration. Authentication, database storage, payments, and production APIs are intentionally not included yet.
