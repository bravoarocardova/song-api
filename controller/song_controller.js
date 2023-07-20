import { poolDb } from "../config/db.js";

export const getAllSong = async (req, res) => {
  const sql = "SELECT * FROM lagu";
    
  const [result, field] = await poolDb.query(sql);

  res.status(200).json(result);
}

export const insertSong = async (req, res) => {
  const sql = 'INSERT INTO lagu (judul, artis) VALUES (?, ?)';
  const value = [req.body.judul, req.body.artis];

  const [result, field] = await poolDb.query(sql, value);

  res.status(201).json({message:`Data lagu berhasil di insert dengan id: ${result.insertId}`});
}

export const updateSong = async (req, res) => {
  const sql = "UPDATE lagu SET judul = ?, artis = ? WHERE id = ?";
  const value = [req.body.judul, req.body.artis, req.params.id];

  const [result] = await poolDb.query(sql, value);

  res.status(201).json({message:"update berhasil"});
}

export const deleteSong =  async (req, res) => {
  const sql = "DELETE FROM lagu WHERE id = ?";
  const value = [req.params.id];

  await poolDb.query(sql, value);

  res.status(200).json({message:"Delete Berhasil"});
}