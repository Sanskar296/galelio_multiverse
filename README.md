# Galileo Multiverse - Online Astronomy & Astrophysics School 🚀🌌

A complete, modern full-stack web application recreated with **React**, **Node.js**, **Express**, and **Tailwind CSS**, based on [galileomultiverse.weebly.com](https://galileomultiverse.weebly.com/).

---

## 🌟 Overview

**Galileo Multiverse** is an online astronomy and astrophysics academy designed to empower young minds, children, and space enthusiasts. This full-stack application faithfully captures every page, text, asset, curriculum detail, and brand identity of the original Weebly site while elevating it into a blazing-fast, responsive, modern Single Page Application (SPA) powered by a Node.js REST API.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** (Vite build system for instant HMR and optimized builds)
- **React Router 6** (Multi-page client routing matching all original URLs and `.html` aliases)
- **Tailwind CSS** (Cosmic space color palette, frosted glass morphism, glowing typography)
- **Lucide React & Custom SVG Icons** (Astronomy & social media icons)
- **Responsive Layout** (Desktop, tablet, and mobile navigation drawer)

### Backend
- **Node.js** & **Express**
- **CORS** & JSON body parsing
- **RESTful Endpoints**:
  - `GET /api/courses` – All 3 curriculum tiers (Level-1, Level-2, Level-3)
  - `GET /api/events` – Sunday Space Club, Weekend Camp, Dr. Hasan Hashima session
  - `GET /api/reviews` – Google parent reviews & social community metrics
  - `POST /api/contact` – Contact form submission with validation
  - `POST /api/contact/book-trial` – Free trial booking registration
  - `GET /api/health` – API status and health check
- **SPA Production Serving** (Serves the compiled React bundle on port 5000)

---

## 📁 Pages Included

1. **Home (`/`)**
   - Cosmic Hero with starfield background (`1936583217.jpg`) and original logo
   - Mission statement: *"Investing in the Future of Our Planet"*
   - Latest Astronomy & Astrophysics Programs overview
   - **3 Months / Level-1 Program**: Deep Space Exploration
   - **12 Months / Level-2 Program**: Junior Astronomer Program
   - **12 Months / Level-3 Program**: Career-Oriented Advance Astronomy & Astrophysics
   - Detailed syllabus banners & roadmap posters
   - Google parent reviews (4.9-star rating)
   - Founder & CEO Abhishek Narayan message & photo
   - Animal conservation and green earth initiative
   - Facebook (2K likes / 2.1K followers), Instagram, and Twitter (X) cards
2. **About Us (`/about` & `/about.html`)**
   - Vision & Mission statement
   - Core pillars (Space Exploration, Accessible to All, Expert Mentorship)
   - **"Mysterious Universe"** special event masterclass with esteemed NASA scientist **Dr. Hasan Hashima**
   - Direct link to Galileo Multiverse official YouTube channel
3. **Sunday Space Club (`/space-club` & `/space-club.html`)**
   - Weekly gathering at **12:30 PM IST** (1,500 INR/month or 15,000 INR/year)
   - **2 Days Weekend Space Camp** (25 USD or 2,000 INR)
   - Space India Green Earth, New Panvel, Navi Mumbai headquarters
   - Instamojo & PayPal donation links
4. **Cancellation and Refund Policy (`/cancelation-and-refund-policy` & `.html`)**
   - Verbatim digital product policy, 48-hour submission window, 7–10 days processing
5. **Return Policy (`/return-policy` & `.html`)**
   - Digital electronically delivered products notice
6. **Terms of Service (`/terms-of-service` & `.html`)**
   - Personal educational usage, redistribution restrictions, disclaimer
7. **Contact Us (`/contact-us` & `.html`)**
   - Working interactive contact inquiry form
   - Direct contact details: Phone `+91 8918563014`, Email `galileoheadquarters@gmail.com`
   - Support hours: Monday to Saturday (24–48 hours response time)

---

## 🚀 Quick Start Guide

### 1. Run Development Server (Both Frontend & Backend)
Run the concurrent dev command from the root directory:
```bash
npm run dev
```
- **React Frontend**: [http://localhost:3000](http://localhost:3000)
- **Node.js Backend**: [http://localhost:5000](http://localhost:5000)

### 2. Run Only Backend
```bash
npm run dev:server
```
or
```bash
cd server && npm start
```

### 3. Run Only Frontend
```bash
npm run dev:client
```
or
```bash
cd client && npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm start
```
The Node.js server serves both the API endpoints and the compiled React frontend at [http://localhost:5000](http://localhost:5000).

---

## 📁 Project Structure

```text
d:\gallelio multiverse\
├── package.json               # Root scripts (concurrently dev, build, start)
├── README.md                  # Project documentation
│
├── client/                    # React 18 + Vite Frontend
│   ├── public/
│   │   └── images/            # All downloaded original site images & backgrounds
│   │       ├── backgrounds/   # Cosmic hero & page banners
│   │       └── ...            # Course flyers, posters, logos, founder photo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Sticky navigation with mobile drawer
│   │   │   ├── Footer.jsx         # Comprehensive cosmic footer
│   │   │   ├── Hero.jsx           # Hero banner with cosmic starfield
│   │   │   ├── CourseCard.jsx     # Course cards with curriculum details
│   │   │   ├── ReviewsSection.jsx # Google reviews & founder quote
│   │   │   ├── SocialSection.jsx  # Facebook, Instagram, Twitter cards
│   │   │   ├── SearchModal.jsx    # Real-time search across courses & policies
│   │   │   ├── BookTrialModal.jsx # Interactive trial booking modal
│   │   │   └── SocialIcons.jsx    # Social SVG components
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── SpaceClub.jsx
│   │   │   ├── CancellationPolicy.jsx
│   │   │   ├── ReturnPolicy.jsx
│   │   │   ├── TermsOfService.jsx
│   │   │   └── ContactUs.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css          # Tailwind CSS with custom cosmic theme
│   ├── vite.config.js
│   └── package.json
│
└── server/                    # Node.js + Express Backend
    ├── src/
    │   ├── data/
    │   │   ├── courses.json       # Structured 3-level courses data
    │   │   ├── events.json        # Space Club and guest sessions
    │   │   ├── reviews.json       # Testimonials & stats
    │   │   └── submissions.json   # Stored inquiries and trial bookings
    │   ├── routes/
    │   │   ├── contact.js         # /api/contact & /api/contact/book-trial
    │   │   ├── courses.js         # /api/courses
    │   │   ├── events.js          # /api/events
    │   │   └── reviews.js         # /api/reviews
    │   └── index.js               # Express application entry & SPA fallback
    └── package.json
```

