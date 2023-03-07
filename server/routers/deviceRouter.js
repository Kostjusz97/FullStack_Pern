const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/create', deviceController.create)
router.post('/destroy', deviceController.destroy)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)


module.exports = router