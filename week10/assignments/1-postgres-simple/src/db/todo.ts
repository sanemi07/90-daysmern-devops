import { client } from ".."
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        const insertQuery=`INSERT INTO todos(user_id,title,description) VALUES($1, $2,$3,false) 
        RETURNING id,title,description,done `
        const values=[userId,title,description]
        const res=await client.query(insertQuery,values)
        return res.rows[0]

        
    } catch (error) {
        console.log(error)
    }
    
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const query=`UPDATE todos
        SET done=true
        WHERE id=$1
        RETURNING id,title,description,done
           `
        const res=await client.query(query,[todoId])
        return res.rows[0]
    } catch (error) {
         console.log(error)
    }

}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
 try {
        const query=`SELECT id,title,description,done  FROM  todos 
        WHERE user_id=$1
        ORDER BY id DESC
        
        
        
        
        `
        const res=await client.query(query)
        return res.rows
    } catch (error) {
         console.log(error)
    }

}