# ClinZK Application

A privacy-preserving clinical trial eligibility verification system using Zero-Knowledge Proofs (ZK Proofs). This application consists of a **frontend** (React) and **backend** (NestJS) that can be run independently.

## Project Structure

```
Clinzk-app/
├── client/          # Frontend React application
└── server/          # Backend NestJS API server
```

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher) - Required for backend only

## Quick Start

The frontend and backend are **independent applications** and should be run separately. Follow the instructions below for each.

---

## Backend Setup

The backend is a NestJS API server that handles credential issuance, proof generation, and trial management.

### 1. Navigate to Server Directory

```bash
cd server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/clinzkdb
```

### 4. Set Up PostgreSQL Database

Create a PostgreSQL database:

```bash
# Using psql
createdb clinzkdb

# Or using SQL
psql -U postgres
CREATE DATABASE clinzkdb;
```

### 5. Start the Backend Server

```bash
# Development mode (with hot reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The backend API will be available at `http://localhost:4000` (or the port specified in your `.env` file).

### Backend Available Scripts

```bash
npm run start:dev          # Start with hot reload
npm run build               # Build for production
npm run start:prod          # Start production server
npm run test                # Run unit tests
npm run test:e2e            # Run e2e tests
npm run lint                # Run ESLint
npm run format              # Format code with Prettier
```

### Backend API Documentation

Full API documentation is available in `server/API.md`.

**Quick Start Endpoints:**
- Health Check: `GET http://localhost:4000/health`
- Generate Admin Hash: `POST http://localhost:4000/admin/generate-hash`
- Register Issuer: `POST http://localhost:4000/issuer/register` (requires admin access)
- Issue Credential: `POST http://localhost:4000/issuer/issue`
- Submit Proof: `POST http://localhost:4000/proof/submit`

---

## Frontend Setup

The frontend is a React application built with Vite that provides the user interface for credential retrieval, proof generation, and proof history.

### 1. Navigate to Client Directory

```bash
cd client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `client/` directory:

```env
VITE_API_BASE_URL=http://localhost:4000
```

**Note:** Make sure the `VITE_API_BASE_URL` points to your running backend server. If your backend runs on a different port, update this accordingly.

### 4. Start the Frontend Development Server

```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Frontend Available Scripts

```bash
npm run dev                 # Start development server
npm run build               # Build for production
npm run preview             # Preview production build
npm run lint                # Run ESLint
```

### Frontend Features

- **Credential Retrieval**: Retrieve patient credentials using clinic name and patient number
- **Proof Generation**: Generate zero-knowledge proofs from credentials
- **Proof Submission**: Submit proofs for automatic trial matching and verification
- **Proof History**: View complete history of proof submissions
- **Admin Dashboard**: Manage issuers, trials, and credentials
- **Clinic Dashboard**: Issue credentials and manage clinic operations

---

## Running Both Applications

Since the frontend and backend are independent, you need to run them in **separate terminal windows/tabs**:

### Terminal 1 - Backend

```bash
cd Clinzk-app/server
npm install
# Create .env file with DATABASE_URL and PORT
npm run start:dev
```

### Terminal 2 - Frontend

```bash
cd Clinzk-app/client
npm install
# Create .env file with VITE_API_BASE_URL
npm run dev
```

### Verify Both Are Running

- **Backend**: Check `http://localhost:4000/health` (should return a health status)
- **Frontend**: Open `http://localhost:5173` in your browser

---

## Environment Variables Summary

### Backend (`server/.env`)

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | `4000` |
| `NODE_ENV` | Environment (development/production) | No | `development` |
| `DATABASE_URL` | PostgreSQL connection string | **Yes** | - |

### Frontend (`client/.env`)

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | **Yes** | `http://localhost:4000` |

---

## Development Workflow

1. **Start the backend first** - The frontend depends on the backend API
2. **Verify backend is running** - Check the health endpoint
3. **Start the frontend** - Make sure `VITE_API_BASE_URL` matches your backend URL
4. **Develop independently** - Each application can be restarted independently

---

## Troubleshooting

### Backend Issues

**Database Connection Problems:**
```bash
# Check if PostgreSQL is running
pg_isready

# Test connection
psql -U username -d clinzkdb
```

**Port Already in Use:**
- Change `PORT` in `server/.env` to a different port
- Update `VITE_API_BASE_URL` in `client/.env` to match

### Frontend Issues

**Cannot Connect to Backend:**
- Verify backend is running on the port specified in `VITE_API_BASE_URL`
- Check CORS settings if backend is on a different origin
- Ensure `.env` file is in the `client/` directory (not root)

**Build Errors:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires v18+)

---

## Production Deployment

### Backend Production

1. Set `NODE_ENV=production` in `server/.env`
2. Ensure `DATABASE_URL` points to production database
3. Build: `cd server && npm run build`
4. Start: `npm run start:prod`

### Frontend Production

1. Update `VITE_API_BASE_URL` in `client/.env` to production API URL
2. Build: `cd client && npm run build`
3. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)

---

## Additional Resources

- **Backend API Documentation**: See `server/API.md`
- **Backend README**: See `server/README.md`
- **Frontend README**: See `client/README.md`

---

## License

UNLICENSED

