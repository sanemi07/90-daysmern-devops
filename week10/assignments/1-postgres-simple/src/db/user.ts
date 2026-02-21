import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        const insertQuery=` INSERT INTO users (username,password,name) VALUES($1,$2,$3) RETURNING username,password,name
        `
        const value=[username,password,name]
        const res=await client.query(insertQuery,value)
    } catch (error) {
        
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        const query=`SELECT username,password,name FROM users WHERE user_id=$1   RETURNING username,password,name`
        const res=await client.query(query,[userId])
    } catch (error) {
        
    }
}
