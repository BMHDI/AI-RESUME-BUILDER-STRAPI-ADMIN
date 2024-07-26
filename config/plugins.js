module.exports = ({ env }) => ({
    // Other plugin configurations
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'p+EQ1hH0QDh+O1w3wN3Q8w=='),
      },
    },
  });