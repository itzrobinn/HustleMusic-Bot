const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('HustleMusic is Alive!'));

app.listen(port, () => console.log(`HustleMusic is listening to http://localhost:${port}`));
