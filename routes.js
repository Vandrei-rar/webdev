const express = require("express")
const router = express.Router()
const mainController = require("./controllers/mainController")

router.get("/", mainController.main)

router.get("/sobre/", mainController.sobre)
router.post("/sobre/", mainController.sobrePost)

module.exports = router