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

router.put('/denunciante/:id',(req,res)=>res.send("actualizar perfil"))

router.put('/denunciante/actualizarpassword',(req,res)=>res.send("actualizar password"))

router.get('/denunciante/:id',(req,res)=>res.send("detalle de la queja"))


export default router