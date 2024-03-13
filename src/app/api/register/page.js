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

<<<<<<< HEAD
        console.log('Connected to MongoDB');
  
        const {email,password} = req.body;
        console.log("hello " + req.body);
        const createdUser = await UserModel.create({email,password});
=======
        console.log('Succesfully connected to MongoDB');

        const body = await req.body;
        const createdUser = await UserModel.create(body);
>>>>>>> c8603a32efdc242b63043e18739e0b2197e10cfd

        return res.status(201).json(createdUser);
    } catch (error) {
        console.error(error, error.message);
        return;
    }
}
