module.exports = function TestModel(we) {
  return {
    definition: {
      // model atributes //
      idInProvider: {
        type:  we.db.Sequelize.STRING,
        unique: true
      },
      text: {
        type: we.db.Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: we.db.Sequelize.STRING
      }
    },
    options: {
      // table comment
      comment: 'We.js test table'
    }
  };
};