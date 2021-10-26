//https://angular.io/guide/build#proxying-to-a-backend-server
const HttpsProxyAgent = require('https-proxy-agent');
const proxyServer = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
const useProxy = process.env.USE_PROXY;
const moovEnv = process.env.MOOV_ENV;

const targets = {
  "remote":            "http://52.30.104.65/api",
};

const PROXY_CONFIG = {
  "agent": useProxy ? new HttpsProxyAgent(proxyServer) : undefined,
  "context": [
    "/moov-server",
  ],
  "secure": false,
  "logLevel": "debug",
  "changeOrigin": true,
  "target": targets[moovEnv]
};

PROXY_CONFIG.context.map(api =>
  console.debug(' - requests for', api, 'will route to', PROXY_CONFIG.target + api)
);
console.debug('proxy agent', !!PROXY_CONFIG.agent);

module.exports = PROXY_CONFIG;
