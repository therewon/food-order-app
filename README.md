# Food Order App

A full-stack Food Ordering Web Application built with **React + Vite** on the frontend and admin side, and **Node.js + Express + MongoDB** on the backend.

This project includes three main parts:

- **Frontend** – user-facing food ordering interface
- **Admin Panel** – dashboard for managing products and orders
- **Backend** – REST API, authentication, database, file upload, and payment integration

---

## Features

### User Side
- Browse food items
- Add items to cart
- Remove items from cart
- View total cart amount
- User authentication
- Place orders
- Online payment integration with Stripe
- Responsive UI
- Toast notifications for user feedback

### Admin Panel
- Add new food items
- Upload food images
- Manage food list
- View orders
- Update order status
- Separate admin interface

### Backend
- RESTful API
- User authentication with JWT
- Password hashing with bcrypt
- MongoDB database connection
- File upload with multer
- Input validation
- Stripe payment integration
- Environment variable support with dotenv

---

## Tech Stack

### Frontend / Admin
- **Vite**
- **React**
- **SCSS**
- **Axios**
- **React Router DOM**
- **React Toastify**

### Backend
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **bcrypt**
- **body-parser**
- **cors**
- **dotenv**
- **jsonwebtoken**
- **multer**
- **nodemon**
- **stripe**
- **validator**

---

## Project Structure

```bash
food-order-app/
│
├── frontend/      # User-facing client
├── admin/         # Admin dashboard
├── backend/       # Server-side API
│
└── README.md
