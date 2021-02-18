import { Router } from 'express';
import config from '../config/config';
import { createSpotifyAuthUri, getSpotifyTokens } from '../utils/auth';
import { generateRandomString } from '../utils/utils';

const router = Router();

router.get('/login', (_req, res) => {
  // This provides protection against attacks such as cross-site request forgery
  const state = generateRandomString(16);
  res.cookie(config.spotify.stateKey, state);

  res.redirect(createSpotifyAuthUri(state));
});

router.get('/callback', async (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[config.spotify.stateKey] : null;

  if (!state || state !== storedState) {
    return res
      .status(400)
      .send({ error: 'Spotify authorization state mismatch' });
  }

  res.clearCookie(config.spotify.stateKey);

  const data = await getSpotifyTokens(code as string);

  if (!data.success) {
    return res.send(data);
  }

  req.session.accessToken = data.access_token;
  req.session.refreshToken = data.refresh_token;

  return res.send('success');
});

export default router;
