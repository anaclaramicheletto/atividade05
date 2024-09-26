import { Router } from "express";
import emocoesRoutes from "./emocoes.routes.js"

const routes = Router()

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "servidor rodando" });
  });

  routes.use ("/emocoes", emocoesRoutes)

  export default routes
  