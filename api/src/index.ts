import * as express from 'express';

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello World!' });
});

app.listen(port);