# Globle 2

[![Netlify Status](https://api.netlify.com/api/v1/badges/828b077e-2534-428c-96dc-0d5b83c6bc1e/deploy-status)](https://app.netlify.com/sites/globle2/deploys)

## What is this?

TODO: yap yap yap

## Usage

- Run `npm install` to install the dependencies.
- Run `npm run start` to start the local development server.
- Browse to `http://localhost:8888`

## Configuring your Ably API keys

### For local development

You need to create a `.env` file in the root with a variable defined called `ABLY_API_KEY` to store your secret.
You can do this from the command line if you like:

```bash
cd api
echo ABLY_API_KEY=YOUR-API-KEY-HERE > .env
```