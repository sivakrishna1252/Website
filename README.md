# E and L Decor and More - Frontend

React.js frontend application for E and L Decor and More event management website.

## Features

- ✅ Modern, minimal, sober design
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ All pages implemented with mock data
- ✅ Mobile-first approach
- ✅ SEO-ready structure

## Pages

1. **Homepage** - Hero, About preview, Services preview, Featured blogs
2. **About** - Company information, mission, vision, values, stats, team
3. **Services** - All services with details
4. **Gallery** - Image gallery with category filters and lightbox
5. **Blog** - Blog list and detail pages
6. **Contact** - Contact form with validation

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

The app will run on `http://localhost:5173` (or next available port)

## Build

```bash
# Build for production
npm run build
```

## Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── BlogCard.jsx
│   │   ├── ImageGallery.jsx
│   │   └── Lightbox.jsx
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/            # Mock data
│   │   ├── mockServices.js
│   │   ├── mockBlogPosts.js
│   │   ├── mockGallery.js
│   │   └── mockAbout.js
│   ├── styles/          # Global styles
│   │   └── global.css
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Entry point
```

## Dependencies

- React 19.2.0
- React Router DOM 6.26.0
- Axios 1.7.7 (for future API integration)
- React Helmet Async 2.0.5 (for SEO)

## Next Steps

1. Test all pages on mobile devices
2. Get client approval on UI/UX
3. After approval, integrate with Django backend API
4. Replace mock data with real API calls

## Mobile Responsiveness

All pages are designed mobile-first and tested for:
- Mobile phones (320px - 768px)
- Tablets (768px - 1024px)
- Desktop (1024px+)
