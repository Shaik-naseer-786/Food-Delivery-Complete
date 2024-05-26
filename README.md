Food Ordering Web App
This is a full stack web application where users can order food and make payments. The app includes an admin panel for managing items, add-to-cart functionalities, and user authentication using bcrypt and JWT.

Features
User Authentication: Secure login and registration with bcrypt and JWT.
Order Food: Users can browse and order food items.
Payment Gateway: Integration with a payment gateway for secure transactions.
Admin Panel: Admins can add, update, and delete food items.
Add to Cart: Users can add items to their cart and manage their orders.
Technologies Used
Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: bcrypt, JWT
Getting Started
Prerequisites
Node.js
npm
MongoDB
Installation
Clone the repository:


git clone https://github.com/your-username/food-ordering-app.git
Navigate to the project directory and install frontend dependencies:


cd food-ordering-app/frontend
npm install
Navigate to the backend directory and install backend dependencies:


cd ../backend
npm install
Configuration
Create a .env file in the backend directory and add the following environment variables:

makefile
Copy code
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Running the Application
Start the frontend development server:


cd frontend
npm run dev
Start the backend server:


cd ../backend
npm run start
The application will be running on http://localhost:3000 for the frontend and http://localhost:8080 for the backend.

Usage
User: Register or login to start ordering food. Browse through the menu, add items to your cart, and proceed to checkout to make a payment.
Admin: Login to the admin panel to manage food items. Add new items, update existing ones, or delete items from the menu.
API Endpoints
User Routes
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user
GET /api/auth/user: Get user information
Item Routes
GET /api/items: Get all items
POST /api/items: Add a new item (Admin only)
PUT /api/items/:id: Update an item (Admin only)
DELETE /api/items/:id: Delete an item (Admin only)
Contributing
Feel free to contribute to this project by creating issues or submitting pull requests.

Contact
If you have any questions, feel free to reach out at sknaseer9347@gmail.com.
