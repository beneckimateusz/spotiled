import { Router } from 'express';
import config from '../config/config';
import { createSpotifyAuthUri } from '../utils/auth';
import { isAuthError } from '../utils/guards';
import { getSpotifyTokens } from '../utils/spotifyUtils';
import { generateRandomString } from '../utils/utils';

const router = Router();

router.get('/login', (_req, res) => {
  // This provides protection against attacks such as cross-site request forgery
  const state = generateRandomString(16);
  res.cookie(config.spotify.stateKey, state);

  res.redirect(createSpotifyAuthUri(state));
});

router.get('/callback', async (req, res) => {
  const { code, error, state } = req.query;
  const storedState = req.cookies ? req.cookies[config.spotify.stateKey] : null;

  if (!state || state !== storedState) {
    return res
      .status(400)
      .send({ error: 'Spotify authorization state mismatch' });
  }

  // Access denied
  if (error) {
    return res.redirect(config.clientUrl);
  }

  res.clearCookie(config.spotify.stateKey);

  const data = await getSpotifyTokens(code as string);

  if (isAuthError(data)) {
    return res.status(400).send(data);
  }

  req.session.accessToken = data.access_token;
  req.session.refreshToken = data.refresh_token;
  req.session.expiresAt = new Date(
    Date.now() + data.expires_in * 1000
  ).toISOString();

  return res.redirect(config.clientUrl);
});

// router.get('/logout', (req, res) => {
//   req.session.destroy(() => {
//     return res.sendStatus(200);
//   });
// });

export default router;
