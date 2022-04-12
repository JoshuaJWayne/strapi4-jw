module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi4-mysql'),
      user: env('DATABASE_USERNAME', 'strapi4-mysql'),
      password: env('DATABASE_PASSWORD', 'AVNS_0mfz0lL_3_0lTKv'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
