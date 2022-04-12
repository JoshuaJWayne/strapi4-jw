module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '521a27e18f5d55a378738fba94fdfe08'),
  },
});
