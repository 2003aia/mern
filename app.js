
import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './routes/posts.js'


const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', router)

const PORT = config.get('port') || 5000


mongoose.connect((config.get('mongoUri')), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
