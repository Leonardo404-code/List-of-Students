require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  // Host of your database (if on your machine it will be: localhost)
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT, // Port your database is running
  username: process.env.DATABASE_USERNAME, // Database user
  password: process.env.DATABASE_PASSWORD, // Database password
  database: process.env.DATABASE, // Database name
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
