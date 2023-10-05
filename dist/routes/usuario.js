"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
router.delete("/:id", usuarios_1.deleteUsuario);
router.get("/:id", usuarios_1.getUsuario);
router.get("/", usuarios_1.getUsuarios);
router.post("/", usuarios_1.postUsuario);
router.put("/:id", usuarios_1.putUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map