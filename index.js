import express from "express";
import router from "./routes/routes.js";

const app = express();
const port = 3000;
const host = "localhost";

app.use(express.json());

app.use(router);

app.listen(port,host,()=>{
  console.log(`server berjalan di http://${host}:${port}`);
});