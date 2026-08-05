# 💬 Real-Time Chat Application

A modern **Full Stack Real-Time Chat Application** built using the **MERN Stack** with **Socket.IO** for instant messaging. The application provides secure authentication, real-time communication, online user status, image sharing, and a clean responsive UI.

> 🚀 Built to learn scalable real-time communication and full-stack web development.

---

## ✨ Features

- 🔐 Secure JWT Authentication
- 👤 User Signup & Login
- 💬 Real-Time One-to-One Messaging
- ⚡ Instant Message Delivery using Socket.IO
- 🟢 Online/Offline User Status
- 🖼️ Image Sharing Support
- 😊 Emoji Support
- 📱 Fully Responsive UI
- 🌙 Modern UI with Tailwind CSS & DaisyUI
- ☁️ Cloudinary Image Upload Integration
- 🔒 Protected Routes
- 🚪 Logout Functionality

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- DaisyUI
- Axios
- React Router DOM
- Socket.IO Client
- Zustand

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs
- Cookie Parser
- Cloudinary
- dotenv

---

## 📂 Project Structure

```
real-time-chat-app
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── lib
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Adity-code2145/real-time-chat-app.git

cd real-time-chat-app
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

Run backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:5001
```

Run frontend

```bash
npm run dev
```

---

## 🚀 Usage

1. Register a new account.
2. Login securely.
3. Select any user from the sidebar.
4. Start chatting instantly.
5. Send images and messages in real time.
6. See online users live.

---

## 📸 Screenshots

> Add screenshots here

### Login Page

```
screenshots/login.png
```

### Chat Dashboard

```
screenshots/chat.png
```

### Mobile View

```
screenshots/mobile.png
```

---

## 🔄 Real-Time Communication

This application uses **Socket.IO** to provide:

- Instant messaging
- Live user connection status
- Automatic room management
- Real-time updates without page refresh

---

## 🔒 Authentication Flow

- User Registration
- Password Hashing using bcryptjs
- JWT Token Generation
- HTTP-Only Cookies
- Protected API Routes

---

## 🌐 Deployment

Frontend can be deployed on:

- Vercel
- Netlify

Backend can be deployed on:

- Render
- Railway
- VPS

MongoDB:

- MongoDB Atlas

---

## 📚 Future Improvements

- ✅ Group Chats
- ✅ Typing Indicator
- ✅ Read Receipts
- ✅ Voice Messages
- ✅ Video Calling
- ✅ Message Reactions
- ✅ Push Notifications
- ✅ Search Messages
- ✅ Delete Messages
- ✅ Dark/Light Theme Sync

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Aditya Raj**

- GitHub: https://github.com/Adity-code2145
- LinkedIn: *(Add your LinkedIn profile here)*

---

⭐ If you like this project, don't forget to **Star** the repository!
