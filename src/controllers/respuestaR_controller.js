import respuestaRModel from "../models/res_reports.js";
import {v4 as uuidv4} from "uuid"


const getAllRespuestaRController = async (req, res) => {
    try{
        const respuesta_r = await respuestaRModel.getAllRespuestaRModel()
        res.status(200).json(respuesta_r)
    }catch(error){
        res.json(error)
    }
}

const createRespuestaRController = async(req, res) => {
    try{
        const newRespuestaRData = {
            id:uuidv4(),
            ...req.body
        }
        //----
        const cloudinaryResponse = await cloudinary.uploader.upload(req.files.imagen.tempFilePath,{folder:'reports'})
        newRespuestaRData.image =cloudinaryResponse.secure_url
        newRespuestaRData.public_id=cloudinaryResponse.public_id
        //----
        const respuesta_r = await respuestaRModel.createRespuestaRModel(newRespuestaRData)
        res.status(201).json(respuesta_r)

    }catch(error){
        console.log(error)
    }
}

const getRespuestaRByIdController = async(req,res) => {
    const {id} = req.params
    try{
        const respuesta_r = await respuestaRModel.getRespuestaRByIDModel(id)
        const status = respuesta_r.error ? 404 : 200
        res.status(status).json(respuesta_r)
    }catch(error){
        res.status(501).json({msg:error})
    }
}

const updateRespuestaRController = async (req, res)=>{
    const {id}= req.params
    try {
        const respuesta_r = await respuestaRModel.updateRespuestaRModel(id,req.body)
        const status = respuesta_r.error ? 404 :200
        res.status(status).json(respuesta_r)
    } catch (error) {
        res.status(500).json({mgs:error})
    }
}

const deleteRespuestaRController = async (req, res)=>{
    const {id}= req.params
    try {
        const respuesta = await respuestaRModel.deleteRespuestaRModel(id)
        const status = respuesta.error ? 404 :200
        res.status(status).json(respuesta)
    } catch (error) {
        res.status(500).json({mgs:error})
    }
}

export{
    getAllRespuestaRController, 
    createRespuestaRController, 
    getRespuestaRByIdController, 
    updateRespuestaRController, 
    deleteRespuestaRController
}