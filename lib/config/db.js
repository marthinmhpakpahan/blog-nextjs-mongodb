import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://marthin:algerian@cluster0.7tnpi.mongodb.net/blog-app');
    console.log("DB Connected");
};