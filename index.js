
import express from "express";
import router from './routers/router.js'
import clientService from './routers/clientService.js'

const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})
app.use(router)
router.use(clientService)
const PORT = 4000;
app.listen(PORT,()=>console.log("api gw !"));