import userModel from '../models/userModel.js';

const addToCart = async (req, res) => {
    try {
        // Retrieve the user data
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            return res.json({ success: false, message: "User not found!" });
        }

        let cartData = userData.cartData;
        
        // Update the cart data
        if (!cartData.has(req.body.itemId)) {
            cartData.set(req.body.itemId, 1);
        } else {
            cartData.set(req.body.itemId, cartData.get(req.body.itemId) + 1);
        }

        // Perform the update operation
        await userModel.updateOne(
            { _id: req.body.userId },
            { $set: { cartData: cartData } }
        );

        // Log the updated user data
        let updatedUserData = await userModel.findOne({ _id: req.body.userId });
        // console.log("Updated user data:", updatedUserData);

        // Respond with success
        res.json({ success: true, message: "Added to cart!" });
    } catch (error) {
        console.log("Error during addToCart operation:", error);
        res.json({ success: false, message: "Error!" });
    }
};

const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            return res.json({ success: false, message: "User not found!" });
        }

        let cartData = userData.cartData;

        // Check if the item exists in the cartData
        if (cartData.has(req.body.itemId)) {
            // Decrease the quantity or remove the item if quantity is 1
            if (cartData.get(req.body.itemId) > 1) {
                cartData.set(req.body.itemId, cartData.get(req.body.itemId) - 1);
            } else {
                cartData.delete(req.body.itemId);
            }

            // Update userModel with the updated cartData
            await userModel.updateOne(
                { _id: req.body.userId },
                { $set: { cartData: cartData } }
            );

            res.json({ success: true, message: "Removed from cart!" });
        } else {
            res.json({ success: false, message: "Item not in cart!" });
        }
    } catch (error) {
        console.log("Error during removeFromCart operation:", error);
        res.json({ success: false, message: "Error!" });
    }
};


const getCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            return res.json({ success: false, message: "User not found!" });
        }

        // console.log("User cart data:", userData.cartData);

        res.json({ success: true, cartData: userData.cartData });
    } catch (error) {
        console.log("Error during getCart operation:", error);
        res.json({ success: false, message: "Error!" });
    }
};

export {addToCart,removeFromCart,getCart}
