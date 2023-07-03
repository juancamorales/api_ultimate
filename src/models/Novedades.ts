import { Schema, model } from "mongoose";

const Novedades = new Schema({
    titulo: {
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    image:Array,
})

export default model("Novedades", Novedades)