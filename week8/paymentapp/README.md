# Payment App (MERN + DevOps Week 8)

Full-stack payment app with JWT auth, account balance, and transfer APIs.

## Tech Stack
- Frontend: React (Vite), React Router, Axios, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, zod

## Project Structure
```text
backend/
  config/
    connectdb.js
  middleware/
    auth.js
  models/
    user.model.js
    account.model.js
  routes/
    userRoutes.js
    accontRoutes.js
  index.js

frontend/
  src/
    components/
      Appbar.jsx
      Balance.jsx
      SendMoney.jsx
      Users.jsx
      ...
    pages/
      SignUp.jsx
      SignIn.jsx
      DashBoard.jsx
      Transfer.jsx
    App.jsx
```

## Prerequisites
- Node.js 18+
- MongoDB running locally/remotely

## Backend Setup
1. Go to backend:
```bash
cd backend
```
2. Create `.env`:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
3. Install and run:
```bash
npm install
npm run dev
```

Backend runs at `http://localhost:3000` (based on current frontend API calls).

## Frontend Setup
1. Go to frontend:
```bash
cd frontend
```
2. Install and run:
```bash
npm install
npm run dev
```

## Frontend Routes
- `/` -> `SignUp`
- `/signin` -> `SignIn`
- `/dashboard` -> `DashBoard`
- `/transfer` -> `Transfer`

## Current Frontend Flow
1. User signs up/signs in.
2. JWT token is stored in `localStorage` as `token`.
3. Dashboard loads `Balance` component and requests:
   - `GET /api/v1/accounts/getbalance`
   - Header: `Authorization: Bearer <token>`

## API Base URL
`/api/v1`

## Backend Endpoints

### User Routes (`/api/v1/users`)
1. `POST /signup`
- Body:
```json
{
  "email": "user@example.com",
  "password": "secret123",
  "firstName": "John",
  "lastName": "Doe"
}
```

2. `POST /signin`
- Body:
```json
{
  "email": "user@example.com",
  "password": "secret123"
}
```

3. `PUT /`
- Protected (`Authorization: Bearer <token>`)
- Body:
```json
{
  "firstName": "Jane",
  "lastName": "Smith"
}
```

4. `GET /bulk?filter=<name>`
- Search users by first/last name

### Account Routes (`/api/v1/accounts`)
1. `GET /getbalance`
- Protected (`Authorization: Bearer <token>`)
- Current response shape:
```json
{
  "msg": "your account balance is 1234"
}
```

2. `POST /transfer`
- Protected (`Authorization: Bearer <token>`)
- Body:
```json
{
  "amount": 500,
  "to": "<receiver_user_id>"
}
```

## Auth Header Example
```http
Authorization: Bearer <jwt_token>
```

## Notes
- File name is currently `backend/routes/accontRoutes.js`.
- `SendMoney` and `Users` UI are present, but transfer/search wiring is still partial.
- No automated tests configured yet.
