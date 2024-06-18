import {Router} from 'express'
const router = Router()
//!primer grupo
router.post('/registro',(req,res)=>res.send("registro"))

router.get('/confirmar/:token',(req,res)=>res.send("confirmar email"))

//!segundo grupo
router.get('/recuperar-password/:token',(req,res)=>res.send("verificar token"))

router.get('/recuperar-password',(req,res)=>res.send("enviar mail"))

router.post('/nuevo-password/:token',(req,res)=>res.send("crear password"))

//ruta
router.post('/login',(req,res)=>res.send("login"))

//!tercer grupo

router.put('/admin/:id',(req,res)=>res.send("actualizar perfil"))

router.put('/admin/actualizarpassword',(req,res)=>res.send("actualizar password"))

router.put('/admin/actualizaciones_perritos',(req,res)=>res.send("Perritos en adopción"))

router.put('/admin/respuesta_denuncia',(req,res)=>res.send("Perritos rescatados"))
export default router