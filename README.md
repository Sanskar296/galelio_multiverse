# Galileo Multiverse - Online Astronomy & Astrophysics School 🚀🌌

A complete, modern full-stack web application recreated with **React**, **Node.js**, **Express**, and **Tailwind CSS**, based on [galileomultiverse.weebly.com](https://galileomultiverse.weebly.com/).

---

## 🌟 Overview

**Galileo Multiverse** is an online astronomy and astrophysics academy designed to empower young minds, children, and space enthusiasts. This full-stack application faithfully captures every page, text, asset, curriculum detail, and brand identity of the original Weebly site while elevating it into a blazing-fast, responsive, modern Single Page Application (SPA) powered by an integrated Node.js REST API.

---

## 🛠️ Tech Stack

### Frontend & Server Unified
- **React 18** (Vite build system for instant HMR and optimized builds)
- **Node.js + Express** (Integrated RESTful API located in `client/server`)
- **React Router 6** (Multi-page client routing matching all original URLs and `.html` aliases)
- **Tailwind CSS** (Cosmic space color palette, frosted glass morphism, glowing typography)
- **Lucide React & Custom SVG Icons** (Astronomy & social media icons)
- **Responsive Layout** (Desktop, tablet, and mobile navigation drawer)
- **Concurrently** (Runs both the Express API and Vite React server concurrently with a single command)

### RESTful Endpoints (`client/server`):
- `GET /api/courses` – All 3 curriculum tiers (Level-1, Level-2, Level-3)
- `GET /api/events` – Sunday Space Club, Weekend Camp, Dr. Hasan Hashima session
- `GET /api/reviews` – Google parent reviews & social community metrics
- `POST /api/contact` – Contact form submission with validation
- `POST /api/contact/book-trial` – Free trial booking registration
- `GET /api/health` – API status and health check
- **SPA Production Serving** (Serves the compiled React bundle on port 5001)

---

## 🚀 Quick Start Guide

You can run the full-stack application from either the `client` directory or from the root repository directory with the exact same client command:

### Run Development (Starts Both Express Server & React Frontend)
```bash
cd client
npm run dev
```
*(Or from the project root: `npm run dev`)*

Output:
```text
[SERVER] Galileo Multiverse Server running on port 5001
[SERVER] Health check: http://localhost:5001/api/health
[CLIENT] VITE v5.4.21 ready in 798 ms
[CLIENT] ➜  Local: http://localhost:3000/
```
- **React Frontend**: [http://localhost:3000](http://localhost:3000) (Proxies `/api` requests to Express on port 5001)
- **Backend API**: [http://localhost:5001](http://localhost:5001)

---

### Build for Production
```bash
cd client
npm run build
```

---

### Start Production Server (Serves API + React SPA together on port 5001)
```bash
cd client
npm start
```
*(Or from the project root: `npm start`)*

---

### Run Test Suite
```bash
cd client
npm test
```

---

## 📁 Project Structure

```text
d:\gallelio multiverse\
├── package.json               # Root scripts delegating directly to client
├── README.md                  # Project documentation
│
└── client/                    # Unified Full-Stack Application
    ├── package.json           # Unified scripts and dependencies
    ├── vite.config.js         # Vite configuration with proxy to server port 5001
    ├── tailwind.config.js
    ├── index.html
    │
    ├── public/
    │   └── images/            # Downloaded original site images & backgrounds
    │       ├── backgrounds/   # Cosmic hero & page banners
    │       └── ...            # Course flyers, posters, logos, founder photo
    │
    ├── server/                # Express Backend
    │   ├── index.js           # Express API server & static dist server
    │   ├── test_server.js     # Automated verification test suite
    │   ├── package.json       # CommonJS package declaration
    │   ├── data/
    │   │   ├── courses.json       # Structured 3-level courses data
    │   │   ├── events.json        # Space Club and guest sessions
    │   │   ├── reviews.json       # Testimonials & stats
    │   │   └── submissions.json   # Stored inquiries and trial bookings
    │   └── routes/
    │       ├── contact.js         # /api/contact & /api/contact/book-trial
    │       ├── courses.js         # /api/courses
    │       ├── events.js          # /api/events
    │       └── reviews.js         # /api/reviews
    │
    └── src/                   # React Frontend
        ├── components/
        │   ├── Navbar.jsx         # Sticky navigation with mobile drawer
        │   ├── Footer.jsx         # Comprehensive cosmic footer
        │   ├── Hero.jsx           # Hero banner with cosmic starfield
        │   ├── CourseCard.jsx     # Course cards with curriculum details
        │   ├── ReviewsSection.jsx # Google reviews & founder quote
        │   ├── SocialSection.jsx  # Facebook, Instagram, Twitter cards
        │   ├── SearchModal.jsx    # Real-time search across courses & policies
        │   ├── BookTrialModal.jsx # Interactive trial booking modal
        │   └── SocialIcons.jsx    # Custom social SVG components
        ├── pages/
        │   ├── Home.jsx
        │   ├── About.jsx
        │   ├── SpaceClub.jsx
        │   ├── CancellationPolicy.jsx
        │   ├── ReturnPolicy.jsx
        │   ├── TermsOfService.jsx
        │   └── ContactUs.jsx
        ├── App.jsx
        ├── main.jsx
        └── index.css          # Tailwind CSS with custom cosmic theme
```
