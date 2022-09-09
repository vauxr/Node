const {Pool} = require("pg");

const pool = new Pool({
   host: 'localhost',
   user: 'postgres',
   password: 'Sistemasfhsp2019',
   database: 'mascotas',
   port : '5432'
});
const getMascotas= async (req,res)=>{
    const respuesta = await pool.query("SELECT * FROM MASCOTAS");
    console.log(respuesta.rows);
    res.status(200).json(respuesta.rows)
}

const postMascotas= async (req,res)=>{
    const {id,nombre}=req.body;
    const respuesta = await pool.query("INSERT INTO mascotas VALUES("+id+",'"+nombre+"')");
    res.json({
        body: {
            user: {id,nombre}
        }
    })
}


module.exports = {
     getMascotas,
     postMascotas
}  