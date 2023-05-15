import express from 'express'
import Info from '../models/Info.js'
const router = express.Router()

//add company info
router.post('/', async (req,res)=>{
    const info = new Info(req.body)
    const savedInfo = await info.save();
    res.status(200).json(savedInfo)
})

//search info from primaryText, headline and description
router.get('/search', async(req, res)=>{
    const input = req.query.q
    try {
        const company = await Info.aggregate([
            { $project: { companyId: 1, primaryText: 1, headline: 1, description: 1, imageUrl: 1, ctc: 1, _id:0 } },
            { $unwind: "$primaryText" },
            { $unwind: "$headline" },
            { $unwind: "$description" },
            { $match: { $or: [
                { primaryText: { $regex: input, $options: "i" } },
                { headline: { $regex: input, $options: "i" } },
                { description: { $regex: input, $options: "i" } }
            ] } }
          ])
          res.status(200).json(company)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router