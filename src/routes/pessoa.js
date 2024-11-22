const express = require('express')
const controllerPessoa = require('../controllers/pessoa')
const auth = require("../middleware/auth")


const router = express.Router()


router.post('/', controllerPessoa.CreatePessoa)
router.post('/login', controllerPessoa.Login)

router.get('/', auth, controllerPessoa.GetPessoas)
router.put('/:id', auth, controllerPessoa.UpdatePessoa)
router.delete('/:id', auth, controllerPessoa.DeletePessoa)


module.exports = router
