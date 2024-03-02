// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: 'mysql',
    connection: {
      database: 'intake',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      host: process.env.MYSQL_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
