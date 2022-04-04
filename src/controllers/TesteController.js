const Teste = require('../models/Teste');


module.exports = {
    async store(req, res) {

        const { originalname: name, size, key, location: url = "" } = req.file
        const teste = await Teste.create({ name, size, key, url });
        return res.json(teste);

    },

    async index(req, res) {

        const testes = await Teste.findAll();
        return res.json(testes);

    },

    async delete(req, res) {
        const { id } = req.params;

        await Teste.destroy({
            where: {
                id: id
            }
        });

        return res.json();

    }


};