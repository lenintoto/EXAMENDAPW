// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './routers/report_routes.js';
import routerR from './routers/respuesta_routes.js'


// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.use(cors())

// Middlewares 
app.use(express.json())


// Variables globales
app.set('port',process.env.port || 3000)


// Rutas 
app.use('/api',router)
app.use('/api',routerR)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


// Exportar la instancia de express por medio de app
export default  app