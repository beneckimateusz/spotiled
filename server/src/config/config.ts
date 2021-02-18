import spotifyConfig, { SpotifyConfig } from './spotifyConfig';

const {
  NODE_ENV,
  PORT,
  SESSION_SECRET,
} = process.env;

if (!PORT) {
  throw new Error('Please specify PORT environment variable');
}

if (!SESSION_SECRET) {
  throw new Error('Please specify SESSION_SECRET environment variable');
}

type NodeEnv = 'development' | 'production';

interface Config {
  nodeEnv?: NodeEnv;
  port: number;
  sessionSecret: string;
  endpoint: string;
  spotify: SpotifyConfig;
}

const config: Config = {
  nodeEnv: NODE_ENV as NodeEnv,
  port: Number(PORT),
  sessionSecret: SESSION_SECRET,
  endpoint: '/api',
  spotify: spotifyConfig,
};

export default { ...config };
