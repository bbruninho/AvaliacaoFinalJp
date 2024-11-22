const express = require('express')
const ControllerFilme = require('../controllers/filme')
const auth = require("../middleware/auth")


const router = express.Router()


router.post('/', ControllerFilme.CreateFilme)
router.post('/login', controllerFilme.Login)

router.get('/', auth, controllerFilme.GetFilmes)
router.put('/:id', auth, controllerFilme.UpdateFilme)
router.delete('/:id', auth, controllerFilme.DeleteFilme)


module.exports = router