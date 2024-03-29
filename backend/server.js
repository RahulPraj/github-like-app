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
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

console.log("__dirname", __dirname)

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());



app.use("/api/auth", authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/explore',exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT,()=>{
   console.log(`server started on: ${PORT}`);
   connectMongoDB();
})