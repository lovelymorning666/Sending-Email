// Update with your config settings.

module.exports = {
  development: {
    //it has to be here not in the .env file
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port:process.env.DB_PORT,
      user: 'root',
      password: process.env.DB_PASSWORD,
      database:'',
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
