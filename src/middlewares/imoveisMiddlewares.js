const fs = require("fs");

function validarDados(req, res, next) {
    const colunas = [
        "logradouro",
        "bairro",
        "cidade",
        "estado",
        "numero",
        "cep",
        "valor_aluguel",
        "metragem",
        "quartos",
        "suites",
        "banheiros",
        "tipo_id"
    ];
    const dados = req.body;
    let campoAusentes = colunas.filter(chave => !Object.keys(dados).includes(chave));
    
    if(campoAusentes.length > 0) {
        fs.ujlinkSynk(req.file.path); // remova a imagem em caso de falta de campos
        res.json(campoAusentes.map(campo => {
            return {
                type: "warning",
                description: `coluna ${campo} nao informada`
            }
        }))
    }

    next();
}

module.exports = {
    validarDados
}