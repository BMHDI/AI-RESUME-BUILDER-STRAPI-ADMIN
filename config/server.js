module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['uFxw6Y3T+rkLIUSueuG2s10kPlJdXZE9fL+mY2uLECg=', 'jMlLNTl9gwBBXmSiTFE4gUi1+jDuoN/Uf3k3/XD4jj0=']),
  },
});
