module.exports = ({ env }) => ({
  host: "<your-azure-site-name>.azurewebsites.net", 
  // When deployed, listen to the PORT variable - else when running locally, listen to 1337
  port: process.env.PORT || '1337',
  admin: {
    auth: {
      // This can be changed to be environment variables 
      secret: env("ADMIN_JWT_SECRET", "0d1286debf5e50237e4b6861aa359d5d"),
    },
  },
});
