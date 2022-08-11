import express from "express";
import feedService from './clientService.js'
var router = express.Router()

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(feedService)

export default router