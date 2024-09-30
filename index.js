
const express = require('express')

const cors = require('cors');
const authRouter = require('./routers/authRouter');
const connectDB = require('./configs/connectDB');
const errorMiddleHandle = require('./middlewares/errorMiddleWare');
const topicRoutes = require('./routers/topicRouter');
const vocabularyRoutes = require('./routers/vocabularyRouter');
const newsRouter = require('./routers/newsRouter');

const dotenv = require('dotenv');
const app = express()

dotenv.config();

app.use(cors())
app.use(express.json())
connectDB();

const PORT = 3000;

app.use('/auth', authRouter);
app.use('/api', topicRoutes);
app.use('/api', vocabularyRoutes);
app.use('/api', newsRouter);

app.use(errorMiddleHandle);


app.listen(PORT,(err) =>{
    if(err){
        console.log(err)
    }
    console.log(`Server is running at : http://localhost:${PORT}`)
})