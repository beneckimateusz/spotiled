import path from 'path';
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
  origin: config.clientUrl,
  credentials: true,
};

const app = express();
const buildPath = path.join(__dirname, '../build');

if (config.nodeEnv !== 'production') {
  app.use(cors(corsOptions));
}
app.use(cookieParser());
app.use(session(sessionOptions));
app.use(express.static('build'));

app.use('/spotify', spotifyRouter);

if (config.nodeEnv === 'production') {
  app.get('/*', (_req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

export default app;
