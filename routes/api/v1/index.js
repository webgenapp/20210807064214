const express = require('express')
const router = express.Router()

const shovelsRouter = require('./shovels')
router.use('/shovels', shovelsRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
