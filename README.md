# 🍔 Food Delivery App (React + Node.js)

A full-stack food delivery web application where users can browse menu items, add to cart, and place orders.

---

## 🚀 Features

- 🏠 Home page with food categories
- 📋 Explore menu section
- 🛒 Add to cart functionality
- ➕ Increase / decrease quantity
- 💰 Cart total calculation
- 📦 Place order page
- 🔐 Login / Signup UI
- 🖼 Image upload (backend)
- 📱 Responsive design

---

## 🛠️ Tech Stack

### Frontend

- React.js
- CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Multer (for file uploads)

---

## 📂 Project Structure

```
food-delivery-app/
│
├── frontend/        # React App
│   ├── src/
│   ├── components/
│   ├── pages/
│
├── backend/         # Node + Express API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/swatiwavare/food-delivery-app.git
cd food-delivery-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Run backend:

```
npm run server
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```
cd frontend
npm install
npm run dev
```

---

## 🌐 API Example

```
POST /api/food/add
```

---

## 🎯 Future Improvements

- 🔐 Authentication (JWT)
- 💳 Payment integration (Stripe)
- 📦 Order tracking
- 📊 Admin dashboard

---

## 🙋‍♀️ Author

**Swati Wavare**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
