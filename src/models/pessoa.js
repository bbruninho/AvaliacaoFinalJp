const database = require('../config/database')

class ModelPessoa {
    constructor() {
        this.model = database.db.define('pessoas', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
module.exports = new ModelPessoa().model

class ModelFilme {
    constructor() {
        this.model = database.db.define('filmes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            faixaetaria: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            diretor: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
module.exports = new ModelFilme().model