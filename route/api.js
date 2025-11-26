import express from "express";
import * as movieController from "../controllers/movieController.js";
import * as userController from "../controllers/userController.js";
import { authenticateTokenMiddleware } from "../middlewares/authenticateTokenMiddleware.js";

const api = express.Router()

api.post("/signin", userController.signIn);
api.post("/signup", userController.signUp);

api.post("/movie", authenticateTokenMiddleware, movieController.createMovie);
api.get("/movie", authenticateTokenMiddleware, movieController.listMovie);
api.get("/movie/:id", authenticateTokenMiddleware, movieController.detailMovie);
api.put("/movie/:id", authenticateTokenMiddleware, movieController.updateMovie);
api.delete("/movie/:id", authenticateTokenMiddleware, movieController.deleteMovie);

export default api