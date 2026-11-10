const PRISMA = require("../services");

async function buscar(req, res) {
  try {
    const linhas = await PRISMA.locatarios.findMany(); //o PRISMA faz coneccao com o banco de dados
    res.json(linhas);
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function criar(req, res) {
  try {
    const { nome, telefone, cpf_cnpj } = req.body;

    await PRISMA.locatarios.create({
      data: {
        nome,
        telefone, 
        cpf_cnpj
      },
    });

    res.json({
      type: "succes",
      description: "Registro criado com sucesso.",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function editar(req, res) {
  try {
    const dados = req.body;
    const { id } = req.params;

    await PRISMA.locatarios.update({
      where: {
        id
      },
      data: dados
    });

    res.json({
      type: "succes",
      description: "Registro atualizado com sucesso.",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function deletar(req, res) {
  try {
      const { id } = req.params;

    await PRISMA.locatarios.delete({
      where: {
        id
      }
    });

    res.json({
      type: "succes",
      description: "Registro deletado com sucesso.",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

module.exports = {
  buscar,
  criar,
  editar,
  deletar
};
