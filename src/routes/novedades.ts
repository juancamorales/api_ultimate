import { Router } from "express"
import Novedades from "../models/Novedades"

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

router.get("/", async (req, res) => {
    try {
        const {name} = req.query
        if(name ){
            const ejers = await Novedades.find()
            const resp = ejers.map((i : any)=> i = {
                _id: i._id,
                titulo: joins(name, i.titulo),
                duracion: i.duracion,
                image: i.image,
            })
            const fild = resp.filter(e=> e.titulo !== "no se encontro");
            return res.status(200).send([ fild , { message: "resp" }])
        }
        const ejercise = await Novedades.find()
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
        const { titulo, descripcion, image } = req.body
        if (titulo && descripcion && image ) {
            const arrImage = image[0].map((i: any)=> i.uploadInfo.url)
            const resp = await Novedades.create({ titulo, descripcion, image: arrImage })
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
            const resp = await Novedades.findByIdAndDelete(id)
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
            const resp = await Novedades.findById(id)
            res.status(200).send(resp)
        } else {
            res.status(400).send({ message: "faltan parametros" })
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router