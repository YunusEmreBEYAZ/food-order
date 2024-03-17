import { Schema, model,models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: true},
    password: {
        type: String, 
        required: true,
        validate: (pass) => {
            if(!pass.length || pass?.length < 6) {
                throw new Error('Password must be at least 6 characters long');
            }
        }
    }
}, {timestamps: true});

export const User = models?.User || model('User', userSchema);