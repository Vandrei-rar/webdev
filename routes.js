const express = require("express")
const router = express.Router()
const mainController = require("./controllers/mainController")

router.get("/", mainController.main)

router.get("/sobre/{:id}", mainController.sobre)

module.exports = router