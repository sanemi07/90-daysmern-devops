import type { Request, Response } from "express"
import {prisma} from "../db.js"

export const getAllSurveys=async(req:Request,res:Response)=>{
    try {
        const resu=await prisma.survey.findMany()
        return res.status(200).json(resu)
    } catch (error) {
        return res.status(500).json({msg:"error while fetching surveys",error})
    }

}
export const CreateSurvey=async(req:Request,res:Response)=>{
    
try {
     const survey=await prisma.survey.create({
        data:req.body
     })  
      return res.status(200).json(survey)
} catch (error) {
        return res.status(500).json({msg:"error while creating surveys",error})
    }


}
export const getSurveyById=async(req:Request,res:Response)=>{
    try {
        const idParam = req.params.id;
        if (!idParam) {
            return res.status(400).json({ msg: "survey id is required" });
        }
        const id = parseInt(idParam, 10);
        if (Number.isNaN(id)) {
            return res.status(400).json({ msg: "survey id must be a valid number" });
        }
        
        const survey=await prisma.survey.findUnique({where:{
         id:id
        }})
        return res.status(200).json(survey)
    } catch (error) {
           return res.status(500).json({msg:"error while fetching single surveys",error})
    }
}
