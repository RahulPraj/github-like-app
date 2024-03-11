import express from 'express';
const app = express();
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is ready");
})

app.use('/api/users', userRoutes);
app.use('/api/explore',exploreRoutes);

app.listen(8080,()=>{
   console.log("server started on port:8080") 
})