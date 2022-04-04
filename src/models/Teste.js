const { Model, DataTypes } = require('sequelize');
const aws = require('aws-sdk');
const s3 = new aws.S3();

class Teste extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            size: DataTypes.INTEGER,
            key: DataTypes.STRING,
            url: DataTypes.STRING
        },
            {
                hooks: {
                    afterCreate: (teste, options, cb) => {
                        console.log('Acabei de subir o arquvo: Notificar usuário' + teste.id);
                    },
                    beforeBulkDestroy: (options) => {
                        options.individualHooks = true;
                    },
                    beforeDestroy: (teste, options, cb) => {
                        s3.deleteObject({
                            Bucket: process.env.BUCKET_NAME,
                            Key: teste.key
                        }).promise();
                    }
                },
                sequelize

            }
        )
    }
}

module.exports = Teste;