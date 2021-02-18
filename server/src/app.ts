import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import config from './config/config';
import spotifyRouter from './routers/spotifyRouter';

const sessionOptions: session.SessionOptions = {
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: config.nodeEnv === 'production',
  },
};

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const app = express();

if (config.nodeEnv !== 'production') {
  app.use(cors(corsOptions));
}
app.use(cookieParser());
app.use(session(sessionOptions));

app.use('/spotify', spotifyRouter);

if (config.nodeEnv === 'production') {
  app.get('/*', (_req, res) => {
    res.send('prod');
  });
}

export default app;
