"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { json } from "stream/consumers"


const AppBar = () => {

    const session=useSession()
  return (
    <div>
    <div className="flex justify-between">
        <button onClick={()=>signIn()
          
        }>signIn</button>
         <button
         
         onClick={()=>signOut()
          
        }>signOut</button>
      
    </div>
    <div>
        {JSON.stringify(session)}

    </div>
    </div>
  )
}

export default AppBar
