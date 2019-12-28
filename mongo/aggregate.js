db.estados.aggregate([
    {$project: {nome: 1, "cidades.nome": 1, _id:0}}
]);

db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id:0 }},
    {$group: {_id: null, populacaoTotal: {$sum: "$populacao"}} },
    {$project: {populacaoTotal: 1, _id:0}}
]);

//-------------------------p2

db.estados.aggregate([
    {$match: {"cidades.nome": "Sorocaba"}},
    {$unwind: "$cidades"},
    {$match: {"cidades.nome": "Sorocaba"}},
    {$project: {_id: "$cidades._id"}}
]).pretty();

db.estados.update({sigla: 'RJ'}, {$set: {populacao: 14141241}})

// ----------------------------
db.empresas.insert({
    nome: "Bradesco",
    estadoId: ObjectId("5e066bba2c14d5fcbaeaef56")
});

db.empresas.insert({
    nome: "Vale",
    cidadeId: ObjectId("5e066bba2c14d5fcbaeaef55")
})


// -------------------- lookup

db.empresas.aggregate([
    {$match: {nome: "Bradesco"}},
    {$lookup: {
        from: "estados",
        localField: "estadoId",
        foreignField: "_id",
        as: "estado"
    }},
    {$unwind: "$estado"},
]).pretty()


db.empresas.aggregate([
    {$match: {nome: "Vale"}},
    {$lookup: {
        from: "estados",
        localField: "cidadeId",
        foreignField: "cidades._id",
        as: "estado"
    }},
    {$unwind: "$estado"},
    {$unwind: "$estado.cidades"},
    {$addFields: {mesmaCidade: {$cmp: ["$estado.cidades._id", "$cidadeId"]}}},
    {$match: {mesmaCidade: 0}},
]).pretty()