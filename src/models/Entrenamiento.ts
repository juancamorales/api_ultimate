import { Schema, model } from "mongoose";

const Entrenamiento = new Schema({
    deporte: {
        type: String,
        require: true,
        trim: true
    },
    dia:{
        type: String,
        require: true,
        trim: true
    },
    hora:{
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    lugar:{
        type: String,
        require: true,
        trim: true
    }
})

export default model("Entrenamiento", Entrenamiento)