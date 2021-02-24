<h1 align="center">spotiled</h1>

<div align="center">
  <a href="https://mb-spotiled.herokuapp.com/">
    <img src="https://github.com/beneckimateusz/spotiled/blob/main/img/logo.png?raw=true" />
  </a>
</div>

<div align="center">
  <strong>spotify-tiled</strong>
</div>

<div align="center">
  Check your Spotify top artists/tracks in a convenient way
</div>

<br />

<div align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/beneckimateusz/spotiled.svg?style=flat-square" />
  <img alt="Code style" src="https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square" />
</div>

<br />

<div align="center">
  <img src="https://github.com/beneckimateusz/spotiled/blob/main/img/home.png?raw=true" />
</div>

<br />

## Table of contents

- [Description](#description)
- [Tech stack](#tech-stack)
- [Authorization](#authorization)
- [Presentation](#presentation)
- [Development](#development)

## Description

The purpose of this app is to display a charming list of top artists/tracks the user have been listening to during a specific period (last 4 weeks, last 6 months, several years).

**Disclaimer:** Wrapping an existing, well-developed API in GraphQL and TypeScript is obviously an **overkill**. However, I've decided to do so in order to learn some new tech.

## Tech stack

- **Frontend** ![](img/typescript_icon.png) - React.js, Chakra UI, Apollo Client
- **Backend** ![](img/typescript_icon.png) - Node.js, Express.js, GraphQL, TypeGraphQL, Apollo Server

## Authorization

`spotiled` needs your permission granted during the _Authorization Code Flow_ specified in _OAuth 2.0_ standard to retrieve data from _Spotify Web API_.

## Presentation

### Top artists

![Top artists](https://github.com/beneckimateusz/spotiled/blob/main/img/top_artists.png?raw=true)

### Top tracks

![Top tracks](https://github.com/beneckimateusz/spotiled/blob/main/img/top_tracks.png?raw=true)

### Embedded player

![Embedded player](https://github.com/beneckimateusz/spotiled/blob/main/img/embedded_player.png?raw=true)

## Development

Requirements for both client and server are listed in _Tech stack_ section.

### Server

```sh
# Clone environment variables template
cp .env.template .env
# Fill out envs
vim .env
# Install dependencies
npm i
# Run the development server
npm run dev
```

Now you can visit `localhost:{port_from_dotenv}/api` from your browser for an interactive GraphQL playground.

### Client

```sh
# Change proxy port so it matches with the backend
vim package.json
# Install dependencies
npm i
# Run the development server
npm start
```

Now you can visit [`localhost:3000`](localhost:3000) from your browser.
