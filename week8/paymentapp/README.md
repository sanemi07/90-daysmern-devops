# Payment App Backend

Express + MongoDB backend for a simple payment application with JWT authentication, user management, account balance, and money transfer APIs.

## Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- Password hashing (`bcrypt`)
- Input validation (`zod`)

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
  package.json
```

## Prerequisites
- Node.js 18+
- MongoDB running locally or remotely

## Environment Variables
Create a `.env` file inside `backend/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Installation and Run
From the `backend` directory:

```bash
npm install
npm run dev
```

Server starts on `http://localhost:<PORT>`.

## API Base URL
`/api/v1`

## Endpoints

### User Routes
Base: `/api/v1/users`

1. `POST /signup`
- Creates a new user
- Also creates an account with random starting balance
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
- Authenticates user and returns JWT token
- Body:
```json
{
  "email": "user@example.com",
  "password": "secret123"
}
```

3. `PUT /`
- Updates `firstName` and/or `lastName`
- Protected route (`Authorization: Bearer <token>`)
- Body:
```json
{
  "firstName": "Jane",
  "lastName": "Smith"
}
```

4. `GET /bulk?filter=<name>`
- Search users by first name or last name
- Returns lightweight user list

### Account Routes
Base: `/api/v1/accounts`

1. `GET /getbalance`
- Returns current logged-in user's balance
- Protected route (`Authorization: Bearer <token>`)

2. `POST /transfer`
- Transfers amount from logged-in user to another user account
- Uses MongoDB transaction
- Protected route (`Authorization: Bearer <token>`)
- Body:
```json
{
  "amount": 500,
  "to": "<receiver_user_id>"
}
```

## Auth
Send token in request header:

```http
Authorization: Bearer <jwt_token>
```

## Notes
- Database name is hardcoded as `paymentapp` in `config/connectdb.js`.
- CORS is enabled globally.
- There are currently no automated tests configured.
