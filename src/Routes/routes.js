const {Router} = require("express");

const router= Router();
const {getMascotas,postMascotas} = require("../Controllers/Controller");
router.get('/mascotas',getMascotas);
router.post('/mascotas',postMascotas);

module.exports = router;
