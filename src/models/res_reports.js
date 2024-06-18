/*import { getAllRespuestaRController } from "../controllers/respuestaR_controller.js"

const respuestaRModel = {
    async getAllRespuestaRModel (){
        const peticion =await fetch('http://localhost:4000/respuesta')
        const respuesta_r = await peticion.json()
        return respuesta_r
    },

    async createRespuestaRModel (newRespuesta){
        const url = 'http://localhost:4000/respuesta'
        const peticion =await fetch(url, {
            method:'POST',
            body:JSON.stringify(newRespuesta),
            headers:{'content-Type':'application/json'}
        })
        const dataR =await peticion.json()
        return dataR
    },
    async getRespuestaRByIDModel (respuestaId){
        const response = await fetch(`http://localhost:4000/respuesta/${respuestaId}`)
        if (!response.ok){
            return {error:"Respuesta no encontrada"}
        }
        const dataR =await response.json()
        return dataR
    },
    async updateRespuestaRModel (idRespuesta, dataRespuesta){
        const url = `http://localhost:4000/respuesta/${idRespuesta}`
        const peticion =await fetch(ur, {
            method:'PUT',                              //verbo que uso
            body:JSON.stringify(dataRespuesta),               //informacion que voy a mandar
            headers:{'content-Type':'application/json'}
        })
    },
    async deleteRespuestaRModel (idRespuesta){
        //: punto 1
        const url = `http://localhost:4000/tours/${idRespuesta}`
        const peticion = await fetch(url, {
            method:'DELETE'                             //verbo que uso
        })
        await peticion.json()
        //: punto 2
        return {msg:"Respuesta eliminado correctamente"}
    }
}

export default respuestaRModel*/

import mongoose from "mongoose";

const Res_reportSchema = new mongoose.Schema({
    direction: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ci: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('Report_r',Res_reportSchema);