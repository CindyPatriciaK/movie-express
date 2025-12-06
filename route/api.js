import express from "express";
import * as movieController from "../controllers/movieController.js";
import * as userController from "../controllers/userController.js";
import { authenticateTokenMiddleware } from "../middlewares/authenticateTokenMiddleware.js";

const api = express.Router()

api.post("/signin", userController.signIn);
api.post("/signup", userController.signUp);

api.post("/movies", authenticateTokenMiddleware, movieController.createMovie);
api.get("/movies", authenticateTokenMiddleware, movieController.listMovie);
api.get("/movies/:id", authenticateTokenMiddleware, movieController.detailMovie);
api.put("/movies/:id", authenticateTokenMiddleware, movieController.updateMovie);
api.delete("/movies/:id", authenticateTokenMiddleware, movieController.deleteMovie);

export default api