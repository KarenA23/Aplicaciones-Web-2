const { Router } = require('express')
const { check } =  require('express-validator')

const { createTutorias,
     deleteTutorias } = require('../controllers').Tutorias;

const { validateFields } = require('../middlewares')

const router = Router();

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createTutorias)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteTutorias)

module.exports = router;