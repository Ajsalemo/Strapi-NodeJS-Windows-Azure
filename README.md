# Strapi-NodeJS-Windows-Azure
A Strapi CMS quickstart CLI application configured to run on Windows IIS on Azure.

Key points -
- An additional `server.js` is added for an entrypoint to the application under the root directory of the project. This is separate from the `config/server.js`. This `server.js` is used by the `web.config` that is added in the root directory as well.
- The `config/server.js` file has been changed to reflect the listning port for node by the following: `process.env.PORT || '1337'`
- The start script in `package.json` is changed from `strapi start` to `node server.js`
- If this is cloned as is and deployed to Azure (Windows), make sure to update the Physical Path mapping to site\wwwroot\strapi-nodejs-windows-azure. If all quickstart files are in the root of the repo, then this doesn't need to be done.
- Due to the node_module size with this quickstart - it may be more benifical to zip the node_modules and deploy them separately to the application if problems occur during deployment.

<br>

[Strapi Quickstart link](https://strapi.io/documentation/developer-docs/latest/installation/cli.html)
