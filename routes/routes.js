import express from "express";
import { 
  getAllSong , 
  insertSong, 
  updateSong, 
  deleteSong, 
  getSongById,  
  getAllFavorites, 
  isFavorite, 
  getSongByJudul,
  getSongByArtis,
  getSongByFavorite,
  getSortByJudul,
  getSortByArtis,
  getSortByFavorites
} from "../controller/song_controller.js";

const router = express.Router();

//// - update table lagu dengan menambahkan field 
////   - is_favorite smallint
////   - updated_at datetime
//// - buat satu fungsi untuk menmbahkan lagu is_favorite
//// - buat satu fungsi untuk menampilkan lagu is_favorite saja
//// - ketika memperbarui judul lagu isi updated_at akan selalu di perbarui
//// - buat satu fungsi dinamis bisa memfilter berdasarkan judul/artis/is_favorite
//// - buat satu fungsi dinamis bisa mengurutkan data berdasarkan semua field yang tersedia dia tabel lagu

router.get("/songs", getAllSong);
router.get("/songs/:id", getSongById);
router.post("/songs", insertSong)
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);

router.get("/favorites", getAllFavorites);
router.post("/favorites", isFavorite);

router.post("/songs/judul", getSongByJudul);
router.post("/songs/artis", getSongByArtis);
router.post("/songs/favorites", getSongByFavorite);

router.get("/songs/sort/judul/:type", getSortByJudul);
router.get("/songs/sort/artis/:type", getSortByArtis);
router.get("/songs/sort/favorites/:type", getSortByFavorites);

export default router;