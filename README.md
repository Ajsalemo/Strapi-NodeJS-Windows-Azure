# Strapi-NodeJS-Windows-Azure
A Strapi CMS quickstart CLI application configured to run on Windows IIS on Azure.

Key points -
- An additional `server.js` is added for an entrypoint to the application under the root directory of the project. This is separate from the `config/server.js`. This `server.js` is used by the `web.config` that is added in the root directory as well.
- The `config/server.js` file has been changed to reflect the listning port for node by the following: `process.env.PORT || '1337'`
- The start script in `package.json` is changed from `strapi start` to `node server.js`

<br>

[Strapi Quickstart link](https://strapi.io/documentation/developer-docs/latest/installation/cli.html)
