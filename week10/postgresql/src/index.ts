import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });

const connectionString = process.env.POST_URL;
if (!connectionString) {
  throw new Error("POST_URL is missing. Add it to src/.env");
}

const client = new Client({
  connectionString,
});

async function createUserTable() {
  await client.connect();
  try {
    const res = await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);
    console.log("Table ready:", res.command);
  } finally {
    await client.end();
  }
}
async function UpdateTable(username:string,email:string,password:string) {
    await client.connect()
    try {
        const insertQuery=`INSERT INTO users( username,email,password
            ) VALUES('$1','$2','$3')`
             const value=[username,email,password]
        const res=await client.query(insertQuery,value)
        console.log(res)    
    } catch (error) {
        console.log(error)
    }finally{
            await client.end()}
    
    
}

/*createUserTable().catch((error) => {
  console.error("DB setup failed:", error);
});*/

UpdateTable()
