import express from 'express';
import {createNewMessage, getAllMessages} from '../controllers/message.controllers.js';

const messageRoutes = express.Router();
messageRoutes.post('/new', createNewMessage);
messageRoutes.get('/all-messages', getAllMessages);

export default messageRoutes;