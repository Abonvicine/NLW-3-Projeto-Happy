const database = require("./db.js")
const saveOrphanage = require("./saveOrphanage.js")
database.then(async db => {
    
    const orpha = {
        name: "Lar das meninos",
        lat: "-22.8609518",
        lng: "-47.0511111",
        whatsapp: "19 9XXXX ZZZZ",
        about: "Presta assistência a crianças de 06 a 15 anos em situação de vulnerabilidade ou risco social",
        images: ["http://pioneiro.rbsdirect.com.br/imagesrc/7416035.jpg?w=620",
                "https://diariodecaratinga.com.br/wp-content/uploads/2015/08/DSC0005.jpg"].toString(),
        instructions: "venha como se sentir a vontade e traga muito amor e paciência.",
        opening_hours: "Horário de visita das 8h às 18h.",
        open_on_weekends: "0"
    };
    //salva o dado no banco de dados
    await saveOrphanage(db,orpha);

    //seleciona objeto especificado no banco de dados
    const orphanage = await db.all('SELECT * FROM orphanages')
    
    console.log(orphanage)

    //deletar dado da tabela


}) 