import express from 'express';
const router = express.Router();
import { getuserProfileAndRepos } from '../controllers/user.controller.js';

router.get("/profile/:username",getuserProfileAndRepos)

export default router;