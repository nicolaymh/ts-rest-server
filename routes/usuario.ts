import { Router } from "express";
import {
   deleteUsuario,
   getUsuario,
   getUsuarios,
   postUsuario,
   putUsuario,
} from "../controller/usuarios";

const router = Router();

router.delete("/:id", deleteUsuario);
router.get("/:id", getUsuario);
router.get("/", getUsuarios);
router.post("/", postUsuario);
router.put("/:id", putUsuario);

export default router;
