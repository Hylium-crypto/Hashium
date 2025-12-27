# Hashium Website

Modern React website for Hashium cryptocurrency with 3D graphics and animations.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Routing**: React Router v7

## Project Structure

```
src/
├── components/     # React components
├── services/       # API services
├── assets/         # Static assets
└── App.tsx         # Main app component
```

## Connecting to Backend

The website connects to the backend API at `http://localhost:3001` by default.
Make sure the backend is running for full functionality.

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready for static hosting.

## License

MIT - See [../COPYING](../COPYING)
