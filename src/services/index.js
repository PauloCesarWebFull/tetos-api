const { PrismaClient } = require("../generated/prisma");

const PRISMA = new PrismaClient(); //conexao com o banco de dados 

module.exports = PRISMA;



