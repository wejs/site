module.exports = function TestModel(db) {
  return {
    definition: {
      // model atributes //
      idInProvider: {
        type:  db.Sequelize.STRING,
        unique: true
      },
      text: {
        type: db.Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: db.Sequelize.STRING 
      }
    }, 
    options: {
      // table comment
      comment: "We.js test table",
      // table configs
      timestamps: true,
      createdAt:  'createdAt',
      updatedAt:  'updatedAt',
      deletedAt:  'deletedAt',
      paranoid:   true      
    }
  };
}