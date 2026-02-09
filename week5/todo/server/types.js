import zod from "zod " 
 export const create=zod.object({
    title:zod.string(),
    description:zod.string()
})
export const upload=zod.object({
    id:zod.string()
})
