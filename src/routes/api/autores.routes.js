const router = require('express').Router();
const { getAll } = require('../../controllers/autores.controller');

router.get('/',getAll);

module.exports=router;