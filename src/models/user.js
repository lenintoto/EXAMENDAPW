import {Schema, model} from 'mongoose'
import bcrypt from "bcryptjs"

/*const userModel = {
    async registerUserModel(newUserData){
        //: Punto 1
        const url = 'https://fauna.free.beeceptor.com/api/user/register.com'
        const peticion = await fetch(url, {
            method:'POST',                              //verbo que uso
            body:JSON.stringify(newUserData),               //informacion que voy a mandar
            headers:{'content-Type':'application/json'} //tipo de contenido
        })
        const data = await peticion.json()
        //: punto 2
        return data
    },

    async loginUserModel(userName,password){
        //: Punto 1
        const url = 'https://fauna.free.beeceptor.com/api/user/login'
        const peticion = await fetch(url)
        const users = await peticion.json()
        const user = users.find(user=> user.username ===userName)
        if (!user) {
            return{error:"usuario o contraseña incorrecto"}
        }
        const passwordMatch = await bcrypt.compare(password,user.password)
        if (user && passwordMatch) {
            return user
        }else{
            return{error:"usuario o contraseña incorrecto"}
        }
    }
}*/

// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', UserSchema);
