# TechNova Solutions

A polished multi-page static website for a fictional technology consulting company, built as a Week 9 project with **Next.js App Router**, **JavaScript**, **Tailwind CSS**, and **ShadCN UI**.

## Live Project Theme

**TechNova Solutions** helps modern teams build sharper digital systems, cloud workflows, secure platforms, and data-driven business tools.

This project is designed to feel like a real professional client website while clearly demonstrating core Week 9 frontend concepts.

## Features

- Modern responsive homepage
- Hero section with strong visual branding
- Features section with reusable cards
- About page with company story, mission, and vision
- Services page using ShadCN-style cards
- Contact page with a working client-side form
- Shared Navbar and Footer across all pages
- Static Site Generation ready
- GitHub Pages deployment workflow included

## Tech Stack

- Next.js App Router
- JavaScript
- Tailwind CSS
- ShadCN UI Components
- Lucide React Icons
- Static Export Deployment

## Pages

| Route | Description |
|---|---|
| `/` | Hero, features, and call-to-action sections |
| `/about` | Company story, mission, and vision |
| `/services` | Service cards for TechNova offerings |
| `/contact` | Functional contact form UI |

## Week 9 Concepts Covered

- App Router
- File-based routing
- Root layout
- Nested routes
- Server Components by default
- Client Component using `"use client"`
- Static Site Generation
- Reusable components
- Tailwind CSS styling
- ShadCN UI components

## Contact Form

The contact form works without a backend. It validates the fields, stores the latest inquiry in `localStorage`, and opens a prefilled email draft using `mailto:`.

## Run Locally

```bash
npm install
npm run dev
