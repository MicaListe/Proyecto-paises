const { Country, Activity } = require("../db");

async function getId(req, res) {
  const id= req.params.id

  try{
    const country = await Country.findOne({
      where: { id: id }, // Cambia 'id' al nombre de la columna en tu modelo de país que corresponda al ID
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"]
      }
    })
   
    res.status(200).json(country)

  }catch(error){
    console.error(error)
    res.status(500).json({error: "Error del servidor"})
  }
}
module.exports = getId;
