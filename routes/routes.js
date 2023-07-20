import express from "express";
import { getAllSong , insertSong, updateSong, deleteSong } from "../controller/song_controller.js";

const router = express.Router();

router.get("/songs", getAllSong);
router.post("/songs", insertSong)
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);

export default router;