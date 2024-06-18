import {Router} from "express";
import { createRespuestaRController, deleteRespuestaRController, getAllRespuestaRController, getRespuestaRByIdController, updateRespuestaRController } from "../controllers/respuestaR_controller.js";
import { verifyToken } from "../middlewares/auth.js";

const routerR = Router()
routerR.get('/respuesta', getAllRespuestaRController)
routerR.post('/respuesta',verifyToken,createRespuestaRController)
routerR.get('/respuesta/:id',getRespuestaRByIdController)
routerR.put('/respuesta/:id',verifyToken,updateRespuestaRController)
routerR.delete('/respuesta/:id',verifyToken,deleteRespuestaRController)

export default routerR