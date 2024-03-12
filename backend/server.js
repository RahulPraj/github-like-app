import express from 'express';
const app = express();
import "./passport/github.auth.js";
import session from 'express-session';
import passport from 'passport';
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import cors from 'cors';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.send("server is ready");
})
app.use(cors());



app.use("/api/auth", authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/explore',exploreRoutes);

app.listen(8080,()=>{
   console.log("server started on port:8080");
   connectMongoDB();
})