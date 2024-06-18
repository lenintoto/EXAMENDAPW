import { Router } from "express";
import { getAllReportsController, createReportsController, getReportByIdController, updateReportController, deleteReportController } from '../controllers/report_controller.js'
import { verifyToken } from "../middlewares/auth.js";

const router = Router()


router.get('/reports', getAllReportsController)
router.post('/reports', createReportsController)
router.get('/reports/:id', getReportByIdController)
router.put('/reports/:id', updateReportController)
//router.delete('/reports/:id',verifyToken,deleteReportController)
router.delete('/reports/:id',deleteReportController)

export default router