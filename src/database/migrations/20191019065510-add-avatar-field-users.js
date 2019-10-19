/*
  Migration que adiciona um campo (avatar_id) na tabela de User

  o metodo addColumn recebe como argumento
  primeiro: nome da tabela "users"
  segundo: nome do campo "avatar_id"

  o atributo references (Chave estrangeria)
  models - relaciona a tabela no qual eu quero fazer a referencia no 'files'
  key - seria o campo que quero fazer essa referencia

  ou seja todo avatar id da tabela users vai ser um id contido na tabela 'files'

  onUpdate - qdo atualizado sera feito tbm na tabela
  onDelete - caso for deletado na tabela sera NUll
*/
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
