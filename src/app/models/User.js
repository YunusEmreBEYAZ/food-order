import { Schema, model,models } from 'mongoose';
import bcrypt from 'bcrypt';


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

userSchema.post("validate", function(user) {
    const pass = user.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    user.password = hash;
});

export const User = models?.User || model('User', userSchema);