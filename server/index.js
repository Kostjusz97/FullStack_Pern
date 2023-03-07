require('dotenv').config() //Чтобы считывать с переменного окружения
const express = require('express')
const sequelize = require('./db')// Обьект с Парметрами БД
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routers/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)





const start = async () => {
  try {
    await sequelize.authenticate() //Подключенние к базе данных
    await sequelize.sync({alter: true}) //Сверка с схемой базы данных
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
 
start()
