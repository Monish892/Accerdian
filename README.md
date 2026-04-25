# Accredian Enterprise Page (Clone)

This project is a Next.js (App Router) clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built as an assignment submission.

## 🚀 Live Demo
**[Vercel Deployment URL]** (Replace with your actual Vercel URL)

## 📋 Project Overview
A fully responsive, modern web application that recreates the UI, layout, and functionality of the Accredian Enterprise website. Built with Next.js 16, Tailwind CSS v4, and React Hooks.

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons/UI:** Custom SVG icons
- **Backend:** Next.js API Routes (for Lead Capture)

## 📦 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd accredian-enterprise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Production Build:**
   ```bash
   npm run build
   npm start
   ```

## 🏗️ Approach Taken

1. **Analysis & Design Extraction:** First, I analyzed the live Accredian Enterprise website to extract the exact color palette (light theme with specific blue/brand accents), typography (Inter font), section layouts, and content structure.
2. **Component Architecture:** Divided the page into 11 logical components (Navbar, Hero, Stats, Clients, AccredianEdge, DomainExpertise, CourseSegments, WhoShouldJoin, CATFramework, HowItWorks, FAQs, Testimonials, LeadForm, Footer).
3. **Data Management:** Extracted all static text, lists, and statistics into a central `src/lib/constants.ts` file to keep components clean and maintainable.
4. **Styling & Animations:** Used Tailwind CSS to recreate the UI. Implemented custom keyframe animations in `globals.css` and used `IntersectionObserver` in React components to trigger scroll animations.
5. **Backend Integration:** Built a Next.js API route (`/api/lead`) to handle form submissions from the Lead Capture section, simulating database storage.

## 🤖 AI Usage Explanation

**Where AI Helped:**
- **Scaffolding:** Generating the initial Next.js project structure and component files.
- **Data Extraction:** Converting the text content from the reference website into structured JSON/TypeScript arrays for the `constants.ts` file.
- **Boilerplate CSS/Tailwind:** Generating the custom CSS keyframes (like `fade-in-up`, `slide-in`, `marquee`) and Tailwind utility combinations for the layout grids.
- **API Setup:** Writing the boilerplate Next.js API route for the form submission handler.

**Manual Improvements & Modifications:**
- **Design Accuracy:** I manually adjusted the color palette, paddings, margins, and border-radiuses to ensure the UI matched the light-themed Accredian Enterprise site rather than a generic template.
- **Animation Logic:** Manually refined the `IntersectionObserver` hook logic to ensure staggered, smooth animations when scrolling down the page.
- **Responsive Layouts:** Extensively modified the Tailwind grid classes (`grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-4`, etc.) to ensure perfect responsiveness across mobile, tablet, and desktop views.
- **Component Restructuring:** Reorganized how data is passed and mapped within components to improve React performance and code readability.

## 🔮 Improvements with More Time

If given more time, I would improve the following:
1. **Database Integration:** Connect the `/api/lead` route to a real database (e.g., PostgreSQL with Prisma or MongoDB) instead of using in-memory mock storage.
2. **Email Notifications:** Integrate SendGrid or Resend to send automated confirmation emails to users who submit the lead form.
3. **Advanced Animations:** Add Framer Motion for more complex, physics-based page transitions and component interactions.
4. **CMS Integration:** Move the hardcoded content (`constants.ts`) to a Headless CMS (like Sanity or Contentful) so the Accredian team could update text without changing code.
5. **Performance Optimization:** Implement deeper Next.js image optimization and lazy loading for sections below the fold.

## 📝 License
MIT
