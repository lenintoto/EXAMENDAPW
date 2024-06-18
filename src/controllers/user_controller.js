import {v4 as uuidv4} from 'uuid'

import userModel from "../models/user.js"
import bcrypt from "bcrypt"
import { createToken } from '../middlewares/auth.js'

const registerUserController = async (req,res)=>{
    //punto 1
    const {password,...otherDataUser} = req.body
    const hashedPassword = await bcrypt.hash(password,10) 
    const newUserData ={ 
        id:uuidv4(),
        password:hashedPassword,
        ...otherDataUser
    }
    //punto 2
    const user = await userModel.registerUserModel(newUserData)
        
    //punto 3
    res.status(201).json(user)
}

const loginUserController= async (req,res)=>{
    const {username,password} = req.body
    try {
        const user = await userModel.loginUserModel(username,password)
            //CREACION DEL TOKEN
            const token = createToken(user)
            //FIN DE LA CREACION DEL TOKEN
        res.status(200).json({user,token})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export {
    registerUserController,
    loginUserController
}