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
- **Note Summarization** using OpenAI API (or any LLM)
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
- **AI Integration**: OpenAI API
- **Validation**: Joi for input validation
- **Environment**: dotenv for configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key (or your preferred LLM service)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smart-note-app.git
   cd smart-note-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/smart-note-app
   JWT_PRIVATE_KEY=your_jwt_private_key
   JWT_PUBLIC_KEY=your_jwt_public_key
   OPENAI_API_KEY=your_openai_api_key
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Upload Profile Picture
```http
PATCH /upload-profile-pic
Authorization: Bearer <jwt_token>
Content-Type: multipart/form-data

FormData: profilePic (file)
```

#### Logout User
```http
POST /logout
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Forgot Password
```http
POST /forget-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

#### Reset Password
```http
POST /reset-password
Content-Type: application/json

{
  "email": "user@example.com",
  "otp": "123456",
  "newPassword": "newSecurePassword123"
}
```

### Notes Management

#### Get Notes (GraphQL)
```http
GET /notes
Authorization: Bearer <jwt_token>

Query Parameters:
- userId: Filter by user ID
- title: Filter by title
- createdAt: Filter by date range
- page: Page number for pagination
- limit: Items per page
```

#### Create Note
```http
POST /notes
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Meeting Notes",
  "content": "Today we discussed project requirements...",
  "ownerId": "ObjectId"
}
```

#### Delete Note
```http
DELETE /notes/:id
Authorization: Bearer <jwt_token>
```

#### Summarize Note
```http
POST /notes/:id/summarize
Authorization: Bearer <jwt_token>
```

## 🏗 Project Structure

```
smart-note-app/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── noteController.js
│   │   └── aiController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── services/
│   │   ├── emailService.js
│   │   └── aiService.js
│   ├── utils/
│   │   └── helpers.js
│   └── app.js
├── uploads/
├── .env.example
├── .gitignore
├── package.json
└── README.md
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

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have any questions or need help with setup, please open an issue or contact [your-email@example.com].

## 🙏 Acknowledgments

- OpenAI for providing the AI summarization capabilities
- MongoDB team for the excellent database solution
- Express.js community for the robust web framework

---

**Built with ❤️ by Mohamed Tarek**