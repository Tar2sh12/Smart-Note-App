# Smart Note App 📝

A comprehensive Note Management System built with Node.js and Express, featuring user authentication, profile management, and AI-powered note summarization.

## 🚀 Features

### Authentication & User Management
- **User Registration & Login** with secure JWT authentication (asymmetric signing)
- **Password Reset** with email OTP verification
- **Profile Picture Upload** with local file storage
- **Token Management** with logout and token revocation
- **Password Hashing** using bcrypt with Mongoose middleware

### Note Management
- **CRUD Operations** for notes (Create, Read, Delete)
- **GraphQL Integration** for advanced note querying with filters
- **Pagination** implemented at database level
- **User-specific Notes** with proper ownership validation

### AI Integration
- **Note Summarization** using @google/generative-ai
- **Intelligent Content Processing** for concise note summaries

### Security & Performance
- **CORS Protection** for cross-origin requests
- **Rate Limiting** to prevent abuse
- **Helmet.js** for security headers
- **Input Validation** using Joi
- **Error Handling** with comprehensive middleware
- **Environment Configuration** with dotenv

## 🛠 Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (Asymmetric signing/verification)
- **Security**: bcrypt, helmet, cors, rate-limiter
- **Email**: Nodemailer for OTP delivery
- **File Upload**: Multer for profile pictures
- **Query Language**: GraphQL for advanced filtering
- **AI Integration**: generative ai by google
- **Validation**: Joi for input validation
- **Environment**: dotenv for configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Generative ai

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tar2sh12/Smart-Note-App.git
   cd smart-note-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI="mongodb://localhost:27017/notes"
   PORT=5155
   SALT_ROUNDS=
   REFRESH_TOKEN=""
   CONFIRM_TOKEN=""
   LOGIN_SECRET=""
   PREFIX_SECRET=""
   SECRET_ENCRYPTION_KEY = ""
   CONFIRM_EMAIL_EXPIRATION_TIME=""
   
   
   NODEMAILER_APP_PASSWORD =""
   NODEMAILER_EMAIL =""
   NODEMAILER_PORT=
   NODEMAILER_HOST=""
   
   FACEBOOK=""
   INSTAGRAM=""
   TWITTER=""
   
   GEMINI_API_KEY=""
   ```

4. **Start the server**
   ```bash
   npm start
   ```

## 🔒 Security Features

- **JWT Authentication** with asymmetric key signing
- **Password Hashing** with bcrypt and salt rounds
- **Token Revocation** system for secure logout
- **Rate Limiting** to prevent brute force attacks
- **Input Validation** using Joi schemas
- **CORS Protection** for cross-origin requests
- **Security Headers** via Helmet.js
- **OTP-based Password Reset** with one-time use tokens

## 🚀 Performance Optimizations

- **Database-level Pagination** for efficient data retrieval
- **GraphQL Integration** for optimized queries
- **Error Handling Middleware** for consistent responses
- **Modular Architecture** for maintainable code
- **Clean Code Principles** implementation
---
**Built with ❤️ by Mohamed Tarek**
