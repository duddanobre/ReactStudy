const conect = require('../database/conexao');
const crypto = require('crypto');

module.exports  = {
    async index (request, response) {
        const ongs = await conect('ongs').select('*');
    
        return response.json(ongs);
    },

    async create (request, response){

        const {name, email, whatsapp, cidade, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await conect('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({id});
    }
};