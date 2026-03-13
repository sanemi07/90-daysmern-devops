import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler=NextAuth({
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                username:{label:'username',placeholder:'username',type:"text"},
                password:{label:'username',placeholder:'username',type:"text"}

            },
            async authorize(credentials:any){
               return {
                id:"user",
                name:"anriebn"
               }
            }
        })
    ],
     

})
export const GET=handler
export const POST =handler