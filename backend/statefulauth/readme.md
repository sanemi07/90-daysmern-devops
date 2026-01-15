
The server will run on `http://localhost:3000` (or the port specified in `.env`).

## API Endpoints

### User Routes (`/api/v1/users`)

- `POST /register` - Register a new user (body: `{name, password}`)
- `POST /login` - Login user (body: `{name, password}`)
- `POST /logout` - Logout user

### Task Routes (`/api/v1/tasks`)

All task routes require authentication (session).

- `POST /addTask` - Add a new task (body: `{title, description}`)
- `GET /getTasks` - Get all tasks for the logged-in user
- `DELETE /deleteTask/:id` - Delete a task by ID (only if owned by user)

## Project Structure

- `config/db.js` - Database connection
- `controllers/` - Request handlers
- `middlewares/authverify.js` - Authentication middleware
- `models/` - Mongoose schemas
- `routes/` - API routes
- `services/` - Business logic
- `server.js` - Main server file

## Dependencies

- Express
- Mongoose
- bcrypt
- express-session
- dotenv

## Troubleshooting

- Ensure MongoDB is running and `MONGO_URI` is correct.
- Check session secret for security.
- Use tools like Postman for API testing.