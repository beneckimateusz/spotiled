import cors from 'cors';
import express from 'express';
import config from './config/config';

const app = express();

app.use(cors());

if (config.nodeEnv === 'production') {
  app.get('/*', (_req, res) => {
    res.send('prod');
  });
}

export default app;
