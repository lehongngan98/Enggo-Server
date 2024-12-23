const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/authRouter');
const connectDB = require('./configs/connectDB');
const errorMiddleHandle = require('./middlewares/errorMiddleWare');
const topicRoutes = require('./routers/topicRouter');
const vocabularyRoutes = require('./routers/vocabularyRouter');
const communicationRoutes = require('./routers/communicationRouter');
const newsRouter = require('./routers/newsRouter');
const storyRouter = require('./routers/storyRouter');
const quoteRouter = require('./routers/quoteRouter');
const bilingualTopic = require('./routers/bilinggualTopicsRouter');
const channelRouter = require('./routers/channelRouter');
const categoryNewsRouter = require('./routers/categoryNewsRouter');
const categoryTopicListenRouter = require('./routers/categoryTopicListenRouter');
const categoryTopicVideoRouter = require('./routers/categoryTopicVideoRouter');
const topicListenRouter = require('./routers/TopicListenRouter');
const topicVideoRouter = require('./routers/topicVideosRouter');
const exercisesRouter = require('./routers/exercisesRouter');


const dotenv = require('dotenv');
const app = express();

dotenv.config();

// app.use(cors({ origin: '*' })); // Cho phép tất cả các nguồn truy cập
app.use(cors());
app.use(express.json());
connectDB();

const PORT = 3000;

app.use('/auth', authRouter);
app.use('/api', topicRoutes);
app.use('/api', vocabularyRoutes);
app.use('/api', communicationRoutes);
app.use('/api', newsRouter);
app.use('/api', storyRouter);
app.use('/api', quoteRouter);
app.use('/api', bilingualTopic);
app.use('/api', channelRouter);
app.use('/api', categoryNewsRouter);
app.use('/api', categoryTopicListenRouter);
app.use('/api', topicListenRouter);
app.use('/api', categoryTopicVideoRouter);
app.use('/api', topicVideoRouter);
app.use('/api', exercisesRouter);



app.use(errorMiddleHandle);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running at : http://localhost:${PORT}`);
});