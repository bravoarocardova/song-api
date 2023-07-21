import { poolDb } from "../config/db.js";

export const getAllSong = async (req, res) => {
  const sql = "SELECT * FROM lagu";
    
  const [result, field] = await poolDb.query(sql);

  res.status(200).json(result);
}

export const getSongById = async (req, res) => {
  const sql = "SELECT * FROM lagu WHERE id = ?";
  const value = [req.params.id];
    
  const [result, field] = await poolDb.query(sql, value);
  if (result.length == 0) {
    res.status(404).json({message: "Id tidak ditemukan"});
  }else{
    res.status(200).json(result[0]);
  }
}

export const insertSong = async (req, res) => {
  const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const sql = 'INSERT INTO lagu (judul, artis, is_favorite, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
  const value = [req.body.judul, req.body.artis, false, datetime, datetime];

  const [result, field] = await poolDb.query(sql, value);

  res.status(201).json({message:`Data lagu berhasil di insert dengan id: ${result.insertId}`});
}

export const updateSong = async (req, res) => {
  const id = req.params.id;

  const findId = await poolDb.query("SELECT * FROM lagu WHERE id = ?", id);
  if (findId[0].length == 0) {
    res.status(404).json({message:'Id tidak ditemukan'});
  }else{
    const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const sql = "UPDATE lagu SET judul = ?, artis = ?, updated_at = ? WHERE id = ?";
    const value = [req.body.judul, req.body.artis, datetime, id];
  
    const [result] = await poolDb.query(sql, value);
  
    res.status(201).json({message:"update berhasil"});
  }

}

export const deleteSong =  async (req, res) => {
  const id = req.params.id;

  const findId = await poolDb.query("SELECT * FROM lagu WHERE id = ?", id);
  if (findId[0].length == 0) {
    res.status(404).json({message:'Id tidak ditemukan'});
  }else{
    const sql = "DELETE FROM lagu WHERE id = ?";
    const value = [id];

    await poolDb.query(sql, value);

    res.status(200).json({message:"Delete Berhasil"});
  }
}

// Favorites

export const getAllFavorites = async (req, res) => {
  const sql = "SELECT * FROM lagu WHERE is_favorite = 1";
    
  const [result, field] = await poolDb.query(sql);

  res.status(200).json(result);
}

export const isFavorite = async (req, res) => {
  const {id, is_favorite} = req.body;

  const findId = await poolDb.query("SELECT * FROM lagu WHERE id = ?", id);
  if (findId[0].length == 0) {
    res.status(404).json({message:'Id tidak ditemukan'});
  }else{
    const sql = 'UPDATE lagu SET is_favorite = ? WHERE id = ?';
    const value = [is_favorite, id];

    const [result, field] = await poolDb.query(sql, value);
  
    res.status(201).json({message:`Data lagu favorite berhasil diubah`});
  }
}

// Filter

export const getSongByJudul = async (req, res) => {
  const [results] = await poolDb.query(`SELECT * FROM lagu WHERE judul LIKE '%${req.body.judul}%'`);
  if (results.length == 0) {
    res.status(404).json({message:"Judul lagu tidak ditemukan"});
  }else{
    res.status(200).json(results);
  }
}


export const getSongByArtis = async (req, res) => {
  const [results] = await poolDb.query(`SELECT * FROM lagu WHERE artis LIKE '%${req.body.artis}%'`);
  if (results.length == 0) {
    res.status(404).json({message:"Artis tidak ditemukan"});
  }else{
    res.status(200).json(results);
  }
}


export const getSongByFavorite = async (req, res) => {
  const [results] = await poolDb.query(`SELECT * FROM lagu WHERE is_favorite = ${req.body.is_favorite}`);
  if (results.length == 0) {
    res.status(404).json({message:"Data lagu favorite tidak ada"});
  }else{
    res.status(200).json(results);
  }
}

// Sort

export const getSortByJudul = async (req, res) => {
  const typeSort = req.params.type || "ASC";
  const [results] = await poolDb.query(`SELECT * FROM lagu ORDER BY judul ${typeSort}`);
  if (results.length == 0) {
    res.status(404).json({message:"Data lagu tidak ada"});
  }else{
    res.status(200).json(results);
  }
}

export const getSortByArtis = async (req, res) => {
  const typeSort = req.params.type || "ASC";
  const [results] = await poolDb.query(`SELECT * FROM lagu ORDER BY artis ${typeSort}`);
  if (results.length == 0) {
    res.status(404).json({message:"Data lagu tidak ada"});
  }else{
    res.status(200).json(results);
  }
}

export const getSortByFavorites = async (req, res) => {
  const typeSort = req.params.type || "ASC";
  const [results] = await poolDb.query(`SELECT * FROM lagu ORDER BY is_favorite ${typeSort}`);
  if (results.length == 0) {
    res.status(404).json({message:"Data lagu tidak ada"});
  }else{
    res.status(200).json(results);
  }
}
