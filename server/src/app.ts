import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import config from './config/config';
import spotifyRouter from './routers/spotifyRouter';

const sess: session.SessionOptions = {
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: config.nodeEnv === 'production',
  },
};

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(session(sess));

app.use('/spotify', spotifyRouter);

if (config.nodeEnv === 'production') {
  app.get('/*', (_req, res) => {
    res.send('prod');
  });
}

export default app;
