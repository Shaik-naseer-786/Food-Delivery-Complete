
# Food Ordering Web App

This is a full-stack web application where users can order food and make payments. The app includes an admin panel for managing items, add-to-cart functionalities, and user authentication using bcrypt and JWT.


## Features
### User Features
**User Authentication:** Secure login and registration with bcrypt and JWT.

**Order Food:** Users can browse and order food items.

**Payment Gateway:** Integration with a payment gateway for secure transactions.

**Add to Cart:** Users can add items to their cart and manage their orders.

### Admin Features
**Admin Panel:** Admins can add, update, and delete food items.



## Technologies Used

**Frontend:** React.js, HTML, CSS, JavaScript

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Authentication:** bcrypt, JWT


## Installation

1.Clone the repository:

```bash
  git clone https://github.com/your-username/food-ordering-app.git
    cd food-ordering-app
```
2.Install frontend dependencies:

```bash
  cd frontend
  npm install
```
3.Install backend dependencies:
```bash
  cd ../backend
  npm install
```
4.Create a .env file in the backend directory and add the          following environment variables:
```bash
  MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```


## Running the Application

To deploy this project run

Start the frontend development server:

```bash
   cd frontend
npm run dev
```
Start the backend server:

```bash
   cd ../backend
npm run start
```
Admin Pannel
```bash
cd ../admin
    npm run dev
```
The application will be running on http://localhost:3000 for the frontend and http://localhost:8080 for the backend.
## API Reference

#### User Routes

```http
  POST /api/auth/register: Register a new user
  POST /api/auth/login: Login a user
  GET /api/auth/user: Get user information
```

### Item Routes

```http
  GET /api/items: Get all items
  POST /api/items: Add a new item (Admin only)
  PUT /api/items/:id: Update an item (Admin only)
  DELETE /api/items/:id: Delete an item (Admin only)
```







## Contact

If you have any questions, feel free to reach out at sknaseer9347@gmail.com.

