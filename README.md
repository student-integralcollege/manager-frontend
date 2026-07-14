# Manager Frontend Assessment
A Next.js frontend application implementing the manager authentication, profile completion, routing, and dashboard flow.

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Fetch API
- localStorage

## Application Flow
```text
Login
  ↓
Google Authentication
  ↓
Profile Sync
  ↓
accCreated = 0 → Create Profile
accCreated = 1 → Dashboard
  ↓
Logout → Login
```

## Features
- Manager Google authentication flow
- Profile synchronization
- Profile completion form
- State-based routing
- localStorage persistence
- Protected manager dashboard
- Logout functionality
- Responsive UI

## Project Structure
```text
src/
├── app/
│   ├── login/
│   ├── manager/
│   ├── create-profile/
│   └── dashboard/
├── api/
└── utils/
```

## Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=https://backend.membes.store
NEXT_PUBLIC_USE_MOCK_AUTH=true
```

## Getting Started
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Mock Authentication
The provided backend was unreachable during development. A temporary mock authentication flow is used to demonstrate the onboarding and routing functionality.

Set:
```env
NEXT_PUBLIC_USE_MOCK_AUTH=true
```

For real backend integration:
```env
NEXT_PUBLIC_USE_MOCK_AUTH=false
```

## Routing Logic

| State | Route |
|---|---|
| No User ID | `/login` |
| `accCreated = 0` | `/create-profile` |
| `accCreated = 1` | `/dashboard` |

## API Endpoints
```text
GET   /manager/getBasicProfile/{managerID}
PATCH /manager/createManagerProfile/{managerID}
```

## Build
```bash
npm run build
npm start
```

## Author
Developed for the Next.js Frontend Assessment.
