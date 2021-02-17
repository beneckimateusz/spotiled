const { NODE_ENV, PORT } = process.env;

type NodeEnv = 'development' | 'production';

interface Config {
  port?: string;
  nodeEnv?: NodeEnv;
  endpoint: string;
}

const config: Config = {
  port: PORT,
  nodeEnv: NODE_ENV as NodeEnv,
  endpoint: '/api'
};

export default { ...config };
