<![CDATA[<div align="center">

# 🎬 CineQuery

**Discover movies tailored to your mood — powered by AI.**

A modern, cinematic React web app that combines the TMDB movie database with Google Gemini AI to deliver intelligent, natural-language movie and TV show discovery.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Gemini](https://img.shields.io/badge/Google%20Gemini-AI-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Rolldown-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## ✨ Features

### 🔍 Dual Search Modes
- **Standard Search** — Search movies and TV shows by title using the TMDB API
- **AI Query Search** — Describe what you're in the mood for in natural language (e.g., *"horror comedy Bollywood masala"*) and let Google Gemini find the perfect matches

### 🎥 Browse & Discover
- Curated movie categories: **Now Playing**, **Popular**, **Top Rated**, **Upcoming**
- TV show categories: **Airing Today**, **Popular Shows**, **Top Rated Shows**, **On The Air**
- Auto-playing YouTube trailers as hero backgrounds
- Detailed content info pages with poster, ratings, genres, overview, and similar recommendations

### 🔖 Watchlist
- Save movies and TV shows to your personal watchlist
- Persistent storage via Firebase Firestore — your watchlist syncs across sessions
- Remove individual items or clear the entire watchlist

### 🔐 Authentication
- Secure email/password sign-up and login via Firebase Auth
- Protected routes — unauthenticated users are redirected to login
- User profile display with logout functionality

### 🎨 Premium UI/UX
- Fluid distortion effect on the login page using React Three Fiber
- Smooth animations powered by Motion (Framer Motion)
- Glassmorphism design with backdrop blur effects
- Fully responsive — optimized for mobile, tablet, and desktop
- Custom scrollbar styling and horizontal movie carousels

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, React Router 7, Redux Toolkit |
| **Styling** | Tailwind CSS 4, Custom CSS |
| **Animations** | Motion (Framer Motion), React Three Fiber |
| **3D Effects** | Three.js, @react-three/drei, @react-three/postprocessing |
| **Auth & DB** | Firebase Authentication, Cloud Firestore |
| **AI Backend** | Express.js server, Google Gemini API (`gemini-3-flash-preview`) |
| **Movie Data** | TMDB API (The Movie Database) |
| **Build Tool** | Vite (Rolldown) |
| **Icons** | Remix Icon, Lucide React |
| **Notifications** | React Hot Toast |

---

## 📁 Project Structure

```
CineQuery/
├── public/
│   └── images/              # Logo, backgrounds, and static assets
├── server.js                 # Express backend for Gemini AI queries
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation bar with mobile hamburger menu
│   │   ├── Login.jsx         # Auth page with fluid distortion effect
│   │   ├── Body.jsx          # Router configuration
│   │   ├── BrowserLayout.jsx # Layout wrapper with data fetching hooks
│   │   ├── Browse.jsx        # Movies browse page
│   │   ├── TvShows.jsx       # TV shows browse page
│   │   ├── MainContainer.jsx # Hero section with trailer background
│   │   ├── VideoTitle.jsx    # Movie title overlay on hero
│   │   ├── VideoBackground.jsx # YouTube trailer embed
│   │   ├── MoviesContainer.jsx # Category rows container
│   │   ├── MoviesList.jsx    # Horizontal scrollable movie row
│   │   ├── MovieCard.jsx     # Individual movie poster card
│   │   ├── ContentInfo.jsx   # Detailed movie/show info page
│   │   ├── QuerySearch.jsx   # AI-powered search page
│   │   ├── Watchlist.jsx     # User's saved movies/shows
│   │   ├── TrailerPlayer.jsx # Fullscreen trailer modal
│   │   ├── ProfilePopup.jsx  # User profile dropdown
│   │   └── Movie404.jsx      # Cinematic 404 error page
│   ├── hooks/                # Custom hooks for TMDB API data fetching
│   ├── utils/
│   │   ├── store.jsx         # Redux store configuration
│   │   ├── moviesSlice.jsx   # Movies state management
│   │   ├── querySearchSlice.jsx # Search state management
│   │   ├── slices.jsx        # User state management
│   │   ├── firebase.jsx      # Firebase initialization
│   │   ├── constants.jsx     # API config and genre mappings
│   │   ├── loginValidation.jsx # Form validation
│   │   └── PublicRoute.jsx   # Route guard for authenticated users
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point with Redux Provider
│   └── index.css             # Global styles and Tailwind imports
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- A [TMDB API](https://www.themoviedb.org/settings/api) account (bearer token)
- A [Google AI Studio](https://aistudio.google.com/apikey) API key (for Gemini)
- A [Firebase](https://console.firebase.google.com/) project with Authentication and Firestore enabled

### 1. Clone the repository

```bash
git clone https://github.com/your-username/CineQuery.git
cd CineQuery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Configure Firebase

Update the Firebase config in `src/utils/firebase.jsx` with your own project credentials:

```js
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 5. Configure TMDB API

Update the TMDB bearer token in `src/utils/constants.jsx`:

```js
export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_TMDB_BEARER_TOKEN",
  },
};
```

### 6. Start the development servers

**Frontend** (runs on `http://localhost:5173`):

```bash
npm run dev
```

**Backend** (runs on `http://localhost:5000` — required for AI search):

```bash
node server.js
```

---

## 📱 Responsive Design

CineQuery is fully responsive across all screen sizes:

- **Mobile** — Hamburger navigation menu, stacked layouts, touch-friendly card sizes
- **Tablet** — Optimized form widths, balanced spacing
- **Desktop** — Full navigation bar, side-by-side content layouts, expanded movie cards

---

## 🏗️ Architecture Overview

```
┌─────────────┐     ┌──────────────┐     ┌───────────────┐
│   React UI  │────▶│  Redux Store │────▶│  TMDB API     │
│  (Vite Dev) │     │  (Toolkit)   │     │  (Movies/TV)  │
└──────┬──────┘     └──────────────┘     └───────────────┘
       │
       │  POST /api/movies
       ▼
┌──────────────┐     ┌───────────────┐
│  Express.js  │────▶│  Google       │
│  Server      │     │  Gemini AI    │
└──────────────┘     └───────────────┘
       │
       │  Auth + Firestore
       ▼
┌──────────────┐
│   Firebase   │
│  (Auth + DB) │
└──────────────┘
```

- **Frontend** fetches movie/show data directly from the **TMDB API** via custom React hooks
- **AI queries** are proxied through the **Express backend** to keep the Gemini API key secure
- **Firebase** handles user authentication and persists watchlist data in Firestore
- **Redux Toolkit** manages global state for movies, search results, and user session

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `node server.js` | Start the Express backend for AI search |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ using React, Firebase, and Google Gemini AI**

</div>
]]>
