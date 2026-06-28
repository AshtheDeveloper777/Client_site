# Week 9 - TechNova Solutions

Professional multi-page static website for the fictional company **TechNova Solutions**.

## Week 9 Concepts Demonstrated

- Next.js App Router
- File-based routing
- Root layout
- Nested routes
- Server Components by default
- Client Components with `"use client"`
- Static Site Generation
- Reusable components
- Tailwind CSS styling
- ShadCN UI components

## Folder Structure

```text
week-9/
├── app/
│   ├── about/
│   │   └── page.jsx
│   ├── contact/
│   │   └── page.jsx
│   ├── services/
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   └── textarea.jsx
│   ├── contact-form.jsx
│   ├── feature-card.jsx
│   ├── footer.jsx
│   ├── hero.jsx
│   ├── navbar.jsx
│   └── service-card.jsx
├── lib/
│   └── utils.js
├── public/
│   └── technova-hero.png
├── components.json
├── next.config.js
├── package.json
├── postcss.config.mjs
└── tailwind.config.js
```

## Commands to Create the Project

```bash
npx create-next-app@latest week-9 --js --tailwind --eslint --app --src-dir false --import-alias "@/*"
cd week-9
```

## Commands to Install ShadCN UI

```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea
```

## Commands to Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static Build

This project is configured with `output: "export"` in `next.config.js`.

```bash
npm run build
```

The static output is generated in the `out/` folder.

## Contact Form Functionality

The contact page uses a Client Component. It validates name, email, and
message, stores the last inquiry in `localStorage`, and opens a prefilled email
draft with `mailto:` so the form works on a static deployment without a backend.

## Deployment

```bash
npm install
npm run build
```

Deploy the generated `out/` folder to any static host, or connect this GitHub
repository to Vercel/Netlify and use `npm run build` as the build command.

This repository also includes `.github/workflows/deploy.yml` for GitHub Pages.
The workflow builds with `GITHUB_PAGES=true`, which applies the `/Client_site`
base path required by the repository URL.
