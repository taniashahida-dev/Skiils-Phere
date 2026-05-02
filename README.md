<div align="center">

# 🌐 SkillSphere

### *Upgrade Your Skills. Shape Your Future.*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-Latest-6C47FF?style=for-the-badge&logo=auth0&logoColor=white)](https://better-auth.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-FF69B4?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

**[🚀 Live Demo](https://skiils-phere.vercel.app/)** &nbsp;•&nbsp; **[📁 Repository](https://github.com/taniashahida-dev/Skiils-Phere)**

</div>

---

## 📖 About The Project

**SkillSphere** is a modern, full-featured online learning platform where learners can explore, discover, and enroll in skill-based courses across categories like Web Development, UI/UX Design, Digital Marketing, and more. Built with cutting-edge web technologies, SkillSphere delivers a seamless and engaging learning experience on any device.

Whether you're a complete beginner or looking to level up your expertise, SkillSphere connects you with top instructors and high-quality curriculum — all in one beautiful platform.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure login & registration with Google OAuth via BetterAuth |
| 📚 **Course Catalog** | Browse all courses with category filters and search functionality |
| 🔒 **Protected Routes** | Course details accessible only to authenticated users |
| 👤 **User Profiles** | View and update profile name & avatar image |
| 🔍 **Course Search** | Real-time search by course title on the All Courses page |
| 🎨 **Fully Responsive** | Optimized for mobile, tablet, and desktop viewports |
| 🍞 **Toast Notifications** | Elegant real-time feedback for all user actions |
| ✨ **Animations** | Smooth, polished UI animations using Motion / Swiper.js |
| 🚫 **404 Page** | Custom not-found page for unmatched routes |
| ⏳ **Loading States** | Skeleton loaders shown during all data fetching |

---

## 📸 Screenshots

> *(Add screenshots of your homepage, course listing, course detail, and profile pages here)*

| Home Page | All Courses | Course Detail |
|-----------|-------------|---------------|
| ![alt text](image.png) | ![alt text](image-1.png)| ![alt text](image-2.png) |

---

## 🗂️ Pages & Routes

```
/                    → Home Page (Hero, Popular Courses, Tips, Instructors, Trending)
/courses             → All Courses (with search)
/courses/[id]        → Course Details 🔒 (Protected)
/login               → Login Page
/register            → Register Page
/my-profile          → User Profile 🔒 (Protected)
/my-profile/update   → Update Profile Info 🔒 (Protected)
*                    → 404 Not Found Page
```

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Authentication:** [BetterAuth](https://better-auth.com/) (Email/Password + Google OAuth)
- **Animation:** [Motion](https://motion.dev/) / [Swiper.js](https://swiperjs.com/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication (email, password, Google OAuth) |
| `motion` | UI animations and transitions |
| `react-hot-toast` | Toast notifications |
| `react-icons` | Icon library |

---

---

## 📁 Project Structure

```
skillsphere/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── courses/
│   │   └── [id]/
│   ├── my-profile/
│   │   └── update/
│   ├── not-found.jsx
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CourseCard.jsx
│   └── ...
├── data/
│   └── courses.json
├── lib/
│   └── auth.js
├── public/
├── .env.local          ← (not committed)
├── .env.example
└── README.md
```

---

## 🎯 Challenges Implemented

- [x] **🔍 Search Functionality** — Real-time search by course title on the All Courses page
- [x] **👤 My Profile Page** — Displays logged-in user's name, email, and avatar
- [x] **✏️ Update Profile** — Dedicated `/my-profile/update` route with name & image URL form
- [x] **🎞️ Animation Package** — Integrated **Motion** for polished UI interactions

---

## 🚀 Deployment

The app is deployed on **Vercel** with the following setup:

- SPA-style routing is handled via Next.js App Router — no 404 on page reload
- All environment variables are securely configured in the Vercel dashboard
- Live URL: https://skiils-phere.vercel.app

---


## 👨‍💻 Author

Tania
- GitHub: https://github.com/taniashahida-dev
- LinkedIn: https://www.linkedin.com/in/tania9

---

<div align="center">

Made with ❤️ and a lot of ☕ &nbsp;|&nbsp; © 2026 SkillSphere

</div>