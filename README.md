# 🏷️ ResellHub

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-v3-FF007F?style=for-the-badge)](https://heroui.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-Secure-blue?style=for-the-badge)](https://better-auth.com/)

**ResellHub** is a premium, feature-rich peer-to-peer marketplace platform designed for listing, discovering, buying, and reselling items seamlessly. Built with a modern tech stack focused on high performance, secure authentication, and a stunning user interface.

---

## ✨ Features

- 🔐 **Secure Authentication:** Seamless multi-provider login (Email/Password & Google OAuth) powered by **Better Auth**.
- 📦 **Item Management:** Users can effortlessly list items, upload product images, set pricing, and manage their listings.
- 🔍 **Interactive Discovery:** Explore products with customizable search filter options, dynamic carousels, and tags.
- 📊 **Responsive Dashboard:** Track listings, user activities, and data visualizations utilizing **Recharts**.
- 🎨 **Premium Modern Design:** A sleek, fully responsive user interface utilizing **HeroUI** components, **Tailwind CSS v4**, and smooth animations powered by **Framer Motion**.
- 🔔 **Instant Feedback:** Dynamic notifications and alerts using **React Hot Toast**.

---

## 🚀 Tech Stack

### Frontend & Core
* **Framework:** Next.js 15+ (App Router)
* **Language:** TypeScript
* **UI Library:** HeroUI (formerly NextUI)
* **Styling:** Tailwind CSS v4 & PostCSS
* **Animations:** Framer Motion

### Backend & Database
* **Database:** MongoDB (via official native driver)
* **Authentication:** Better Auth with MongoDB Adapter (supports Google OAuth)
* **Image Hosting:** ImgBB API Integration

---

## 📁 Project Structure

```bash
resellhub-client/
├── src/
│   ├── app/                # Next.js App Router (Pages & API routes)
│   │   ├── api/            # Serverless API endpoints
│   │   ├── about/          # About Us section
│   │   ├── contact/        # Contact form & support
│   │   ├── explore/        # Product browsing & filtering
│   │   ├── items/          # Product display routes
│   │   ├── products/       # Product-specific flows
│   │   ├── register/       # User sign up
│   │   └── login/          # User sign in
│   ├── components/         # Reusable UI component modules
│   │   ├── add-item/       # Add listing workflows
│   │   ├── auth/           # Login, Register & Session guards
│   │   ├── details/        # Item details view
│   │   ├── explore/        # Advanced exploration components
│   │   ├── home/           # Landing page sections & Hero areas
│   │   └── manage-items/   # User item editing & deleting controls
│   └── proxy.ts            # Proxy config/utilities
```

---

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher) and **npm** / **yarn** / **pnpm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/nayan12dey/resellhub.git
cd resellhub-client
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables Setup
Create a `.env.local` file in the root directory and configure the following variables:

```env
# Backend API URL (if using external server, otherwise local server url)
NEXT_PUBLIC_API_URL=http://localhost:5000

# Better Auth Configuration
BETTER_AUTH_SECRET=your_auth_secret_key
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=your_mongodb_connection_string
DB_NAME=resellhubDB

# Image Upload
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key

# OAuth Credentials (Google)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 5. Running the Project

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

Lint and check for errors:
```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live application.

