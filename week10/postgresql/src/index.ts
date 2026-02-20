import {Client } from "pg"
import dotenv from "dotenv"

const client=new Client({
    connectionString:process.env.URL
})
client.connect()