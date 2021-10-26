//https://angular.io/guide/build#proxying-to-a-backend-server
const PROXY_CONFIG = {
  "/api/*": {
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "target": "http://localhost:8080/api",
    "pathRewrite": {
      "^/api": ""
    },
    "bypass": function (req) {
      //add `x-forwarded-*` headers.
      //These headers are needed in particular to satisfy rack-protection's `http-origin` policies within the sidekiq web ui
      req.headers["X-FORWARDED-HOST"] = "localhost:4000";
      req.headers["X-FORWARDED-FOR"] = "localhost";
    }
  }
 
};

module.exports = PROXY_CONFIG;

