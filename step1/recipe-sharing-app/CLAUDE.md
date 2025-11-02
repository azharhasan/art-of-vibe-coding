# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev` (runs on port 5000, configured in vite.config.js)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

## Architecture Overview

This is a single-page React application built with Vite, focused on a waitlist signup experience for a future recipe sharing platform.

### Application Structure

The app follows a modular component-based architecture with clear separation of concerns:

**Main Components:**
- `src/components/Hero.jsx` - Hero section with title and subtitle
- `src/components/WaitlistForm.jsx` - Waitlist signup form with validation
- `src/components/FoodGallery.jsx` - Image gallery of food photos
- `src/components/Features.jsx` - Feature cards section
- `src/App.jsx` - Root component that composes all sections

**Hooks:**
- `src/hooks/useWaitlistForm.js` - Custom hook encapsulating all form logic (state, validation, submission)

**Configuration:**
- `src/constants.js` - Centralized content and configuration (hero text, features, gallery items, timeouts)

### Form Handling Pattern

Form logic is encapsulated in the `useWaitlistForm` custom hook:
- Form state stored in `formData` object with `name` and `email` fields
- Validation runs on submit, not on change
- Errors stored in separate `errors` state object with accessibility attributes
- Real-time error clearing when user types after validation failure
- Success state (`submitted`) triggers UI swap from form to success message
- Auto-reset after timeout (defined in constants.js)
- Console logs only in development mode (via `import.meta.env.DEV`)

Form submission is currently simulated and will need backend integration for actual waitlist storage.

### Styling Approach

CSS is organized using CSS Modules for component-scoped styling:
- `index.css` - Global resets and root container layout (gradient background, flexbox centering)
- `*.module.css` - Component-scoped styles that prevent naming conflicts

Each component has its own CSS module:
- `Hero.module.css`, `WaitlistForm.module.css`, `FoodGallery.module.css`, `Features.module.css`

The design uses:
- Orange/warm gradient theme (`#ff6b35` to `#f7931e`) with food photography background
- Card-based layout with frosted glass effects (backdrop-filter blur)
- Mobile-responsive grid for features and gallery sections
- Hover/focus states with transforms and box-shadows
- Animated elements (fadeIn, rotation, pulse effects)

### Accessibility Features

- Form inputs use `aria-describedby` to link error messages to fields
- Form inputs have `aria-invalid` attributes when validation fails
- Error messages have `role="alert"` for screen reader announcements
- Decorative icons and SVGs use `aria-hidden="true"`
- Images include proper `alt` attributes and loading="lazy"
- Images specify `width` and `height` to prevent layout shift

### Configuration Notes

- **Port**: Development server runs on port 5000 (not the default 5173) via vite.config.js:7-9
- **React version**: 18.3.1 with StrictMode enabled
- **No routing**: Single page application, no React Router
- **No state management library**: Uses local component state only
