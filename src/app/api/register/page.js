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

        console.log('Succesfully connected to MongoDB');

        const body = await req.body;
        const createdUser = await UserModel.create(body);

        return res.status(201).json(createdUser);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
