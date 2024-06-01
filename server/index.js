import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';

dotenv.config()
const app = express();
app.get('/', (req, res)=> {
    res.send('chat appp working')
})
// middlewares 
app.use('/api/auth', authRouter);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})