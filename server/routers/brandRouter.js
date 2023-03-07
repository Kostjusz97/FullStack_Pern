const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/create', brandController.create)
router.post('/destroy', brandController.destroy)
router.get('/', brandController.getAll)

module.exports = router