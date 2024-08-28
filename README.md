# To-Do List Server

This is the server-side application for the To-Do List project. It is built using Node.js, Express, and MongoDB. The server handles user authentication, task management, and provides API endpoints for the front-end application.

TEST
TEST
TEST

## Features

- User registration and login with JWT authentication
- Task management (create, read, update, delete tasks)
- CORS enabled for secure cross-origin requests
- RESTful API endpoints

## Technologies Used

- Node.js
- Express.js
- MongoDB (using Mongoose)
- JWT for authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/todo-list-server.git
   cd todo-list-server
   ```

2. Install dependencies:
    ```
    npm install
    ```

3. Create a .env file in the root directory and add your environment variables:
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

4. Start the server:
```
npm start
```

The server will start on http://localhost:5000.
