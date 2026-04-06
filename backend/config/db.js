import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://therewon:667298@cluster0.ls0wlpi.mongodb.net/food-order')
    .then(()=>console.log("DB connected."))
}