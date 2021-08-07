const express = require('express')
const router = express.Router()
const { Shovel } = require('../../../../models')
const { auth } = require('../../../../middlewares/auth')

router.get('/', auth, async function (req, res, next) {
  const shovels = await Shovel.findAll()

  res.send(shovels)
})

router.get('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const shovel = await Shovel.findOne({ where: { id } })

  res.send(shovel)
})

router.post('/', auth, async function (req, res, next) {
  const shovel = await Shovel.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(shovel)
})

router.delete('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  await Shovel.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const shovel = await Shovel.findOne({ where: { id } })

  shovel.size = req.body.size

  shovel.save()

  res.send(shovel)
})

module.exports = router
