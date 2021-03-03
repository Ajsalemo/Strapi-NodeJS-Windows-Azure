module.exports = ({ env }) => ({
  host: "localhost", 
  // When deployed, listen to the PORT variable - else when running locally, listen to 1337
  port: process.env.PORT || '1337',
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "0d1286debf5e50237e4b6861aa359d5d"),
    },
  },
});
