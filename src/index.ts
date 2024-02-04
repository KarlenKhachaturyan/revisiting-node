import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Launcher worked with nodemon');
});

const port = 3220;

app.listen(port, () => {
  console.log(`Listening on port => ${port}`);
});
