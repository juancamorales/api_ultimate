import { Router } from "express"
import Entrenamiento from "../models/Entrenamiento"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const ejercise = await Entrenamiento.find()
        if (ejercise.length > 0) {
            res.status(200).send([ ejercise , { message: "resp" }])
        } else {
            res.status(200).send([{}, { message: "No se encotro" }])
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const { dia, hora, deporte, lugar, descripcion } = req.body
        if ( dia && hora && deporte && lugar && descripcion ) {
            const resp = await Entrenamiento.create({ dia, hora, deporte, lugar, descripcion })
            res.status(200).send({ message: "creado con exito" })
        } else {
            res.status(400).send({ message: "faltan parametros" })
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        if (id) {
            const resp = await Entrenamiento.findByIdAndDelete(id)
            res.status(200).send({ message: "Eliminado con exito" })
        } else {
            res.status(400).send({ message: "faltan parametros" })
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router