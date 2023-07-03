 import { Router } from "express";
 import ejercise from "../routes/ejercise";
 import novedades from "../routes/novedades";
 import entrenamiento from "../routes/entrenamiento"

 const router = Router()
  
 router.use("/ejercise", ejercise)
 router.use("/novedades", novedades)
 router.use("/entrenamiento", entrenamiento)

 export default router
