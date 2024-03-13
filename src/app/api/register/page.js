import mongoose from 'mongoose';
import { UserModel } from '../../models/User';
import dotenv from 'dotenv';

dotenv.config();

export default async function POST(req, res) {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');
  
        const {email,password} = req.body;
        console.log("hello " + req.body);
        const createdUser = await UserModel.create({email,password});

        return res.status(201).json(createdUser);
    } catch (error) {
        console.error(error, error.message);
        return;
    }
}
