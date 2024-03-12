import express from 'express';
const router = express.Router();
import { getLikes, getuserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';
import {ensureAuthenticated} from "../middleware/ensureAuthenticated.js"


router.get("/profile/:username",getuserProfileAndRepos)

// get likes
router.get("/likes", ensureAuthenticated, getLikes)

// post like 
router.post("/like/:username", ensureAuthenticated, likeProfile)

export default router;


