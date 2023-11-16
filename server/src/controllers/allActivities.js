const {Activity,Country}= require("../db")

const allActivities= async (req,res)=>{
   
  try {
    const activities = await Activity.findAll({                     
      include:
        {model: Country,
          attributes:
          ["id", "name", "flags", "continents"]
        }
    })
    
    res.status(200).json(activities);

  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
module.exports= allActivities