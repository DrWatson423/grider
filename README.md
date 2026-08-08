# Grider Backend

Backend API for **Grider**, a web-based platform that connects customers with delivery riders.

The backend is built with **Node.js, Express.js, MongoDB, Mongoose, JWT, and bcrypt**. It currently provides the foundation for user authentication and will later support rider discovery, bookings, real-time chat, reviews, and payments.

---

## Current Features

### Authentication

* User registration
* Password hashing with bcrypt
* User login
* JWT token generation
* Protected API routes
* User profile retrieval
* User roles:

  * Customer
  * Rider
  * Admin

### Database

* MongoDB Atlas
* Mongoose ODM
* User schema
* Environment-based database configuration

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| Node.js        | Backend runtime                |
| Express.js     | REST API framework             |
| MongoDB Atlas  | Database                       |
| Mongoose       | MongoDB object modeling        |
| bcrypt         | Password hashing               |
| JSON Web Token | Authentication                 |
| dotenv         | Environment variables          |
| CORS           | Frontend/backend communication |
| Nodemon        | Development server             |

---

## Project Structure

```text
backend/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone <repository-url>
```

Navigate into the backend:

```bash
cd backend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure environment variables

Create a `.env` file in the backend root:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

### Example

```env
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/grider

JWT_SECRET=your_secure_random_secret
```

**Never commit `.env` to GitHub.**

Use `.env.example` to document required environment variables:

```env
PORT=5000
MONGO_URI=
JWT_SECRET=
```

---

# Running the Server

### Development

```bash
npm run dev
```

The server should start on:

```text
http://localhost:5000
```

Expected output:

```text
MongoDB Connected
Server running on port 5000
```

---

# API Testing

The API can be tested using:

* Thunder Client
* Postman
* Insomnia
* cURL

---

#  Authentication API

## Register

Create a new user.

### Endpoint

```http
POST /api/auth/register
```

### Request

```json
{
  "name": "Watson",
  "email": "watson@gmail.com",
  "password": "password123",
  "role": "customer"
}
```

### Response

```json
{
  "message": "User created",
  "user": {
    "name": "Watson",
    "email": "watson@gmail.com",
    "role": "customer"
  }
}
```

Passwords are hashed using bcrypt before being stored in MongoDB.

---

#  Login

Authenticate an existing user.

### Endpoint

```http
POST /api/auth/login
```

### Request

```json
{
  "email": "watson@gmail.com",
  "password": "password123"
}
```

### Response

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "USER_ID",
    "name": "Watson",
    "role": "customer"
  }
}
```

The returned JWT is required when accessing protected endpoints.

---

# Get Profile

Retrieve the authenticated user's profile.

### Endpoint

```http
GET /api/auth/profile
```

### Header

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

### Response

```json
{
  "user": {
    "_id": "USER_ID",
    "name": "Watson",
    "email": "watson@gmail.com",
    "role": "customer"
  }
}
```

The password is excluded from the response.

---

# Authentication Flow

```text
Customer
    │
    │ Register
    ▼
POST /api/auth/register
    │
    ▼
Password hashed with bcrypt
    │
    ▼
MongoDB
    │
    │ Login
    ▼
POST /api/auth/login
    │
    ▼
JWT generated
    │
    ▼
Frontend stores token
    │
    │ Authorization: Bearer TOKEN
    ▼
Protected API
    │
    ▼
JWT Middleware
    │
    ▼
User Profile
```

---

# 👥 User Roles

The application currently supports three roles:

### Customer

Customers can eventually:

* Find riders
* Create delivery requests
* Book riders
* Chat with riders
* Track deliveries
* Rate riders

### Rider

Riders will eventually be able to:

* Create a rider profile
* Set availability
* Receive booking requests
* Accept or reject deliveries
* Update delivery status
* Chat with customers
* Receive ratings

### Admin

Admins will eventually be able to:

* Manage users
* Manage riders
* Manage bookings
* Manage reported accounts
* Monitor the platform

---

# Planned API

The following features are planned but are **not implemented yet**.

## Riders

```http
GET    /api/riders
GET    /api/riders/:id
POST   /api/riders
PUT    /api/riders/:id
DELETE /api/riders/:id
```

## Bookings

```http
POST   /api/bookings
GET    /api/bookings
GET    /api/bookings/:id
PATCH  /api/bookings/:id/status
DELETE /api/bookings/:id
```

## Messages

```http
GET    /api/messages/:bookingId
POST   /api/messages
```

Real-time messaging will use Socket.io.

## Reviews

```http
POST /api/reviews
GET  /api/reviews/:riderId
```

## Favorites

```http
POST   /api/favorites
GET    /api/favorites
DELETE /api/favorites/:id
```

---

# Development Roadmap

### Phase 1 — Backend Foundation

* [x] Express server
* [x] MongoDB Atlas connection
* [x] Environment variables
* [x] CORS
* [x] JSON request parsing

### Phase 2 — Authentication

* [x] User model
* [x] Registration
* [x] Password hashing
* [x] Login
* [x] JWT generation
* [x] JWT middleware
* [x] Protected profile endpoint

### Phase 3 — Rider Management

* [ ] Rider model
* [ ] Rider registration
* [ ] Rider profiles
* [ ] Rider availability
* [ ] Rider search
* [ ] Rider filtering
* [ ] Rider CRUD

### Phase 4 — Delivery Bookings

* [ ] Booking model
* [ ] Create booking
* [ ] Accept booking
* [ ] Reject booking
* [ ] Delivery status
* [ ] Customer booking history
* [ ] Rider booking history

### Phase 5 — Real-Time Chat

* [ ] Socket.io
* [ ] Conversations
* [ ] Send messages
* [ ] Receive messages
* [ ] Message persistence
* [ ] Online/offline status

### Phase 6 — Reviews

* [ ] Rider ratings
* [ ] Customer reviews
* [ ] Average rider rating

### Phase 7 — Payments

* [ ] Payment integration
* [ ] Payment verification
* [ ] Transaction records
* [ ] Rider payouts

---

# 🌐 Frontend

The frontend is being developed separately using:

```text
React
Vite
JavaScript
React Router
Tailwind CSS
```

The frontend will communicate with this backend through REST APIs.

Development architecture:

```text
React + Vite
     │
     │ HTTP / REST
     ▼
Express API
     │
     ▼
MongoDB Atlas
```

---

# Security

The project uses:

* bcrypt password hashing
* JWT authentication
* Protected API routes
* Environment variables for secrets
* CORS configuration

Never commit:

```text
.env
```

to GitHub.

The `.gitignore` should contain:

```gitignore
node_modules/
.env
.env.*
dist/
build/
*.log
```

---

# Current Status

**Development stage: Authentication**

Currently working:

```text
MongoDB
   ↓
User Registration
   ↓
Password Hashing
   ↓
Login
   ↓
JWT
   ↓
Protected Profile
```

The next development milestone is **Rider Management**, which will connect directly to the React rider-search interface.
