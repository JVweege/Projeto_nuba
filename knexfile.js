// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
//Alterar para os dados do banco mysql
  development: {
    client: 'mysql',
    connection: {
      database: 'atividade', //nome do banco
      user:     'aluno',//usuario do banco
      password: 'senacrs',//senha
      host:'127.0.0.1'//host
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
