# EMI Calculator

A simple full-stack EMI (Equated Monthly Installment) calculator application with a React frontend and a Node.js/Express backend.

## Features

- Calculate EMI for loan amount, interest rate, and tenure
- Save or submit loan application via API
- Simple, responsive React UI

## Tech stack

- Frontend: React (client/)
- Backend: Node.js + Express (server/)
- DB: (if configured) MongoDB

## Repository structure

- client/: React app (src/Components contains `LoanForm.js`, pages contain `EmiCalculator.tsx`)
- server/: Express API and controllers (controllers, routes, models, utiles)

## Quick start

Prerequisites: Node.js (16+ recommended), npm or yarn.

1. Install server dependencies and run server

```bash
cd server
npm install
npm run start
```

Server scripts available in `server/package.json` (e.g., `start`, `dev`).

2. Install client dependencies and run client

```bash
cd client
npm install
npm start
```

The React app runs on `http://localhost:3000` by default.

## Environment

Create a `.env` file in `server/` if required with values like:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/emi-db
JWT_SECRET=your_jwt_secret
```

Adjust values as needed.

## API (overview)

Relevant routes (see `server/routes/`):

- `POST /api/register` - register user
- `POST /api/login` - authenticate (JWT)
- `POST /api/emi` - submit loan application / calculate EMI (see `server/routes/emi.js`)
- `GET /api/profile` - user profile (protected)

See controllers in `server/Controllers/` for details.

## Utilities

- `server/utiles/calculateEMI.js` - EMI calculation logic
- `server/utiles/responseHandler.js` - uniform API responses

## Tests

If tests exist, run them from the relevant package folders:

```bash
cd client
npm test
```

## Contributing

Feel free to open issues or submit PRs. Keep changes focused and add tests where appropriate.

## License

Specify a license if needed (e.g., MIT).
