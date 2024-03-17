import mongoose from 'mongoose';
import { User } from '../../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {

    const body = await req.json();

    mongoose.connect(process.env.MONGO_URL);

    const createdUser = await User.create(body);
    return Response.json(createdUser);
    // try {
    //     await mongoose.connect(process.env.MONGO_URL, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     });


    //     console.log('Succesfully connected to MongoDB');
    //     console.log('Request Body:', req.body);
    //     const email = req.body.email;
    //     const password = req.body.password;
    //     const createdUser = await UserModel.create({email,password});
    //     console.log('Received email:', email);
    //     console.log('Received password:', password);    
    //     console.log('User created:', createdUser);

    //     return res.status(201).json(createdUser);

    // } catch (error) {
    //     console.error(error, error.message);
    //     return;
    // }
}
