module.exports = {
    dialect: 'mssql',
    host: process.env.DB_SERVER,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    dialectOptions: {
        encrypt: true,
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    define: {
        timestamps: false,

        //underscored: true,
    }
};