module.exports = {

    development: {
      client: 'pg',
      connection: 'postgres://localhost/cleaningstar',
      migrations: {
          directory: __dirname + '/db/migrations'
      },
      seeds: {
          directory: __dirname + '/db/seedingFunctions'
      }
    }
  }