import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import {User} from "../../../models/User";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 
        }),

        CredentialsProvider({
          name: 'Credentials',
          id: 'credentials',
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