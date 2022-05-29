import express from 'express';
import path from 'path';

const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port || process.env.PORT);
