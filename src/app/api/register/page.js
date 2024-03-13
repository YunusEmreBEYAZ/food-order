import mongoose from 'mongoose';
import { UserModel } from '../../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export default async function POST(req, res) {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


        console.log('Succesfully connected to MongoDB');
        console.log('Request Body:', req.body);
        const email = req.body.email;
        const password = req.body.password;
        const createdUser = await UserModel.create({email,password});
        console.log('Received email:', email);
        console.log('Received password:', password);    
        console.log('User created:', createdUser);

        return res.status(201).json(createdUser);

    } catch (error) {
        console.error(error, error.message);
        return;
    }
}
