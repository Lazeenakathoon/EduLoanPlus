<<<<<<< HEAD
# EduLoan+ - Loan EMI Calculator & Education Loan Portal

## 📌 Project Overview

EduLoan+ is a modern MERN Stack-based Education Loan Portal inspired by fintech platforms such as Propelld and LoanJagat.

The platform allows students to:

* Check loan eligibility
* Calculate EMI instantly
* Apply for education loans online
* Track loan application status
* Access a personalized dashboard
* Manage applications through an admin dashboard

---

# 🚀 Features Implemented

## 🔐 Authentication System

### User Authentication

* User Registration
* User Login
* Role-Based Access Control
* LocalStorage Session Management

### Roles

#### User

* Access User Dashboard
* Apply for Education Loans
* View Loan Status
* EMI Calculator Access

#### Admin

* Access Admin Dashboard
* View All Loan Applications
* Manage Users
* Approve/Reject Applications

---

# 💰 EMI Calculator

Users can:

* Enter Loan Amount
* Select Interest Rate
* Choose Loan Tenure
* Calculate Monthly EMI
* View Total Interest Payable
* View Total Repayment Amount

Formula Used:

EMI = [P × R × (1+R)^N] / [(1+R)^N − 1]

Where:

* P = Principal Amount
* R = Monthly Interest Rate
* N = Loan Tenure in Months

---

# 📝 Loan Application Module

Users can submit:

* Full Name
* Email
* Mobile Number
* College Name
* Course Name
* Loan Amount
* Family Income
* Address

Form Validation Implemented Using:

* React Hook Form
* TypeScript

API Integration:

POST

/api/loan/apply

---

# 📊 User Dashboard

Features:

* Welcome Card
* Loan Application Summary
* Active Loan Requests
* Eligibility Score
* EMI Summary
* Profile Overview
* Recent Activity

Modern fintech-style UI inspired by:

* Propelld
* LoanJagat
* Cred
* Razorpay

---

# 🛡️ Admin Dashboard

Features:

### Statistics Cards

* Total Applications
* Approved Loans
* Pending Loans
* Rejected Loans

### Loan Management

* View Applications
* Approve Requests
* Reject Requests
* Track User Activity

### User Management

* View Registered Users
* Search Users
* Manage Accounts

---

# 🎨 UI Components

Implemented Components:

* Navbar
* Hero Section
* Benefits Section
* Statistics Section
* How It Works Section
* EMI Calculator Section
* Testimonials Section
* FAQ Section
* Footer

---

# 📱 Responsive Design

Responsive for:

* Desktop
* Tablet
* Mobile Devices

Implemented using:

* CSS
* Flexbox
* Grid
* Responsive Media Queries

---

# ⚙️ Tech Stack

## Frontend

* React.js
* TypeScript
* React Router DOM
* Axios
* React Hook Form
* Chart.js
* React ChartJS 2

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JWT (Planned)
* Role-Based Authentication

---

# 📂 Project Structure

src/

├── components/

│ ├── Navbar

│ ├── Hero

│ ├── Benefits

│ ├── States

│ ├── HowItWorks

│ ├── Testimonials

│ ├── FAQ

│ ├── Footer

│ └── LoanForm

│

├── pages/

│ ├── HomePage

│ ├── LoginPage

│ ├── RegisterPage

│ ├── Dashboard

│ ├── AdminDashboard

│ └── ApplyLoan

│

├── routes/

│ ├── UserProtectedRoutes

│ └── AdminProtectedRoutes

│

├── App.js

│

└── index.js

---

# 🔗 API Endpoints

## Authentication

POST /api/auth/register

POST /api/auth/login

## Loan

POST /api/loan/apply

GET /api/loan/all

GET /api/loan/:id

PUT /api/loan/approve/:id

PUT /api/loan/reject/:id

---

# 🔮 Future Enhancements

* JWT Authentication
* Refresh Token System
* OTP Verification
* Email Notifications
* Admin Analytics Dashboard
* PDF Loan Reports
* Loan Eligibility Predictor
* AI Loan Assistant
* Bank Comparison Engine
* Loan Recommendation System
* Document Upload System
* Cloudinary Integration

---

# 🏆 Internship Project Objective

This project is being developed as a fintech-style MERN Stack application inspired by LoanJagat and Propelld to demonstrate:

* Frontend Development Skills
* Backend Development Skills
* REST API Development
* Authentication & Authorization
* Dashboard Design
* Form Handling
* Responsive UI Development
* Full Stack MERN Development

---

# 👨‍💻 Developer

Name: Lazina Kahtoon 


Role: MERN Stack Developer

Project: EduLoan+ - Education Loan Portal

Year: 2026
=======
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
>>>>>>> cf7b73ffe3cfa9e6f968633924ac65071c721014
