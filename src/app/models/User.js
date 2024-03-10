import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: true},
    password: {
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 6;
            },
            message: props => `${props.value} is not a valid password!`
        }
    }
}, {timestamps: true});

export const UserModel = model('User', userSchema);