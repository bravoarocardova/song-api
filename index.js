import express from "express";
import mysql from "mysql2/promise";

const poolDb = mysql.createPool({
  host:'localhost',
  user: 'root',
  password:'popo',
  database: 'user_app',
});

const app = express();
const port = 3000;
const host = "localhost";

app.use(express.json());

app.get("/songs", async (req, res) => {
  const sql = "SELECT * FROM lagu";
    
  const [result, field] = await poolDb.query(sql);

  res.status(200).json(result);
});

app.post("/songs", async (req, res) => {
  const sql = 'INSERT INTO lagu (judul, artis) VALUES (?, ?)';
  const value = [req.body.judul, req.body.artis];

  const [result, field] = await poolDb.query(sql, value);

  res.status(201).json({message:`Data lagu berhasil di insert dengan id: ${result.insertId}`});
})

app.put("/songs/:id", async (req, res) => {
  const sql = "UPDATE lagu SET judul = ?, artis = ? WHERE id = ?";
  const value = [req.body.judul, req.body.artis, req.params.id];

  const [result] = await poolDb.query(sql, value);

  res.status(201).json({message:"update berhasil"});
});

app.delete("/songs/:id", async (req, res) => {
  const sql = "DELETE FROM lagu WHERE id = ?";
  const value = [req.params.id];

  await poolDb.query(sql, value);

  res.status(200).json({message:"Delete Berhasil"});
});


app.listen(port,host,()=>{
  console.log(`server berjalan di http://${host}:${port}`);
});