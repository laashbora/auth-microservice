# Authentication Microservice

A standalone Authentication Microservice built using Node.js, Express.js, Prisma ORM, PostgreSQL, JWT, and bcrypt.

## Features

- User Signup
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Token Verification
- PostgreSQL Database Integration
- Prisma ORM

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- Axios
- Postman

## Installation

Clone the repository:

```bash
git clone https://github.com/laashbora/auth-microservice.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Start the server:

```bash
npm run dev
```

Server runs on:

```text
http://localhost:3001
```

## API Endpoints

### Signup

```http
POST /auth/signup
```

Request:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Login

```http
POST /auth/login
```

Request:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

### Verify Token

```http
POST /auth/verify
```

Request:

```json
{
  "token": "JWT_TOKEN"
}
```

## Author

Abhilash Bora
