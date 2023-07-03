import { Schema, model } from "mongoose";

const Ejercise = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    ejercise:{
        type: String,
        require: true,
        trim: true
    },
    image:Array,
    tipo: {
        type: String,
        require: true,
        trim: true
    },
    duracion: {
        type: String,
        require: true,
        trim: true
    }
})

export default model("Ejercise", Ejercise)