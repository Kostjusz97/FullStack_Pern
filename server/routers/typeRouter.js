const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', typeController.create)
router.post('/destroy', typeController.destroy)
router.get('/', typeController.getAll)

module.exports = router