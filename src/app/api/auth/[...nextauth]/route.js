import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import {User} from "../../../models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          id: 'credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "email", type: "email", placeholder: "test@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            
           const email = credentials?.email;
          const password = credentials?.password;

           mongoose.connect(process.env.MONGO_URL);

           const user = await User.findOne({email:email});

           if(user && bcrypt.compareSync(password,user.password)){
              return user;
           }else{
             throw new Error("Invalid user");
           }

         
      
           
          }
        })
      ]
})

export { handler as GET, handler as POST }