module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd12c5220df2702a1468a2e5eb2e94a53'),
  },
});
