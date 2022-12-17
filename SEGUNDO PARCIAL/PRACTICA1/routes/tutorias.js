const { Router } = require('express')
const { check } =  require('express-validator')


const { 
    createTutoria,
    deleteTutoria,
    updateTutoria,
    getTutoria,
    getTutorias
} = require('../controllers/tutorias');

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getTutorias);

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getTutoria );

router.post('/',
        [ check('idtutor')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo idtutor'),
        check('idtutorado')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo idtutorado'),
        check('asignatura')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo asignatura'),
        check('ndehoras')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo ndehoras'),
        check('fecha')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo fecha'),
        check('hora')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo hora'),
        validateFields],
 createTutoria);

 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateTutoria);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteTutoria);

module.exports = router;