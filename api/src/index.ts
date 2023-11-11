import express from 'express';
import cors from 'cors';

const app = express();

const port = 8000;

app.use(cors());
app.get('/', (req, res) => {
    return res.json({ msg: 'Hello World!' });
});

app.listen(port);