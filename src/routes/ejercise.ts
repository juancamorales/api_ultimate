import { Router } from "express"
import Ejercise from "../models/Ejercise"

const router = Router()

function joins(name: any, names: String){
    const name1 = name.toLowerCase()
    const name2 = names.toLowerCase()
    let co = []
    for(var i = 0; i < name.length; i++){
      co.push(name2[i])
    }
    let cc = co.join("")
    if(name1 == cc){
      return names
    } else {
      return "no se encontro"
    }
  }

router.get("", async (req, res) => {
    try {
        const ejercise = await Ejercise.find()
        const {name} = req.query
        if(name ){
            const ejers = await Ejercise.find()
            const resp = ejers.map((i : any)=> i = {
                _id: i._id,
                tipo: i.tipo,
                ejercise: i.ejercise,
                name: joins(name, i.name),
                duracion: i.duracion,
                image: i.image,
            })
            const fild = resp.filter(e=> e.name !== "no se encontro");
            return res.status(200).send([ fild , { message: "resp" }])
        }
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
        const { name, ejercise, image, tipo, duracion } = req.body
        if (name && ejercise && image && tipo && duracion) {
            const arrImage = image[0].map((i: any)=> i.uploadInfo.url)
            const resp = await Ejercise.create({ name, ejercise, image: arrImage, tipo, duracion })
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
            const resp = await Ejercise.findByIdAndDelete(id)
            res.status(200).send({ message: "Eliminado con exito" })
        } else {
            res.status(400).send({ message: "faltan parametros" })
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.get("/:id", async (req, res)=>{
    try {
        const { id } = req.params
        if( id ){
            const resp = await Ejercise.findById(id)
            res.status(200).send(resp)
        } else {
            res.status(400).send({ message: "faltan parametros" })
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


export default router