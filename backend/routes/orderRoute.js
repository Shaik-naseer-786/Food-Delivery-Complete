import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { placeOrder, verifyOrder } from '../controllers/orderController.js';

const orderRouter=express.Router();

// creating end points 

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);

export default orderRouter;