import { Router } from "express";
import { getAllReportsController, createReportsController, getReportByIdController, updateReportController, deleteReportController } from '../controllers/report_controller.js'
import { verifyToken } from "../middlewares/auth.js";

const router = Router()


router.get('/reports', getAllReportsController)
router.post('/reports',verifyToken, createReportsController)
router.get('/reports/:id', getReportByIdController)
router.put('/reports/:id', verifyToken, updateReportController)
router.delete('/reports/:id',verifyToken,deleteReportController)

export default router