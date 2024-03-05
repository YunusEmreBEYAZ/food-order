import mongoose from 'mongoose';
import { User } from '../../models/User';

export default async function POST(req,res) {

    mongoose.connect(process.env.MONGO_URL);

    await User.create({email:req.body.email, password:req.body.password})

    if (req.method === 'POST') {
        const {email, password} = req.body;
        if (email && password) {
            res.status(200).json({message: "User created successfully"});
            console.log(res.message)
        } else {
            res.status(400).json({message: "Invalid email or password"});
        }
    }
}