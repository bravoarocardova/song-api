import mysql from "mysql2/promise";

const poolDb = mysql.createPool({
  host:'localhost',
  user: 'root',
  password:'popo',
  database: 'user_app',
});

export { poolDb };