# 🚀 Travel Melbourne

![Image](https://github.com/user-attachments/assets/a3c34197-9dc8-4ae8-aa12-91cb9812cae1)

TravelMelbourne is a web application that provides information about Melbourne's most famous attractions. It features role-based authentication, allowing **admins** to manage attraction data while **visitor users** can explore places, request callbacks, and send email inquiries.

## 🚀 Features

### 🔍 General Users
- View and explore Melbourne's famous attractions.
- Click **"Details"** to see an attraction’s description and location on an interactive map.
- Submit a **callback request** by entering a phone number (saved in the backend for admin review).
- Contact the admin via the **"Contact Us"** form by providing name, email, and inquiry message.

### 🔑 Admin Users
- **CRUD operations**: Create, update, and delete attraction details.
- View and manage **callback requests** submitted by users.
- View and respond to **email inquiries** from users.

## 🛠 Tech Stack

- **Frontend**: EJS, Bootstrap
- **Backend**: Node.js, Express, MongoDB
- **Authentication & Security**: JWT, Cookies, Bcrypt

## 💻 Installation & Setup

```sh
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/TravelMelbourne.git
cd TravelMelbourne

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the application
node app.js

# 4️⃣ Connect to MongoDB
# Ensure you have MongoDB installed and running.
# The application requires a MongoDB connection string.
# Open a seperate terminal window and enter 'mongod' command to connect to the database

## 📸 Screenshots
### Post Details
[![Image](https://github.com/user-attachments/assets/00101574-dd86-42ba-ac4c-90e9c47b3ec9)](https://github.com/Lancinater/TravelMelbourne/blob/a225e9af52e6843881356dc2f8bb1879e2a5017e/assets/images/contactUsForm.png)

### Admin Login
![Image](https://github.com/user-attachments/assets/bdca4550-fb41-43b8-9208-611ae67ce50e)

### Contact Us Form
![Image](https://github.com/user-attachments/assets/d0776b28-ce7f-4a11-aabf-ee94501f5f5e)

## 📜 License
# This project is part of a personal portfolio and is not open for contributions at this time.





