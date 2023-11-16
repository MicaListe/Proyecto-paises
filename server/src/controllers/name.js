const { Country } = require("../db")
const { Op } = require("sequelize")

const name = async (req, res) => {
    const name = req.query.name;
    
    try {
      if (!name) {
        return res.status(400).json({ message: 'El parámetro "name" es obligatorio en la consulta.' });
      }
  
      const countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        }
      });

      res.status(200).json(countries);
    } catch (error) {
      console.error('Error al buscar países por nombre:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

module.exports =name