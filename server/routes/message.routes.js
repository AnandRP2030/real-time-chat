import express from 'express';
import {sendMessage, getAllMessages} from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/protectRoutes.js';

const messageRoutes = express.Router();
messageRoutes.post('/send/:id', protectRoute, sendMessage);
messageRoutes.get('/all-messages', getAllMessages);

export default messageRoutes;